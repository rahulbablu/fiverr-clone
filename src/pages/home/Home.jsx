import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import './Home.scss'
import { cards, projects } from "../../data";
import CatCard from '../../components/catCard/CatCard'
import Features from '../../components/features/Features'
import Business from '../../components/business/Business'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured /> 
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards?.map((item) => (
            <CatCard key={item.id} item={item} />
          ))}
      </Slide>
      <Features />
      <Business />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {projects?.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
      </Slide>
    </div>
  )
}

export default Home