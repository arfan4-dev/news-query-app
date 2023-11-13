import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Side from "../home/sideContent/side/Side"
import "../home/mainContent/homes/style.css"
import "./singlepage.css"
import "../home/sideContent/side/side.css"
import SinglePageSlider from "./slider/SinglePageSlider"
import axios from "axios"
import { useQuery } from "react-query"

const CategoryPage = () => {
  const { id } = useParams()
  const [item, setItem] = useState()
console.log('id:',id)

const { data, isLoading, isError, error } = useQuery('fetch-data7', async () => {
  const res=await axios.get(`https://backend.zimomeet.com/api/zimomeet_app/category-wise-news?category_id=${id}`, {
    headers: {
      "api-key": "786ZM786"
    }

  });
  console.log('category:',res.data.data)
  return res.data.data
});


  if(isLoading){
    return <h1>Loading category....</h1>
  }
  return (
    <>
      {data.length===0 && data.category_id==null ?(<h1>
    <h3>No Data Found</h3>
    </h1>): (
        <main>
          <SinglePageSlider />

          {
            data.map((val)=>{
                return (
                    <div className='container'>
            <section className='mainContent details'>
              <h1 className='title'>{val.title}</h1>

              <div className='author'>
                <span>Date:</span>
                {/* <img src={`item.authorImg`} alt='' /> */}
                {/* <p> {`item.authorName`} on</p> */}
                <label>{val.created_at}</label>
              </div>

             

              <div className='desctop'>
                
                      <p style={{textAlign:'justify'}}>{data.content}</p>
              </div>

              <img style={{}} src={`https://www.aljazeera.com${val.image}`} alt='' />
           
          

              <div className='descbot'>
                
                 
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
               
                  {/* <p>{item.content.slice(300,600)}</p> */}
               
              </div>

              {/* <div className='desctop'>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div> */}
            </section>
            {/* <section className='sideContent'>
              <Side />
            </section> */}
          </div>
                )
            })
          }
          
        </main>
      )} 
    </>
              )
}

export default CategoryPage
