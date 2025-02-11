// import React from "react";

function About() {
  return (
    <>
      <div>
        {/* About Section component*/}
        <section className="flex flex-col lg:flex-row gap-6  dark:bg-gray-900  py-12 px-6">
          {/* Image and Story */}
          <div className="flex-1">
            <div
              className="relative rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
            >
              <img
                src="./img/home.jpg"
                alt="home"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">About Rachana</h3>
                <p className="text-sm mt-2">
                  We are a group of designer, creatives, and artists who create
                  a lot of design, templates, mockups, and more. The name
                  Rachana is of Sanskrit origin and generally means "creation"
                  or &quot;design.&quot; It signifies the act of creation or the
                  process of bringing something into existence.
                </p>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="flex-1 grid gap-6">
            <div
              className="bg-pink-200 p-6 rounded-lg shadow-lg"
              data-aos="fade-down"
            >
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-sm mt-2" data-aos="fade-left">
                To revolutionize user connections through innovative,
                user-centric website designs that are visually stunning,
                intuitive, and functional.
              </p>
            </div>
            <div
              className="bg-pink-500 p-6 rounded-lg shadow-lg text-white"
              data-aos="fade-up-right"
            >
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-sm mt-2">
                To empower brands with seamless digital experiences that foster
                growth, engagement, and distinction in the digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Teacher Section */}
        <section className="bg-white dark:bg-gray-900 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-8">Teacher</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div
                className="bg-white dark:bg-gray-950 w-[460px] h-[300px] flex flex-col shadow-lg items-center rounded-lg p-4"
                data-aos="fade-down-right"
              >
                <img
                  src="./img/Teacher.jpg"
                  alt="Teacher"
                  className="w-[200px] h-[200px] rounded-full object-cover mb-4"
                />
                <h3 className="font-bold text-lg dark:text-slate-100">
                  Instructor
                </h3>
                <p className="text-sm dark:text-slate-100">Meng Hann</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="bg-white dark:bg-gray-900 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-8">
              Team Members
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Leader */}
              <div
                className="bg-white dark:bg-gray-950 w-[300px] h-auto flex flex-col shadow-lg items-center rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                data-aos="zoom-in"
              >
                <img
                  src="./img/Srey Nich.jpg"
                  alt="Eng Sreynich"
                  className="w-[200px] h-[200px] rounded-full object-cover mb-4 border-4 border-pink-500"
                />
                <h3 className="font-bold text-lg text-gray-800 dark:text-slate-100">
                  Leader
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-100">
                  Eng Sreynich
                </p>
              </div>

              {/* Members */}
              {[
                {
                  name: "Oeng SiKeat",
                  role: "Member",
                  img: "./img/SiKeat.jpg",
                },
                {
                  name: "An BunKhim",
                  role: "Member",
                  img: "./img/BUNKHIM.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-950 w-[300px] h-auto flex flex-col shadow-lg items-center rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  data-aos="fade-up"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-[200px] h-[200px] rounded-full object-cover mb-4 border-4 border-pink-500"
                  />
                  <h3 className="font-bold text-lg text-gray-800 dark:text-slate-100">
                    {member.role}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-100">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
