export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#111] border border-[#2A2A2A] p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      {children}
    </div>
  );
}
