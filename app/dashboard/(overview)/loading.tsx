import DashboardSkeleton from '@/app/ui/skeletons';

// using this if I want to stream the whole dashboard at once
// using <Suspense> in the dashboard/page.tsx to stream components independently
export default function Loading() {
  return <DashboardSkeleton />;
}
