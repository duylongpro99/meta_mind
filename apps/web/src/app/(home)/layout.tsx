export default function Layout({
  children,
  editor,
  mindmap,
}: {
  children: React.ReactNode;
  editor: React.ReactNode;
  mindmap: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex">
      <div className="flex-2/5">{editor}</div>
      <div className="flex-3/5">{mindmap}</div>
    </div>
  );
}
