import React, {useState} from 'react'
import './cardsProjectsContainer.css'
import CardsProjects from '../cardsProjects/CardsProjects'
import projects from '../cardsProjects/projects';

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

  return (
<>
    <div className="">
    <h2 className="cardsProjectsContainerTitle">Some of my projects</h2>
    </div>
      
    <div className='cardsProjectsContainer'>
         
        {data.map((item, index) => {
          if (item.category === data1 || data1 === "") {
            return (
                <CardsProjects
                img={item.img}
                img2={item.img2}
                img3={item.img3}
                title={item.title}
                description={item.description}
                description2={item.description2}
                description3={item.description3}
                specifications={item.specifications}
                price={item.price}
                size={item.size}
                price2={item.price2}
                size2={item.size2}
                material={item.material}
                item={item}
                key={index}
              />
              
            );
          }
        })}
      </div>
      </>
  )
}

export default CardsProjectsContainer
