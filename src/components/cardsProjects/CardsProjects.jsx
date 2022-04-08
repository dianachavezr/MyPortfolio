import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";
import './cardsProjects.css'

const CardsProjects = (props) => {  
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <>
 
    {/*Front card Begining*/}
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        flipSpeedBackToFront="1"
        flipSpeedFrontToBack="1"
      >
        <div className='cardsProjecsContainer'>
          <div className="cardsProjects">
            <div className="cardsProjectsImgBox">
              <img src={props.img} alt="" className="cardsProjectsImg" />
            </div>
            <h3 className="cardsProjectsTitle">{props.title}</h3>
            <div className="cardsProjectsParagraphBox">
              <p className="cardsProjectsParagraph">{props.description}</p>
              <p className="cardsProjectsParagraph">Tamaño: {props.size}</p>
            </div>
            <p className="cardsProjectsPrice">Precio: ${props.price} COP</p>

            <button className="btnVer" onClick={handleClick}>
              Ver Más
            </button>

          </div>
        </div>

        <div>
          <div className="cardsProjects2">
            <h3 className="cardsProjects2Title">{props.title}</h3>
            <div className="cardsProjects2Box">
              <div className="cardsProjects2ImgBox">
                <img src={props.img2} alt="" className="cardsProjects2Img" />
              </div>

              <div className="cardsProjects2ParagraphBox">
              <p className="cardsProjects2Paragraph">
                  <span>Tamaño:</span> {props.size}
                </p>
                <p className="cardsProjects2Paragraph">
                  <span>Precio: </span>${props.price} COP
                </p>

                <p className="cardsProjects2Paragraph">
                  <span>Descripción: </span>
                  {props.description2}
                </p>
              </div>
            </div>
            {/*Front card End*/}
            {/*Back card Begining*/}
            <div className="cardsProjects2Box">
              <div className="cardsProjects2ParagraphBox">
              
                <p className="cardsProjects2Paragraph">
                  <span>Material: </span>
                  {props.material}
                </p>
                <p className="cardsProjects2Paragraph">{props.description3}</p>
                <p className="cardsProjects2Paragraph">
                  <span>Especificaciones: </span>
                  {props.specifications}
                </p>
                <p className="cardsProjects2Paragraph">
                  <span>Tamaño: </span>
                  {props.size2} 
                </p>
                <p className="cardsProjects2Paragraph">
                  <span>Precio: </span>
                   ${props.price2} pedido bajo demanda
                </p>
              </div>
              <div className="cardsProjects2ImgBox">
                <img src={props.img3} alt="" className="cardsProjects2Img" />
              </div>
            </div>
            <div className="cardsProjects2Buttons">
              <button className="btnVer" onClick={handleClick}>
                Volver
              </button>

            </div>
          </div>
        </div>
        {/*Back card End*/}
      </ReactCardFlip>
      </>
  );
}

export default CardsProjects
