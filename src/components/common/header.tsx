export function Header({ title }: { title: string }) {
  return (
    <header className="w-full">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
    </header>
  );
}
