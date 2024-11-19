import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import FadeLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const About = () => {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setLoading(false);
    });
  }, []);
    return (
        <header id="about">
    <a className="btn download" href="#" download>Download PDF</a>
    <nav>
      <a href="#about" title>About</a>
      <a href="#work" title>Work Experience</a>
      <a href="#education" title>Education</a>
      <a href="#contact" title>Contact</a>
    </nav>
    <div className="content-wrap">
    {!loading && (
      <div>
      <img className="profile-img col-narrow" src={`data:image/jpg;base64, ${about.img}`}/>
      <div className="col-wide">
        <h1>{about.h1}</h1>
        <h2>Web Designer</h2>
        <p>{about.para}</p>
      </div>
      </div>
    )}
    {loading && <FadeLoader cssOverride={override} size={50} />}
    </div>
  </header>
    )
};

export default About ;