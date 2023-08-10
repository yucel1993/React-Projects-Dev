import { FaCrown } from "react-icons/fa";
import {SiOpenaigym} from 'react-icons/si'
import {AiFillCaretRight} from 'react-icons/ai'

import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { Link } from "react-router-dom";



const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    }
]



function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown/>}title="Programs" />
     
      <div className="programs__wrapper">
    {
        programs.map(({id,icon,title,info,path})=>{
            return <Card className="programs_program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm"> Learn More <AiFillCaretRight/></Link>
             </Card>
        })
    }
     </div>
      </div>
    </section>
  );
}

export default Programs;
