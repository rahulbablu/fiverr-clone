import React from 'react'
import './ProjectCard.scss'

const ProjectCard = ({item}) => {
  return (
    <div className='projectCard'>
        <img src={item.img} />
        <div className="profile">
            <img className='profile-pic' src={item.pp} />
            <div className="profile-info">
                <p className='category'>{item.cat}</p>
                <p className='username'>by {item.username}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard