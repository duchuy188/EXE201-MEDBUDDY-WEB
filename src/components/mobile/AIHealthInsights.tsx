
import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Activity } from "lucide-react";
import { BloodPressureReading } from "@/shared/types/health";

interface AIHealthInsightsProps {
  userType: 'patient' | 'family';
  patientName?: string;
}

interface HealthInsight {
  type: 'positive' | 'warning' | 'critical' | 'info';
  title: string;
  description: string;
  recommendation: string;
  icon: React.ReactNode;
}

export const AIHealthInsights = ({ userType, patientName }: AIHealthInsightsProps) => {
  // Mock AI analysis - trong thực tế sẽ call API AI service
  const generateInsights = (): HealthInsight[] => {
    const recentBP = [
      { systolic: 125, diastolic: 82, date: '2024-06-15' },
      { systolic: 130, diastolic: 85, date: '2024-06-14' },
      { systolic: 120, diastolic: 80, date: '2024-06-13' },
      { systolic: 135, diastolic: 88, date: '2024-06-12' },
    ];

    const insights: HealthInsight[] = [];

    // Phân tích xu hướng huyết áp
    const avgSystolic = recentBP.reduce((sum, bp) => sum + bp.systolic, 0) / recentBP.length;
    if (avgSystolic > 130) {
      insights.push({
        type: 'warning',
        title: 'Huyết áp có xu hướng tăng',
        description: `Huyết áp trung bình 7 ngày qua: ${Math.round(avgSystolic)}/85 mmHg`,
        recommendation: 'Nên giảm natri trong chế độ ăn và tăng cường vận động nhẹ',
        icon: <TrendingUp className="text-orange-500" size={20} />
      });
    }

    // Phân tích tuân thủ thuốc
    const medicineCompliance = 86; // Mock data
    if (medicineCompliance < 90) {
      insights.push({
        type: 'warning',
        title: 'Tuân thủ uống thuốc cần cải thiện',
        description: `Tỷ lệ uống thuốc đúng giờ: ${medicineCompliance}%`,
        recommendation: 'Thiết lập thêm báo thức hoặc nhờ người thân nhắc nhở',
        icon: <AlertTriangle className="text-orange-500" size={20} />
      });
    }

    // Insight tích cực
    insights.push({
      type: 'positive',
      title: 'Đo huyết áp đều đặn',
      description: 'Bạn đã đo huyết áp đều đặn 7/7 ngày qua',
      recommendation: 'Hãy tiếp tục duy trì thói quen tốt này',
      icon: <CheckCircle className="text-green-500" size={20} />
    });

    // AI recommendation
    insights.push({
      type: 'info',
      title: 'Gợi ý từ AI',
      description: 'Dựa trên dữ liệu của bạn, thời điểm tốt nhất để đo huyết áp là 7:00 AM',
      recommendation: 'Đo huyết áp sau khi thức dậy 30 phút và trước khi ăn sáng',
      icon: <Brain className="text-blue-500" size={20} />
    });

    return insights;
  };

  const insights = generateInsights();

  const getCardBorderClass = (type: string) => {
    switch (type) {
      case 'positive': return 'border-green-200 bg-green-50';
      case 'warning': return 'border-orange-200 bg-orange-50';
      case 'critical': return 'border-red-200 bg-red-50';
      default: return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <Brain className="mr-2 text-mint-pastel" size={24} />
        <h3 className="text-xl font-bold text-gray-800">
          AI Phân tích sức khỏe {userType === 'family' ? `- ${patientName}` : ''}
        </h3>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className={`p-4 rounded-xl border-2 ${getCardBorderClass(insight.type)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                {insight.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">
                  {insight.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {insight.description}
                </p>
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    💡 Khuyến nghị: {insight.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-mint-pastel/10 to-pink-pastel/10 rounded-lg">
        <p className="text-xs text-gray-600 text-center">
          🤖 Phân tích được tạo bởi AI dựa trên dữ liệu sức khỏe của bạn. 
          Luôn tham khảo ý kiến bác sĩ cho quyết định quan trọng.
        </p>
      </div>
    </Card>
  );
};
