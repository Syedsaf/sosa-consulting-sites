
import Image from "next/image";
import logo from "../public/logo.png";
export default function Home(){
  return (
    <main className="p-10 text-center">
      <Image src={logo} alt="SOSA Logo" width={120} height={120}/>
      <h1 className="text-4xl font-bold mt-6">Career Growth That Actually Works.</h1>
      <p className="mt-4 text-gray-600">Website Setup Successful</p>
    </main>
  );
}
