
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, Heart, Clock } from "lucide-react";
import { useState } from "react";

interface BloodPressureNotificationProps {
  onMeasured: () => void;
  onSnooze: () => void;
}

export const BloodPressureNotification = ({ onMeasured, onSnooze }: BloodPressureNotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleMeasured = () => {
    onMeasured();
    setIsVisible(false);
  };

  const handleSnooze = () => {
    onSnooze();
    setIsVisible(false);
    // Show again after 10 minutes (for demo, we'll show after 5 seconds)
    setTimeout(() => setIsVisible(true), 5000);
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-lg">
      {/* Header với icon chuông */}
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
          <Bell className="text-black" size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Thông báo nhắc đo huyết áp
        </h3>
        <p className="text-gray-600 text-sm">
          Nhắc nhở bằng giọng nói thân quen và ấm áp
        </p>
      </div>

      {/* Nội dung thông báo chính */}
      <div className="bg-blue-200 rounded-2xl p-6 mb-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto flex items-center justify-center">
            <Heart className="text-white" size={24} />
          </div>
          
          <h4 className="text-lg font-bold text-gray-800">
            Đã tới giờ đo huyết áp!
          </h4>
          
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-gray-800 font-medium italic">
              "Má ơi, tới giờ đo huyết áp rồi nè. Con lo cho sức khỏe má!"
            </p>
          </div>
          
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Clock size={16} className="mr-1" />
            <span>Đo huyết áp buổi sáng - 7:00 AM</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={handleMeasured}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold h-12"
        >
          ✅ Đã đo
        </Button>
        <Button
          onClick={handleSnooze}
          variant="outline"
          className="border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold h-12"
        >
          ⏰ Nhắc sau 10 phút
        </Button>
      </div>
    </Card>
  );
};
