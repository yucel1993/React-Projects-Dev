import Header from "../about/Header";
import "./contact.scss";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia ipsam harum quisquam ex et, expedita est temporibus.
      </Header>
        <section className="contact">
          <div className="container contact__container">
            <div className="contact__wrapper">
              <a href="mailto:alpagut1993@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
              <a href="https://www.linkedin.com/in/burhan-yucel/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin/></a>
              <a href="https://wa.me/+491637879999" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
            </div>
          </div>
        </section>
    </>
  );
}

export default Contact;
