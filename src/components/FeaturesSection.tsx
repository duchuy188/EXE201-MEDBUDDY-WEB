
export const FeaturesSection = () => {
  const features = [
    {
      icon: "🩺",
      title: "Theo dõi huyết áp hàng ngày",
      description: "Ghi nhận số đo huyết áp, tự động phân tích xu hướng và cảnh báo khi có bất thường.",
      color: "from-mint-pastel to-green-pastel"
    },
    {
      icon: "⏰",
      title: "Nhắc uống thuốc đúng giờ",
      description: "Đặt lịch nhắc thuốc huyết áp với giọng nói thân thiết. Không bao giờ quên liều thuốc quan trọng.",
      color: "from-pink-pastel to-mint-pastel"
    },
    {
      icon: "📊",
      title: "Biểu đồ theo dõi tiến triển",
      description: "Xem biểu đồ huyết áp theo thời gian, báo cáo chi tiết cho bác sĩ khi tái khám.",
      color: "from-green-pastel to-pink-pastel"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Người thân theo dõi từ xa",
      description: "Con cái có thể theo dõi tình trạng huyết áp và việc uống thuốc của cha mẹ. Yên tâm dù ở xa.",
      color: "from-mint-pastel to-pink-pastel"
    },
    {
      icon: "🚨",
      title: "Cảnh báo huyết áp bất thường",
      description: "Nhận thông báo ngay khi huyết áp cao hoặc thấp bất thường, đề xuất liên hệ bác sĩ.",
      color: "from-pink-pastel to-green-pastel"
    },
    {
      icon: "👩‍⚕️",
      title: "Nhắc tái khám định kỳ",
      description: "Không chỉ nhắc thuốc, còn nhắc lịch hẹn bác sĩ tim mạch và các xét nghiệm định kỳ quan trọng.",
      color: "from-green-pastel to-mint-pastel"
    }
  ];

  return (
    <section id="tinh-nang" className="py-20 bg-gradient-to-br from-white to-mint-pastel/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mulish mb-6">
            <span className="bg-gradient-to-r from-mint-pastel to-green-pastel bg-clip-text text-transparent">
              Tính năng nổi bật
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HAP MEDBUDDY được thiết kế đặc biệt để hỗ trợ người bệnh cao huyết áp kiểm soát tốt tình trạng sức khỏe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-mint-pastel/20 hover:border-mint-pastel/40 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-mulish mb-4 text-gray-800">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-pastel/20 to-mint-pastel/20 p-8 rounded-2xl border border-pink-pastel/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-mulish mb-4 text-gray-800">
              🌟 Đặc biệt dành cho người bệnh cao huyết áp
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Chúng tôi hiểu rằng việc kiểm soát huyết áp cần sự <strong>kiên trì và theo dõi đều đặn</strong>. 
              Mỗi tính năng đều được thiết kế để giúp bạn <strong>duy trì lối sống lành mạnh</strong> và 
              <strong>kiểm soát tốt huyết áp</strong>. ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
