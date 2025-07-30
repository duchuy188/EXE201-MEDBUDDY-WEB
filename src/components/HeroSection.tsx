
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-senior-mint/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-senior-sky/30 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold font-mulish leading-tight">
              <span className="bg-gradient-to-r from-senior-accent via-senior-mint to-senior-sky bg-clip-text text-transparent">
                HAP MEDBUDDY
              </span>
              <br />
              <span className="text-gray-800 text-3xl md:text-4xl">
                Người bạn đồng hành tin cậy
              </span>
            </h1>
            
            <div className="bg-gradient-to-r from-senior-sky/20 to-senior-accent/20 p-6 rounded-2xl border border-senior-sky/30">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 font-mulish">
                💗 "Giúp bạn theo dõi và kiểm soát huyết áp mỗi ngày"
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Ứng dụng hỗ trợ <strong>người bệnh cao huyết áp</strong>, đặc biệt 
              <strong> người cao tuổi</strong>, trong việc <strong>nhắc nhở uống thuốc</strong>, 
              <strong> theo dõi huyết áp</strong> và <strong>kết nối với người thân</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection('tai-app')}
                className="bg-gradient-to-r from-senior-accent to-senior-mint hover:from-senior-accent/80 hover:to-senior-mint/80 text-white font-bold px-8 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-heartbeat"
              >
                <Heart className="mr-2" size={24} />
                Tải ngay miễn phí
              </Button>
              
              <Button 
                onClick={() => scrollToSection('demo')}
                variant="outline" 
                className="border-2 border-senior-accent text-senior-accent hover:bg-senior-accent hover:text-white font-semibold px-8 py-4 rounded-full text-xl transition-all duration-300"
              >
                📱 Xem demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">50K+</div>
                <div className="text-sm text-gray-600">Người dùng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-sm text-gray-600">Kiểm soát tốt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Hỗ trợ</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-gentle-bounce">
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-white to-senior-accent/20 rounded-3xl shadow-2xl border border-senior-accent/30 p-6">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-senior-accent to-senior-mint rounded-2xl mx-auto flex items-center justify-center">
                  <Heart className="text-white" size={32} />
                </div>
                <div className="space-y-3">
                  <div className="bg-senior-sky/20 p-4 rounded-xl">
                    <p className="font-semibold text-gray-800">🔔 Đã tới giờ đo huyết áp!</p>
                    <p className="text-sm text-gray-600 mt-1">Huyết áp buổi sáng - 7:00 AM</p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-senior-mint text-white font-semibold rounded-xl">
                      ✅ Đã đo
                    </Button>
                    <Button variant="outline" className="flex-1 border-senior-sky text-senior-sky rounded-xl">
                      ⏰ Nhắc sau
                    </Button>
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-sm">Sáng: Amlodipine</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-sm">Huyết áp: 120/80</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-sm">Tối: Candesartan</span>
                    <span className="text-gray-400">○</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-senior-sky/80 rounded-full flex items-center justify-center text-2xl animate-pulse">
              💝
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-senior-mint/80 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
