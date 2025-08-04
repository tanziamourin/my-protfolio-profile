import React from "react";

const LearnMoreAboutMe = () => {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg my-16">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        About Me
      </h1>

      {/* About Me Section */}
      <section className="mb-12 text-gray-800 dark:text-gray-300 leading-relaxed space-y-4 text-lg">
        <p>
          Hi! I’m <span className="font-semibold text-cyan-600 dark:text-amber-400">Tanzia Mourin Chowdhury</span>, a passionate web developer with expertise in React, Node.js, and MongoDB. I love building beautiful and performant web applications.
        </p>
        <p>
          I have experience in front-end and back-end development, and I enjoy solving complex problems with elegant solutions.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-cyan-600 dark:border-amber-400 pb-2">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <li>
            <strong>Bachelor of Arts (BA)</strong>
            <br />
            Chunarughat Govt College
          </li>
          <li>
            <strong>Higher Secondary Certificate (HSC)</strong>
            <br />
            Moulovibar Govt Women's College
          </li>
          <li>
            <strong>Secondary School Certificate (SSC)</strong>
            <br />
            Ideal School and College
          </li>
        </ul> 
        <a href="/" className="btn "> go to home </a>
      </section>
    </div>
  );
};

export default LearnMoreAboutMe;
