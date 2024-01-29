import Sidebar from "./_component/Sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div>
        <Sidebar />
      </div>
      <div>
        {children}
      </div>
    </main>
  );
}
