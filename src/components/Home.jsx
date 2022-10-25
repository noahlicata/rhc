import React from "react";
import pic from "../fillerpic.png";

const Home = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            RRC Health Coaching
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            At RRC Health Coaching, duis id nulla sed nunc porta ultricies.
            Morbi nibh nulla, ultrices sit amet neque a, congue bibendum magna.
            Curabitur pellentesque venenatis rutrum.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="..."
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="..."
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Meet Me!
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-3">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              What is Health Coaching?
            </h2>
            <p className="mb-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              felis turpis. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Nam lobortis vitae
              magna at pharetra. Cras hendrerit turpis blandit neque porta
              tempus. Quisque interdum est eu magna volutpat, nec euismod nisi
              lobortis. Nullam vitae tempus tellus, sit amet lobortis augue.
              Quisque auctor ex eros, in gravida lectus blandit ac. Sed massa
              lectus, condimentum ut aliquet sed, bibendum sed neque.
              Suspendisse ut sem nibh. Vestibulum bibendum nulla erat, in
              sollicitudin turpis hendrerit a. Pellentesque posuere sollicitudin
              urna vitae vestibulum.
            </p>
            <p className="mb-4 font-medium">
              Aenean id ex posuere, ultricies nunc eget, fringilla arcu. Sed
              finibus lobortis ex, id imperdiet enim congue nec. Praesent
              tincidunt semper quam, non bibendum massa mattis eget. Proin
              iaculis quam luctus velit vestibulum tempus.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What can Health Coaching do fo you?
            </h2>
            <p className="mb-4">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Quisque turpis nisi, blandit vel
              consectetur et, rutrum vitae elit. Integer velit libero, luctus
              sit amet hendrerit pulvinar, bibendum vitae neque. Mauris molestie
              bibendum nibh eget sodales.
            </p>
            <p>
              Cras posuere tortor et ex commodo luctus non nec erat. Mauris a
              urna ultricies, tristique enim eget, dapibus dui.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={pic}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={pic}
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Estibulum bibendum nulla erat, in sollicitudin turpis hendrerit a.
              Pellentesque posuere sollicitudin urna vitae vestibulum.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Donec nec felis turpis.{" "}
                </h3>
                <p className="my-4">
                  "Aenean id ex posuere, ultricies nunc eget, fringilla arcu.
                  Sed finibus lobortis ex, id imperdiet enim congue nec.
                  Praesent tincidunt semper quam, non bibendum massa mattis
                  eget.
                </p>
                <p className="my-4">
                  Nulla pharetra sapien sapien, sit amet iaculis lectus congue
                  in. Nullam sagittis imperdiet est, id consectetur velit
                  fringilla egestas. Morbi luctus luctus diam et semper.
                </p>
                <p className="my-4">
                  Curabitur ligula felis, sodales et sagittis ut, accumsan id
                  enim."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                  alt="..."
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Some Person</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Verified Client
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Aenean faucibus odio at purus eleifend dictum.
                </h3>
                <p className="my-4">
                  "Fusce venenatis venenatis lacinia. Maecenas vehicula accumsan
                  vestibulum. Curabitur eu lorem in nisl laoreet aliquet sit
                  amet vel lacus. Aliquam rhoncus tortor at erat mattis, ut
                  gravida velit porttitor. Nulla pharetra sapien sapien, sit
                  amet iaculis lectus congue in.
                </p>
                <p className="my-4">
                  Suspendisse leo urna, congue vel viverra vitae, sagittis eu
                  nulla. Integer elementum urna nec turpis dignissim, a ornare
                  tellus porta!"
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                  alt="..."
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Some Person</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Verified Client
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Phasellus nec varius odio, sed vulputate urna
                </h3>
                <p className="my-4">
                  "Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
                <p className="my-4">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
                <p className="my-4">
                  Mauris molestie bibendum nibh eget sodales!"
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                  alt="..."
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Another Person</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Verified Client
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Aliquam tempus eu justo ut convallis
                </h3>
                <p className="my-4">
                  "Quisque nunc augue, pulvinar sit amet efficitur vel, egestas
                  sit amet orci. Fusce cursus nunc est, maximus lacinia dolor
                  tristique sit amet.
                </p>
                <p className="my-4">
                  Sed laoreet sem non justo accumsan imperdiet. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. "
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                  alt="..."
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Another Person</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Verified Client
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* <div>What is health coaching?</div>
      <div>What can it do for you?</div>
      <div>Testimonials</div> */}
    </div>
  );
};

export default Home;
