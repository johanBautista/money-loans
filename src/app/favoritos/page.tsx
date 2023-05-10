import Ofert from "@/components/Ofert";
import { Offert } from "@/utils/types";
import React from "react";

const fetchOffertsFavorites = () => {
  const idUser = 1;
  const url = `${process.env.API_URL}/offerts/${idUser}/favorites`;

  return fetch(url).then((res) => res.json());
};

export default async function Favoritos() {
  const offertsUserFavorites = await fetchOffertsFavorites();

  return (
    <main className="mx-auto md:w-fit">
      {offertsUserFavorites.offerts.length > 0 ? (
        <div>
          {offertsUserFavorites.offerts.map((offert: Offert) => (
            <Ofert key={offert._id} offert={offert} />
          ))}
        </div>
      ) : (
        <h4 className="text-indigo-400 text-3xl mb-4">Seguimos buscando las mejores ofertas!</h4>
      )}
    </main>
  );
}
