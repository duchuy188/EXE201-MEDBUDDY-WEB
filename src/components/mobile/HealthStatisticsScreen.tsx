
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Heart, TrendingUp, Calendar, CheckCircle, AlertCircle, Target } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const HealthStatisticsScreen = () => {
  // Dữ liệu huyết áp 7 ngày qua
  const bloodPressureData = [
    { day: "T2", systolic: 125, diastolic: 82, time: "7:30" },
    { day: "T3", systolic: 120, diastolic: 80, time: "7:45" },
    { day: "T4", systolic: 130, diastolic: 85, time: "8:00" },
    { day: "T5", systolic: 118, diastolic: 78, time: "7:20" },
    { day: "T6", systolic: 122, diastolic: 81, time: "7:35" },
    { day: "T7", systolic: 128, diastolic: 84, time: "8:10" },
    { day: "CN", systolic: 124, diastolic: 80, time: "8:30" }
  ];

  // Dữ liệu tuân thủ uống thuốc
  const medicineComplianceData = [
    { day: "T2", taken: 2, missed: 0, total: 2 },
    { day: "T3", taken: 2, missed: 0, total: 2 },
    { day: "T4", taken: 1, missed: 1, total: 2 },
    { day: "T5", taken: 2, missed: 0, total: 2 },
    { day: "T6", taken: 2, missed: 0, total: 2 },
    { day: "T7", taken: 2, missed: 0, total: 2 },
    { day: "CN", taken: 1, missed: 1, total: 2 }
  ];

  // Dữ liệu tổng quan tuần
  const weeklyOverview = [
    { name: "Uống đúng giờ", value: 85, color: "#10b981" },
    { name: "Uống muộn", value: 10, color: "#f59e0b" },
    { name: "Bỏ lỡ", value: 5, color: "#ef4444" }
  ];

  // Dữ liệu theo giờ uống thuốc
  const medicineTimeData = [
    { time: "7:00", amlodipine: 95, candesartan: 0 },
    { time: "19:00", amlodipine: 0, candesartan: 88 }
  ];

  const chartConfig = {
    systolic: {
      label: "Tâm thu",
      color: "#ef4444",
    },
    diastolic: {
      label: "Tâm trương", 
      color: "#3b82f6",
    },
    taken: {
      label: "Đã uống",
      color: "#10b981",
    },
    missed: {
      label: "Bỏ lỡ",
      color: "#ef4444",
    },
    amlodipine: {
      label: "Amlodipine",
      color: "#8b5cf6",
    },
    candesartan: {
      label: "Candesartan",
      color: "#06b6d4",
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-mint-pastel" size={20} />
          Thống kê sức khỏe
        </h3>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="bloodpressure">Huyết áp</TabsTrigger>
            <TabsTrigger value="medicine">Thuốc</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* Cards tổng quan */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-pastel/20 rounded-xl">
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-gray-600">Tuân thủ thuốc</div>
              </div>
              <div className="text-center p-4 bg-blue-500/20 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">124/81</div>
                <div className="text-sm text-gray-600">Huyết áp TB</div>
              </div>
            </div>

            {/* Biểu đồ tổng quan tuân thủ */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Target className="mr-2 text-green-600" size={18} />
                Tuân thủ uống thuốc tuần này
              </h4>
              <div className="w-full h-[200px] flex justify-center">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={weeklyOverview}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {weeklyOverview.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                {weeklyOverview.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Thống kê nhanh */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 text-green-600" size={20} />
                  <span className="font-medium">Ngày uống thuốc đầy đủ</span>
                </div>
                <span className="text-green-600 font-bold">5/7 ngày</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center">
                  <Heart className="mr-2 text-blue-600" size={20} />
                  <span className="font-medium">Ngày đo huyết áp</span>
                </div>
                <span className="text-blue-600 font-bold">7/7 ngày</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center">
                  <AlertCircle className="mr-2 text-yellow-600" size={20} />
                  <span className="font-medium">Cần chú ý</span>
                </div>
                <span className="text-yellow-600 font-bold">Huyết áp thứ 4</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bloodpressure" className="space-y-6 mt-6">
            {/* Biểu đồ huyết áp tuần */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Activity className="mr-2 text-red-500" size={18} />
                Biến động huyết áp 7 ngày
              </h4>
              <div className="w-full h-[250px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={bloodPressureData}>
                      <XAxis dataKey="day" fontSize={12} />
                      <YAxis fontSize={12} domain={[70, 140]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="systolic" 
                        stroke="#ef4444" 
                        strokeWidth={3}
                        dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                        name="Tâm thu"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="diastolic" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                        name="Tâm trương"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </Card>

            {/* Thống kê chi tiết huyết áp */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Chi tiết 7 ngày qua</h4>
              {bloodPressureData.map((record, index) => {
                const status = record.systolic > 130 || record.diastolic > 85 ? 'high' : 'normal';
                return (
                  <div key={index} className={`p-3 rounded-lg ${
                    status === 'high' ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{record.day}</p>
                        <p className="text-xs text-gray-500">{record.time}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-lg ${
                          status === 'high' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {record.systolic}/{record.diastolic}
                        </p>
                        <p className={`text-xs ${
                          status === 'high' ? 'text-red-500' : 'text-green-500'
                        }`}>
                          {status === 'high' ? 'Cao' : 'Bình thường'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="medicine" className="space-y-6 mt-6">
            {/* Biểu đồ tuân thủ uống thuốc */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 text-purple-500" size={18} />
                Tuân thủ uống thuốc hàng ngày
              </h4>
              <div className="w-full h-[200px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={medicineComplianceData}>
                      <XAxis dataKey="day" fontSize={12} />
                      <YAxis fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="taken" fill="#10b981" name="Đã uống" />
                      <Bar dataKey="missed" fill="#ef4444" name="Bỏ lỡ" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </Card>

            {/* Thống kê theo loại thuốc */}
            <Card className="p-4">
              <h4 className="text-lg font-semibold mb-4">Tuân thủ theo loại thuốc</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium">Amlodipine 5mg</p>
                    <p className="text-sm text-gray-600">Sáng 7:00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-600 font-bold">95%</p>
                    <p className="text-xs text-gray-500">6.5/7 ngày</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                  <div>
                    <p className="font-medium">Candesartan 8mg</p>
                    <p className="text-sm text-gray-600">Tối 19:00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-600 font-bold">86%</p>
                    <p className="text-xs text-gray-500">6/7 ngày</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Gợi ý cải thiện */}
            <Card className="p-4 bg-blue-50 border border-blue-200">
              <h4 className="text-lg font-semibold mb-3 text-blue-800">💡 Gợi ý cải thiện</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• Đặt báo thức cho thuốc tối để không quên</p>
                <p>• Candesartan bỏ lỡ 2 lần tuần này, cần chú ý hơn</p>
                <p>• Huyết áp thứ 4 cao hơn bình thường, có thể do bỏ lỡ thuốc tối thứ 3</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};
