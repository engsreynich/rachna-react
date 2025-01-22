import React from 'react';

function About(props) {
    return (
         <>
         <div>
  {/* for student */}
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          For Students.
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Teachers in e-learning are responsible for designing and delivering
          engaging and interactive learning experiences, assessing student
          learning and progress, and providing feedback and support.
        </p>
      </div>
      <img
        className="w-full dark:hidden"
        src="./img/student.png"
        alt="dashboard image"
      />
      <img
        className="w-full hidden dark:block"
        src="./img/student.png"
        alt="dashboard image"
      />
    </div>
  </section>
  {/* For student */}
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img
        className="w-full dark:hidden"
        src="./img/instructor.png"
        alt="dashboard image"
      />
      <img
        className="w-full hidden dark:block"
        src="./img/instructor.png"
        alt="dashboard image"
      />
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          For Teacher.
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Teachers in e-learning are responsible for designing and delivering
          engaging and interactive learning experiences, assessing student
          learning and progress, and providing feedback and support.
        </p>
        <a
          href="#"
          className="uppercase inline-flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-600"
        >
          Get started
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
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
  {/* For content write */}
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          For Content Writer.
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Teachers in e-learning are responsible for designing and delivering
          engaging and interactive learning experiences, assessing student
          learning and progress, and providing feedback and support.
        </p>
        <a
          href="#"
          className="uppercase inline-flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-600"
        >
          Get started
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
            />
          </svg>
        </a>
      </div>
      <img
        className="w-full dark:hidden"
        src="./img/content-writer.png"
        alt="dashboard image"
      />
      <img
        className="w-full hidden dark:block"
        src="./img/content-writer.png"
        alt="dashboard image"
      />
    </div>
  </section>
  {/* For Globle forum */}
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img
        className="w-full dark:hidden"
        src="./img/forum.png"
        alt="dashboard image"
      />
      <img
        className="w-full hidden dark:block"
        src="./img/forum.png"
        alt="dashboard image"
      />
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          For Global Forum.
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Teachers in e-learning are responsible for designing and delivering
          engaging and interactive learning experiences, assessing student
          learning and progress, and providing feedback and support.
        </p>
        <a
          href="#"
          className="uppercase inline-flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-600"
        >
          Get started
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
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
  {/* Certificate Provider */}
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          For Global Forum.
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Teachers in e-learning are responsible for designing and delivering
          engaging and interactive learning experiences, assessing student
          learning and progress, and providing feedback and support.
        </p>
        <a
          href="#"
          className="uppercase inline-flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-600"
        >
          Get started
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
            />
          </svg>
        </a>
      </div>
      <img
        className="w-full dark:hidden"
        src="./img/certificate.png"
        alt="dashboard image"
      />
      <img
        className="w-full hidden dark:block"
        src="./img/certificate.png"
        alt="dashboard image"
      />
    </div>
  </section>





</div>

        </>

    );
};

export default About;