import Link from "next/link";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage(){
  return (
    
    <>
    
    <Header />

    <div className="flex h-screen w-full justify-center items-center flex-col gap-4">
<div className="text-center mb-8">
  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg animate-pulse">Welcome to CRUD App</h1>
  <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">Manage your data efficiently with our modern, responsive CRUD interface.</p>
</div>
<div className="flex flex-col items-center gap-4">
  <Link href="/teste">
<Button label="Explore Test Page" />
  </Link>
  <p className="text-sm text-gray-500">Click Aqui</p>
</div>
    </div>

    <Footer />
    </>
      
  )
} 