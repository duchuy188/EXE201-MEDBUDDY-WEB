
import { Button } from "@/components/ui/button";
import { Heart, Phone, MessageCircle, Clock, Mic } from "lucide-react";
import { FamilyMember } from "./types";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FamilyMemberCardProps {
  member: FamilyMember;
  userType: 'patient' | 'family';
}

export const FamilyMemberCard = ({ member, userType }: FamilyMemberCardProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [showVoiceOptions, setShowVoiceOptions] = useState(false);
  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-orange-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getHealthStatusText = (status: string) => {
    switch (status) {
      case 'good': return 'Tốt';
      case 'warning': return 'Cần chú ý';
      case 'critical': return 'Khẩn cấp';
      default: return 'Không rõ';
    }
  };

  const handleMedicineReminder = () => {
    if (userType === 'family') {
      setShowVoiceOptions(!showVoiceOptions);
    }
  };

  const handleTextReminder = () => {
    toast({
      title: "Đã gửi nhắc nhở",
      description: `Đã gửi tin nhắn nhắc uống thuốc đến ${member.name}`
    });
    setShowVoiceOptions(false);
  };

  const handleVoiceReminder = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      
      // Simulate recording for 3 seconds
      setTimeout(() => {
        setIsRecording(false);
        stream.getTracks().forEach(track => track.stop());
        toast({
          title: "Đã gửi lời nhắc bằng giọng nói",
          description: `Lời nhắc "Má ơi, nhớ uống thuốc nhé!" đã được gửi đến ${member.name}`
        });
        setShowVoiceOptions(false);
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Lỗi ghi âm",
        description: "Không thể truy cập microphone",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-mint-pastel to-pink-pastel rounded-full flex items-center justify-center">
              <Heart className="text-white" size={20} />
            </div>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold text-gray-800">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.relation}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-sm font-medium ${getHealthStatusColor(member.healthStatus)}`}>
            {getHealthStatusText(member.healthStatus)}
          </p>
          <p className="text-xs text-gray-500 flex items-center">
            <Clock size={12} className="mr-1" />
            {member.lastActivity}
          </p>
        </div>
      </div>

      {/* Health Summary */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {member.lastBP && (
          <div className="bg-white p-3 rounded-lg">
            <p className="text-xs text-gray-600">Huyết áp gần nhất</p>
            <p className="font-bold text-gray-800">{member.lastBP}</p>
          </div>
        )}
        <div className="bg-white p-3 rounded-lg">
          <p className="text-xs text-gray-600">Uống thuốc hôm nay</p>
          <p className={`font-bold ${member.medicineToday ? 'text-green-600' : 'text-red-600'}`}>
            {member.medicineToday ? '✅ Đã uống' : '❌ Chưa uống'}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" className="text-xs px-2 py-2 h-auto">
          <Phone size={14} className="mr-1" />
          Gọi
        </Button>
        <Button variant="outline" size="sm" className="text-xs px-2 py-2 h-auto">
          <MessageCircle size={14} className="mr-1" />
          Nhắn tin
        </Button>
        {userType === 'family' && (
          <div className="col-span-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-pink-pastel text-pink-pastel text-xs px-2 py-2 h-auto"
              onClick={handleMedicineReminder}
            >
              <Heart size={14} className="mr-1" />
              Nhắc nhở uống thuốc
            </Button>
            
            {/* Voice Options */}
            {showVoiceOptions && (
              <div className="mt-2 p-3 bg-pink-pastel/10 rounded-lg border border-pink-pastel/30">
                <p className="text-xs text-gray-700 mb-2 font-medium">Chọn cách nhắc nhở:</p>
                <div className="space-y-2">
                  <Button
                    onClick={handleTextReminder}
                    size="sm"
                    variant="outline"
                    className="w-full text-xs h-8"
                  >
                    💬 Gửi tin nhắn
                  </Button>
                  <Button
                    onClick={handleVoiceReminder}
                    size="sm"
                    className={`w-full text-xs h-8 ${
                      isRecording 
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                        : 'bg-pink-pastel hover:bg-pink-pastel/80'
                    } text-white`}
                    disabled={isRecording}
                  >
                    <Mic size={14} className="mr-1" />
                    {isRecording ? 'Đang ghi âm...' : '🎙️ Ghi âm lời nhắc'}
                  </Button>
                </div>
                {isRecording && (
                  <p className="text-xs text-red-600 mt-1 text-center">
                    Hãy nói: "Má ơi, nhớ uống thuốc nhé!"
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
