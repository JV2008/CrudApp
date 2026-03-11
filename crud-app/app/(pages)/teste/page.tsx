import Button from "@/app/components/Button"

export default function TestePage(){
  return (
    <div className="flex h-screen w-full">
        <h1 className="text-xl">teste page</h1>
        <div className="">
            <Button 
                label="Click me"
                onClick={() => alert("Button clicked!")}
            />
        </div>
    </div>
  )
} 