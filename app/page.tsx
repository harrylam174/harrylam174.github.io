import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Hi, My name is Harry!</h1>
      <p className="text-lg mb-6">I build cool things with code.</p>
      <Button>Contact Me</Button>
    </main>
  )
}
