
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Bell, Activity, Shield, User, Plus } from "lucide-react";
import { AIHealthInsights } from "./AIHealthInsights";
import { RealtimeFamilyDashboard } from "./RealtimeFamilyDashboard";
import { BloodPressureNotification } from "./dashboard/BloodPressureNotification";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DashboardScreenProps {
  userType: 'patient' | 'family';
  onLogout: () => void;
}

export const DashboardScreen = ({ userType, onLogout }: DashboardScreenProps) => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const { toast } = useToast();

  const handleSaveBloodPressure = () => {
    if (systolic && diastolic) {
      // Simulate saving blood pressure reading
      console.log(`Saved blood pressure: ${systolic}/${diastolic}`);
      setSystolic('');
      setDiastolic('');
      toast({
        title: "Đã lưu thành công",
        description: `Huyết áp ${systolic}/${diastolic} đã được ghi nhận`
      });
    }
  };

  const handleBloodPressureMeasured = () => {
    toast({
      title: "Cảm ơn bạn!",
      description: "Đã ghi nhận việc đo huyết áp. Hãy nhập kết quả bên dưới."
    });
    setShowNotification(false);
  };

  const handleBloodPressureSnooze = () => {
    toast({
      title: "Đã lên lịch nhắc lại",
      description: "Sẽ nhắc bạn đo huyết áp sau 10 phút nữa"
    });
    setShowNotification(false);
  };

  return (
    <div className="space-y-6">
      {/* Header với thông tin user */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {userType === 'patient' ? 'Chào buổi sáng!' : 'Theo dõi người thân'}
          </h2>
          <p className="text-gray-600">
            {userType === 'patient' ? 'Hôm nay bạn cảm thấy thế nào?' : 'Tình trạng sức khỏe của mẹ'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {/* Bell Icon for Blood Pressure Notification - Only for patients */}
          {userType === 'patient' && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowNotification(!showNotification)}
              className="relative"
            >
              <Bell size={20} className="text-yellow-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </Button>
          )}
          <Button variant="ghost" onClick={onLogout} className="text-gray-500">
            <User size={20} />
          </Button>
        </div>
      </div>

      {/* Blood Pressure Notification Modal - Only show when clicked */}
      {userType === 'patient' && showNotification && (
        <BloodPressureNotification
          onMeasured={handleBloodPressureMeasured}
          onSnooze={handleBloodPressureSnooze}
        />
      )}

      {/* AI Health Insights - Chỉ hiển thị cho người thân */}
      {userType === 'family' && (
        <AIHealthInsights 
          userType={userType} 
          patientName="Mẹ Nguyễn Thị Lan"
        />
      )}

      {userType === 'patient' ? (
        <>
          {/* Greeting Card - Moved to top */}
          <div className="bg-gradient-to-r from-mint-pastel/20 to-green-pastel/20 p-6 rounded-3xl border border-mint-pastel/30">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-mint-pastel to-green-pastel rounded-full mx-auto flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <p className="text-gray-600">Hôm nay bạn cảm thấy thế nào?</p>
            </div>
          </div>

          {/* Blood Pressure Input Section - Moved up */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="mr-2 text-mint-pastel" size={20} />
              Cập nhật huyết áp
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Tâm thu</label>
                  <Input 
                    type="number" 
                    placeholder="120" 
                    min={0}
                    className="text-center text-lg h-12"
                    value={systolic}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || Number(value) >= 0) setSystolic(value);
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Tâm trương</label>
                  <Input 
                    type="number" 
                    placeholder="80" 
                    min={0}
                    className="text-center text-lg h-12"
                    value={diastolic}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || Number(value) >= 0) setDiastolic(value);
                    }}
                  />
                </div>
              </div>
              <Button 
                onClick={handleSaveBloodPressure}
                className="w-full bg-gradient-to-r from-mint-pastel to-green-pastel text-white font-bold h-12 text-lg"
                disabled={!systolic || !diastolic}
              >
                <Plus className="mr-2" size={20} />
                Lưu kết quả
              </Button>
            </div>
            
            {/* Recent readings */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">📊 Kết quả gần đây</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-green-pastel/20 rounded-lg">
                  <span className="text-sm text-gray-700">Hôm nay - 8:00 AM</span>
                  <span className="font-bold text-green-600">120/80</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-mint-pastel/20 rounded-lg">
                  <span className="text-sm text-gray-700">Hôm qua - 7:30 AM</span>
                  <span className="font-bold text-mint-pastel">125/82</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-pink-pastel/20 rounded-lg">
                  <span className="text-sm text-gray-700">2 ngày trước - 8:15 AM</span>
                  <span className="font-bold text-pink-pastel">130/85</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Medication Card - Moved up */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Bell className="mr-2 text-pink-pastel" size={20} />
              Thuốc hôm nay
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-green-pastel/20 rounded-xl">
                <div>
                  <p className="font-semibold">Amlodipine 5mg</p>
                  <p className="text-sm text-gray-600">7:00 AM - Sáng</p>
                </div>
                <span className="text-green-600 text-2xl">✓</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-pink-pastel/20 rounded-xl border-2 border-pink-pastel">
                <div>
                  <p className="font-semibold">Candesartan 8mg</p>
                  <p className="text-sm text-gray-600">7:00 PM - Tối</p>
                </div>
                <Button className="bg-pink-pastel text-white text-sm px-4 py-2">
                  Uống ngay
                </Button>
              </div>
            </div>
          </Card>

          {/* Real-time Family Dashboard - Moved to bottom */}
          <RealtimeFamilyDashboard userType={userType} />
        </>
      ) : (
        <>
          {/* Giao diện dành cho người thân */}
          <div className="bg-gradient-to-r from-pink-pastel/20 to-mint-pastel/20 p-6 rounded-3xl border border-pink-pastel/30">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-pastel to-mint-pastel rounded-full mx-auto flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Mẹ Nguyễn Thị Lan</h3>
              <p className="text-gray-600">Tình trạng hôm nay: Tốt</p>
            </div>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="mr-2 text-mint-pastel" size={20} />
              Báo cáo tuần này
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-green-pastel/20 rounded-xl">
                <div>
                  <p className="font-semibold">Uống thuốc đúng giờ</p>
                  <p className="text-sm text-gray-600">6/7 ngày</p>
                </div>
                <div className="text-green-600 text-xl font-bold">86%</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-mint-pastel/20 rounded-xl">
                <div>
                  <p className="font-semibold">Đo huyết áp</p>
                  <p className="text-sm text-gray-600">7/7 ngày</p>
                </div>
                <div className="text-mint-pastel text-xl font-bold">100%</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-pink-pastel/20 rounded-xl">
                <div>
                  <p className="font-semibold">Huyết áp trung bình</p>
                  <p className="text-sm text-gray-600">Tuần này</p>
                </div>
                <div className="text-pink-pastel text-xl font-bold">125/82</div>
              </div>
            </div>
          </Card>

          {/* Real-time Family Dashboard */}
          <RealtimeFamilyDashboard userType={userType} />
        </>
      )}
    </div>
  );
};
