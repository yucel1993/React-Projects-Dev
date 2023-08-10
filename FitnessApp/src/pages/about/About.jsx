import Header from "./Header";
import "./about.scss";
import headerImage from "../../images/header_bg_1.jpg";
import storyImage from "../../images/about1.jpg";
import visionImage from "../../images/about2.jpg";
import missionImage from "../../images/about3.jpg";

function About() {
  return (
    <>
      <Header title="About Us" image={headerImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto numquam
        quidem magni illum culpa est vel alias magnam eveniet! Ipsum?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={storyImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus itaque nulla magni iste quae nam quas, excepturi ab
              beatae unde. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Soluta voluptatem accusamus nobis explicabo placeat quasi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              itaque nostrum quasi voluptates ex, repellat fugit necessitatibus
              magni quibusdam dolores?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              labore deleniti possimus et necessitatibus ratione excepturi
              incidunt.
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__story-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus itaque nulla magni iste quae nam quas, excepturi ab
              beatae unde. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Soluta voluptatem accusamus nobis explicabo placeat quasi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              itaque nostrum quasi voluptates ex, repellat fugit necessitatibus
              magni quibusdam dolores?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio vel ratione quibusdam expedita, eos id necessitatibus earum fugit! Maiores.</p>
          </div>
          <div className="about__section-image">
            <img src={visionImage} alt="" />
          </div>
        </div>
      </section>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={missionImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus itaque nulla magni iste quae nam quas, excepturi ab
              beatae unde. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Soluta voluptatem accusamus nobis explicabo placeat quasi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              itaque nostrum quasi voluptates ex, repellat fugit necessitatibus
              magni quibusdam dolores?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              labore deleniti possimus et necessitatibus ratione excepturi
              incidunt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
