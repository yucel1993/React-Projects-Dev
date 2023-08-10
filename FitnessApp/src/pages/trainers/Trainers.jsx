import "./Trainers.scss";
import HeaderImage from "../../images/header_bg_5.jpg";
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import Header from "../about/Header";
import Trainer from "../../componets/Trainer";


const Trainer1 = './images/trainer1.jpg'
const Trainer2 = './images/trainer2.jpg'
const Trainer3 = './images/trainer3.jpg'
const Trainer4 = './images/trainer4.jpg'
const Trainer5 = './images/trainer5.jpg'
const Trainer6 = './images/trainer6.jpg'


const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]






function Trainers() {
  return <>
  <Header title="Our Trainers" image={HeaderImage}>
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
      {
  trainers.map(({ id, image, name, job, socials }) => (
    <Trainer
      key={id}
      image={image}
      name={name}
      job={job}
      socials={[  // Corrected 'socials'
        { icon: <BsInstagram />, link: socials[0] },
        { icon: <AiOutlineTwitter />, link: socials[1] },
        { icon: <FaFacebookF />, link: socials[2] },
        { icon: <FaLinkedinIn />, link: socials[3] }
      ]}
    />
  ))
}

      </div>
    </section>
    </>;
}

export default Trainers;
