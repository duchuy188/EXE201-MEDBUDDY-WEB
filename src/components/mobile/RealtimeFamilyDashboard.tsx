
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { FamilyMember, ActivityItem } from "./dashboard/types";
import { FamilyMemberCard } from "./dashboard/FamilyMemberCard";
import { ActivityFeed } from "./dashboard/ActivityFeed";
import { ConnectionStatus } from "./dashboard/ConnectionStatus";

interface RealtimeFamilyDashboardProps {
  userType: 'patient' | 'family';
}

export const RealtimeFamilyDashboard = ({ userType }: RealtimeFamilyDashboardProps) => {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [isConnected, setIsConnected] = useState(true);

  // Mock activities data
  const activities: ActivityItem[] = [
    {
      id: '1',
      message: 'Mẹ vừa đo huyết áp: 125/82 mmHg',
      time: '2 phút trước',
      type: 'success'
    },
    {
      id: '2',
      message: 'Bố đã uống thuốc Amlodipine',
      time: '15 phút trước',
      type: 'info'
    },
    {
      id: '3',
      message: 'Nhắc nhở: Đo huyết áp buổi tối',
      time: '1 giờ trước',
      type: 'warning'
    }
  ];

  // Mock real-time data - trong thực tế sẽ dùng WebSocket hoặc Server-Sent Events
  useEffect(() => {
    const mockFamilyData: FamilyMember[] = [
      {
        id: '1',
        name: 'Mẹ Nguyễn Thị Lan',
        relation: 'Mẹ',
        lastActivity: '2 phút trước',
        status: 'online',
        healthStatus: 'good',
        lastBP: '125/82',
        medicineToday: true
      },
      {
        id: '2', 
        name: 'Bố Nguyễn Văn Nam',
        relation: 'Bố',
        lastActivity: '15 phút trước',
        status: 'away',
        healthStatus: 'warning',
        lastBP: '140/90',
        medicineToday: false
      }
    ];

    if (userType === 'family') {
      setFamilyMembers(mockFamilyData);
    } else {
      // Nếu là patient, hiển thị người thân đang theo dõi
      setFamilyMembers([
        {
          id: '3',
          name: 'Con gái - Nguyễn Thị Mai',
          relation: 'Con gái',
          lastActivity: 'Đang xem',
          status: 'online',
          healthStatus: 'good',
          medicineToday: true
        },
        {
          id: '4',
          name: 'Con trai - Nguyễn Văn Hùng', 
          relation: 'Con trai',
          lastActivity: '1 giờ trước',
          status: 'offline',
          healthStatus: 'good',
          medicineToday: true
        }
      ]);
    }

    // Simulate real-time updates
    const interval = setInterval(() => {
      setFamilyMembers(prev => prev.map(member => ({
        ...member,
        lastActivity: member.status === 'online' ? 'Vừa xong' : member.lastActivity
      })));
    }, 30000);

    return () => clearInterval(interval);
  }, [userType]);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Activity className="mr-2 text-pink-pastel" size={24} />
          <h3 className="text-xl font-bold text-gray-800">
            {userType === 'family' ? 'Theo dõi gia đình' : 'Người thân đang theo dõi'}
          </h3>
        </div>
        <ConnectionStatus isConnected={isConnected} />
      </div>

      <div className="space-y-4">
        {familyMembers.map((member) => (
          <FamilyMemberCard 
            key={member.id} 
            member={member} 
            userType={userType}
          />
        ))}
      </div>

      <ActivityFeed activities={activities} />
    </Card>
  );
};
