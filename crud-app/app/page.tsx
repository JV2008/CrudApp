import React from "react";
import Button from "../app/components/Button";
import Link from "next/dist/client/link";

export default function HomePage(){
  return (
    <><div className="flex h-screen w-full">
      <h1 className="text-xl">Home page</h1>
    <Link href="/teste">
    
    <Button label="Click me" onClick={() => alert("Button clicked!")} />
    </Link>
    </div>
      
      </>
  )
} 