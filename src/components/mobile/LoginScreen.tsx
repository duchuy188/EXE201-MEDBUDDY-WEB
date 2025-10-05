
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, User, Shield } from "lucide-react";

interface LoginScreenProps {
  onLogin: (type: 'patient' | 'family') => void;
  onRegister: () => void;
}

export const LoginScreen = ({ onLogin, onRegister }: LoginScreenProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-gradient-to-br from-senior-accent to-senior-mint rounded-full mx-auto flex items-center justify-center">
          <Heart className="text-white" size={40} />
        </div>
        <h2 className="text-3xl font-bold text-senior-navy">HAP MEDBUDDY</h2>
        <p className="text-senior-steel">Chọn loại tài khoản để đăng nhập</p>
      </div>

      <div className="space-y-4">
        <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onLogin('patient')}>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-senior-accent to-senior-mint rounded-2xl mx-auto flex items-center justify-center">
              <User className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-senior-navy">Người bệnh</h3>
            <p className="text-senior-steel">Theo dõi thuốc và huyết áp của bạn</p>
            <Button className="w-full bg-gradient-to-r from-senior-accent to-senior-mint text-white font-bold">
              Đăng nhập
            </Button>
          </div>
        </Card>

        <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onLogin('family')}>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-senior-sky to-senior-accent rounded-2xl mx-auto flex items-center justify-center">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-senior-navy">Người thân</h3>
            <p className="text-senior-steel">Theo dõi sức khỏe người thân yêu</p>
            <Button className="w-full bg-gradient-to-r from-senior-sky to-senior-accent text-white font-bold">
              Đăng nhập
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
