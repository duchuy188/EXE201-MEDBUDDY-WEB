
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const DownloadSection = () => {
  const { toast } = useToast();

  const handleiPhoneClick = () => {
    toast({
      title: "🍎 Sắp ra mắt!",
      description: "Phiên bản iOS đang trong quá trình phát triển. Vui lòng quay lại sau nhé!",
      duration: 3000,
    });
  };

  return (
    <section id="tai-app" className="py-20 bg-gradient-to-br from-mint-pastel/20 via-pink-pastel/10 to-green-pastel/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-mint-pastel/30">
            <h2 className="text-4xl md:text-5xl font-bold font-mulish mb-6">
              <span className="bg-gradient-to-r from-mint-pastel to-pink-pastel bg-clip-text text-transparent">
                Tải HAP MEDBUDDY ngay hôm nay
              </span>
            </h2>
            
            <div className="bg-gradient-to-r from-pink-pastel/20 to-mint-pastel/20 p-6 rounded-2xl border border-pink-pastel/30 mb-8">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 font-mulish">
                🩺 "Kiểm soát huyết áp – Bảo vệ sức khỏe tim mạch của bạn"
              </p>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hãy để HAP MEDBUDDY giúp bạn kiểm soát huyết áp hiệu quả và kết nối với người thân yêu. 
              <br />
            </p>
            
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://expo.dev/accounts/nhatxatuno/projects/MEDBUDDY/builds/6020d2f9-b379-490b-b23d-e7f54296a3c8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-mint-pastel to-green-pastel hover:from-mint-pastel/80 hover:to-green-pastel/80 text-gray-800 font-bold px-8 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-heartbeat w-full">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 mr-2" />
                  Tải cho Android
                </Button>
              </a>
              
              <Button 
                onClick={handleiPhoneClick}
                className="bg-gradient-to-r from-pink-pastel to-mint-pastel hover:from-pink-pastel/80 hover:to-mint-pastel/80 text-gray-800 font-bold px-8 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-heartbeat"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="App Store" className="h-8 mr-2" />
                Tải cho iPhone (Sắp ra mắt)
              </Button>
            </div>
            
            {/* QR Codes */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-white border-2 border-mint-pastel rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl">
                  📱
                </div>
                <p className="font-semibold text-gray-800">Quét mã QR cho Android</p>
                <p className="text-sm text-gray-600">Google Play Store</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-white border-2 border-pink-pastel rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl">
                  🍎
                </div>
                <p className="font-semibold text-gray-800">Quét mã QR cho iPhone</p>
                <p className="text-sm text-gray-600">App Store</p>
              </div>
            </div>
            
            {/* Features reminder */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">🆓</div>
                <p className="text-sm font-semibold text-gray-700">Miễn phí 1 tháng đầu khi tải app</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-sm font-semibold text-gray-700">An toàn bảo mật</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🩺</div>
                <p className="text-sm font-semibold text-gray-700">Theo dõi huyết áp</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">📞</div>
                <p className="text-sm font-semibold text-gray-700">Hỗ trợ 24/7</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-green-pastel/20 to-mint-pastel/20 rounded-xl border border-green-pastel/30">
              <p className="text-lg text-gray-700">
                <strong>💌 Lưu ý:</strong> Sau khi tải về, hãy gửi ứng dụng cho cha mẹ và hướng dẫn họ cài đặt. 
                Chúng tôi có video hướng dẫn chi tiết cho người cao tuổi bệnh huyết áp!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
