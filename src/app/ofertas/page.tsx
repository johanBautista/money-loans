import Ofert from "@/components/Ofert";
import { Offert } from "@/utils/types";
import React from "react";

const fetchOfferts = () => {
  const url = `${process.env.API_URL}/offerts`;

  return fetch(url).then((res) => res.json());
};

export default async function Oferts() {
  const offertsUser = await fetchOfferts();
  console.log("EEDED", typeof offertsUser, "RESPONSE", offertsUser.offerts);

  return (
    <main className="flex justify-between">
      <div className="hidden lg:block">
        <article className="w-80 p-6 bg-white rounded-lg shadow dark:bg-green-400">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Expertos en préstamos
          </h5>
          <p className="mb-3 font-normal text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          </p>
          <button className=" bg-indigo-500 hover:bg-indigo-700 text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Buscar un asesor
          </button>
        </article>
      </div>
      <div className="mx-auto md:w-fit">
        {offertsUser.offerts.length > 0 ? (
          <div>
            {offertsUser.offerts.map((offert: Offert) => (
              <Ofert key={offert._id} offert={offert} />
            ))}
          </div>
        ) : (
          <h4 className="text-indigo-400 text-3xl mb-4">Seguimos buscando las mejores ofertas!</h4>
        )}
      </div>
    </main>
  );
}
