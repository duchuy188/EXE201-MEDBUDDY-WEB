
export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: "🩺",
      title: "Kiểm soát huyết áp hiệu quả",
      description: "Theo dõi huyết áp hàng ngày, phát hiện sớm các biến động bất thường và điều chỉnh kịp thời.",
      highlight: "Giảm 40% nguy cơ biến chứng tim mạch"
    },
    {
      icon: "💊",
      title: "Không bao giờ quên thuốc",
      description: "Hệ thống nhắc nhở thông minh đảm bảo uống thuốc huyết áp đúng giờ, đúng liều mỗi ngày.",
      highlight: "Tuân thủ điều trị 99.9%"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Yên tâm khi sống xa",
      description: "Người thân có thể theo dõi tình trạng huyết áp và nhận cảnh báo khi có bất thường.",
      highlight: "Kết nối gia đình mọi lúc mọi nơi"
    },
    {
      icon: "👨‍⚕️",
      title: "Được bác sĩ tim mạch khuyên dùng",
      description: "Nhiều bác sĩ chuyên khoa tim mạch khuyên bệnh nhân sử dụng để quản lý huyết áp tốt hơn.",
      highlight: "Tin cậy từ chuyên gia tim mạch"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-mint-pastel/10 via-white to-pink-pastel/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mulish mb-6">
            Tại sao chọn{" "}
            <span className="bg-gradient-to-r from-mint-pastel to-pink-pastel bg-clip-text text-transparent">
              HAP MEDBUDDY?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hơn 50,000 người bệnh cao huyết áp đã tin tưởng HAP MEDBUDDY để kiểm soát sức khỏe tim mạch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-mint-pastel/20 hover:border-mint-pastel/40 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-mint-pastel to-pink-pastel rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {reason.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-mulish mb-3 text-gray-800">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    {reason.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-mint-pastel/20 to-pink-pastel/20 p-3 rounded-lg border border-mint-pastel/30">
                    <p className="text-mint-pastel font-semibold">
                      ✨ {reason.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-cream to-white rounded-3xl p-8 md:p-12 shadow-xl border border-mint-pastel/20">
          <h3 className="text-3xl font-bold font-mulish text-center mb-8 text-gray-800">
            💬 Người dùng nói gì về HAP MEDBUDDY?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-mint-pastel to-green-pastel rounded-full mx-auto flex items-center justify-center text-3xl">
                👵
              </div>
              <blockquote className="text-lg text-gray-700 italic">
                "Từ khi dùng app, huyết áp của tôi ổn định hơn nhiều. Con tôi cũng yên tâm hơn!"
              </blockquote>
              <cite className="text-mint-pastel font-semibold">- Cô Hương, 67 tuổi</cite>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-pastel to-mint-pastel rounded-full mx-auto flex items-center justify-center text-3xl">
                👨‍💼
              </div>
              <blockquote className="text-lg text-gray-700 italic">
                "Tôi có thể theo dõi huyết áp của ba mẹ mỗi ngày và nhận cảnh báo khi có vấn đề."
              </blockquote>
              <cite className="text-mint-pastel font-semibold">- Anh Minh, 35 tuổi</cite>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-pastel to-pink-pastel rounded-full mx-auto flex items-center justify-center text-3xl">
                👩‍⚕️
              </div>
              <blockquote className="text-lg text-gray-700 italic">
                "Bệnh nhân của tôi kiểm soát huyết áp tốt hơn rất nhiều khi dùng app này."
              </blockquote>
              <cite className="text-mint-pastel font-semibold">- BS. Thu Hà - Tim mạch</cite>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-mint-pastel mb-2">50K+</div>
            <div className="text-gray-600">Người dùng</div>
          </div>
          <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-pink-pastel mb-2">98%</div>
            <div className="text-gray-600">Kiểm soát tốt</div>
          </div>
          <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-pastel mb-2">24/7</div>
            <div className="text-gray-600">Hỗ trợ</div>
          </div>
          <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-mint-pastel mb-2">5⭐</div>
            <div className="text-gray-600">Đánh giá</div>
          </div>
        </div>
      </div>
    </section>
  );
};
