const AboutMe = (props) => {
  return (
    <section>
      <h2>About me</h2>
      <div className="Font-mulish">
        <p>
          I’m a professional
          <span className="DarkBlue font-semibold">
            {" "}
            Full-stack Developer and Programmer
          </span>
          , experienced in a vast range of technologies in Frontend, Backend,
          Databases, Blockchain, Programming languages, etc.{" "}
        </p>
        <p>
          I enjoy solving complex problems and building application that solves
          real-world problems and learning a new technology is always exciting
          for me.
        </p>
        <p>
          Apart from programming, I like to run in the park on a nice evening,
          as it refreshes my mind and brings more creative ideas.
        </p>
        <p>
          In my journey of Programming, I go by the codename:{" "}
          <span className="DarkRed font-semibold">Devstardude</span>{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
