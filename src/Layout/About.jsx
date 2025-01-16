import React from 'react';

function About(props) {
    return (
        <>
<<<<<<< HEAD
        <div className='flex justify-center py-2 sm:p-6'>
       
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Sidebar Component 1 */}
        <div className="w-full sm:w-64 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <img
                src="/img/icon.png"
                alt="Logo"
                className="w-10 h-10 rounded-full mr-3"
              />
              <h2 className="text-2xl font-semibold">Dashboard</h2>
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="material-icons">home</span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="material-icons">person</span>
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="material-icons">settings</span>
                  Settings
                </a>
              </li>
            </ul>
          </div>
=======
  <div className="flex flex-col lg:flex-row min-h-screen gap-6 p-6">
    {/* Sidebar Component 1 */}
    <div className="w-64 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center mb-6 bg-black">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-10 h-10 rounded-full mr-3"
          />
          <h2 className="text-2xl font-semibold">Dashboard</h2>
>>>>>>> 8ceb18b (add)
        </div>
      
        {/* Sidebar Component 2 */}
        <div className="w-full sm:w-64 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <img
                src="/img/icon.png"
                alt="Logo"
                className="w-10 h-10 rounded-full mr-3"
              />
              <h2 className="text-2xl font-semibold">Menu</h2>
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span className="material-icons">info</span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span className="material-icons">email</span>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span className="material-icons">help</span>
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      
        {/* Sidebar Component 3 */}
        <div className="w-full sm:w-64 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <img
                src="/img/icon.png"
                alt="Logo"
                className="w-10 h-10 rounded-full mr-3"
              />
              <h2 className="text-2xl font-semibold">Navigation</h2>
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span className="material-icons">dashboard</span>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span className="material-icons">folder</span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span className="material-icons">analytics</span>
                  Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>
      
        {/* Additional Sidebars... */}
      </div>
      
      {/* Material Icons */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      </div>
      </>
           
    );
}

export default About;