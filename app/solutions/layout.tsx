

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen">
      <div>
        {children}
      </div>
      
    </main>
  );
}
