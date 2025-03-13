import Header from "@/components/Header/Header";
import { Terminal } from "@/components/Terminal/Terminal";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <Header />
      <Terminal />
    </main>
  );
}
