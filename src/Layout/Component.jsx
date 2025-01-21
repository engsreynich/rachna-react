import React from "react";

function Component(props) {
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
    <div>
      <h1 className="text-pink-600 font-bold text-[36px]">
        Tailwind CSS Button-Rachna
      </h1>
      <p className="mt-4 mb-4 text-gray-600 dark:text-white">
        Use the button component inside forms, as links, social login, payment
        options with support for multiple styles, colors, gradients, and shadows
      </p>
    </div>
    <hr />
    {/* button */}
    <section>
      <div className="mt-8">
        <h4 className="text-pink-600 font-bold text-xl">Default button</h4>
        <p className="dark:text-white">
          Use these default button styles with multiple colors to indicate an
          action or link within your website
        </p>
      </div>
      {/* box put button */}
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
            <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
              <i className="far fa-copy" />
              <span>Copy</span>
            </button>
          </div>
          {/* code tailwind for each button */}
          <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
            <pre className="text-xs whitespace-pre leading-tight pl-0">
              {"                       "}
              <code>
                {"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-yellow-600 px-[20px]
                py-[10px] rounded-lg hover:bg-yellow-800 focus:outline-none
                focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700
                dark:focus:bg-yellow-800"&gt;Button&lt;/button&gt;{"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-blue-600{"  "}px-[20px]
                py-[10px] rounded-lg hover:bg-blue-800 focus:outline-none
                focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700
                dark:focus:bg-blue-800"&gt;Button&lt;/button&gt;{"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-green-600{"  "}
                px-[20px] py-[10px] rounded-lg hover:bg-green-800
                focus:outline-none focus:ring-4 focus:ring-green-300
                dark:focus:ring-green-700
                dark:focus:bg-green-800"&gt;Button&lt;/button&gt;{"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-red-600{"  "}px-[20px]
                py-[10px] rounded-lg hover:bg-red-800 focus:outline-none
                focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700
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
    <section className="mt-10">
      <div>
        <h4 className="text-pink-600 font-bold text-xl">Button pills</h4>
        <p className="dark:text-white">
          The button pills can be used as an alternative style by using fully
          rounded edges.
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
            <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
              <i className="far fa-copy" />
              <span>Copy</span>
            </button>
          </div>
          {/* code tailwind for each button */}
          <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
            <pre className="text-xs whitespace-pre leading-tight pl-0">
              {"                       "}
              <code>
                {"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-yellow-600 px-[30px]
                py-[10px] rounded-full hover:bg-yellow-800 focus:outline-none
                focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-700
                dark:focus:bg-yellow-800"&gt;Button&lt;/button&gt;{"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-blue-600{"  "}px-[30px]
                py-[10px] rounded-full hover:bg-blue-800 focus:outline-none
                focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700
                dark:focus:bg-blue-800"&gt;Button&lt;/button&gt;{"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-green-600{"  "}
                px-[30px] py-[10px] rounded-full hover:bg-green-800
                focus:outline-none focus:ring-4 focus:ring-green-300
                dark:focus:ring-green-700
                dark:focus:bg-green-800"&gt;Button&lt;/button&gt;{"\n"}
                {"                    "}&lt;button type="button"
                class="text-white text-xs font-medium bg-red-600{"  "}px-[30px]
                py-[10px] rounded-full hover:bg-red-800 focus:outline-none
                focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700
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
    <section className="mt-10">
      <div>
        <h4 className="text-pink-600 font-bold text-xl">Gradient monochrome</h4>
        <p className="dark:text-white">
          These beautifully colored buttons built with the gradient color stops
          utility classes from Tailwind CSS can be used as a creative
          alternative to the default button styles.
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
            <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
              <i className="far fa-copy" />
              <span>Copy</span>
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
                from-blue-500 via-orange-300 to-green-500 px-[40px] py-[10px]
                rounded-lg hover:from-blue-500 hover:to-green-300
                hover:text-white focus:shadow-xl dark:focus:outline-none
                dark:focus:ring-4 dark:focus:ring-orange-600
                "&gt;Button&lt;/button&gt;{"\n"}
                {"                      "}&lt;button type="button"
                class="text-black text-xs font-medium bg-gradient-to-r
                from-fuchsia-500 via-gray-300 to-yellow-500 px-[40px] py-[10px]
                rounded-lg hover:from-fuchsia-500 hover:to-yellow-300
                hover:text-white focus:shadow-xl dark:focus:outline-none
                dark:focus:ring-4
                dark:focus:ring-gray-600"&gt;Button&lt;/button&gt;{"\n"}
                {"                      "}&lt;button type="button"
                class="text-black text-xs font-medium bg-gradient-to-r
                from-purple-500 via-sky-300 to-rose-500 px-[40px] py-[10px]
                rounded-lg hover:from-purple-500 hover:to-rose-300
                hover:text-white focus:shadow-xl dark:focus:outline-none
                dark:focus:ring-4
                dark:focus:ring-sky-600"&gt;Button&lt;/button&gt;{"\n"}
                {"                      "}&lt;button type="button"
                class="text-black text-xs font-medium bg-gradient-to-r
                from-orange-500 via-green-300 to-red-500 px-[40px] py-[10px]
                rounded-lg hover:from-orange-500 hover:to-red-300
                hover:text-white focus:shadow-xl dark:focus:outline-none
                dark:focus:ring-4
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
    <section className="mt-10">
      <div>
        <h4 className="text-pink-600 font-bold text-xl">Social buttons</h4>
        <p className="dark:text-white">
          Use these button styles when building social media login forms using
          Facebook, GitHub, and Apple. These buttons use the new bg-[#hex]
          utility classes from Tailwind CSS v3.0.
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
            <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
              <i className="far fa-copy" />
              <span>Copy</span>
            </button>
          </div>
          <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
            <pre className="text-xs whitespace-pre leading-tight pl-0">
              {"                         "}
              <code>
                {"\n"}
                {"                          "}&lt;button type="button"
                class="flex justify-around text-sm bg-white ring-1 ring-gray-200
                items-center p-[10px] rounded-lg font-medium hover:bg-blue-100
                focus:outline-none focus:ring-4 focus:ring-blue-400
                dark:bg-blue-300 dark:focus:bg-blue-300
                dark:focus:ring-white"&gt;{"\n"}
                {"                        "}&lt;svg
                xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2"
                viewBox="0 0 512 512"&gt;{"\n"}
                {"                        "}&lt;path fill="#1030cb" d="M512
                256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2
                504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5
                125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42
                0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8
                512 386.9 512 256h0z"/&gt;&lt;/svg&gt;Sign in with
                Facebook&lt;/button&gt;{"\n"}
                {"                          "}&lt;button type="button"
                class="flex justify-around text-sm bg-white ring-1 ring-gray-200
                items-center py-[10px] px-[20px] rounded-lg font-medium
                hover:bg-gray-100 focus:outline-none focus:ring-4
                focus:ring-gray-400 dark:bg-blue-300 dark:focus:bg-blue-300
                dark:focus:ring-white"&gt;{"\n"}
                {"                        "}&lt;svg
                xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2"
                viewBox="0 0 384 512"&gt;{"\n"}
                {"                        "}&lt;path d="M318.7 268.7c-.2-36.7
                16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3
                20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4
                273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6
                43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5
                102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4
                24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8
                44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/&gt;&lt;/svg&gt;Sign
                in with Apple&lt;/button&gt;{"\n"}
                {"                          "}&lt;button{"  "}type="button"
                class="flex justify-around text-sm bg-white ring-1 ring-gray-200
                items-center py-[10px] px-[20px] rounded-lg font-medium
                hover:bg-slate-600 hover:text-white focus:outline-none
                focus:ring-4 focus:ring-black dark:bg-blue-300
                dark:focus:bg-blue-300 dark:focus:ring-white"&gt;{"\n"}
                {"                        "}&lt;svg
                xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2"
                viewBox="0 0 496 512"&gt;{"\n"}
                {"                        "}&lt;path d="M165.9 397.4c0 2-2.3
                3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6
                1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0
                6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9
                .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6
                4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0
                110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1
                0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0
                0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6
                25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1
                16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3
                23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6
                41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7
                34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9
                104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6
                0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3
                383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3
                5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7
                1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7
                .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1
                4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3
                .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6
                0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9
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
    <section className="mt-10">
      <div>
        <h4 className="text-pink-600 font-bold text-xl">Button with icon</h4>
        <p className="text-slate-900 dark:text-white">
          Use the following examples to add a SVG icon inside the button either
          on the left.
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
            <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
              <i className="far fa-copy" />
              <span>Copy</span>
            </button>
          </div>
          <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
            <pre className="text-xs whitespace-pre leading-tight text-left pl-0">
              {"                       "}
              <code>
                {"\n"}
                {"                        "}&lt;button type="button" class="flex
                justify-around items-center font-medium bg-fuchsia-500
                text-black py-[10px] px-[20px] rounded-lg hover:text-white
                hover:bg-fuchsia-600 group focus:outline-none focus:ring-4
                focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800"&gt;{"\n"}
                {"                          "}&lt;svg
                xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2
                text-black group-hover:text-white transition-colors" viewBox="0
                0 448 512" fill="currentColor"&gt;{"\n"}
                {"                          "}&lt;path fill-rule="evenodd"
                clip-rule="evenodd" d="M352 224c53 0 96-43
                96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4
                170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0
                49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96
                96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6
                26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6
                213.8 326.1 224 352 224z"/&gt;&lt;/svg&gt;Share &lt;/button&gt;
                {"\n"}
                {"                        "}&lt;button type="button" class="flex
                justify-around items-center font-medium bg-red-500 text-black
                py-[10px] px-[20px] rounded-lg hover:text-white hover:bg-red-600
                group focus:outline-none focus:ring-4 focus:ring-red-300
                dark:focus:ring-red-800"&gt;{"\n"}
                {"                          "}&lt;svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2
                text-black group-hover:text-white transition-colors" viewBox="0
                0 20 20" fill="currentColor"&gt;{"\n"}
                {"                          "}&lt;pathv fill-rule="evenodd"
                d="M8 2a1 1 0 00-.894.553L6.382 4H3a1 1 0 100 2h1v10a2 2 0 002
                2h8a2 2 0 002-2V6h1a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0012
                2H8zm2 5a1 1 0 011 1v6a1 1 0 11-2 0V8a1 1 0 011-1zm-3 1a1 1 0
                011 1v6a1 1 0 11-2 0V8a1 1 0 011-1zm8 1a1 1 0 10-2 0v6a1 1 0 102
                0V8z" clip-rule="evenodd"/&gt;&lt;/svg&gt;Delete&lt;/button&gt;
                {"\n"}
                {"                        "}&lt;button type="button" class="flex
                justify-around items-center font-medium bg-blue-500 text-black
                py-[10px] px-[20px] rounded-lg hover:text-white
                hover:bg-blue-600 group focus:outline-none focus:ring-4
                focus:ring-blue-300 dark:focus:ring-blue-800"&gt;{"\n"}
                {"                          "}&lt;svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2
                text-black group-hover:text-white transition-colors" viewBox="0
                0 512 512" fill="currentColor"&gt;{"\n"}
                {"                          "}&lt;path fill-rule="evenodd"
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0
                242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0
                45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5
                12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64
                352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0
                64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25
                25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24
                24 0 1 1 0-48z"
                clip-rule="evenodd"/&gt;&lt;/svg&gt;Download&lt;/button&gt;
                {"\n"}
                {"                        "}&lt;button type="button" class="flex
                justify-around items-center font-medium bg-yellow-500 text-black
                py-[10px] px-[20px] rounded-lg hover:text-white
                hover:bg-yellow-600 group focus:outline-none focus:ring-4
                focus:ring-yellow-300 dark:focus:ring-yellow-800"&gt;{"\n"}
                {"                          "}&lt;svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2
                text-black group-hover:text-white transition-colors" viewBox="0
                0 512 512" fill="currentColor"&gt;{"\n"}
                {"                          "}&lt;path fill-rule="evenodd"
                d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7
                .2 40.1S486.3 480 472 480L40 480c-14.3
                0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32
                256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24
                24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0
                -64 0 32 32 0 1 0 64 0z"
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
  <h1 className="text-[36px] font-extrabold text-pink-600">
    Tailwind CSS Inputs - Rachna
  </h1>
  <p className="text-gray-500 mt-2 text-[18px] font-medium">
    Use the search input component as a text field to allow users to enter
    search queries and receive relevant page results available in multiple
    styles and sizes
  </p>
  <hr className="my-4" />
  <div className="container mx-auto p-6">
    {/* Header Section */}
    <header className="mb-6">
      <h1 className="text-[24px] font-bold text-pink-600">Search Box</h1>
      <p className="text-gray-500 mt-1 text-[18px] font-medium">
        Get started with the default example of a search input component.
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
        <button className="flex items-center space-x-1 text-black hover:text-gray-800">
          <i className="fa-solid fa-copy" />
          <span>Copy</span>
        </button>
      </div>
      {/* Content */}
      <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
        <pre className="text-xs whitespace-pre leading-tight mx-auto pl-0">
          {"                        "}
          <code>
            {"\n"}
            {"                          "}&lt;div class="flex p-4"&gt;{"\n"}
            {"                          "}&lt;aside class="w-1/4 mt-6
            mx-auto"&gt;{"\n"}
            {"                          "}&lt;div class="flex items-center
            justify-center py-4"&gt;{"\n"}
            {"                          "}&lt;div class="relative"&gt;{"\n"}
            {"                          "}&lt;input{"\n"}
            {"                                "}type="text"{"\n"}
            {"                                "}placeholder="Search..."{"\n"}
            {"                                "}class="px-4 py-2 w-64 border
            rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {"\n"}
            {"                              "}/&gt;{"\n"}
            {"                              "}&lt;button{"\n"}
            {"                                "}class="absolute right-0 top-0
            mt-2 mr-2 text-gray-500 hover:text-blue-500 focus:outline-none"
            {"\n"}
            {"                              "}&gt;{"\n"}
            {"                              "}&lt;svg{"\n"}
            {"                                  "}
            xmlns="http://www.w3.org/2000/svg"{"\n"}
            {"                                  "}width="20"{"\n"}
            {"                                  "}height="20"{"\n"}
            {"                                  "}fill="none"{"\n"}
            {"                                  "}viewBox="0 0 24 24"{"\n"}
            {"                                  "}stroke="currentColor"{"\n"}
            {"                                "}&gt;{"\n"}
            {"                                "}&lt;path{"\n"}
            {"                                    "}stroke-linecap="round"{"\n"}
            {"                                    "}stroke-linejoin="round"
            {"\n"}
            {"                                    "}stroke-width="2"{"\n"}
            {"                                    "}d="M10 18a8 8 0 1 0 0-16 8 8
            0 0 0 0 16zM10 18l6 6"{"\n"}
            {"                                  "}/&gt;{"\n"}
            {"                                  "}&lt;/svg&gt;{"\n"}
            {"                                  "}&lt;/button&gt;{"\n"}
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
      <h1 className="text-[24px] font-bold text-pink-600 ">Input Username</h1>
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
        <button className="flex items-center space-x-1 text-black hover:text-gray-800">
          <i className="fa-solid fa-copy" />
          <span>Copy</span>
        </button>
      </div>
      {/* Content */}
      <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
        <pre className="text-xs whitespace-pre leading-tight pl-0 mx-auto">
          {"                        "}
          <code>
            {"\n"}
            {"                          "}&lt;div class="flex flex-col p-4"&gt;
            {"\n"}
            {"                          "}&lt;label for="username" class="block
            text-sm font-medium text-gray-700"{"\n"}
            {"                         "}&gt;Username&lt;/label&gt;{"\n"}
            {"                         "}&lt;input{"\n"}
            {"                         "}type="text"{"\n"}
            {"                         "}id="username"{"\n"}
            {"                         "}name="username"{"\n"}
            {"                         "}class="mt-1 w-2/4 px-3 py-2 border
            border-gray-300 rounded-md shadow-sm focus:outline-none
            focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/&gt;{"\n"}
            {"                         "}&lt;/div&gt;{"\n"}
            {"                         "}&lt;/div&gt;{"\n"}
            {"                         "}&lt;div class="bg-white rounded-lg
            shadow-sm"&gt;{"\n"}
            {"                         "}&lt;div class="bg-gray-300 flex
            justify-between items-center px-4 py-2 border-b border-gray-300"&gt;
            {"\n"}
            {"                         "}&lt;span class="text-black
            font-medium"&gt;HTML &lt;/span&gt;{"\n"}
            {"                         "}&lt;button class="flex items-center
            space-x-1 text-black hover:text-gray-800"&gt;{"\n"}
            {"                         "}&lt;i class="fa-solid fa-copy"&gt;
            {"\n"}
            {"                         "}&lt;span&gt;Copy &lt;/span&gt;{"\n"}
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
      <h1 className="text-[24px] font-bold text-pink-600">Input Url</h1>
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
          <button className="flex items-center space-x-1 text-black hover:text-gray-800">
            <i className="fa-solid fa-copy" />
            <span>Copy</span>
          </button>
        </div>
        {/* Content */}
        <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
          <pre className="text-xs whitespace-pre leading-tight pl-0">
            {"                        "}
            <code>
              {"\n"}
              {"                          "}&lt;div class="container mx-auto
              p-6"&gt;{"\n"}
              {"                          "}&lt;label for="url" class="block
              text-sm font-medium text-gray-700"&gt;Website URL&lt;/label&gt;
              {"\n"}
              {"                          "}&lt;input id="url" type="url"
              class="mt-1 block w-2/4 px-3 py-2 border border-gray-300
              rounded-md shadow-sm focus:outline-none focus:ring-2
              focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://example.com" /&gt;{"\n"}
              {"                    "}
            </code>
            {"\n"}
            {"              "}
          </pre>
        </div>
      </div>
    </div>
    {/* Location Search*/}
    <div className="container mx-auto">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-[24px] font-bold text-pink-600">Location search</h1>
        <p className="text-gray-500 mt-1 text-[18px] font-medium">
          Use this example where you can select a country in which you want to
          search for an address or city.
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
        <form className="max-w-md mx-auto container">
          <div className="flex">
            <label
              htmlFor="location-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button-2"
              data-dropdown-toggle="dropdown-search-city"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-3 me-2"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width={14} height={12} rx={2} fill="white" />
                <mask
                  id="mask0_12694_49953"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={15}
                  height={12}
                >
                  <rect x="0.5" width={14} height={12} rx={2} fill="white" />
                </mask>
                <g mask="url(#mask0_12694_49953)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z"
                    fill="#D02F44"
                  />
                  <rect x="0.5" width={6} height="5.6" fill="#46467F" />
                  <g filter="url(#filter0_d_12694_49953)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z"
                      fill="url(#paint0_linear_12694_49953)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_12694_49953"
                    x="1.1665"
                    y="0.800049"
                    width="4.6665"
                    height={5}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={1} />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_12694_49953"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_12694_49953"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_12694_49953"
                    x1="1.1665"
                    y1="0.800049"
                    x2="1.1665"
                    y2="4.80005"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="#F0F0F0" />
                  </linearGradient>
                </defs>
              </svg>
              USA{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown-search-city"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button-2"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      United States
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Germany
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd" strokeWidth="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italy
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </svg>
                      China
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="location-search"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search for city or address"
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-yellow-500 rounded-e-lg border border-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
          <span className="text-black font-medium">HTML</span>
          <button className="flex items-center space-x-1 text-black hover:text-gray-800">
            <i className="fa-solid fa-copy" />
            <span>Copy</span>
          </button>
        </div>
        {/* Content */}
        <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
          <pre className="text-xs whitespace-pre leading-tight pl-0">
            {"                            "}
            <code>
              {"\n"}
              {"                              "}&lt;form class="max-w-md mx-auto
              container p-6"&gt;{"\n"}
              {"                              "}&lt;div class="flex"&gt;{"\n"}
              {"                              "}&lt;label for="location-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only
              dark:text-white"&gt;Your Email&lt;/label&gt;{"\n"}
              {"                              "}b&lt;utton
              id="dropdown-button-2" data-dropdown-toggle="dropdown-search-city"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4
              text-sm font-medium text-center text-gray-500 bg-gray-100 border
              border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4
              focus:outline-none focus:ring-gray-100 dark:bg-gray-700
              dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white
              dark:border-gray-600" type="button"&gt;{"\n"}
              {"                              "}&lt;svg aria-hidden="true"
              class="h-3 me-2" viewBox="0 0 15 12" fill="none"
              xmlns="http://www.w3.org/2000/svg"&gt;&lt;rect x="0.5" width="14"
              height="12" rx="2" fill="white"/&gt;&lt;mask
              id="mask0_12694_49953" style="mask-type:alpha"
              maskUnits="userSpaceOnUse" x="0" y="0" width="15"
              height="12"&gt;&lt;rect x="0.5" width="14" height="12" rx="2"
              fill="white"/&gt;&lt;/mask&gt;&lt;g
              mask="url(#mask0_12694_49953)"&gt;&lt;path fill-rule="evenodd"
              clip-rule="evenodd" d="M14.5 0H0.5V0.8H14.5V0ZM14.5
              1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5
              4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5
              8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5
              11.2H0.5V12H14.5V11.2Z" fill="#D02F44"/&gt;&lt;rect x="0.5"
              width="6" height="5.6" fill="#46467F"/&gt;&lt;g
              filter="url(#filter0_d_12694_49953)"&gt;&lt;path
              fill-rule="evenodd" clip-rule="evenodd" d="M1.83317
              1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574
              1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574
              0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135
              1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005
              2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984
              1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727
              0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506
              1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506
              0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317
              1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317
              1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574
              1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574
              0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135
              5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096
              2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665
              1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317
              2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317
              2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665
              2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984
              1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317
              2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665
              1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984
              1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317
              2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984
              3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665
              2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317
              2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984
              3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665
              2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317
              3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665
              3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984
              3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317
              2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984
              3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317
              2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665
              2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984
              3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665
              4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317
              3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984
              3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317
              3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984
              3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665
              3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665
              3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984
              3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317
              3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984
              4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317
              4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665
              4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984
              4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665
              4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317
              4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984
              4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665
              4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317
              4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984
              4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317
              4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665
              4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984
              4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z"
              fill="url(#paint0_linear_12694_49953)"/&gt;&lt;/g&gt;&lt;/g&gt;&lt;defs&gt;&lt;filter
              id="filter0_d_12694_49953" x="1.1665" y="0.800049" width="4.6665"
              height="5" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"&gt;&lt;feFlood
              flood-opacity="0"
              result="BackgroundImageFix"/&gt;&lt;feColorMatrix in="SourceAlpha"
              type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"/&gt;&lt;feOffset dy="1"/&gt;&lt;feColorMatrix
              type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06
              0"/&lt;feBlend mode="normal" in2="BackgroundImageFix"
              result="effect1_dropShadow_12694_49953"/&gt;&lt;feBlend
              mode="normal" in="SourceGraphic"
              in2="effect1_dropShadow_12694_49953"
              result="shape"/&gt;&lt;/filter&gt;&lt;linearGradient
              id="paint0_linear_12694_49953" x1="1.1665" y1="0.800049"
              x2="1.1665" y2="4.80005"
              gradientUnits="userSpaceOnUse"&gt;&lt;stop
              stop-color="white"/&gt;&lt;stop offset="1"
              stop-color="#F0F0F0"/&gt;&lt;/linearGradient&gt;&lt;/defs&gt;&lt;/svg&gt;
              {"\n"}
              {"                              "}USA &lt;svg class="w-2.5 h-2.5
              ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 10 6"&gt;{"\n"}
              {"                              "}&lt;path stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4"/&gt;{"\n"}
              {"                              "}&lt;/svg&gt;&lt;/button&gt;
              {"\n"}
              {"                              "}&lt;div
              id="dropdown-search-city" class="z-10 hidden bg-white divide-y
              divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"&gt;{"\n"}
              {"                              "}&lt;ul class="py-2 text-sm
              text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button-2"&gt;{"\n"}
              {"                              "}&lt;li&gt;{"\n"}
              {"                              "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 text-sm text-gray-700
              hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600
              dark:hover:text-white" role="menuitem"&gt;{"\n"}
              {"                              "}&lt;div class="inline-flex
              items-center"&gt;{"\n"}
              {"                              "}&lt;svg aria-hidden="true"
              class="h-3.5 w-3.5 rounded-full me-2"
              xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us"
              viewBox="0 0 512 512"&gt;&lt;g fill-rule="evenodd"&gt;&lt;g
              stroke-width="1pt"&gt;&lt;path fill="#bd3d44" d="M0 0h247v10H0zm0
              20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0
              20h247v10H0zm0 20h247v10H0z"
              transform="scale(3.9385)"/&gt;&lt;path fill="#fff" d="M0
              10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0
              20h247v10H0zm0 20h247v10H0z"
              transform="scale(3.9385)"/&gt;&lt;/g&gt;&lt;path fill="#192f5d"
              d="M0 0h98.8v70H0z" transform="scale(3.9385)"/&gt;&lt;path
              fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6
              10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1
              2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7
              1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3
              1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4
              1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9
              2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1
              2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8
              2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9
              2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5
              0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4
              0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5
              0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3
              1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4
              1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7
              1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9
              2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7
              1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3
              1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3
              1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9
              2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1
              2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8
              2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9
              2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5
              0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4
              0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5
              0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3
              1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4
              1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7
              1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9
              2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9
              2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1
              2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
              transform="scale(3.9385)"/&gt;&lt;/g&gt;&lt;/svg&gt;
              {"              "}
              {"\n"}
              {"                              "}United States{"\n"}
              {"                              "}&lt;/div&gt;{"\n"}
              {"                              "}&lt;/button&gt;{"\n"}
              {"                              "}&lt;/li&gt;{"\n"}
              {"                              "}&lt;li&gt;{"\n"}
              {"                              "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 text-sm text-gray-700
              hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600
              dark:hover:text-white" role="menuitem"&gt;{"\n"}
              {"                              "}&lt;div class="inline-flex
              items-center"&gt;{"\n"}
              {"                              "}&lt;svg aria-hidden="true"
              class="h-3.5 w-3.5 rounded-full me-2"
              xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de"
              viewBox="0 0 512 512"&gt;&lt;path fill="#ffce00" d="M0
              341.3h512V512H0z"/&gt;&lt;path d="M0 0h512v170.7H0z"/&gt;&lt;path
              fill="#d00" d="M0 170.7h512v170.6H0z"/&gt;&lt;/svg&gt;{"\n"}
              {"                              "}Germany{"\n"}
              {"                              "}&lt;/div&gt;{"\n"}
              {"                              "}&lt;/button&gt;{"\n"}
              {"                              "}&lt;/li&gt;{"\n"}
              {"                              "}&lt;li&gt;{"\n"}
              {"                              "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 text-sm text-gray-700
              hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600
              dark:hover:text-white" role="menuitem"&gt;{"\n"}
              {"                              "}&lt;div class="inline-flex
              items-center"&gt;{"\n"}
              {"                              "}&lt;svg aria-hidden="true"
              class="h-3.5 w-3.5 rounded-full me-2"
              xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it"
              viewBox="0 0 512 512"&gt;&lt;g fill-rule="evenodd"
              stroke-width="1pt"&gt;&lt;path fill="#fff" d="M0
              0h512v512H0z"/&gt;&lt;path fill="#009246" d="M0
              0h170.7v512H0z"/&gt;&lt;path fill="#ce2b37" d="M341.3
              0H512v512H341.3z"/&gt;&lt;/g&gt;&lt;/svg&gt;{"              "}
              {"\n"}
              {"                              "}Italy{"\n"}
              {"                              "}&lt;/div&gt;{"\n"}
              {"                              "}&lt;/button&gt;{"\n"}
              {"                              "}&lt;/li&gt;{"\n"}
              {"                              "}&lt;li&gt;{"\n"}
              {"                              "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 text-sm text-gray-700
              hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600
              dark:hover:text-white" role="menuitem"&gt;{"\n"}
              {"                              "}&lt;div class="inline-flex
              items-center"&gt;{"\n"}
              {"                              "}&lt;svg aria-hidden="true"
              class="h-3.5 w-3.5 rounded-full me-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn"
              viewBox="0 0 512 512"&gt;&lt;defs&gt;&lt;path id="a"
              fill="#ffde00" d="M1-.3L-.7.8 0-1
              .6.8-1-.3z"/&gt;&lt;/defs&gt;&lt;path fill="#de2910" d="M0
              0h512v512H0z"/&gt;&lt;use width="30" height="20"
              transform="matrix(76.8 0 0 76.8 128 128)"
              xlink:href="#a"/&gt;&lt;use width="30" height="20"
              transform="rotate(-121 142.6 -47) scale(25.5827)"
              xlink:href="#a"/&gt;&lt;use width="30" height="20"
              transform="rotate(-98.1 198 -82) scale(25.6)"
              xlink:href="#a"/&gt;&lt;use width="30" height="20"
              transform="rotate(-74 272.4 -114) scale(25.6137)"
              xlink:href="#a"/&gt;&lt;use width="30" height="20"
              transform="matrix(16 -19.968 19.968 16 256 230.4)"
              xlink:href="#a"/&gt;&lt;/svg&gt;{"\n"}
              {"                              "}China{"\n"}
              {"                              "}&lt;/div&gt;{"\n"}
              {"                              "}&lt;/button&gt;{"\n"}
              {"                              "}&lt;/li&gt;{"\n"}
              {"                              "}&lt;/ul&gt;{"\n"}
              {"                              "}&lt;/div&gt;{"\n"}
              {"                              "}&lt;div class="relative
              w-full"&gt;{"\n"}
              {"                              "}&lt;input type="search"
              id="location-search" class="block p-2.5 w-full z-20 text-sm
              text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2
              border border-gray-300 focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:border-s-gray-700{"  "}dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white
              dark:focus:border-blue-500" placeholder="Search for city or
              address" required /&gt;{"\n"}
              {"                              "}&lt;button type="submit"
              class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium
              text-white bg-blue-700 rounded-e-lg border border-blue-700
              hover:bg-blue-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
              dark:focus:ring-blue-800"&gt;{"\n"}
              {"                              "}&lt;svg class="w-4 h-4"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20"&gt;{"\n"}
              {"                              "}&lt;path stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/&gt;{"\n"}
              {"                              "}&lt;/svg&gt;{"\n"}
              {"                              "}&lt;span
              class="sr-only"&gt;Search&lt;/span&gt;{"\n"}
              {"                              "}&lt;/button&gt;{"\n"}
              {"                              "}&lt;/div&gt;{"\n"}
              {"                              "}&lt;/div&gt;{"\n"}
              {"                              "}&lt;/form&gt;{"\n"}
              {"                            "}
            </code>
            {"\n"}
            {"                  "}
          </pre>
        </div>
      </div>
    </div>
    {/* Categories with drop down */}
    <div className="container mx-auto">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-[24px] font-bold text-pink-600">
          Search with dropdown
        </h1>
        <p className="text-gray-500 mt-1 text-[18px] font-medium">
          Use this search component with a dropdown to let your users select a
          category in which they would like the search query to be targeted in.
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
        <form className="max-w-lg mx-auto container p-6">
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              All categories{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-yellow-500 rounded-e-lg border border-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
          <span className="text-black font-medium">HTML</span>
          <button className="flex items-center space-x-1 text-black hover:text-gray-800">
            <i className="fa-solid fa-copy" />
            <span>Copy</span>
          </button>
        </div>
        {/* Content */}
        <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
          <pre className="text-xs whitespace-pre leading-tight pl-0">
            {"                          "}
            <code>
              {"\n"}
              {"                      "}&lt;form class="max-w-lg mx-auto
              container p-6"&gt;{"\n"}
              {"                      "}&lt;div class="flex"&gt;{"\n"}
              {"                      "}&lt;label for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only
              dark:text-white"&gt;Your Email&lt;/label&gt;{"\n"}
              {"                      "}&lt;button id="dropdown-button"
              data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10
              inline-flex items-center py-2.5 px-4 text-sm font-medium
              text-center text-gray-900 bg-gray-100 border border-gray-300
              rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none
              focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600
              dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"&gt;All categories &lt;svg class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 10 6"&gt;{"\n"}
              {"                        "}path stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4"/&gt;{"\n"}
              {"                        "}&lt;/svg&gt;&lt;/button&gt;{"\n"}
              {"                        "}&lt;div id="dropdown" class="z-10
              hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44
              dark:bg-gray-700"&gt;{"\n"}
              {"                        "}&lt;ul class="py-2 text-sm
              text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"&gt;{"\n"}
              {"                        "}&lt;li&gt;{"\n"}
              {"                        "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-gray-100
              dark:hover:bg-gray-600
              dark:hover:text-white"&gt;Mockups&lt;/button&gt;{"\n"}
              {"                        "}&lt;/li&gt;{"\n"}
              {"                        "}&lt;li&gt;{"\n"}
              {"                        "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-gray-100
              dark:hover:bg-gray-600
              dark:hover:text-white"&gt;Templates&lt;/button&gt;{"\n"}
              {"                        "}&lt;/li&gt;{"\n"}
              {"                        "}&lt;li&gt;{"\n"}
              {"                        "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-gray-100
              dark:hover:bg-gray-600
              dark:hover:text-white"&gt;Design&lt;/button&gt;{"\n"}
              {"                        "}&lt;/li&gt;{"\n"}
              {"                        "}&lt;li&gt;{"\n"}
              {"                        "}&lt;button type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-gray-100
              dark:hover:bg-gray-600
              dark:hover:text-white"&gt;Logos&lt;/button&gt;{"\n"}
              {"                        "}&lt;/li&gt;{"\n"}
              {"                        "}&lt;/ul&gt;{"\n"}
              {"                        "}&lt;/div&gt;{"\n"}
              {"                        "}&lt;div class="relative w-full"&gt;
              {"\n"}
              {"                        "}&lt;input type="search"
              id="search-dropdown" class="block p-2.5 w-full z-20 text-sm
              text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2
              border border-gray-300 focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:border-s-gray-700{"  "}dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white
              dark:focus:border-blue-500" placeholder="Search Mockups, Logos,
              Design Templates..." required /&gt;{"\n"}
              {"                        "}&lt;button type="submit"
              class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full
              text-white bg-blue-700 rounded-e-lg border border-blue-700
              hover:bg-blue-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
              dark:focus:ring-blue-800"&gt;{"\n"}
              {"                        "}&lt;svg class="w-4 h-4"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20"&gt;{"\n"}
              {"                        "}&lt;path stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/&gt;{"\n"}
              {"                        "}&lt;/svg&gt;{"\n"}
              {"                        "}&lt;span
              class="sr-only"&gt;Search&lt;/span&gt;{"\n"}
              {"                        "}&lt;/button&gt;{"\n"}
              {"                        "}&lt;/div&gt;{"\n"}
              {"                        "}&lt;/div&gt;{"\n"}
              {"                        "}&lt;/form&gt;{"\n"}
              {"                      "}
            </code>
            {"\n"}
            {"              "}
          </pre>
        </div>
      </div>
    </div>
    {/* Voice Search */}
    <div className="container mx-auto">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-[24px] font-bold text-pink-600">Voice search</h1>
        <p className="text-gray-500 mt-1 text-[18px] font-medium">
          Get started with this example if you would like to enable voice search
          for your website and users.
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
        <form className="flex items-center max-w-lg container p-6 mx-auto">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required=""
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border border-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
          <span className="text-black font-medium">HTML</span>
          <button className="flex items-center space-x-1 text-black hover:text-gray-800">
            <i className="fa-solid fa-copy" />
            <span>Copy</span>
          </button>
        </div>
        <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
          <pre className="text-xs whitespace-pre leading-tight pl-0">
            {"                               "}
            <code>
              {"\n"}
              {"                         "}&lt;form class="flex items-center
              max-w-lg container p-6 mx-auto"&gt;{"   "}
              {"\n"}
              {"                         "}&lt;label for="voice-search"
              class="sr-only"&gt;Search &lt;/label&gt;{"\n"}
              {"                         "}&lt;div class="relative w-full"&gt;
              {"\n"}
              {"                         "}&lt;div class="absolute inset-y-0
              start-0 flex items-center ps-3 pointer-events-none"&gt;{"\n"}
              {"                         "}&lt;svg class="w-4 h-4 text-gray-500
              dark:text-gray-400" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21
              21"&gt;{"\n"}
              {"                         "}&lt;path stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15
              15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1
              9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13
              18v-.857A2.034 2.034 0 0 1 15 15Z"/&gt;{"\n"}
              {"                         "}&lt;/svg&gt;{"\n"}
              {"                         "}&lt;/div&gt;{"\n"}
              {"                         "}&lt;input type="text"
              id="voice-search" class="bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full ps-10 p-2.5{"  "}
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500" placeholder="Search Mockups, Logos,
              Design Templates..." required /&gt;{"\n"}
              {"                         "}&lt;button type="button"
              class="absolute inset-y-0 end-0 flex items-center pe-3"&gt;{"\n"}
              {"                         "}&lt;svg class="w-4 h-4 text-gray-500
              dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 16 20"&gt;{"\n"}
              {"                         "}&lt;path stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7
              9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3
              3 0 0 1 3-3Z"/&gt;{"\n"}
              {"                         "}&lt;/svg&gt;{"\n"}
              {"                         "}&lt;/button&gt;{"\n"}
              {"                         "}&lt;/div&gt;{"\n"}
              {"                         "}&lt;button type="submit"
              class="inline-flex items-center py-2.5 px-3 ms-2 text-sm
              font-medium text-white bg-blue-700 rounded-lg border
              border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
              dark:focus:ring-blue-800"&gt;{"\n"}
              {"                         "}&lt;svg class="w-4 h-4 me-2"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20"&gt;{"\n"}
              {"                         "}&lt;path stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/&gt;{"\n"}
              {"                         "}&lt;/svg&gt;Search{"\n"}
              {"                         "}&lt;/button&gt;{"\n"}
              {"                         "}&lt;/form&gt;{"\n"}
              {"                               "}
            </code>
            {"     "}
            {"\n"}
            {"                            "}
          </pre>
        </div>
      </div>
    </div>
  </div>
</>




  </main>
  
</div>
</div>
  );
}

export default Component;
