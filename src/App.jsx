import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/Cards'
import data from './data'
import './App.css'

function App(){
  
  const getData = data.map(item=>{
    return(
      <Cards 
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />

    )
  }) 

  return(
    <article className='main'>
      <Nav />
      <Hero />
      <div className='cards-container'>
        {getData}
      </div>
    </article>
  )
}

export default App
