
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Activity } from "lucide-react";

interface BloodPressureScreenProps {
  userType: 'patient' | 'family';
}

export const BloodPressureScreen = ({ userType }: BloodPressureScreenProps) => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Activity className="mr-2 text-senior-accent" size={20} />
          Đo huyết áp
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tâm thu</label>
              <Input 
                type="number" 
                placeholder="120" 
                className="text-lg p-4 text-center"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tâm trương</label>
              <Input 
                type="number" 
                placeholder="80" 
                className="text-lg p-4 text-center"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
              />
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-senior-accent to-senior-mint text-white font-bold p-4 text-lg">
            <Heart className="mr-2" size={20} />
            Lưu kết quả
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">Lịch sử 7 ngày qua</h3>
        <div className="space-y-3">
          {[
            { date: 'Hôm nay', value: userType === 'patient' ? '120/80' : '125/82', status: userType === 'patient' ? 'normal' : 'warning' },
            { date: 'Hôm qua', value: '125/82', status: 'normal' },
            { date: '2 ngày trước', value: '130/85', status: 'warning' },
            { date: '3 ngày trước', value: '118/78', status: 'normal' },
          ].map((record, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-senior-light rounded-lg">
              <span className="text-sm">{record.date}</span>
              <span className={`font-bold ${record.status === 'normal' ? 'text-senior-mint' : 'text-senior-sky'}`}>
                {record.value}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
