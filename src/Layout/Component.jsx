import React from "react";

function Component(props) {
  return (
    <div className="container mx-auto flex mt-8 px-6 sm:w-[320px] md:w-[768px] lg:w-[1024px]">
      {/* Sidebar */}
      <aside className="w-1/4 bg-red-100 p-4 rounded-lg">
        <nav className="space-y-4">
          <a
            href="#"
            className="block hover:bg-red-500 hover:text-white text-red-700  font-medium p-2 rounded"
          >
            Buttons
          </a>
          <a
            href="#"
            className="block hover:bg-red-500 hover:text-white text-red-700  font-medium p-2 rounded"
          >
            Inputs
          </a>
          <a
            href="#"
            className="block hover:bg-red-500 hover:text-white text-red-700 font-medium p-2 rounded "
          >
            Sidebars
          </a>
          <a
            href="#"
            className="block hover:bg-red-500 hover:text-white text-red-700 font-medium p-2 rounded"
          >
            Navigation
          </a>
        </nav>
      </aside>
      {/* Content Area */}
      <main className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-pink-600">
          Tailwind CSS Inputs - Rachna
        </h1>
        <p className="text-gray-500 mt-2">
          The navbar component can be used to show a list of navigation links
          positioned on the top side of your page based on multiple layouts,
          sizes, and dropdowns
        </p>
        <hr className="my-4" />
        <div className="container mx-auto p-6">
          {/* Header Section */}
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-pink-600">Search Box</h1>
            <p className="text-gray-500 mt-1">
              Basic navbar example with title as Logo.
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
            <div className="p-12 bg-gray-100">
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante.
              </p>
            </div>
          </div>
        </div>
        {/* Input label */}
        <div className="container mx-auto p-6">
          {/* Header Section */}
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-pink-600">Input Name</h1>
            <p className="text-gray-500 mt-1">
              Basic navbar example with title as Logo.
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
            <div className="p-12 bg-gray-100">
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Component;
