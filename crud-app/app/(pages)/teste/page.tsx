"use client";


import App from "@/app/components/App";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function TestePage(){
  return (
<>

        <Header />
    <div className="flex h-screen w-full">
        <App />
    </div>
        <Footer />



</>
  )

} 