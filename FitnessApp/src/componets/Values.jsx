import Image from "../images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { SiOpenaigym } from "react-icons/si";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";



const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
            <div className="values__image">
                <img src={Image} alt="" />
            </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond/> } title="Values" />  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore nihil unde id architecto voluptatum?</p>
        <div className="values__wrapper">

            {
                values.map(({id,icon,title,desc})=>{
                    return<Card className="values__value"
                    key={id}
                    >
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                    </Card>
                })
            }
        </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
