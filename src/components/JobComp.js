import React from 'react'


function JobComp(props) {
  return (
    <div>
      <section id={props.id} className="jobCard">
        <div className='logo_path'>
             <img src={require(`${props.logo}`)} alt='Company_logo'/> 
            {/* {props.ingredients.map((ingredient, i) => (                     
                   <li key={i}>{ingredient}</li>                    ))} */}
            </div>
        <div className='post-info'>
        <span className='postDate'>{props.postedAt}</span>
        <span className='separator'> . </span>
        <span className='contractType'>{props.contract}</span></div>
        <div className='position'>{props.position}</div>
        <div className='company'>{props.company}</div>
        <div className='location'>{props.location}</div>
      </section>
    </div>
  )
}

export default JobComp