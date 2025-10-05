const Appointment = require('../models/Appointment');
const { sendNotification } = require('../services/fcmService');

const createAppointment = async (req, res) => {
    try {
        const { title, hospital, location, date, time, notes } = req.body;
        const userId = req.user._id;

        // Nếu notes không có hoặc rỗng, tự động gán giá trị mặc định
        const finalNotes = (!notes || notes.trim() === "") ? "Đã đến lịch tái khám" : notes;

        const appointment = new Appointment({
            title,
            hospital,
            location,
            date,
            time,
            notes: finalNotes,
            userId
        });

        await appointment.save();

        // Schedule notification for the appointment
        const NotificationToken = require('../models/NotificationToken');
        const tokenDoc = await NotificationToken.findOne({ userId });
        if (tokenDoc && tokenDoc.deviceToken) {
            const titleMsg = 'Lịch hẹn tái khám mới';
            const bodyMsg = `Bạn có lịch hẹn tại ${hospital} vào ngày ${new Date(date).toLocaleDateString('vi-VN')} lúc ${time}`;
            await sendNotification(tokenDoc.deviceToken, titleMsg, bodyMsg);
        }

        res.status(201).json({
            success: true,
            data: appointment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

const getAppointments = async (req, res) => {
    try {
        const userId = req.user._id;
        const appointments = await Appointment.find({ userId })
            .sort({ date: 1, time: 1 });

        res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

const getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findOne({
            _id: req.params.id,
            userId: req.user._id
        });

        if (!appointment) {
            return res.status(404).json({
                success: false,
                error: 'Không tìm thấy lịch hẹn'
            });
        }

        res.status(200).json({
            success: true,
            data: appointment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

const updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user._id
            },
            req.body,
            { new: true, runValidators: true }
        );

        if (!appointment) {
            return res.status(404).json({
                success: false,
                error: 'Không tìm thấy lịch hẹn'
            });
        }

        res.status(200).json({
            success: true,
            data: appointment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id
        });

        if (!appointment) {
            return res.status(404).json({
                success: false,
                error: 'Không tìm thấy lịch hẹn'
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
};
