import Sidebar from "./_component/Sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto overflow-x-hidden sm:p-3 md:p-6 mx-auto">
        {children}
      </div>
      
    </main>
  );
}
