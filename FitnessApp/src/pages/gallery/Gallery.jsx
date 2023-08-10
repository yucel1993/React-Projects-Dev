import Header from "../about/Header";
import "./gallery.scss";
import HeaderImage from "../../images/header_bg_3.jpg"

const images=[

  {
      img:"./images/gallery1.jpg"
  },
  {
      img:"./images/gallery2.jpg"
  },
  {
      img:"./images/gallery3.jpg"
  },
  {
      img:"./images/gallery4.jpg"
  },
  {
      img:"./images/gallery5.jpg"
  },
  {
      img:"./images/gallery6.jpg"
  },
  {
      img:"./images/gallery7.jpg"
  },
  {
      img:"./images/gallery8.jpg"
  },
  {
      img:"./images/gallery9.jpg"
  },
  {
      img:"./images/gallery10.jpg"
  },
  {
      img:"./images/gallery11.jpg"
  },
  {
      img:"./images/gallery12.jpg"
  },
  {
      img:"./images/gallery13.jpg"
  },
  {
      img:"./images/gallery14.jpg"
  },
  {
      img:"./images/gallery15.jpg"
  },
]

function Gallery() {


  return <>
  <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus deserunt. Similique, vel. Aliquid odit labore fuga possimus debitis laborum.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((imge,index)=>{
            return <article key={index}>
              <img src={imge.img} alt="dasdf" />
            </article>
          })
        }
      </div>
    </section>
    </>;
}

export default Gallery;
