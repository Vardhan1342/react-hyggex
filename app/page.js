import FooTer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
       <Navbar />
       <Main />
       <FooTer />
    </main>
  );
}
