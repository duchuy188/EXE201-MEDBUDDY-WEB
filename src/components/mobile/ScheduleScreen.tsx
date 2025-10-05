
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Plus } from "lucide-react";

export const ScheduleScreen = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-senior-card border-senior-soft">
        <h3 className="text-xl font-bold mb-4 flex items-center text-senior-navy">
          <Calendar className="mr-2 text-senior-accent" size={20} />
          Lịch tái khám
        </h3>
        <div className="space-y-4">
          <div className="bg-senior-light p-4 rounded-xl border border-senior-accent/30">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-senior-navy">Khám tim mạch</p>
                <p className="text-sm text-senior-steel">BS. Nguyễn Văn A</p>
                <p className="text-sm text-senior-steel">25/06/2024 - 9:00 AM</p>
              </div>
              <div className="text-senior-accent font-bold">
                5 ngày nữa
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-senior-accent to-senior-blue text-white font-bold p-4 text-lg hover:from-senior-blue hover:to-senior-accent">
            <Plus className="mr-2" size={20} />
            Thêm lịch hẹn
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-senior-card border-senior-soft">
        <h3 className="text-lg font-bold mb-4 text-senior-navy">Nhắc nhở</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-senior-light rounded-lg">
            <span className="text-sm text-senior-navy">Đo huyết áp hàng ngày</span>
            <span className="text-senior-accent font-bold">7:00 AM</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-senior-light rounded-lg">
            <span className="text-sm text-senior-navy">Kiểm tra cân nặng</span>
            <span className="text-senior-accent font-bold">Hàng tuần</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
