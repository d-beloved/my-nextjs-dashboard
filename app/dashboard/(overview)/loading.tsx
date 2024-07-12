import DashboardSkeleton from '@/app/ui/skeletons';

// Placed this file and the page.tsx inside the (overview) folder so that the loading state can only
// affect the main dashboard page and not the invoice and customers pages
// using this if I want to stream the whole dashboard at once
// using <Suspense> in the dashboard/page.tsx to stream components independently
export default function Loading() {
  return <DashboardSkeleton />;
}
