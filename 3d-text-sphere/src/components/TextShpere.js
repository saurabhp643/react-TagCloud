import React, { useEffect, useState } from "react";
import "../styles/TextShpere.css"; // Ensure your CSS styles are defined here

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB", "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB", "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB", "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB", "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB", "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB", "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",    ];

    const options = {
      radius: 3000,
      direction:190,
      maxSpeed: "fast", 
      initSpeed: "fast", 
      keep: true,
      textAlign: "center", 
    };

    // Initialize TagCloud animation
    const tagCloud = TagCloud(container, texts, options);

    // Clean up the effect
    return () => {
      tagCloud.destroy(); // Clean up the TagCloud instance on unmount
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    setName('');
    setEmail('');
  };

  return (
    <div className="text-shpere">
      <span className="tagcloud"></span>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>My Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TextShpere;
