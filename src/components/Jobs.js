import React from 'react'

function Jobs(props) {
  return (
    <div>
      <section id={props.id} className="Job">
        <div className='logo_path'>
            {props.logo.map((logo,i)=>({logo}))}
            {/* {props.ingredients.map((ingredient, i) => (                     
                   <li key={i}>{ingredient}</li>                    ))} */}
            </div>
        <div className='post-info'><span>{props.postedAt}</span><span>{props.contract}</span></div>
        <div className='position'>{props.Position}</div>
        <div className='company'>{props.Company}</div>
        <div className='location'>{props.location}</div>
      </section>
    </div>
  )
}

export default Jobs


