import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer-2 bg-gray-800 pt-6 md:pt-12">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-5xl mb-4">Money Loans</h4>
            <p className="text-gray-400">We have carefully crafted the blocks to suit to everyones need.</p>
            <div className="mt-4">
              <button className=" bg-indigo-500 hover:bg-indigo-700 text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Buscar un asesor
              </button>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1">
                <h6 className="text-base font-medium text-white uppercase mb-2">About</h6>
                <div>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Company
                  </Link>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Culture
                  </Link>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Team
                  </Link>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Careers
                  </Link>
                </div>
              </div>
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">What we offer</h6>
                <div>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Blocks
                  </Link>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Resources
                  </Link>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Tools
                  </Link>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Tutorials
                  </Link>
                  <Link href="#" className="text-gray-400 py-1 block hover:underline">
                    Freebies
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 className="text-lg text-white font-medium mb-4">Explore our site</h5>

            <button className=" bg-indigo-500 hover:bg-indigo-700 text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy;
                <strong>
                  <Link href="https://www.linkedin.com/in/johanbautista/" target="_blank">
                    Johan_DEV
                  </Link>
                </strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <Link href="#" className="py-2 px-4 text-white inline-block hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="py-2 px-4 text-white inline-block hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
