"use client";

import React from "react";
import Ofert from "./Ofert";
import Card from "./Card";
import Image from "next/image";

const cardOfferts = [{ title: "Viajes" }, { title: "Personal" }, { title: "Reformas" }, { title: "Hipoteca" }];

const HomePage = () => {
  return (
    <div>
      <section className="mt-24">
        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 text-center">Nuestros Productos</h5>
        <div className="grid justify-items-center mt-12 md:flex md:justify-between">
          {cardOfferts.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </section>

      <section className="mt-40">
        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 text-center">Cuenta con nosotros</h5>
        <div className="flex justify-around">
          <Image src="/img1.jpg" width={600} height={100} alt="img" className="remove-bg hidden md:block" />
          <article className="w-80 p-6 border-2 border-green-400 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">Expertos en préstamos</h5>
            <p className="mb-3 font-normal text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            </p>
          </article>
        </div>
      </section>

      <section className="mt-40">
        <div className="">
          <article className="w-auto p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              ¿Por qué somos líderes?
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has been the text of the printing and
              typesetting industry. Lorem Ipsum has been the text of the printing and typesetting industry. Lorem Ipsum
              has been the
            </p>
            <button className=" bg-indigo-500 hover:bg-indigo-700 text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Buscar un asesor
            </button>
          </article>
        </div>
      </section>

      <section className="hidden md:block mt-40">
        <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 text-center">Nuestros Asesores</h5>
        <div className="flex justify-around">
          <article className="w-80 p-6 bg-white rounded-lg shadow dark:bg-green-400 self-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Expertos en préstamos
            </h5>
            <p className="mb-3 font-normal text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry
            </p>
            <button className=" bg-indigo-500 hover:bg-indigo-700 text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Buscar un asesor
            </button>
          </article>
          <Image src="/img2.jpg" width={600} height={100} alt="img" className="remove-bg hidden md:block" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
