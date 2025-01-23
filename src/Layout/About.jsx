import React from "react";

function About() {
  return (
    <>
      <div>
        {/* About Section component*/}
        <section className="flex flex-col lg:flex-row gap-6  dark:bg-gray-900  py-12 px-6">
          {/* Image and Story */}
          <div className="flex-1">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="./img/team.jpg"
                alt="Team meeting"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">About Rachana</h3>
                <p className="text-sm mt-2">
                  We are a group of designer, creatives, and artists who create
                  a lot of design, templates, mockups, and more. The name
                  Rachana is of Sanskrit origin and generally means "creation"
                  or "design." It signifies the act of creation or the process
                  of bringing something into existence.
                </p>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="flex-1 grid gap-6">
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-sm mt-2">
                To deliver innovative IT solutions that empower businesses.
              </p>
            </div>
            <div className="bg-pink-500 p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-sm mt-2">
                To lead in technology and shape a smarter, more connected
                future.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mentor Section */}
        <section className="bg-white dark:bg-gray-900 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-8">
              Our Mentor
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "Mom Reaksmey",
                  title: "Teacher",
                  img: "./img/Cher Mey.jpg",
                },
                {
                  name: "Ing Muyleang",
                  title: "Teacher",
                  img: "./img/Cher Leang.jpg",
                },
              ].map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white w-[160px] h-auto flex flex-col shadow-lg items-center rounded-lg p-4"
                >
                  <img
                    src={mentor.img}
                    alt="mentor"
                    className="w-[100px] h-[100px] rounded-full object-cover mb-4"
                  />
                  <h3 className="font-bold text-lg">{mentor.title}</h3>
                  <p className="text-sm">{mentor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="bg-white dark:bg-gray-900 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-8">
              Team Members
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {/* First row: Single box, centered */}
              <div className="col-span-3 flex justify-center">
                <div className="bg-white w-full sm:w-auto h-auto flex flex-col shadow-lg items-center rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src="./img/Son copy.jpg"
                    alt="Nhanh Kimson"
                    className="w-[120px] h-[120px] rounded-full object-cover mb-4 border-4 border-pink-500"
                  />
                  <h3 className="font-bold text-lg text-gray-800">Leader</h3>
                  <p className="text-sm text-gray-600">Nhanh Kimson</p>
                </div>
              </div>

              {/* Second row: Three boxes */}
              {[
                {
                  name: "Eng Sreynich",
                  role: "Member",
                  img: "./img/Srey Nich.jpg",
                },
                {
                  name: "Svay Sereyrathana",
                  role: "Member",
                  img: "./img/Na.jpg",
                },
                { name: "Bai Kimhouy", role: "Member", img: "./img/Houy.png" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white w-full h-auto flex flex-col shadow-lg items-center rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-[120px] h-[120px] rounded-full object-cover mb-4 border-4 border-pink-500"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {member.role}
                  </h3>
                  <p className="text-sm text-gray-600">{member.name}</p>
                </div>
              ))}

              {/* Third row: Three boxes */}
              {[
                { name: "Thok Panha", role: "Member", img: "./img/Panha.png" },
                {
                  name: "Phal Chhengngor",
                  role: "Member",
                  img: "./img/Chhengngor.jpg",
                },
                {
                  name: "Phorn Sunnich",
                  role: "Member",
                  img: "./img/Nich.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white w-full h-auto flex flex-col shadow-lg items-center rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-[120px] h-[120px] rounded-full object-cover mb-4 border-4 border-pink-500"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {member.role}
                  </h3>
                  <p className="text-sm text-gray-600">{member.name}</p>
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
