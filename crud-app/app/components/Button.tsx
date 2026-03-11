interface ButtonProps {
    label: string;
    onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {

  return (
    <main className="flex flex-col bg-red-500 cursor-pointer p-4 rounded-2xl">
      <h1 className="text-xl font-bold">Clique aqui</h1>
    </main>
  );
}