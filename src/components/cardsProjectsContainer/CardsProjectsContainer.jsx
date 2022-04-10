import React, {useState} from 'react'
import './cardsProjectsContainer.css'
import CardsProjects from '../cardsProjects/CardsProjects'
import projects from '../cardsProjects/projects';
import { motion } from "framer-motion/dist/framer-motion";

const CardsProjectsContainer = () => {
    const [filter, setFilter] = useState("");
    const searchText = (event) => {
      setFilter(event.target.value);
    };
    console.log(filter);

    let data = projects.projecstPortfolio.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(filter.toString().toLowerCase())
        );
      });
    
    const [data1, setData1] = useState("");

    const   [noOfElement, setNoOfElement] = useState(3);
    const loadMore =()=>{
      setNoOfElement(noOfElement +  noOfElement);
    }
    const slice = projects.projecstPortfolio.slice(0, noOfElement);

  return (
<>
    <div className="">
    <h2 className="cardsProjectsContainerTitle">Some of my projects</h2>
    </div>
      
    <div className='cardsProjectsContainer'>
         
        {slice.map((item, index) => {
          if (item.category === data1 || data1 === "") {
            return (
                <CardsProjects
                img={item.img}
                img2={item.img2}
                img3={item.img3}
                title={item.title}
                description={item.description}
                description2={item.description2}
                description3={item. description3}
                linkGitHub={item.linkGitHub}
                link={item.link}
                item={item}
                key={index}
              />
              
            );
          }
        })}
        <div className="">
        <motion.button className='loadMoreButton' onClick={()=>loadMore()}
                 whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgb(128,0,128)",
                  boxShadow: "0px 0px 8px rgb(128,0,128)",
                  textDecoration: "none",
                  originY: 0,
                }}
        >
          Load More
        </motion.button>
        </div>
      </div>
      </>
  )
}

export default CardsProjectsContainer
