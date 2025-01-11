import React from 'react';

function Docs() {
    return (
        <div className="">
            <div className="container mx-auto m-6 px-4 flex justify-center">
                {/* Sidebar */}
                <aside className="w-1/4 bg-white rounded-lg shadow-lg p-4 hidden sm:block">
                    <nav className="space-y-4">
                        <a href="#introduction" className="block text-pink-600 font-semibold">Introduction</a>
                        <a href="#installation" className="block hover:text-pink-600">Installation</a>
                        <a href="#components" className="block hover:text-pink-600">Components.json</a>
                        <a href="#darkmode" className="block hover:text-pink-600">Darkmode</a>
                        <a href="#buttons" className="block hover:text-pink-600">Buttons</a>
                        <a href="#inputs" className="block hover:text-pink-600">Inputs</a>
                        <a href="#sidebars" className="block hover:text-pink-600">Side Bars</a>
                        <a href="#navbars" className="block hover:text-pink-600">Navigation Bars</a>
                        <a href="#about-us" className="block hover:text-pink-600">About Us</a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="w-3/4 ml-6">
                    {/* Introduction */}
                    <section id="introduction" className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h1 className="text-2xl font-bold text-pink-600">Introduction</h1>
                        <p className="mt-4 text-gray-700">
                            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                        </p>
                        <p className="mt-4 text-gray-700">
                            This is NOT a component library. It’s a collection of re-usable components that you can copy and paste into your apps.
                        </p>
                        <p className="mt-4 text-pink-600 font-semibold">
                            What do you mean by not a component library?
                        </p>
                        <p className="mt-2 text-gray-700">
                            I mean you do not install it as a dependency. It is not available or distributed via npm.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Pick the components you need. Copy and paste the code into your project and customize it to your needs. The code is yours.
                        </p>
                        <p className="mt-2 text-gray-500 italic">
                            Use this as a reference to build your own component libraries.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h2 className="text-xl font-bold text-pink-600">FAQ</h2>
                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-700">
                                Why copy/paste and not packaged as a dependency?
                            </h3>
                            <p className="mt-2 text-gray-700">
                                The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-700">
                                Can I use this in my project?
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Yes. Free to use for personal and commercial projects. No attribution required. But hey, let me know if you do. I’d love to see what you build.
                            </p>
                        </div>
                    </section>

                    {/* Installation */}
                    <section id="installation" className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h2 className="text-xl font-bold text-pink-600">Installation - Rachna</h2>
                        <p className="mt-4 text-gray-700">
                            Get started with Rachna by including it into your project using CDN.
                        </p>
                        <h3 className="mt-6 font-semibold text-gray-700">Include via CDN</h3>
                        <p className="mt-2 text-gray-700">
                            The quickest way to get started working with Rachna is to simply include the CSS and JavaScript into your project via CDN. Require the following minified stylesheet inside the head tag:
                        </p>
                        <pre className="bg-pink-100 text-pink-800 p-4 rounded-lg mt-4 overflow-auto mt-3 flex items-start">
                            <i className="fa-regular fa-copy text-white"></i>
                            &lt;link rel="stylesheet" href="https://cdn.rachna.com/styles.min.css" /&gt;
                        </pre>
                    </section>

                    {/* Components.json */}
                    <section id="components" className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h2 className="text-xl font-bold text-pink-600">Components.json</h2>
                        <p className="mt-4 text-gray-700">Configuration for your project.</p>
                        <p className="mt-4 text-gray-700">
                            The components.json file holds configuration for your project.
                        </p>
                        <p className="mt-4 text-gray-700">
                            We use it to understand how your project is set up and how to generate components customized for your project.
                        </p>
                        <p className="mt-2 text-gray-500 italic">
                            Note: The components.json file is optional and only required if you’re using the CLI to add components to your project. If you’re using the copy and paste method, you don’t need this file.
                        </p>

                        <h3 className="mt-6 font-semibold text-gray-700">
                            You can create a components.json file in your project by running the following command:
                        </h3>
                        <pre className="bg-pink-100 text-pink-800 p-4 rounded-lg mt-4 overflow-auto mt-3 flex items-start">
                            <i className="fa-regular fa-copy text-white"></i>
                            pnpm npm yarn bun
                            npx shadcn@latest init
                        </pre>
                        <p className="mt-2 text-gray-700">
                            See the <a href="#cli" className="text-pink-600 hover:underline">CLI section</a> for more information.
                        </p>

                        <h2 className="mt-6 font-semibold text-pink-600">$schema</h2>
                        <br />
                        <hr />
                        <p className="mt-2 text-gray-700">
                            You can see the JSON Schema for components.json <a href="#" className="text-pink-600 hover:underline">here</a>.
                        </p>
                        <pre className="bg-pink-100 text-pink-800 p-4 rounded-lg mt-4 overflow-auto mt-3 flex items-start">
                            <i className="fa-regular fa-copy text-white"></i>
                            {"{"}
                                "$schema": "https://ui.shadcn.com/schema.json"
                            {"}"}
                        </pre>
                        <h2 className="mt-6 font-semibold text-pink-600">style</h2>
                        <br />
                        <hr />
                        <p className="mt-2 text-gray-700">
                            The style for your components. This cannot be changed after initialization.
                        </p>
                        <pre className="bg-pink-100 text-pink-800 p-4 rounded-lg mt-4 overflow-auto mt-3 flex items-start">
                            <i className="fa-regular fa-copy text-white"></i>
                            {"{"}
                                "style": "default" | "new-york"
                            {"}"}
                        </pre>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Docs;