"use client";

import Ofert from "@/components/Ofert";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function OffertPage() {
  const [offertData, setOffertData] = useState({});
  const [loading, setLoading] = useState(true);

  const pathName = usePathname();

  useEffect(() => {
    const idOffert = pathName.split("/")[2];
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offerts/${idOffert}`);
        const data = await res.json();
        setOffertData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="mx-auto md:w-fit">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="text-2xl text-indigo-700">{offertData?.offert?.name}</p>
          <Ofert offert={offertData?.offert} />
        </>
      )}
    </main>
  );
}
