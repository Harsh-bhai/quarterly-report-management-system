import { Inter } from "@next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/studentlogin");
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center mx-auto btn-moving w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
      <div className=" bg-white flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
        <div className="shadow-[2px_0px_10px_gray] rounded-full p-12 bg-white ">
          <img
            draggable={false}
            id="motion"
            src="/logo.png"
            alt="Sign up"
            className="w-32 h-32 sm:h-56 sm:w-56  shdow-2xl"
          />
        </div>
        <div className="text-center uppercase text-xl sm:text-5xl font-semibold underline underline-offset-4 decoration-neutral-950 my-4">
          Aspire To Excel
        </div>
        <div className="text-center uppercase text-lg font-semibold underline underline-offset-4 decoration-neutral-950">
          BIT Durg
        </div>
      </div>
    </div>
  );
}
