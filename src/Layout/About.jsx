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

  <!-- Our Mentor-->
        <section class="py-12 px-6">
            <div class="max-w-7xl mx-auto  text-center">
                <h2 class="text-3xl font-bold text-pink-600">Our Mentor</h2>
                <div class="w-auto gap-24 shadow-lg p-14 ring-gray-100 flex flex-wrap justify-center">
                    <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                        <div class="relative bottom-[20px]">
                            <img src="./image/Cher Mey.jpg" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                        </div>
                        <div class="text-center">
                            <h3 class="font-bold">Teacher</h3>
                            <p class="pb-[10px]">Mom Reaksmey</p>
                        </div>
                    </div>
                    <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                        <div class="relative bottom-[20px]">
                            <img src="./image/Cher Leang.jpg" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                        </div>
                        <div class="text-center">
                            <h3 class="font-bold">Teacher</h3>
                            <p class="pb-[10px]">Ing Muyleang</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Team Members-->
  <section class="py-12 px-6">
            <div class="max-w-7xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-pink-600">Team Members</h2>
                <div class="w-auto gap-24 shadow-lg p-14 ring-gray-100 flex flex-wrap justify-center">
                    <!-- First Row (first 4 members) -->
                    <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                        <div class="relative bottom-[20px]">
                            <img src="./image/Son.jpg" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                        </div>
                        <div class="text-center">
                            <h3 class="font-bold">Leader</h3>
                            <p class="pb-[10px]">Nhanh Kimson</p>
                        </div>
                    </div>
                    <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                        <div class="relative bottom-[20px]">
                            <img src="./image/Houy.png" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                        </div>
                        <div class="text-center">
                            <h3 class="font-bold">Member</h3>
                            <p class="pb-[10px]">Bai Kimhouy</p>
                        </div>
                    </div>
                    <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                        <div class="relative bottom-[20px]">
                            <img src="./image/Panha.png" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                        </div>
                        <div class="text-center">
                            <h3 class="font-bold">Member</h3>
                            <p class="pb-[10px]">Thok Panha</p>
                        </div>
                    </div>
                    <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                        <div class="relative bottom-[20px]">
                            <img src="./image/Chhengngor.jpg" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                        </div>
                        <div class="text-center">
                            <h3 class="font-bold">Member</h3>
                            <p class="pb-[10px]">Phal Chhengngor</p>
                        </div>
                    </div>

                    <!-- Last Row - Centered (last 3 members) -->
                        <!-- Member 5 -->
                        <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                            <div class="relative bottom-[20px]">
                                <img src="./image/Na.jpg" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                            </div>
                            <div class="text-center">
                                <h3 class="font-bold">Member</h3>
                                <p class="pb-[10px]">Svay Sereyrathana</p>
                            </div>
                        </div>
                        <!-- Member 6 -->
                        <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                            <div class="relative bottom-[20px]">
                                <img src="./image/Nich.jpg" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                            </div>
                            <div class="text-center">
                                <h3 class="font-bold">Member</h3>
                                <p class="pb-[10px]">Phorn Sunnich</p>
                            </div>
                        </div>
                        <!-- Member 7 -->
                        <div class="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center m-4 rounded-lg">
                            <div class="relative bottom-[20px]">
                                <img src="./image/Srey Nich.jpg" alt="mentor" class="w-[100px] h-[100px] rounded-full object-fill">
                            </div>
                            <div class="text-center">
                                <h3 class="font-bold">Member</h3>
                                <p class="pb-[10px]">Eng Sreynich</p>
                            </div>
                        </div>
                </div>
            </div>
  </section>



</div>

        </>

    );
};

export default About;