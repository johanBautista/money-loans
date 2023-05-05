import Ofert from "@/components/Ofert";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="grid grid-flow-col md:grid-flow-row">
      <p>Hola mundo soy Home</p>
        <Ofert />
        <Ofert />
        <Ofert />
        <Ofert />
    </main>
  );
}
