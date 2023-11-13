import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { id, image, url, title } }) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={`https://www.aljazeera.com${image}`} alt='' />
        </div>
        <div className='text'>
          {/* <span className='category'>{catgeory}</span> */}
          <Link to={`/singlepage/${id}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            {/* <span>by {authorName}</span> */}
            {/* <span>{time}</span> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
