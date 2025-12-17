import DashboardStats from '@/components/dashboard-stats';
import ConversationList from '@/components/conversation-list';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardStats />
      <ConversationList />
    </div>
  );
}