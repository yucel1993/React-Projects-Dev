import { BsChatSquareTextFill } from "react-icons/bs";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Student",
    avatar: "./images/avatar1.jpg",
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Software Egineer",
    avatar: "./images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "University Lecturer",
    avatar: "./images/avatar3.jpg",
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Talking Parrot",
    avatar: "./images/avatar4.jpg",
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Pharmacist",
    avatar: "./images/avatar5.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(1);
  const { name, quote, job, avatar } = testimonials[index];
  
  const prevTestimonial=()=>{
    setIndex(prevIndex=>prevIndex-1)
    if(index<=0){
        setIndex(testimonials.length-1)
    }
}

  const nextTestimonial=()=>{
    setIndex(prevIndex=>prevIndex+1)
    if(index>=testimonials.length-1){
        setIndex(0)
    }
  }
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<BsChatSquareTextFill />}
          className="testimonials__head"
          title="Testimonials"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button onClick={prevTestimonial} className="testimonials__btn">
            <BiLeftArrowCircle  />
          </button>
          <button onClick={nextTestimonial} className="testimonials__btn">
            <BiRightArrowCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
