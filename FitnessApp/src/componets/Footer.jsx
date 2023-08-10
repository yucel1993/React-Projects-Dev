import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { Link } from "react-router-dom"
import myLogo from "../images/myLogo.png"


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img width="1rem" src={myLogo} alt="" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis earum facilis inventore quam alias.</p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><AiFillLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><AiFillFacebook/></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><BsTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><BiLogoInstagramAlt/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
                
            </article>
        </div>
        <div className="footer__copyright"><small>{new Date().getFullYear} Burhan Yucel &copy;All Rights Reserved</small></div>
        
    </footer>
  )
}

export default Footer