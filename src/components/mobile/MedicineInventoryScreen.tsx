
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Plus, Minus, AlertTriangle, BarChart3, TrendingUp, Calendar } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts";

export const MedicineInventoryScreen = () => {
  const [medicines] = useState([
    {
      id: 1,
      name: "Amlodipine",
      dosage: "5mg",
      quantity: 15,
      minQuantity: 10,
      unit: "viên",
      expiryDate: "25/12/2024"
    },
    {
      id: 2,
      name: "Candesartan",
      dosage: "8mg",
      quantity: 5,
      minQuantity: 10,
      unit: "viên",
      expiryDate: "15/01/2025"
    },
    {
      id: 3,
      name: "Metformin",
      dosage: "500mg",
      quantity: 30,
      minQuantity: 15,
      unit: "viên",
      expiryDate: "10/03/2025"
    }
  ]);

  // Dữ liệu cho biểu đồ
  const inventoryChartData = medicines.map(medicine => ({
    name: medicine.name,
    current: medicine.quantity,
    minimum: medicine.minQuantity,
    status: medicine.quantity <= medicine.minQuantity ? 'Thiếu' : 'Đủ'
  }));

  const statusData = [
    {
      name: "Đủ thuốc",
      value: medicines.filter(m => m.quantity > m.minQuantity).length,
      color: "#10b981"
    },
    {
      name: "Sắp hết",
      value: medicines.filter(m => m.quantity <= m.minQuantity).length,
      color: "#ef4444"
    }
  ];

  const weeklyUsageData = [
    { day: "T2", used: 3 },
    { day: "T3", used: 3 },
    { day: "T4", used: 3 },
    { day: "T5", used: 3 },
    { day: "T6", used: 3 },
    { day: "T7", used: 2 },
    { day: "CN", used: 2 }
  ];

  const chartConfig = {
    current: {
      label: "Hiện tại",
      color: "#8b5cf6",
    },
    minimum: {
      label: "Tối thiểu",
      color: "#ef4444",
    },
    used: {
      label: "Đã dùng",
      color: "#10b981",
    }
  };

  const updateQuantity = (id: number, change: number) => {
    console.log(`Updating medicine ${id} quantity by ${change}`);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Package className="mr-2 text-mint-pastel" size={20} />
          Quản lý kho thuốc
        </h3>

        <Tabs defaultValue="inventory" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="inventory">Kho thuốc</TabsTrigger>
            <TabsTrigger value="statistics">Thống kê</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-4 mt-6">
            {medicines.map((medicine) => {
              const isLowStock = medicine.quantity <= medicine.minQuantity;
              const isExpiringSoon = new Date(medicine.expiryDate.split('/').reverse().join('-')) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
              
              return (
                <div key={medicine.id} className={`p-4 rounded-xl border-2 ${
                  isLowStock ? 'bg-red-50 border-red-200' : 
                  isExpiringSoon ? 'bg-yellow-50 border-yellow-200' : 
                  'bg-mint-pastel/10 border-mint-pastel/30'
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-lg">{medicine.name}</p>
                      <p className="text-sm text-gray-600">{medicine.dosage}</p>
                      <p className="text-xs text-gray-500">HSD: {medicine.expiryDate}</p>
                    </div>
                    
                    {(isLowStock || isExpiringSoon) && (
                      <AlertTriangle className={`${
                        isLowStock ? 'text-red-500' : 'text-yellow-500'
                      }`} size={20} />
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(medicine.id, -1)}
                        disabled={medicine.quantity <= 0}
                      >
                        <Minus size={16} />
                      </Button>
                      
                      <div className="text-center min-w-[80px]">
                        <div className={`text-2xl font-bold ${
                          isLowStock ? 'text-red-600' : 'text-gray-800'
                        }`}>
                          {medicine.quantity}
                        </div>
                        <div className="text-xs text-gray-500">{medicine.unit}</div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(medicine.id, 1)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>

                    <div className="text-right">
                      {isLowStock && (
                        <p className="text-xs text-red-600 font-medium">Sắp hết thuốc!</p>
                      )}
                      {isExpiringSoon && (
                        <p className="text-xs text-yellow-600 font-medium">Sắp hết hạn!</p>
                      )}
                      <p className="text-xs text-gray-500">
                        Tối thiểu: {medicine.minQuantity} {medicine.unit}
                      </p>
                    </div>
                  </div>

                  {isLowStock && (
                    <Button className="w-full mt-3 bg-gradient-to-r from-pink-pastel to-mint-pastel text-gray-800 font-bold text-sm">
                      Đặt mua thêm
                    </Button>
                  )}
                </div>
              );
            })}
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6 mt-6">
            {/* Tổng quan */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-mint-pastel/20 rounded-xl">
                <div className="text-2xl font-bold text-mint-pastel">{medicines.length}</div>
                <div className="text-sm text-gray-600">Loại thuốc</div>
              </div>
              <div className="text-center p-4 bg-pink-pastel/20 rounded-xl">
                <div className="text-2xl font-bold text-pink-pastel">
                  {medicines.filter(m => m.quantity <= m.minQuantity).length}
                </div>
                <div className="text-sm text-gray-600">Sắp hết</div>
              </div>
            </div>

            {/* Biểu đồ trạng thái kho */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 className="mr-2 text-mint-pastel" size={18} />
                Tình trạng kho thuốc
              </h4>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex justify-center space-x-4 mt-2">
                {statusData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{item.name}: {item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Biểu đồ so sánh số lượng */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="mr-2 text-green-pastel" size={18} />
                So sánh số lượng hiện tại và tối thiểu
              </h4>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={inventoryChartData}>
                    <XAxis 
                      dataKey="name" 
                      fontSize={12}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="current" fill="#8b5cf6" name="Hiện tại" />
                    <Bar dataKey="minimum" fill="#ef4444" name="Tối thiểu" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </Card>

            {/* Biểu đồ sử dụng thuốc theo tuần */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 text-blue-500" size={18} />
                Lượng thuốc đã dùng trong tuần
              </h4>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyUsageData}>
                    <XAxis dataKey="day" fontSize={12} />
                    <YAxis fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="used" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                      name="Đã dùng"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </Card>

            {/* Dự đoán hết thuốc */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-3 text-orange-600">
                ⚠️ Cảnh báo dự đoán hết thuốc
              </h4>
              <div className="space-y-3">
                {medicines
                  .filter(m => m.quantity <= m.minQuantity * 1.5)
                  .map(medicine => {
                    const daysLeft = Math.floor(medicine.quantity / 2); // Giả sử dùng 2 viên/ngày
                    return (
                      <div key={medicine.id} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div>
                          <p className="font-medium text-gray-800">{medicine.name}</p>
                          <p className="text-sm text-gray-600">Còn {medicine.quantity} {medicine.unit}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-orange-600 font-bold">{daysLeft} ngày</p>
                          <p className="text-xs text-gray-500">dự kiến hết</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};
