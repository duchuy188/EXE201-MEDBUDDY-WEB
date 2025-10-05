
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AddMedicineScreen = () => {
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [minQuantity, setMinQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const timeSlots = [
    { id: 'morning', label: 'Sáng', icon: '🌅' },
    { id: 'afternoon', label: 'Chiều', icon: '☀️' },
    { id: 'evening', label: 'Tối', icon: '🌙' }
  ];

  const toggleTimeSlot = (timeId: string) => {
    setSelectedTimes(prev => 
      prev.includes(timeId) 
        ? prev.filter(id => id !== timeId)
        : [...prev, timeId]
    );
  };

  const handleAddMedicine = () => {
    console.log('Adding medicine:', {
      name: medicineName,
      dosage,
      quantity: parseInt(quantity),
      minQuantity: parseInt(minQuantity),
      expiryDate,
      times: selectedTimes
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Thêm thuốc mới</h3>
        <div className="space-y-4">
          <div>
            <Label className="block text-sm font-medium mb-2">Tên thuốc</Label>
            <Input 
              placeholder="VD: Amlodipine" 
              className="text-lg p-4"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">Liều lượng</Label>
            <Input 
              placeholder="VD: 5mg" 
              className="text-lg p-4"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-2">Số lượng hiện tại</Label>
              <Input 
                type="number" 
                min={0}
                placeholder="30" 
                className="text-lg p-4"
                value={quantity}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '' || Number(val) >= 0) setQuantity(val);
                }}
              />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-2">Số lượng tối thiểu</Label>
              <Input 
                type="number" 
                min={0}
                placeholder="10" 
                className="text-lg p-4"
                value={minQuantity}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '' || Number(val) >= 0) setMinQuantity(val);
                }}
              />
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium mb-2">Hạn sử dụng</Label>
            <Input 
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              className="text-lg p-4"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">Thời gian uống</Label>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={selectedTimes.includes(slot.id) ? "default" : "outline"}
                  className={`p-4 h-auto ${
                    selectedTimes.includes(slot.id) 
                      ? 'bg-mint-pastel text-gray-800' 
                      : ''
                  }`}
                  onClick={() => toggleTimeSlot(slot.id)}
                >
                  <div className="text-center">
                    <div>{slot.icon}</div>
                    <div className="text-sm">{slot.label}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-mint-pastel to-green-pastel text-gray-800 font-bold p-4 text-lg"
            onClick={handleAddMedicine}
            disabled={!medicineName || !dosage || !quantity}
          >
            Thêm thuốc
          </Button>
        </div>
      </Card>
    </div>
  );
};
