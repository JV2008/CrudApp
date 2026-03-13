interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {

  return (
    <main 
      className="flex flex-col bg-linear-to-br from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 active:from-blue-700 active:to-purple-700 cursor-pointer p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring--2blue00/50 hover:ring-blue-300/70 backdrop-blur-sm border border-blue-300/50"
      role="button"
      tabIndex={0}
    >
      <h1 className="text-2xl font-black bg-linear-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-pulse-slow">
        Clique aqui
      </h1>
    </main>
  );
}
