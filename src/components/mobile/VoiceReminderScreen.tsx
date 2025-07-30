
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, Square, Play, Trash2, Heart, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VoiceReminderScreenProps {
  onBack: () => void;
}

interface VoiceRecording {
  id: string;
  name: string;
  url: string;
  duration: number;
  createdAt: Date;
}

export const VoiceReminderScreen = ({ onBack }: VoiceReminderScreenProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState<VoiceRecording[]>([]);
  const [currentRecording, setCurrentRecording] = useState<string>("");
  const [recordingDuration, setRecordingDuration] = useState(0);
  const { toast } = useToast();
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setCurrentRecording(audioUrl);
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingDuration(0);
      
      // Start duration counter
      durationIntervalRef.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
      
      toast({
        title: "Bắt đầu ghi âm",
        description: "Hãy nói lời nhắc nhở cho người thân của bạn"
      });
    } catch (error) {
      toast({
        title: "Lỗi ghi âm",
        description: "Không thể truy cập microphone",
        variant: "destructive"
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
      }
    }
  };

  const saveRecording = () => {
    if (currentRecording) {
      const newRecording: VoiceRecording = {
        id: Date.now().toString(),
        name: `Nhắc nhở ${recordings.length + 1}`,
        url: currentRecording,
        duration: recordingDuration,
        createdAt: new Date()
      };
      
      setRecordings(prev => [...prev, newRecording]);
      setCurrentRecording("");
      setRecordingDuration(0);
      
      toast({
        title: "Đã lưu ghi âm",
        description: "Lời nhắc nhở đã được lưu thành công"
      });
    }
  };

  const discardRecording = () => {
    if (currentRecording) {
      URL.revokeObjectURL(currentRecording);
      setCurrentRecording("");
      setRecordingDuration(0);
    }
  };

  const playRecording = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  const deleteRecording = (id: string) => {
    setRecordings(prev => prev.filter(r => r.id !== id));
    toast({
      title: "Đã xóa",
      description: "Ghi âm đã được xóa"
    });
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-gray-800">Ghi âm nhắc nhở</h2>
        <div className="w-8" />
      </div>

      {/* Info Card */}
      <Card className="p-6 bg-gradient-to-r from-pink-pastel/20 to-mint-pastel/20 border-pink-pastel/30">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-pastel to-mint-pastel rounded-full mx-auto flex items-center justify-center">
            <Heart className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-800">Ghi âm lời nhắc nhở</h3>
          <p className="text-sm text-gray-600">
            Ghi lại giọng nói của bạn để tạo thông báo nhắc nhở ấm áp cho người thân
          </p>
        </div>
      </Card>

      {/* Recording Controls */}
      <Card className="p-6">
        <div className="text-center space-y-4">
          {!isRecording && !currentRecording && (
            <Button
              onClick={startRecording}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-pastel to-mint-pastel text-white"
            >
              <Mic size={32} />
            </Button>
          )}

          {isRecording && (
            <div className="space-y-4">
              <div className="animate-pulse">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mx-auto">
                  <Mic className="text-white" size={32} />
                </div>
              </div>
              <p className="text-lg font-bold text-red-500">
                Đang ghi âm... {formatDuration(recordingDuration)}
              </p>
              <Button
                onClick={stopRecording}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <Square size={20} className="mr-2" />
                Dừng ghi âm
              </Button>
            </div>
          )}

          {currentRecording && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Thời lượng: {formatDuration(recordingDuration)}
                </p>
                <Button
                  onClick={() => playRecording(currentRecording)}
                  variant="outline"
                  className="mr-2"
                >
                  <Play size={16} className="mr-2" />
                  Nghe thử
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={saveRecording}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                >
                  Lưu ghi âm
                </Button>
                <Button
                  onClick={discardRecording}
                  variant="outline"
                  className="flex-1"
                >
                  <Trash2 size={16} className="mr-2" />
                  Hủy
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Saved Recordings */}
      {recordings.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Các ghi âm đã lưu</h3>
          <div className="space-y-3">
            {recordings.map((recording) => (
              <div
                key={recording.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex-1">
                  <p className="font-semibold">{recording.name}</p>
                  <p className="text-sm text-gray-600">
                    {formatDuration(recording.duration)} • {recording.createdAt.toLocaleDateString('vi-VN')}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => playRecording(recording.url)}
                  >
                    <Play size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteRecording(recording.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tips */}
      <Card className="p-4 bg-mint-pastel/10">
        <h4 className="font-semibold mb-2">💡 Gợi ý nội dung ghi âm:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• "Con ơi, đến giờ uống thuốc rồi đấy!"</li>
          <li>• "Nhớ đo huyết áp đều đặn nhé!"</li>
          <li>• "Mẹ yêu con, hãy chăm sóc sức khỏe tốt"</li>
          <li>• "Đừng quên ăn uống đầy đủ"</li>
        </ul>
      </Card>
    </div>
  );
};
