
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart, Activity, User, Shield, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const demoScreens = [
    {
      title: "Đăng nhập phân quyền",
      description: "Người bệnh và người thân có giao diện riêng biệt",
      image: "👥"
    },
    {
      title: "Màn hình người bệnh",
      description: "Theo dõi thuốc huyết áp và lịch đo huyết áp hàng ngày",
      image: "🏠"
    },
    {
      title: "Màn hình người thân",
      description: "Theo dõi tình trạng sức khỏe và nhắc nhở từ xa",
      image: "👪"
    },
    {
      title: "Thông báo nhắc đo huyết áp",
      description: "Nhắc nhở bằng giọng nói thân quen và ấm áp",
      image: "🔔"
    }
  ];

  return (
    <section id="huong-dan" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mulish mb-6">
            <span className="bg-gradient-to-r from-pink-pastel to-mint-pastel bg-clip-text text-transparent">
              Xem HAP MEDBUDDY hoạt động
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá cách ứng dụng giúp chăm sóc sức khỏe tim mạch với tính năng phân quyền cho người bệnh và người thân
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo screens */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-mint-pastel/20 rounded-3xl shadow-2xl p-8 border border-mint-pastel/30">
              <div className="text-center space-y-6">
                <div className="text-8xl mb-4">
                  {demoScreens[activeDemo].image}
                </div>
                <h3 className="text-2xl font-bold font-mulish text-gray-800">
                  {demoScreens[activeDemo].title}
                </h3>
                <p className="text-lg text-gray-600">
                  {demoScreens[activeDemo].description}
                </p>
                
                {/* Sample UI based on active demo */}
                {activeDemo === 0 && (
                  <div className="space-y-4 bg-white rounded-2xl p-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-4">Chọn loại tài khoản</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-mint-pastel/20 rounded-xl border-2 border-mint-pastel">
                        <div className="flex items-center space-x-3">
                          <User className="text-mint-pastel" size={24} />
                          <div className="text-left">
                            <p className="font-semibold">Người bệnh</p>
                            <p className="text-sm text-gray-600">Theo dõi thuốc và huyết áp</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-pink-pastel/20 rounded-xl border border-pink-pastel/30">
                        <div className="flex items-center space-x-3">
                          <Shield className="text-pink-pastel" size={24} />
                          <div className="text-left">
                            <p className="font-semibold">Người thân</p>
                            <p className="text-sm text-gray-600">Theo dõi sức khỏe người thân</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 1 && (
                  <div className="space-y-4 bg-white rounded-2xl p-6">
                    {/* Header với icon chuông */}
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-gray-800 text-lg">
                        Chào buổi sáng!
                      </h4>
                      <div className="relative">
                        <Bell className="text-yellow-500" size={20} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Greeting card */}
                    <div className="bg-gradient-to-r from-mint-pastel/20 to-green-pastel/20 p-4 rounded-2xl mb-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-mint-pastel to-green-pastel rounded-full mx-auto mb-2 flex items-center justify-center">
                          <Heart className="text-white" size={20} />
                        </div>
                        <p className="text-sm text-gray-600">Hôm nay bạn cảm thấy thế nào?</p>
                      </div>
                    </div>

                    {/* Blood pressure section */}
                    <div className="bg-mint-pastel/10 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Activity className="mr-2 text-mint-pastel" size={16} />
                        Cập nhật huyết áp
                      </h5>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <input 
                          type="text" 
                          placeholder="120" 
                          className="text-center text-sm p-2 rounded border"
                          readOnly
                        />
                        <input 
                          type="text" 
                          placeholder="80" 
                          className="text-center text-sm p-2 rounded border"
                          readOnly
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-mint-pastel to-green-pastel text-white text-sm py-2">
                        Lưu kết quả
                      </Button>
                    </div>

                    {/* Medication section */}
                    <div className="bg-pink-pastel/10 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Bell className="mr-2 text-pink-pastel" size={16} />
                        Thuốc hôm nay
                      </h5>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-green-pastel/20 rounded-lg">
                          <div className="text-left">
                            <p className="text-sm font-medium">Amlodipine 5mg</p>
                            <p className="text-xs text-gray-600">7:00 AM - Sáng</p>
                          </div>
                          <span className="text-green-600 text-lg">✓</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-pink-pastel/20 rounded-lg border border-pink-pastel">
                          <div className="text-left">
                            <p className="text-sm font-medium">Candesartan 8mg</p>
                            <p className="text-xs text-gray-600">7:00 PM - Tối</p>
                          </div>
                          <Button className="bg-pink-pastel text-white text-xs px-3 py-1">
                            Uống ngay
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 2 && (
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 text-lg mb-3 flex items-center">
                        <Shield className="mr-2 text-pink-pastel" size={20} />
                        Báo cáo của Mẹ
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-pastel/20 rounded-lg">
                          <div>
                            <p className="font-medium">Uống thuốc đúng giờ</p>
                            <p className="text-sm text-gray-600">6/7 ngày tuần này</p>
                          </div>
                          <div className="text-green-600 text-xl font-bold">86%</div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-mint-pastel/20 rounded-lg">
                          <div>
                            <p className="font-medium">Đo huyết áp</p>
                            <p className="text-sm text-gray-600">Đều đặn mỗi ngày</p>
                          </div>
                          <div className="text-mint-pastel text-xl font-bold">100%</div>
                        </div>
                        
                        {/* Voice reminder section */}
                        <div className="p-3 bg-pink-pastel/20 rounded-lg border border-pink-pastel">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-gray-800">Nhắc nhở uống thuốc</p>
                            <Button className="bg-pink-pastel text-white text-xs px-3 py-1">
                              Ghi âm lời nhắc
                            </Button>
                          </div>
                          <p className="text-sm text-gray-700 italic">💌 "Má ơi, nhớ uống thuốc nhé!"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeDemo === 3 && (
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto flex items-center justify-center">
                        <Bell className="text-black" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-gray-800">Đã tới giờ đo huyết áp!</h4>
                        <div className="bg-white/50 rounded-lg p-3">
                          <p className="text-gray-800 font-medium italic">
                            "Má ơi, tới giờ đo huyết áp rồi nè. Con lo cho sức khỏe má!"
                          </p>
                        </div>
                        <p className="text-sm text-gray-600">Đo huyết áp buổi sáng - 7:00 AM</p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-blue-500 text-white font-semibold">
                          ✅ Đã đo
                        </Button>
                        <Button variant="outline" className="flex-1 border-blue-300 text-blue-600">
                          ⏰ Nhắc sau 10 phút
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Demo controls */}
          <div className="space-y-8">
            <div className="space-y-6">
              {demoScreens.map((screen, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    activeDemo === index
                      ? 'bg-gradient-to-r from-mint-pastel/20 to-green-pastel/20 border-mint-pastel'
                      : 'bg-white/50 border-gray-200 hover:border-mint-pastel/50'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      activeDemo === index ? 'bg-mint-pastel' : 'bg-gray-100'
                    }`}>
                      {screen.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-mulish text-gray-800">
                        {screen.title}
                      </h3>
                      <p className="text-gray-600">
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-pastel/10 to-mint-pastel/10 p-6 rounded-2xl border border-pink-pastel/30">
              <h3 className="text-2xl font-bold font-mulish mb-4 text-gray-800">
                📱 Trải nghiệm ứng dụng
              </h3>
              <p className="text-gray-700 mb-4">
                Thử nghiệm giao diện ứng dụng mobile với tính năng đăng nhập phân quyền
              </p>
              <Link to="/mobile-app">
                <Button className="bg-gradient-to-r from-pink-pastel to-mint-pastel text-gray-800 font-semibold px-6 py-3 rounded-full">
                  <Heart className="mr-2" size={20} />
                  Xem demo mobile app
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
