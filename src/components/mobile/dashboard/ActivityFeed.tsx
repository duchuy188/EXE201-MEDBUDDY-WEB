
import { ActivityItem } from "./types";

interface ActivityFeedProps {
  activities: ActivityItem[];
}

export const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  const getActivityColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'info': return 'bg-blue-500';
      case 'warning': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <h4 className="font-semibold text-gray-800 mb-3">🔔 Hoạt động gần đây</h4>
      <div className="space-y-2">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center text-sm">
            <div className={`w-2 h-2 rounded-full mr-3 ${getActivityColor(activity.type)}`}></div>
            <span className="text-gray-700">{activity.message}</span>
            <span className="text-gray-500 ml-auto">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
