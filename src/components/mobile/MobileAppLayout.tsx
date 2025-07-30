
import { Button } from "@/components/ui/button";
import { Heart, Plus, Activity, Calendar, Package, Camera, Mic, TrendingUp } from "lucide-react";

interface MobileAppLayoutProps {
  children: React.ReactNode;
  activeScreen: string;
  onScreenChange: (screen: string) => void;
  showNavigation: boolean;
}

const screens = {
  dashboard: {
    title: 'Trang chủ',
    icon: <Heart size={20} />
  },
  add: {
    title: 'Thêm thuốc',
    icon: <Plus size={20} />
  },
  photo: {
    title: 'Chụp ảnh',
    icon: <Camera size={20} />
  },
  statistics: {
    title: 'Thống kê',
    icon: <TrendingUp size={20} />
  },
  inventory: {
    title: 'Kho thuốc',
    icon: <Package size={20} />
  },
  pressure: {
    title: 'Huyết áp',
    icon: <Activity size={20} />
  },
  schedule: {
    title: 'Tái khám',
    icon: <Calendar size={20} />
  },
  voice: {
    title: 'Ghi âm',
    icon: <Mic size={20} />
  }
};

export const MobileAppLayout = ({ children, activeScreen, onScreenChange, showNavigation }: MobileAppLayoutProps) => {
  return (
    <div className="max-w-sm mx-auto">
      {/* Phone mockup */}
      <div className="bg-gray-800 p-2 rounded-3xl shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Status bar */}
          <div className="bg-gradient-to-r from-senior-navy to-senior-steel h-8 flex items-center justify-between px-4 text-white text-sm font-medium">
            <span>9:41</span>
            <span>HAP MEDBUDDY</span>
            <span>100%</span>
          </div>

          {/* App content */}
          <div className="h-[600px] overflow-y-auto p-4 bg-senior-pale">
            {children}
          </div>

          {/* Bottom navigation - chỉ hiển thị khi đã đăng nhập */}
          {showNavigation && (
            <div className="bg-white border-t border-senior-soft p-2">
              <div className="flex justify-around">
                {Object.entries(screens).map(([key, screen]) => (
                  <Button
                    key={key}
                    variant="ghost"
                    className={`flex-1 flex flex-col items-center py-2 ${
                      activeScreen === key ? 'text-senior-accent bg-senior-light' : 'text-senior-steel'
                    }`}
                    onClick={() => onScreenChange(key)}
                  >
                    {screen.icon}
                    <span className="text-xs mt-1">{screen.title}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
