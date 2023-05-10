"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Ofert = ({ offert }) => {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const handleClickLikeButton = (id) => {
    setLiked(!liked);
    // const requestOptions = {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ favorite: !liked }),
    // };
    // const url = `${process.env.NEXT_PUBLIC_API_URL}/offerts/${id}`;

    // fetch(url, requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => console.log("DATA", data))
    //   .catch((err) => console.log(err));
  };

  const handleClick = (_id: any): void => {
    router.push(`/ofertas/${offert?._id}`);
  };

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow mb-2 md:flex-row md:max-w-7xl hover:bg-gray-100 text-xs">
      <div className="flex flex-col lg:flex-row justify-between p-2 leading-normal">
        <div className="self-center mx-4">
          <svg className="w-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
          </svg>
          <Link href="/" className="underline">
            Ir a web
          </Link>
        </div>
        {/*  */}
        <div className="px-2 text-gray-500 md:self-end">
          <p className="py-2 font-bold text-indigo-500 ">Condiciones</p>

          <p className="text-sm mr-2 font-extralight">Hasta</p>
          <div className="pb-1 flex justify-end">
            <p className="text-lg">
              {offert?.import} <small>€</small>
            </p>
          </div>
          <div className="bg-gray-200 rounded px-1 flex justify-between">
            <p className="text-lg mr-2">TIN</p>
            <p className="text-lg">
              {offert?.tin} <small>%</small>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="mx-2 text-gray-500">
          <p className="py-2 font-bold text-indigo-500 ">Ventajas</p>
          <ul className="list-disc ml-5 text-sm">
            <li>Encuentra el mejor préstamo</li>
            <li>100% online</li>
            <li>Sin comisiones</li>
            <li>Respuesta inmediata</li>
          </ul>
        </div>

        <div className="mt-3 self-end px-2 text-gray-500 ">
          <div>
            <span className="pr-8 font-bold text-gray-700 ">Ent.</span>

            <span className="bg-cyan-500 rounded text-white p-2">{offert?.name}</span>
          </div>
          <div className="mt-2 flex justify-between mb-2">
            <div className="self-center mx-4">
              <button onClick={() => handleClickLikeButton(offert?._id)}>
                {offert?.favorite === true ? <span className="text-xl">❤️</span> : <span className="text-xl">♡</span>}
              </button>
            </div>
            <button
              onClick={() => handleClick(offert?._id)}
              className=" bg-indigo-500 hover:bg-indigo-700 text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-xs text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Ver más
            </button>
            <Link
              href="#"
              className="bg-transparent hover:bg-indigo-500 text-indigo-700 text-xs hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Comparar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ofert;
