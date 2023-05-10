"use client";

import Ofert from "@/components/Ofert";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Offert() {
  const [offertData, setOffertData] = useState("");
  const pathName = usePathname();

  useEffect(() => {
    const test = pathName.split("/")[2];
    const fetchData = () => {
      const result = fetch(`${process.env.NEXT_PUBLIC_API_URL}/offerts/${test}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOffertData(data);
        });
    };

    fetchData();
  }, []);

  return (
    <main className="mx-auto md:w-fit">
      <p className="text-2xl text-indigo-700">{offertData?.offert?.name}</p>
      <Ofert offert={offertData?.offert} />
    </main>
  );
}
