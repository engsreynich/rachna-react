import React, { useState } from "react";

function Component(props) {
  const [copiedStates, setCopiedStates] = useState({});

  // Function to handle copying code
  const handleCopy = (code, id) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => {
          setCopiedStates((prev) => ({ ...prev, [id]: false }));
        }, 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-950 py-6 flex justify-center">
      <div className="container flex justify-center gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 hidden sm:block">
          <nav className="space-y-4">
            <a href="#Buttons" className="block text-pink-600 font-semibold">
              Buttons
            </a>
            <a href="#Inputs" className="block hover:text-pink-600">
              Inputs
            </a>
            <a href="#Sidebars" className="block hover:text-pink-600">
              Sidebars
            </a>
            <a href="#Navigation" className="block hover:text-pink-600">
              Navigation
            </a>
          </nav>
        </aside>
        <main className="px-1 sm:px-0 w-[100%] sm:w-3/4">
          {/* text */}
          <div className="p-6">
            <h1 id="Button" className="text-pink-600 font-bold text-[36px]">
              Tailwind CSS Button-Rachna
            </h1>
            <p className="mt-4 mb-4 text-gray-600 dark:text-white">
              Use the button component inside forms, as links, social login,
              payment options wi
              th support for multiple styles, colors,
              gradients, and shadows
            </p>
          </div>
          <hr />
          {/* button */}
          <section className="p-6">
            <div className="p-6 mt-8">
              <h4 className="text-pink-600 font-bold text-xl">
                Default button
              </h4>
              <p className="dark:text-white">
                Use these default button styles with multiple colors to indicate
                an action or link within your website
              </p>
            </div>
            {/* box put button */}
            <div className="bg-white dark:bg-gray-900 rounded-lg  shadow-lg mb-6">
              {/* head box */}
              <div className="flex bg-gray-100 dark:bg-gray-900 rounded justify-between border-b p-4">
                <button className="flex rounded-lg bg-white dark:bg-slate-900 px-2 py-1 items-center space-x-2 text-gray-600 dark:text-slate-100 hover:text-gray-800">
                  <img
                    src="https://img.icons8.com/ios-glyphs/24/github.png"
                    alt="GitHub Icon"
                  />
                  <small>Edit on GitHub</small>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fa-solid fa-circle-half-stroke" />
                </button>
              </div>
              {/* button default */}
              <div className="bg-white-100 p-10">
                {/* place set responsive */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-6">
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-yellow-600 px-[20px] py-[10px] rounded-lg hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 dark:focus:bg-yellow-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-blue-600  px-[20px] py-[10px] rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 dark:focus:bg-blue-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-green-600  px-[20px] py-[10px] rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 dark:focus:bg-green-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-red-600  px-[20px] py-[10px] rounded-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700 dark:focus:bg-red-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-orange-600  px-[20px] py-[10px] rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300d ark:focus:ring-orange-700 dark:focus:bg-orange-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-fuchsia-600  px-[20px] py-[10px] rounded-lg hover:bg-fuchsia-800 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:focus:ring-fuchsia-700 dark:focus:bg-fuchsia-800"
                  >
                    Button
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                  <span className="text-black font-medium">HTML</span>
                  <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
<button type="button" class="text-white text-xs font-medium bg-yellow-600 px-[20px] py-[10px] rounded-lg hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 dark:focus:bg-yellow-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-blue-600 px-[20px] py-[10px] rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 dark:focus:bg-blue-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-green-600 px-[20px] py-[10px] rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 dark:focus:bg-green-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-red-600 px-[20px] py-[10px] rounded-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700 dark:focus:bg-red-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-orange-600 px-[20px] py-[10px] rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700 dark:focus:bg-orange-800">Button</button>
      `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                {/* code tailwind for each button */}
                <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                  <pre className="text-xs whitespace-pre leading-tight pl-0">
                    {"                       "}
                    <code>
                      {"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-yellow-600
                      px-[20px] py-[10px] rounded-lg hover:bg-yellow-800
                      focus:outline-none focus:ring-4 focus:ring-yellow-300
                      dark:focus:ring-yellow-700
                      dark:focus:bg-yellow-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-blue-600{"  "}
                      px-[20px] py-[10px] rounded-lg hover:bg-blue-800
                      focus:outline-none focus:ring-4 focus:ring-blue-300
                      dark:focus:ring-blue-700
                      dark:focus:bg-blue-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-green-600{"  "}
                      px-[20px] py-[10px] rounded-lg hover:bg-green-800
                      focus:outline-none focus:ring-4 focus:ring-green-300
                      dark:focus:ring-green-700
                      dark:focus:bg-green-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-red-600{"  "}
                      px-[20px] py-[10px] rounded-lg hover:bg-red-800
                      focus:outline-none focus:ring-4 focus:ring-red-300
                      dark:focus:ring-red-700
                      dark:focus:bg-red-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-orange-600{"  "}
                      px-[20px] py-[10px] rounded-lg hover:bg-orange-800
                      focus:outline-none focus:ring-4 focus:ring-orange-300d
                      ark:focus:ring-orange-700
                      dark:focus:bg-orange-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                       "}
                    </code>
                    {"     "}
                    {"\n"}
                    {"                    "}
                  </pre>
                </div>
              </div>
            </div>
          </section>
          {/*Button pills*/}
          <section className="p-6 ">
            <div>
              <h4 className="text-pink-600 font-bold text-xl">Button pills</h4>
              <p className="dark:text-white">
                The button pills can be used as an alternative style by using
                fully rounded edges.
              </p>
            </div>
            {/* box put button */}
            <div className="bg-white shadow-md rounded-lg mt-8">
              {/* head box */}
              <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                  <img
                    src="https://img.icons8.com/ios-glyphs/24/github.png"
                    alt="GitHub Icon"
                  />
                  <small>Edit on GitHub</small>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fa-solid fa-circle-half-stroke" />
                </button>
              </div>
              {/* Button pills */}
              <div className="bg-white-100 p-10">
                {/* place set responsive */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-6">
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-yellow-600 px-[30px] py-[10px] rounded-full hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 dark:focus:bg-yellow-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-blue-600 px-[30px] py-[10px] rounded-full hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 dark:focus:bg-blue-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-green-600 px-[30px] py-[10px] rounded-full hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 dark:focus:bg-green-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-red-600 px-[30px] py-[10px] rounded-full hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700 dark:focus:bg-red-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-orange-600 px-[30px] py-[10px] rounded-full hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300dark:focus:ring-orange-700 dark:focus:bg-orange-800"
                  >
                    Button
                  </button>
                  <button className="text-white text-xs font-medium bg-fuchsia-600 px-[30px] py-[10px] rounded-full hover:bg-fuchsia-800 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:focus:ring-fuchsia-700 dark:focus:bg-fuchsia-800">
                    Button
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                  <span className="text-black font-medium">HTML</span>
                  <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-yellow-600 px-[30px] py-[10px] rounded-full hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 dark:focus:bg-yellow-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-blue-600 px-[30px] py-[10px] rounded-full hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 dark:focus:bg-blue-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-green-600 px-[30px] py-[10px] rounded-full hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 dark:focus:bg-green-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-red-600 px-[30px] py-[10px] rounded-full hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700 dark:focus:bg-red-800"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-white text-xs font-medium bg-orange-600 px-[30px] py-[10px] rounded-full hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300dark:focus:ring-orange-700 dark:focus:bg-orange-800"
                  >
                    Button
                  </button>
                  <button className="text-white text-xs font-medium bg-fuchsia-600 px-[30px] py-[10px] rounded-full hover:bg-fuchsia-800 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:focus:ring-fuchsia-700 dark:focus:bg-fuchsia-800">
                    Button
                  </button>
      `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>

                {/* code tailwind for each button */}
                <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                  <pre className="text-xs whitespace-pre leading-tight pl-0">
                    {"                       "}
                    <code>
                      {"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-yellow-600
                      px-[30px] py-[10px] rounded-full hover:bg-yellow-800
                      focus:outline-none focus:ring-4 focus:ring-yellow-300
                      dark:focus:ring-yellow-700
                      dark:focus:bg-yellow-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-blue-600{"  "}
                      px-[30px] py-[10px] rounded-full hover:bg-blue-800
                      focus:outline-none focus:ring-4 focus:ring-blue-300
                      dark:focus:ring-blue-700
                      dark:focus:bg-blue-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-green-600{"  "}
                      px-[30px] py-[10px] rounded-full hover:bg-green-800
                      focus:outline-none focus:ring-4 focus:ring-green-300
                      dark:focus:ring-green-700
                      dark:focus:bg-green-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-red-600{"  "}
                      px-[30px] py-[10px] rounded-full hover:bg-red-800
                      focus:outline-none focus:ring-4 focus:ring-red-300
                      dark:focus:ring-red-700
                      dark:focus:bg-red-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-orange-600{"  "}
                      px-[30px] py-[10px] rounded-full hover:bg-orange-800
                      focus:outline-none focus:ring-4 focus:ring-orange-300d
                      ark:focus:ring-orange-700
                      dark:focus:bg-orange-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                    "}&lt;button type="button"
                      class="text-white text-xs font-medium bg-fuchsia-600{"  "}
                      px-[30px] py-[10px] rounded-full hover:bg-fuchsia-800
                      focus:outline-none focus:ring-4 focus:ring-fuchsia-300
                      dark:focus:ring-fuchsia-700
                      dark:focus:bg-fuchsia-800"&gt;Button&lt;/button&gt;{"\n"}
                      {"                       "}
                    </code>
                    {"     "}
                    {"\n"}
                    {"                    "}
                  </pre>
                </div>
              </div>
            </div>
          </section>
          {/* Gradient monochrome */}
          <section className="p-6 mt-10">
            <div>
              <h4 className="text-pink-600 font-bold text-xl">
                Gradient monochrome
              </h4>
              <p className="dark:text-white">
                These beautifully colored buttons built with the gradient color
                stops utility classes from Tailwind CSS can be used as a
                creative alternative to the default button styles.
              </p>
            </div>
            {/* box put button */}
            <div className="bg-white shadow-md rounded-lg mt-8">
              {/* head box */}
              <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                  <img
                    src="https://img.icons8.com/ios-glyphs/24/github.png"
                    alt="GitHub Icon"
                  />
                  <small>Edit on GitHub</small>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fa-solid fa-circle-half-stroke" />
                </button>
              </div>
              {/* Gradient monochrome */}
              
              <div className="bg-white-100 p-10">
                {/* place set responsive */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-6">
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-blue-500 via-orange-300 to-green-500 px-[40px] py-[10px] rounded-lg hover:from-blue-500 hover:to-green-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-orange-600 "
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-fuchsia-500 via-gray-300 to-yellow-500 px-[40px] py-[10px] rounded-lg hover:from-fuchsia-500 hover:to-yellow-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-gray-600"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-purple-500 via-sky-300 to-rose-500 px-[40px] py-[10px] rounded-lg hover:from-purple-500 hover:to-rose-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-sky-600"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-orange-500 via-green-300 to-red-500 px-[40px] py-[10px] rounded-lg hover:from-orange-500 hover:to-red-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-green-600"
                  >
                    Button
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                  <span className="text-black font-medium">HTML</span>
                  <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-blue-500 via-orange-300 to-green-500 px-[40px] py-[10px] rounded-lg hover:from-blue-500 hover:to-green-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-orange-600 "
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-fuchsia-500 via-gray-300 to-yellow-500 px-[40px] py-[10px] rounded-lg hover:from-fuchsia-500 hover:to-yellow-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-gray-600"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-purple-500 via-sky-300 to-rose-500 px-[40px] py-[10px] rounded-lg hover:from-purple-500 hover:to-rose-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-sky-600"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="text-black text-xs font-medium bg-gradient-to-r from-orange-500 via-green-300 to-red-500 px-[40px] py-[10px] rounded-lg hover:from-orange-500 hover:to-red-300 hover:text-white focus:shadow-xl dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-green-600"
                  >
                    Button
                  </button>      `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                {/* code tailwind for each button */}
                <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                  <pre className="text-xs whitespace-pre leading-tight pl-0">
                    {"                     "}
                    <code>
                      {"\n"}
                      {"                      "}&lt;button type="button"
                      class="text-black text-xs font-medium bg-gradient-to-r
                      from-blue-500 via-orange-300 to-green-500 px-[40px]
                      py-[10px] rounded-lg hover:from-blue-500
                      hover:to-green-300 hover:text-white focus:shadow-xl
                      dark:focus:outline-none dark:focus:ring-4
                      dark:focus:ring-orange-600 "&gt;Button&lt;/button&gt;
                      {"\n"}
                      {"                      "}&lt;button type="button"
                      class="text-black text-xs font-medium bg-gradient-to-r
                      from-fuchsia-500 via-gray-300 to-yellow-500 px-[40px]
                      py-[10px] rounded-lg hover:from-fuchsia-500
                      hover:to-yellow-300 hover:text-white focus:shadow-xl
                      dark:focus:outline-none dark:focus:ring-4
                      dark:focus:ring-gray-600"&gt;Button&lt;/button&gt;{"\n"}
                      {"                      "}&lt;button type="button"
                      class="text-black text-xs font-medium bg-gradient-to-r
                      from-purple-500 via-sky-300 to-rose-500 px-[40px]
                      py-[10px] rounded-lg hover:from-purple-500
                      hover:to-rose-300 hover:text-white focus:shadow-xl
                      dark:focus:outline-none dark:focus:ring-4
                      dark:focus:ring-sky-600"&gt;Button&lt;/button&gt;{"\n"}
                      {"                      "}&lt;button type="button"
                      class="text-black text-xs font-medium bg-gradient-to-r
                      from-orange-500 via-green-300 to-red-500 px-[40px]
                      py-[10px] rounded-lg hover:from-orange-500
                      hover:to-red-300 hover:text-white focus:shadow-xl
                      dark:focus:outline-none dark:focus:ring-4
                      dark:focus:ring-green-600"&gt;Button&lt;/button&gt;{"\n"}
                      {"                     "}
                    </code>
                    {"     "}
                    {"\n"}
                    {"                  "}
                  </pre>
                </div>
              </div>
            </div>
          </section>
          {/* Social buttons */}
          <section className="p-6 mt-10">
            <div>
              <h4 className="text-pink-600 font-bold text-xl">
                Social buttons
              </h4>
              <p className="dark:text-white">
                Use these button styles when building social media login forms
                using Facebook, GitHub, and Apple. These buttons use the new
                bg-[#hex] utility classes from Tailwind CSS v3.0.
              </p>
            </div>
            {/* box put button */}
            <div className="bg-white shadow-md rounded-lg mt-8">
              {/* head box */}
              <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                  <img
                    src="https://img.icons8.com/ios-glyphs/24/github.png"
                    alt="GitHub Icon"
                  />
                  <small>Edit on GitHub</small>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fa-solid fa-circle-half-stroke" />
                </button>
              </div>
              {/* Social buttons */}
              <div className="bg-white-100 py-10 px-10">
                {/* place set responsive */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-6">
                  <button
                    type="button"
                    className="flex justify-around text-sm bg-white ring-1 ring-gray-200 items-center p-[10px] rounded-lg font-medium hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:bg-blue-300 dark:focus:bg-blue-300 dark:focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#1030cb"
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                      />
                    </svg>
                    Sign in with Facebook
                  </button>
                  <button
                    type="button"
                    className="flex justify-around text-sm bg-white ring-1 ring-gray-200 items-center py-[10px] px-[20px] rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:bg-blue-300 dark:focus:bg-blue-300 dark:focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 384 512"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    Sign in with Apple
                  </button>
                  <button
                    type="button"
                    className="flex justify-around text-sm bg-white ring-1 ring-gray-200 items-center py-[10px] px-[20px] rounded-lg font-medium hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-black dark:bg-blue-300 dark:focus:bg-blue-300 dark:focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    Sign in with Github
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                  <span className="text-black font-medium">HTML</span>
                  <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                  <button
                    type="button"
                    className="flex justify-around text-sm bg-white ring-1 ring-gray-200 items-center p-[10px] rounded-lg font-medium hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:bg-blue-300 dark:focus:bg-blue-300 dark:focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#1030cb"
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                      />
                    </svg>
                    Sign in with Facebook
                  </button>
                  <button
                    type="button"
                    className="flex justify-around text-sm bg-white ring-1 ring-gray-200 items-center py-[10px] px-[20px] rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:bg-blue-300 dark:focus:bg-blue-300 dark:focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 384 512"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    Sign in with Apple
                  </button>
                  <button
                    type="button"
                    className="flex justify-around text-sm bg-white ring-1 ring-gray-200 items-center py-[10px] px-[20px] rounded-lg font-medium hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-black dark:bg-blue-300 dark:focus:bg-blue-300 dark:focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    Sign in with Github
                  </button>
                        `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                  <pre className="text-xs whitespace-pre leading-tight pl-0">
                    {"                         "}
                    <code>
                      {"\n"}
                      {"                          "}&lt;button type="button"
                      class="flex justify-around text-sm bg-white ring-1
                      ring-gray-200 items-center p-[10px] rounded-lg font-medium
                      hover:bg-blue-100 focus:outline-none focus:ring-4
                      focus:ring-blue-400 dark:bg-blue-300
                      dark:focus:bg-blue-300 dark:focus:ring-white"&gt;{"\n"}
                      {"                        "}&lt;svg
                      xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2"
                      viewBox="0 0 512 512"&gt;{"\n"}
                      {"                        "}&lt;path fill="#1030cb"
                      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376
                      82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1
                      39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7
                      6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2
                      57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9
                      512 256h0z"/&gt;&lt;/svg&gt;Sign in with
                      Facebook&lt;/button&gt;{"\n"}
                      {"                          "}&lt;button type="button"
                      class="flex justify-around text-sm bg-white ring-1
                      ring-gray-200 items-center py-[10px] px-[20px] rounded-lg
                      font-medium hover:bg-gray-100 focus:outline-none
                      focus:ring-4 focus:ring-gray-400 dark:bg-blue-300
                      dark:focus:bg-blue-300 dark:focus:ring-white"&gt;{"\n"}
                      {"                        "}&lt;svg
                      xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2"
                      viewBox="0 0 384 512"&gt;{"\n"}
                      {"                        "}&lt;path d="M318.7
                      268.7c-.2-36.7 16.4-64.4
                      50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3
                      20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8
                      4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2
                      25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9
                      48.6-.7 90.4-82.5
                      102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4
                      24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5
                      19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4
                      69.5-34.3z"/&gt;&lt;/svg&gt;Sign in with
                      Apple&lt;/button&gt;{"\n"}
                      {"                          "}&lt;button{"  "}
                      type="button" class="flex justify-around text-sm bg-white
                      ring-1 ring-gray-200 items-center py-[10px] px-[20px]
                      rounded-lg font-medium hover:bg-slate-600 hover:text-white
                      focus:outline-none focus:ring-4 focus:ring-black
                      dark:bg-blue-300 dark:focus:bg-blue-300
                      dark:focus:ring-white"&gt;{"\n"}
                      {"                        "}&lt;svg
                      xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2"
                      viewBox="0 0 496 512"&gt;{"\n"}
                      {"                        "}&lt;path d="M165.9 397.4c0
                      2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6
                      5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3
                      4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2
                      2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6
                      2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1
                      8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3
                      17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70
                      15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7
                      1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9
                      20.9 2.3-16 8.8-27.1
                      16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3
                      23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27
                      20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6
                      69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8
                      58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4
                      0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2
                      457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2
                      352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1
                      1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3
                      2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7
                      .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6
                      1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3
                      .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6
                      1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9
                      0-6.2-1.4-2.3-4-3.3-5.6-2z"/&gt;&lt;/svg&gt;Sign in with
                      Github&lt;/button&gt;{"\n"}
                      {"                         "}
                    </code>
                    {"     "}
                    {"\n"}
                    {"                      "}
                  </pre>
                </div>
              </div>
            </div>
          </section>
          {/* Button with icon */}

          <section className="p-6 mt-10">
            <div>
              <h4 className="text-pink-600 font-bold text-xl">
                Button with icon
              </h4>
              <p className="text-slate-900 dark:text-white">
                Use the following examples to add a SVG icon inside the button
                either on the left.
              </p>
            </div>
            {/* box put button */}
            <div className="bg-white shadow-md rounded-lg mt-8">
              {/* head box */}
              <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                  <img
                    src="https://img.icons8.com/ios-glyphs/24/github.png"
                    alt="GitHub Icon"
                  />
                  <small>Edit on GitHub</small>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fa-solid fa-circle-half-stroke" />
                </button>
              </div>
              {/* Button with icon */}
              <div className="bg-white-100 py-10 px-10">
                {/* place set responsive */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-6">
                  <button className="flex justify-around items-center font-medium bg-fuchsia-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-fuchsia-600 group focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                      />
                    </svg>
                    Share
                  </button>
                  <button className="flex justify-around items-center font-medium bg-red-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-red-600 group focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a1 1 0 00-.894.553L6.382 4H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0012 2H8zm2 5a1 1 0 011 1v6a1 1 0 11-2 0V8a1 1 0 011-1zm-3 1a1 1 0 011 1v6a1 1 0 11-2 0V8a1 1 0 011-1zm8 1a1 1 0 10-2 0v6a1 1 0 102 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                  <button className="flex justify-around items-center font-medium bg-blue-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-blue-600 group focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download
                  </button>
                  <button className="flex justify-around items-center font-medium bg-yellow-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-yellow-600 group focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Warning
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                  <span className="text-black font-medium">HTML</span>
                  <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                    <button className="flex justify-around items-center font-medium bg-fuchsia-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-fuchsia-600 group focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                      />
                    </svg>
                    Share
                  </button>
                  <button className="flex justify-around items-center font-medium bg-red-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-red-600 group focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a1 1 0 00-.894.553L6.382 4H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0012 2H8zm2 5a1 1 0 011 1v6a1 1 0 11-2 0V8a1 1 0 011-1zm-3 1a1 1 0 011 1v6a1 1 0 11-2 0V8a1 1 0 011-1zm8 1a1 1 0 10-2 0v6a1 1 0 102 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                  <button className="flex justify-around items-center font-medium bg-blue-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-blue-600 group focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download
                  </button>
                  <button className="flex justify-around items-center font-medium bg-yellow-500 text-black py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-yellow-600 group focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-black group-hover:text-white transition-colors"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Warning
                  </button>
                        `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                  <pre className="text-xs whitespace-pre leading-tight text-left pl-0">
                    {"                       "}
                    <code>
                      {"\n"}
                      {"                        "}&lt;button type="button"
                      class="flex justify-around items-center font-medium
                      bg-fuchsia-500 text-black py-[10px] px-[20px] rounded-lg
                      hover:text-white hover:bg-fuchsia-600 group
                      focus:outline-none focus:ring-4 focus:ring-fuchsia-300
                      dark:focus:ring-fuchsia-800"&gt;{"\n"}
                      {"                          "}&lt;svg
                      xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2
                      text-black group-hover:text-white transition-colors"
                      viewBox="0 0 448 512" fill="currentColor"&gt;{"\n"}
                      {"                          "}&lt;path fill-rule="evenodd"
                      clip-rule="evenodd" d="M352 224c53 0 96-43
                      96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1
                      47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96
                      96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7
                      11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9
                      0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8
                      .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352
                      224z"/&gt;&lt;/svg&gt;Share &lt;/button&gt;
                      {"\n"}
                      {"                        "}&lt;button type="button"
                      class="flex justify-around items-center font-medium
                      bg-red-500 text-black py-[10px] px-[20px] rounded-lg
                      hover:text-white hover:bg-red-600 group focus:outline-none
                      focus:ring-4 focus:ring-red-300
                      dark:focus:ring-red-800"&gt;{"\n"}
                      {"                          "}&lt;svg
                      xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2
                      text-black group-hover:text-white transition-colors"
                      viewBox="0 0 20 20" fill="currentColor"&gt;{"\n"}
                      {"                          "}&lt;pathv
                      fill-rule="evenodd" d="M8 2a1 1 0 00-.894.553L6.382 4H3a1
                      1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0
                      100-2h-3.382l-.724-1.447A1 1 0 0012 2H8zm2 5a1 1 0 011
                      1v6a1 1 0 11-2 0V8a1 1 0 011-1zm-3 1a1 1 0 011 1v6a1 1 0
                      11-2 0V8a1 1 0 011-1zm8 1a1 1 0 10-2 0v6a1 1 0 102 0V8z"
                      clip-rule="evenodd"/&gt;&lt;/svg&gt;Delete&lt;/button&gt;
                      {"\n"}
                      {"                        "}&lt;button type="button"
                      class="flex justify-around items-center font-medium
                      bg-blue-500 text-black py-[10px] px-[20px] rounded-lg
                      hover:text-white hover:bg-blue-600 group
                      focus:outline-none focus:ring-4 focus:ring-blue-300
                      dark:focus:ring-blue-800"&gt;{"\n"}
                      {"                          "}&lt;svg
                      xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2
                      text-black group-hover:text-white transition-colors"
                      viewBox="0 0 512 512" fill="currentColor"&gt;{"\n"}
                      {"                          "}&lt;path fill-rule="evenodd"
                      d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0
                      242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0
                      45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5
                      12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64
                      352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384
                      0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5
                      0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368
                      56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                      clip-rule="evenodd"/&gt;&lt;/svg&gt;Download&lt;/button&gt;
                      {"\n"}
                      {"                        "}&lt;button type="button"
                      class="flex justify-around items-center font-medium
                      bg-yellow-500 text-black py-[10px] px-[20px] rounded-lg
                      hover:text-white hover:bg-yellow-600 group
                      focus:outline-none focus:ring-4 focus:ring-yellow-300
                      dark:focus:ring-yellow-800"&gt;{"\n"}
                      {"                          "}&lt;svg
                      xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2
                      text-black group-hover:text-white transition-colors"
                      viewBox="0 0 512 512" fill="currentColor"&gt;{"\n"}
                      {"                          "}&lt;path fill-rule="evenodd"
                      d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3
                      27.7 .2 40.1S486.3 480 472 480L40 480c-14.3
                      0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5
                      241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3
                      10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32
                      224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                      clip-rule="evenodd"/&gt;&lt;/svg&gt;Warning&lt;/button&gt;
                      {"                    "}
                      {"\n"}
                      {"                      "}
                    </code>
                    {"     "}
                    {"\n"}
                    {"                    "}
                  </pre>
                </div>
              </div>
            </div>
          </section>
          <>
            <h1
              id="Inputs"
              className="text-[36px] mt-10 font-extrabold px-6 text-pink-600"
            >
              Tailwind CSS Inputs - Rachna
            </h1>
            <p className="text-gray-500 mt-2 text-[18px] px-6 font-medium">
              Use the search input component as a text field to allow users to
              enter search queries and receive relevant page results available
              in multiple styles and sizes
            </p>
            <hr className="my-4" />
            <div className="container mx-auto px-6">
              {/* Header Section */}
              <header className="mb-6">
                <h1 className="text-[24px] font-bold text-pink-600">
                  Search Box
                </h1>
                <p className="text-gray-500 mt-1 text-[18px] font-medium">
                  Get started with the default example of a search input
                  component.
                </p>
              </header>
              {/* Content Area */}
              <div className="bg-white shadow-md rounded-lg">
                {/* Toolbar */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* Input */}
                <div className="flex p-4">
                  {/* Search Box */}
                  <aside className="w-1/4 mt-6 mx-auto">
                    <div className="flex items-center justify-center py-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="px-4 py-2 w-64 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-blue-500 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10 18l6 6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                  <span className="text-black font-medium">HTML</span>
                  <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                <div className="flex p-4">
                  {/* Search Box */}
                  <aside className="w-1/4 mt-6 mx-auto">
                    <div className="flex items-center justify-center py-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="px-4 py-2 w-64 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-blue-500 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10 18l6 6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </aside>
                </div>
                        `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                {/* Content */}
                <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                  <pre className="text-xs whitespace-pre leading-tight mx-auto pl-0">
                    {"                        "}
                    <code>
                      {"\n"}
                      {"                          "}&lt;div class="flex p-4"&gt;
                      {"\n"}
                      {"                          "}&lt;aside class="w-1/4 mt-6
                      mx-auto"&gt;{"\n"}
                      {"                          "}&lt;div class="flex
                      items-center justify-center py-4"&gt;{"\n"}
                      {"                          "}&lt;div class="relative"&gt;
                      {"\n"}
                      {"                          "}&lt;input{"\n"}
                      {"                                "}type="text"{"\n"}
                      {"                                "}
                      placeholder="Search..."{"\n"}
                      {"                                "}class="px-4 py-2 w-64
                      border rounded-lg focus:outline-none focus:ring-2
                      focus:ring-blue-500"
                      {"\n"}
                      {"                              "}/&gt;{"\n"}
                      {"                              "}&lt;button{"\n"}
                      {"                                "}class="absolute
                      right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-blue-500
                      focus:outline-none"
                      {"\n"}
                      {"                              "}&gt;{"\n"}
                      {"                              "}&lt;svg{"\n"}
                      {"                                  "}
                      xmlns="http://www.w3.org/2000/svg"{"\n"}
                      {"                                  "}width="20"{"\n"}
                      {"                                  "}height="20"{"\n"}
                      {"                                  "}fill="none"{"\n"}
                      {"                                  "}viewBox="0 0 24 24"
                      {"\n"}
                      {"                                  "}
                      stroke="currentColor"{"\n"}
                      {"                                "}&gt;{"\n"}
                      {"                                "}&lt;path{"\n"}
                      {"                                    "}
                      stroke-linecap="round"{"\n"}
                      {"                                    "}
                      stroke-linejoin="round"
                      {"\n"}
                      {"                                    "}stroke-width="2"
                      {"\n"}
                      {"                                    "}d="M10 18a8 8 0 1
                      0 0-16 8 8 0 0 0 0 16zM10 18l6 6"{"\n"}
                      {"                                  "}/&gt;{"\n"}
                      {"                                  "}&lt;/svg&gt;{"\n"}
                      {"                                  "}&lt;/button&gt;
                      {"\n"}
                      {"                                  "}&lt;/div&gt;{"\n"}
                      {"                                  "}&lt;/div&gt;{"\n"}
                      {"                                  "}&lt;/aside&gt;{"\n"}
                      {"                                  "}&lt;/div&gt;{"\n"}
                      {"                    "}
                    </code>
                    {"\n"}
                    {"                "}
                  </pre>
                </div>
              </div>
            </div>

            {/* Input label */}
            <div className="container mx-auto p-6">
              {/* Header Section */}
              <header className="mb-6">
                <h1 className="text-[24px] font-bold text-pink-600 ">
                  Input Username
                </h1>
                <p className="text-gray-500 mt-1 text-[18px] font-medium">
                  Basic Input for Username.
                </p>
              </header>
              {/* Content Area */}
              <div className="bg-white shadow-md rounded-lg">
                {/* Toolbar */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* Input */}
                <div className="flex flex-col p-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 w-2/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                  <span className="text-black font-medium">HTML</span>
                  <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                  <div className="flex flex-col p-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 w-2/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>      
                `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                {/* Content */}
                <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                  <pre className="text-xs whitespace-pre leading-tight pl-0 mx-auto">
                    {"                        "}
                    <code>
                      {"\n"}
                      {"                          "}&lt;div class="flex flex-col
                      p-4"&gt;
                      {"\n"}
                      {"                          "}&lt;label for="username"
                      class="block text-sm font-medium text-gray-700"{"\n"}
                      {"                         "}&gt;Username&lt;/label&gt;
                      {"\n"}
                      {"                         "}&lt;input{"\n"}
                      {"                         "}type="text"{"\n"}
                      {"                         "}id="username"{"\n"}
                      {"                         "}name="username"{"\n"}
                      {"                         "}class="mt-1 w-2/4 px-3 py-2
                      border border-gray-300 rounded-md shadow-sm
                      focus:outline-none focus:ring-indigo-500
                      focus:border-indigo-500 sm:text-sm"/&gt;{"\n"}
                      {"                         "}&lt;/div&gt;{"\n"}
                      {"                         "}&lt;/div&gt;{"\n"}
                      {"                         "}&lt;div class="bg-white
                      rounded-lg shadow-sm"&gt;{"\n"}
                      {"                         "}&lt;div class="bg-gray-300
                      flex justify-between items-center px-4 py-2 border-b
                      border-gray-300"&gt;
                      {"\n"}
                      {"                         "}&lt;span class="text-black
                      font-medium"&gt;HTML &lt;/span&gt;{"\n"}
                      {"                         "}&lt;button class="flex
                      items-center space-x-1 text-black hover:text-gray-800"&gt;
                      {"\n"}
                      {"                         "}&lt;i class="fa-solid
                      fa-copy"&gt;
                      {"\n"}
                      {"                         "}&lt;span&gt;Copy
                      &lt;/span&gt;{"\n"}
                      {"                         "}&lt;/button&gt;{"\n"}
                      {"                         "}&lt;/div&gt;{"\n"}
                      {"                        "}
                    </code>
                    {"\n"}
                    {"              "}
                  </pre>
                </div>
              </div>
            </div>
            {/* Input url */}
            <div className="container mx-auto p-6">
              {/* Header Section */}
              <header className="mb-6">
                <h1 className="text-[24px] font-bold text-pink-600">
                  Input Url
                </h1>
                <p className="text-gray-500 mt-1 text-[18px] font-medium">
                  Basic Input Website Url.
                </p>
              </header>
              {/* Content Area */}
              <div className="bg-white shadow-md rounded-lg">
                {/* Toolbar */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* Input */}
                <div className="container mx-auto p-6">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website URL
                  </label>
                  <input
                    id="url"
                    type="url"
                    className="mt-1 block w-2/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="https://example.com"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                  <div className="container mx-auto p-6">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website URL
                  </label>
                  <input
                    id="url"
                    type="url"
                    className="mt-1 block w-2/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="https://example.com"
                  />
                </div>      `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  </div>
                  {/* Content */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="text-xs whitespace-pre leading-tight pl-0">
                      {"                        "}
                      <code>
                        {"\n"}
                        {"                          "}&lt;div class="container
                        mx-auto p-6"&gt;{"\n"}
                        {"                          "}&lt;label for="url"
                        class="block text-sm font-medium
                        text-gray-700"&gt;Website URL&lt;/label&gt;
                        {"\n"}
                        {"                          "}&lt;input id="url"
                        type="url" class="mt-1 block w-2/4 px-3 py-2 border
                        border-gray-300 rounded-md shadow-sm focus:outline-none
                        focus:ring-2 focus:ring-indigo-500
                        focus:border-indigo-500"
                        placeholder="https://example.com" /&gt;{"\n"}
                        {"                    "}
                      </code>
                      {"\n"}
                      {"              "}
                    </pre>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="px-6">
              <h1
                id="Navigation"
                className="text-pink-600  font-bold text-[36px]"
              >
                Tailwind CSS Navigation-Rachna
              </h1>
              <p className="mt-4 mb-4 text-gray-600 dark:text-white">
                Use the button component inside forms, as links, social login,
                payment options with support for multiple styles, colors,
                gradients, and shadows
              </p>
            </div>
            <hr />

            {/* nav */}
            <section className="p-6">
              <div className="mt-8">
                <h4 className="text-pink-600 font-bold text-xl">Default Nav</h4>
                <p className="dark:text-white">
                  Basic navbar example with title as Logo..
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg mb-6">
                {/* head box */}
                <div className="flex bg-gray-100 dark:bg-gray-900 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white dark:bg-slate-900 px-2 py-1 items-center space-x-2 text-gray-600 dark:text-slate-100 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>

                {/* nav default */}
                <div className="bg-white-100 p-5">
                  <nav className="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          className="w-auto h-[25px]"
                          src="./img/3.png"
                          alt=""
                        />
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      ></button>
                      <div
                        id="navbar-dropdown"
                        className="hidden w-full md:block md:w-auto"
                      >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Home
                            </a>
                          </li>
                          <li className="relative">
                            <button
                              id="dropdownNavbarLink"
                              className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              Contact us
                            </button>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
 <nav className="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          className="w-auto h-[25px]"
                          src="./img/3.png"
                          alt=""
                        />
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      ></button>
                      <div
                        id="navbar-dropdown"
                        className="hidden w-full md:block md:w-auto"
                      >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Home
                            </a>
                          </li>
                          <li className="relative">
                            <button
                              id="dropdownNavbarLink"
                              className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              Contact us
                            </button>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                        `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  </div>
                  {/* code tailwind for each button */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="!overflow-visible text-xs pl-4">
                      {""}
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">nav</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "shadow-md bg-white rounded-lg border-gray-200
                          dark:bg-gray-900 dark:border-gray-700"
                        </span>
                        &gt; {" \n"}
                      </span>
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">div</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "max-w-screen-xl flex flex-wrap items-center
                          justify-between mx-auto p-4"
                        </span>
                        &gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;<span class="hljs-name">a</span>{" "}
                        <span class="hljs-attr">href</span>=
                        <span class="hljs-string">"#"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "flex items-center space-x-3 rtl:space-x-reverse"
                        </span>
                        &gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;<span class="hljs-name">img</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">"w-auto h-[25px]"</span>{" "}
                        <span class="hljs-attr">src</span>=
                        <span class="hljs-string">"../img/3.png"</span>{" "}
                        <span class="hljs-attr">alt</span>=
                        <span class="hljs-string">"Logo"</span>
                        &gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">a</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;<span class="hljs-name">button</span>{" "}
                        <span class="hljs-attr">id</span>=
                        <span class="hljs-string">"mobile-menu-toggle"</span>{" "}
                        <span class="hljs-attr">type</span>=
                        <span class="hljs-string">"button"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "inline-flex items-center p-2 w-10 h-10 justify-center
                          text-sm text-gray-500 rounded-lg md:hidden
                          hover:bg-gray-100 focus:outline-none focus:ring-2
                          focus:ring-gray-200 dark:text-gray-400
                          dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        </span>
                        &gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">button</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">div</span>{" "}
                        <span class="hljs-attr">id</span>=
                        <span class="hljs-string">"navbar-dropdown"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "hidden w-full md:block md:w-auto"
                        </span>
                        &gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">ul</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "flex flex-col font-medium p-4 md:p-0 mt-4 border
                          border-gray-100 rounded-lg bg-gray-50 md:space-x-8
                          rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
                          md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                          dark:border-gray-700"
                        </span>
                        &gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">li</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">a</span>{" "}
                        <span class="hljs-attr">href</span>=
                        <span class="hljs-string">"#"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "block py-2 px-3 text-gray-900 rounded
                          hover:bg-gray-100 md:hover:bg-transparent md:border-0
                          md:hover:text-blue-700 md:p-0 dark:text-white
                          md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                          dark:hover:text-white md:dark:hover:bg-transparent"
                        </span>
                        &gt;
                      </span>
                      Home
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">a</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">li</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">li</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">"relative"</span>
                        &gt;
                      </span>
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">button</span> {"\n"}
                        <span class="hljs-attr">id</span>=
                        <span class="hljs-string">"dropdownNavbarLink"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "flex items-center justify-between w-full py-2 px-3
                          text-gray-900 rounded hover:bg-gray-100
                          md:hover:bg-transparent md:border-0
                          md:hover:text-blue-700 md:p-0 md:w-auto
                          dark:text-white md:dark:hover:text-blue-500
                          dark:focus:text-white dark:border-gray-700
                          dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                        </span>
                        &gt;
                      </span>
                      Contact us
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">button</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">li</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;<span class="hljs-name">li</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;<span class="hljs-name">a</span>{" "}
                        <span class="hljs-attr">href</span>=
                        <span class="hljs-string">"#"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "block py-2 px-3 text-gray-900 rounded
                          hover:bg-gray-100 md:hover:bg-transparent md:border-0
                          md:hover:text-blue-700 md:p-0 dark:text-white
                          md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                          dark:hover:text-white md:dark:hover:bg-transparent"
                        </span>
                        &gt;
                      </span>
                      Services
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">a</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">li</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">ul</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">div</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">div</span>&gt;
                      </span>
                      <span class="hljs-tag">
                        {"\n"}
                        &lt;/<span class="hljs-name">nav</span>&gt;
                      </span>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
            {/*with dropdown*/}
            <section className="p-6 ">
              <div>
                <h4 className="text-pink-600 font-bold text-xl">
                  With Dropdowns
                </h4>
                <p className="dark:text-white">
                  Below given example displays navbar with dropdown menu.
                </p>
              </div>
              {/* box */}
              <div className="bg-white shadow-md rounded-lg mt-8">
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* nav2 */}
                <div class="bg-white-100 p-5">
                  <nav class="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          class="w-auto h-[25px]"
                          src="../img/3.png"
                          alt=""
                        />{" "}
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      >
                        <span class="sr-only">Open main menu</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 17 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="navbar-dropdown"
                        class="hidden w-full md:block md:w-auto"
                      >
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                            <a
                              href="#"
                              class="py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                            >
                              Home
                            </a>
                          </li>
                          <li class="relative">
                            <button
                              id="dropdownNavbarLink"
                              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              {" "}
                              Product
                              <svg
                                class="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m1 1 4 4 4-4"
                                ></path>
                              </svg>
                            </button>
                            <div
                              id="dropdownNavbar"
                              class="hidden absolute left-0 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div class="py-1">
                                <a
                                  href="#"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Sign out
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
<nav class="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          class="w-auto h-[25px]"
                          src="../img/3.png"
                          alt=""
                        />{" "}
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      >
                        <span class="sr-only">Open main menu</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 17 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="navbar-dropdown"
                        class="hidden w-full md:block md:w-auto"
                      >
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                            <a
                              href="#"
                              class="py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                            >
                              Home
                            </a>
                          </li>
                          <li class="relative">
                            <button
                              id="dropdownNavbarLink"
                              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              {" "}
                              Product
                              <svg
                                class="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m1 1 4 4 4-4"
                                ></path>
                              </svg>
                            </button>
                            <div
                              id="dropdownNavbar"
                              class="hidden absolute left-0 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div class="py-1">
                                <a
                                  href="#"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Sign out
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>

                        `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  </div>
                  {/* code tailwind for each button */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="theme-base16-materia-min shadow-3xl text-xs relative overflow-hidden max-w-full tab-size h-full">
                      <span class="hljs mb-0 p-4 block min-h-full overflow-auto">
                        <code>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">div</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">"bg-white-100 p-5"</span>
                            &gt;
                          </span>
                          {"\n"}
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">nav</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "shadow-md bg-white rounded-lg border-gray-200
                              dark:bg-gray-900 dark:border-gray-700"
                            </span>
                            &gt;
                          </span>
                          {"\n"}
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">div</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "max-w-screen-xl flex flex-wrap items-center
                              justify-between mx-auto p-4"
                            </span>
                            &gt;
                          </span>
                          {"\n"}
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">a</span>{" "}
                            <span class="hljs-attr">href</span>=
                            <span class="hljs-string">"#"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "flex items-center space-x-3 rtl:space-x-reverse"
                            </span>
                            &gt;
                          </span>
                          {"\n"}
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">img</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">"w-auto h-[25px]"</span>{" "}
                            <span class="hljs-attr">src</span>=
                            <span class="hljs-string">"../img/3.png"</span>{" "}
                            <span class="hljs-attr">alt</span>=
                            <span class="hljs-string">""</span>&gt;
                          </span>{" "}
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">a</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">button</span>{" "}
                            <span class="hljs-attr">id</span>=
                            <span class="hljs-string">
                              "mobile-menu-toggle"
                            </span>{" "}
                            <span class="hljs-attr">type</span>=
                            <span class="hljs-string">"button"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "inline-flex items-center p-2 w-10 h-10
                              justify-center text-sm text-gray-500 rounded-lg
                              md:hidden hover:bg-gray-100 focus:outline-none
                              focus:ring-2 focus:ring-gray-200
                              dark:text-gray-400 dark:hover:bg-gray-700
                              dark:focus:ring-gray-600"
                            </span>
                            &gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">span</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">"sr-only"</span>&gt;
                          </span>
                          Open main menu
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">span</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">svg</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">"w-5 h-5"</span>{" "}
                            <span class="hljs-attr">aria-hidden</span>=
                            <span class="hljs-string">"true"</span>{" "}
                            <span class="hljs-attr">xmlns</span>=
                            <span class="hljs-string">
                              "http://www.w3.org/2000/svg"
                            </span>{" "}
                            <span class="hljs-attr">fill</span>=
                            <span class="hljs-string">"none"</span>{" "}
                            <span class="hljs-attr">viewBox</span>=
                            <span class="hljs-string">"0 0 17 14"</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">path</span>{" "}
                            <span class="hljs-attr">stroke</span>=
                            <span class="hljs-string">"currentColor"</span>{" "}
                            <span class="hljs-attr">stroke-linecap</span>=
                            <span class="hljs-string">"round"</span>{" "}
                            <span class="hljs-attr">stroke-linejoin</span>=
                            <span class="hljs-string">"round"</span>{" "}
                            <span class="hljs-attr">stroke-width</span>=
                            <span class="hljs-string">"2"</span>{" "}
                            <span class="hljs-attr">d</span>=
                            <span class="hljs-string">
                              "M1 1h15M1 7h15M1 13h15"
                            </span>
                            /&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">svg</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;/<span class="hljs-name">button</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">div</span>{" "}
                            <span class="hljs-attr">id</span>=
                            <span class="hljs-string">"navbar-dropdown"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "hidden w-full md:block md:w-auto"
                            </span>
                            &gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">ul</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "flex flex-col font-medium p-4 md:p-0 mt-4 border
                              border-gray-100 rounded-lg bg-gray-50 md:space-x-8
                              rtl:space-x-reverse md:flex-row md:mt-0
                              md:border-0 md:bg-white dark:bg-gray-800
                              md:dark:bg-gray-900 dark:border-gray-700"
                            </span>
                            &gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">a</span>{" "}
                            <span class="hljs-attr">href</span>=
                            <span class="hljs-string">"#"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "py-2 px-3 text-black rounded md:bg-transparent
                              md:p-0"
                            </span>
                            &gt;
                          </span>
                          Home
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">a</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">li</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">"relative"</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            {"\n"}
                            &lt;<span class="hljs-name">button</span>{" "}
                            <span class="hljs-attr">id</span>=
                            <span class="hljs-string">
                              "dropdownNavbarLink"
                            </span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "flex items-center justify-between w-full py-2
                              px-3 text-gray-900 rounded hover:bg-gray-100
                              md:hover:bg-transparent md:border-0
                              md:hover:text-blue-700 md:p-0 md:w-auto
                              dark:text-white md:dark:hover:text-blue-500
                              dark:focus:text-white dark:border-gray-700
                              dark:hover:bg-gray-700
                              md:dark:hover:bg-transparent"
                            </span>
                            &gt;
                          </span>{" "}
                          Product
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">svg</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "w-2.5 h-2.5 ms-2.5"
                            </span>{" "}
                            <span class="hljs-attr">aria-hidden</span>=
                            <span class="hljs-string">"true"</span>{" "}
                            <span class="hljs-attr">xmlns</span>=
                            <span class="hljs-string">
                              "http://www.w3.org/2000/svg"
                            </span>{" "}
                            <span class="hljs-attr">fill</span>=
                            <span class="hljs-string">"none"</span>{" "}
                            <span class="hljs-attr">viewBox</span>=
                            <span class="hljs-string">"0 0 10 6"</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">path</span>{" "}
                            <span class="hljs-attr">stroke</span>=
                            <span class="hljs-string">"currentColor"</span>{" "}
                            <span class="hljs-attr">stroke-linecap</span>=
                            <span class="hljs-string">"round"</span>{" "}
                            <span class="hljs-attr">stroke-linejoin</span>=
                            <span class="hljs-string">"round"</span>{" "}
                            <span class="hljs-attr">stroke-width</span>=
                            <span class="hljs-string">"2"</span>{" "}
                            <span class="hljs-attr">d</span>=
                            <span class="hljs-string">"m1 1 4 4 4-4"</span>/&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">svg</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">button</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">div</span>{" "}
                            <span class="hljs-attr">id</span>=
                            <span class="hljs-string">"dropdownNavbar"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "hidden absolute left-0 mt-2 z-10 font-normal
                              bg-white divide-y divide-gray-100 rounded-lg
                              shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            </span>
                            &gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">ul</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "py-2 text-sm text-gray-700 dark:text-gray-400"
                            </span>
                            &gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">a</span>{" "}
                            <span class="hljs-attr">href</span>=
                            <span class="hljs-string">"#"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "block px-4 py-2 hover:bg-gray-100
                              dark:hover:bg-gray-600 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Dashboard
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">a</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">a</span>{" "}
                            <span class="hljs-attr">href</span>=
                            <span class="hljs-string">"#"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "block px-4 py-2 hover:bg-gray-100
                              dark:hover:bg-gray-600 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Settings
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">a</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">a</span>{" "}
                            <span class="hljs-attr">href</span>=
                            <span class="hljs-string">"#"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "block px-4 py-2 hover:bg-gray-100
                              dark:hover:bg-gray-600 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Earnings
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">a</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">ul</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">div</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">"py-1"</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">a</span>{" "}
                            <span class="hljs-attr">href</span>=
                            <span class="hljs-string">"#"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "block px-4 py-2 text-sm text-gray-700
                              hover:bg-gray-100 dark:hover:bg-gray-600
                              dark:text-gray-200 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Sign out
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">a</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">div</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">div</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;<span class="hljs-name">a</span>{" "}
                            <span class="hljs-attr">href</span>=
                            <span class="hljs-string">"#"</span>{" "}
                            <span class="hljs-attr">class</span>=
                            <span class="hljs-string">
                              "block py-2 px-3 text-gray-900 rounded
                              hover:bg-gray-100 md:hover:bg-transparent
                              md:border-0 md:hover:text-blue-700 md:p-0
                              dark:text-white md:dark:hover:text-blue-500
                              dark:hover:bg-gray-700 dark:hover:text-white
                              md:dark:hover:bg-transparent"
                            </span>
                            &gt;
                          </span>
                          Services
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">a</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">li</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">ul</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">div</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">div</span>&gt;
                          </span>
                          <span class="hljs-tag">
                            &lt;/<span class="hljs-name">nav</span>&gt;
                          </span>
                        </code>
                      </span>
                    </pre>
                    <code></code>
                  </div>
                </div>
              </div>
            </section>
            {/*nav3*/}
            <section className="p-6">
              <div>
                <h4 className="text-pink-600 font-bold text-xl">
                  With Indelicate avata
                </h4>
                <p className="dark:text-white">
                  Below given example displays navbar with notifications
                  indicator
                </p>
              </div>
              {/* box put button */}
              <div className="bg-white shadow-md rounded-lg mt-8">
                {/* head box */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* nav3 */}
                <div class="bg-white-100 p-5">
                  <nav class="shadow-md bg-white  rounded-lg dark:bg-gray-900">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="https://flowbite.com/"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          class="w-auto h-[25px]"
                          src="../img/3.png"
                          alt=""
                        />{" "}
                      </a>
                      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <i class="fa-regular fa-bell pr-6"></i>
                        <button
                          type="button"
                          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                          id="user-menu-button"
                          aria-expanded="false"
                          data-dropdown-toggle="user-dropdown"
                          data-dropdown-placement="bottom"
                        >
                          <img
                            class="w-8 h-8 rounded-full"
                            src="https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                            alt="user photo"
                          />
                        </button>
                        <button
                          data-collapse-toggle="navbar-user"
                          type="button"
                          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          aria-controls="navbar-user"
                          aria-expanded="false"
                        >
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
<nav class="shadow-md bg-white  rounded-lg dark:bg-gray-900">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="https://flowbite.com/"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          class="w-auto h-[25px]"
                          src="../img/3.png"
                          alt=""
                        />{" "}
                      </a>
                      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <i class="fa-regular fa-bell pr-6"></i>
                        <button
                          type="button"
                          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                          id="user-menu-button"
                          aria-expanded="false"
                          data-dropdown-toggle="user-dropdown"
                          data-dropdown-placement="bottom"
                        >
                          <img
                            class="w-8 h-8 rounded-full"
                            src="https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                            alt="user photo"
                          />
                        </button>
                        <button
                          data-collapse-toggle="navbar-user"
                          type="button"
                          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          aria-controls="navbar-user"
                          aria-expanded="false"
                        >
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </nav>
                        `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  </div>
                  {/* code tailwind for each button */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="!overflow-visible text-xs">
                      {""}
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">div</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">"bg-white-100 p-5"</span>&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">nav</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "shadow-md bg-white rounded-lg dark:bg-gray-900"
                        </span>
                        &gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">div</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "max-w-screen-xl flex flex-wrap items-center
                          justify-between mx-auto p-4"
                        </span>
                        &gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">a</span>{" "}
                        <span class="hljs-attr">href</span>=
                        <span class="hljs-string">"https://flowbite.com/"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "flex items-center space-x-3 rtl:space-x-reverse"
                        </span>
                        &gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">img</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">"w-auto h-[25px]"</span>{" "}
                        <span class="hljs-attr">src</span>=
                        <span class="hljs-string">"../img/3.png"</span>{" "}
                        <span class="hljs-attr">alt</span>=
                        <span class="hljs-string">""</span>/&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">a</span>&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">div</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "flex items-center md:order-2 space-x-3 md:space-x-0
                          rtl:space-x-reverse"
                        </span>
                        &gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">i</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "fa-regular fa-bell pr-6"
                        </span>
                        &gt;&lt;/<span class="hljs-name">i</span>&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">button</span>{" "}
                        <span class="hljs-attr">type</span>=
                        <span class="hljs-string">"button"</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">
                          "flex text-sm bg-gray-800 rounded-full md:me-0
                          focus:ring-4 focus:ring-gray-300
                          dark:focus:ring-gray-600"
                        </span>{" "}
                        <span class="hljs-attr">id</span>=
                        <span class="hljs-string">"user-menu-button"</span>{" "}
                        <span class="hljs-attr">aria-expanded</span>=
                        <span class="hljs-string">"false"</span>{" "}
                        <span class="hljs-attr">data-dropdown-toggle</span>=
                        <span class="hljs-string">"user-dropdown"</span>{" "}
                        <span class="hljs-attr">data-dropdown-placement</span>=
                        <span class="hljs-string">"bottom"</span>&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;<span class="hljs-name">img</span>{" "}
                        <span class="hljs-attr">class</span>=
                        <span class="hljs-string">"w-8 h-8 rounded-full"</span>{" "}
                        <span class="hljs-attr">src</span>=
                        <span class="hljs-string">
                          "https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                        </span>{" "}
                        <span class="hljs-attr">alt</span>=
                        <span class="hljs-string">"user photo"</span>/&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">button</span>&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">div</span>&gt;
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">div</span>&gt;
                      </span>
                      <br />
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">nav</span>&gt;
                      </span>
                      <br />
                      <span class="hljs-tag">
                        &lt;/<span class="hljs-name">div</span>&gt;
                      </span>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
            {/* nav 4 */}
            <section className="p-6">
              <div>
                <h4 className="text-pink-600 font-bold text-xl">
                  With center brand name
                </h4>
                <p className="dark:text-white">
                  Below given example displays navbar with centered brand name.
                </p>
              </div>
              {/* box put button */}
              <div className="bg-white shadow-md rounded-lg mt-8">
                {/* head box */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* nav4 */}
                <div className="bg-white-100 p-5">
                  <nav class="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 relative">
                    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                      <div class="flex items-center">
                        <span class="hidden md:block"></span>
                      </div>
                      <div class="absolute left-1/2 transform -translate-x-1/2">
                        <img
                          class="w-auto h-[25px]"
                          src="../img/3.png"
                          alt="Logo"
                        />
                      </div>

                      <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <button
                          type="button"
                          class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                          id="user-menu-button"
                          aria-expanded="false"
                          data-dropdown-toggle="user-dropdown"
                          data-dropdown-placement="bottom"
                        >
                          <img
                            class="w-8 h-8 rounded-full"
                            src="https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                            alt="user photo"
                          />
                        </button>
                        <button
                          data-collapse-toggle="navbar-user"
                          type="button"
                          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          aria-controls="navbar-user"
                          aria-expanded="false"
                        >
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
                  <nav class=" bg-pink-400 shadow-md rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div class="  flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          class="w-auto h-[25px]"
                          src="../img/logo_fordarkmood.png"
                          alt=""
                        />
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      >
                        <span class="sr-only">Open main menu</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 17 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="navbar-dropdown"
                        class="hidden w-full md:block md:w-auto"
                      >
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark text-white ">
                          <li>
                            <a
                              href="#"
                              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Home
                            </a>
                          </li>
                          <li class="relative">
                            <button
                              id="dropdownNavbarLink"
                              class="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              Contact us
                            </button>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                        `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  </div>
                  {/* code tailwind for each button */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="!overflow-visible text-xs relative">
                      <code>
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">div</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "bg-white-100 p-5"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">nav</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "shadow-md bg-white rounded-lg p-4 flex items-center
                            justify-between"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">img</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">"w-auto h-[25px]"</span>{" "}
                          <span className="hljs-attr">src</span>=
                          <span className="hljs-string">"../img/3.png"</span>{" "}
                          <span className="hljs-attr">alt</span>=
                          <span className="hljs-string">""</span>/&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">div</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "flex items-center md:space-x-5 lg:space-x-5"
                          </span>
                          &gt;
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">input</span>{" "}
                          <span className="hljs-attr">type</span>=
                          <span className="hljs-string">"text"</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "ps-8 p-2 text-sm text-gray-900 border
                            border-gray-300 rounded-full bg-gray-50
                            focus:ring-blue-500 focus:border-blue-500"
                          </span>{" "}
                          <span className="hljs-attr">placeholder</span>=
                          <span className="hljs-string">"Search"</span>/&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">img</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "w-10 h-10 rounded-full"
                          </span>{" "}
                          <span className="hljs-attr">src</span>=
                          <span className="hljs-string">
                            "https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                          </span>{" "}
                          <span className="hljs-attr">alt</span>=
                          <span className="hljs-string">"User Profile"</span>
                          /&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">nav</span>&gt;
                        </span>
                        <br />
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                        <br />
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
            {/* nav6*/}
            <section className="p-6">
              <div>
                <h4 className="text-pink-600 font-bold text-xl">
                  With search solid background
                </h4>
                <p className="dark:text-white">Below given example.</p>
              </div>
              {/* box put button */}
              <div className="bg-white shadow-md rounded-lg mt-8">
                {/* head box */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* nav6 */}
                <div class="bg-white-100 p-5">
                  <nav class=" bg-pink-400 shadow-md rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div class="  flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          class="w-auto h-[25px]"
                          src="../img/logo_fordarkmood.png"
                          alt=""
                        />
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      >
                        <span class="sr-only">Open main menu</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 17 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="navbar-dropdown"
                        class="hidden w-full md:block md:w-auto"
                      >
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark text-white ">
                          <li>
                            <a
                              href="#"
                              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Home
                            </a>
                          </li>
                          <li class="relative">
                            <button
                              id="dropdownNavbarLink"
                              class="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              Contact us
                            </button>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
<button type="button" class="text-white text-xs font-medium bg-yellow-600 px-[20px] py-[10px] rounded-lg hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 dark:focus:bg-yellow-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-blue-600 px-[20px] py-[10px] rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 dark:focus:bg-blue-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-green-600 px-[20px] py-[10px] rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 dark:focus:bg-green-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-red-600 px-[20px] py-[10px] rounded-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700 dark:focus:bg-red-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-orange-600 px-[20px] py-[10px] rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700 dark:focus:bg-orange-800">Button</button>
      `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  </div>
                  {/* code tailwind for each button */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="!overflow-visible text-xs relative">
                      <code>
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">div</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "bg-white-100 p-5"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">nav</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "shadow-md bg-white rounded-lg p-4 flex items-center
                            justify-between"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">img</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">"w-auto h-[25px]"</span>{" "}
                          <span className="hljs-attr">src</span>=
                          <span className="hljs-string">"../img/3.png"</span>{" "}
                          <span className="hljs-attr">alt</span>=
                          <span className="hljs-string">""</span>/&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-comment">
                          &lt;!-- Search Bar and Profile Section --&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">div</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "flex items-center md:space-x-5 lg:space-x-5"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-comment">
                          &lt;!-- Search Bar --&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">input</span>{" "}
                          <span className="hljs-attr">type</span>=
                          <span className="hljs-string">"text"</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "ps-8 p-2 text-sm text-gray-900 border
                            border-gray-300 rounded-full bg-gray-50
                            focus:ring-blue-500 focus:border-blue-500"
                          </span>{" "}
                          <span className="hljs-attr">placeholder</span>=
                          <span className="hljs-string">"Search"</span>/&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">img</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "w-10 h-10 rounded-full"
                          </span>{" "}
                          <span className="hljs-attr">src</span>=
                          <span className="hljs-string">
                            "https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                          </span>{" "}
                          <span className="hljs-attr">alt</span>=
                          <span className="hljs-string">"User Profile"</span>
                          /&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">nav</span>&gt;
                        </span>
                        <br />
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                        <br />
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
            {/* nav5 */}
            <section className="p-6">
              <div>
                <h4 className="text-pink-600 font-bold text-xl">with search</h4>
                <p className="dark:text-white">
                  Below given example displays navbar with search input.
                </p>
              </div>
              {/* box put button */}
              <div className="bg-white shadow-md rounded-lg mt-8">
                {/* head box */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke" />
                  </button>
                </div>
                {/* nav5 */}
                <div class="bg-white-100 p-5">
                  <nav class="shadow-md bg-white rounded-lg p-4 flex items-center justify-between">
                    <img class="w-auto h-[25px]" src="../img/3.png" alt="" />
                    <div class="flex items-center md:space-x-5 lg:space-x-5">
                      <input
                        type="text"
                        class="ps-8 p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search"
                      />
                      <img
                        class="w-10 h-10 rounded-full"
                        src="https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                        alt="User Profile"
                      />
                    </div>
                  </nav>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button
                    className="flex items-center space-x-3 text-black hover:text-gray-800"
                    onClick={() =>
                      handleCopy(
                        `
<button type="button" class="text-white text-xs font-medium bg-yellow-600 px-[20px] py-[10px] rounded-lg hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700 dark:focus:bg-yellow-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-blue-600 px-[20px] py-[10px] rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 dark:focus:bg-blue-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-green-600 px-[20px] py-[10px] rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 dark:focus:bg-green-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-red-600 px-[20px] py-[10px] rounded-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700 dark:focus:bg-red-800">Button</button>
<button type="button" class="text-white text-xs font-medium bg-orange-600 px-[20px] py-[10px] rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700 dark:focus:bg-orange-800">Button</button>
      `.trim(), // Trim to remove extra whitespace
                        "defaultButton"
                      )
                    }
                  >
                    <i className="far fa-copy" />
                    <span>
                      {copiedStates["defaultButton"] ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  </div>
                  {/* code tailwind for each button */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="!overflow-visible text-xs relative">
                      <code>
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">div</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "bg-white-100 p-5"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">nav</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "shadow-md bg-white rounded-lg p-4 flex items-center
                            justify-between"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">img</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">"w-auto h-[25px]"</span>{" "}
                          <span className="hljs-attr">src</span>=
                          <span className="hljs-string">"../img/3.png"</span>{" "}
                          <span className="hljs-attr">alt</span>=
                          <span className="hljs-string">""</span>/&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-comment">
                          &lt;!-- Search Bar and Profile Section --&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">div</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "flex items-center md:space-x-5 lg:space-x-5"
                          </span>
                          &gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-comment">
                          &lt;!-- Search Bar --&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">input</span>{" "}
                          <span className="hljs-attr">type</span>=
                          <span className="hljs-string">"text"</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "ps-8 p-2 text-sm text-gray-900 border
                            border-gray-300 rounded-full bg-gray-50
                            focus:ring-blue-500 focus:border-blue-500"
                          </span>{" "}
                          <span className="hljs-attr">placeholder</span>=
                          <span className="hljs-string">"Search"</span>/&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;<span className="hljs-name">img</span>{" "}
                          <span className="hljs-attr">class</span>=
                          <span className="hljs-string">
                            "w-10 h-10 rounded-full"
                          </span>{" "}
                          <span className="hljs-attr">src</span>=
                          <span className="hljs-string">
                            "https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                          </span>{" "}
                          <span className="hljs-attr">alt</span>=
                          <span className="hljs-string">"User Profile"</span>
                          /&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">nav</span>&gt;
                        </span>
                        <br />
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                        <br />
                        <span className="hljs-tag">
                          &lt;/<span className="hljs-name">div</span>&gt;
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
          </>
        </main>
      </div>
    </div>
  );
}

export default Component;
