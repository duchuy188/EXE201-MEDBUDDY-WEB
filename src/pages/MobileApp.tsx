import { useState } from "react";
import { MobileAppLayout } from "@/components/mobile/MobileAppLayout";
import { LoginScreen } from "@/components/mobile/LoginScreen";
import { DashboardScreen } from "@/components/mobile/DashboardScreen";
import { AddMedicineScreen } from "@/components/mobile/AddMedicineScreen";
import { PhotoCaptureScreen } from "@/components/mobile/PhotoCaptureScreen";
import { HealthStatisticsScreen } from "@/components/mobile/HealthStatisticsScreen";
import { MedicineInventoryScreen } from "@/components/mobile/MedicineInventoryScreen";
import { BloodPressureScreen } from "@/components/mobile/BloodPressureScreen";
import { ScheduleScreen } from "@/components/mobile/ScheduleScreen";
import { VoiceReminderScreen } from "@/components/mobile/VoiceReminderScreen";

const MobileApp = () => {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'app'>('login');
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [userType, setUserType] = useState<'patient' | 'family'>('patient');

  const handleLogin = (type: 'patient' | 'family') => {
    setUserType(type);
    setCurrentView('app');
    setActiveScreen('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('login');
    setActiveScreen('dashboard');
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen userType={userType} onLogout={handleLogout} />;
      case 'add':
        return <AddMedicineScreen />;
      case 'photo':
        return <PhotoCaptureScreen />;
      case 'statistics':
        return <HealthStatisticsScreen />;
      case 'inventory':
        return <MedicineInventoryScreen />;
      case 'pressure':
        return <BloodPressureScreen userType={userType} />;
      case 'schedule':
        return <ScheduleScreen />;
      case 'voice':
        return <VoiceReminderScreen onBack={() => setActiveScreen('dashboard')} />;
      default:
        return <DashboardScreen userType={userType} onLogout={handleLogout} />;
    }
  };

  const renderContent = () => {
    if (currentView === 'login') {
      return <LoginScreen onLogin={handleLogin} onRegister={() => setCurrentView('register')} />;
    }
      
    return renderScreen();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <MobileAppLayout 
        activeScreen={activeScreen}
        onScreenChange={setActiveScreen}
        showNavigation={currentView === 'app'}
      >
        {renderContent()}
      </MobileAppLayout>
    </div>
  );
};

export default MobileApp;
