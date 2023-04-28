import React, { useState } from 'react';
import './App.css'

function App() {
  const images=[
    {id:0,value:'./images/Advice.jpg'},{id:1,value:'./images/Death.jpg'},
    {id:2,value:'./images/Doggies.jpg'},{id:3,value:'./images/Doggy.jpg'},
    {id:4,value:'./images/Grave.jpg'},{id:5,value:'./images/HollyFamily.jpg'},
    {id:6,value:'./images/Italy.jpg'},{id:7,value:'./images/Motivate.jpg'},
    {id:8,value:'./images/Repent.jpg'},{id:9,value:'./images/Rainbow.jpg'}
  ]

   /* Above images directly call from images folder which is in public folder.
      If images folder kept in src folder first need to import folder before
      call images in to array. */

  const [sliderData,setSliderData]=useState(images[0])
  const handleClick=(index)=>{
    console.log(index)
    const slider=images[index]
    setSliderData(slider)
  }

   /* React Hook useState use to change main image.
      console.log method use to get console value.
      it's help to update index value. setSliderData updates
      sliderData value */ 

  return (
      <div> 
        <h2 className='Main'>IMAGE - SLIDER</h2>
      <div className='Img'>
        <img src={sliderData.value} className='Border' height={450} width={750}/>
        <div className='Flex'>
        {
          images.map((data,i)=>
          <div className='Thumbnail'>
          <img className={sliderData.id==i?'Clicked':''} src={data.value} onClick={()=>handleClick(i)} height={79} width={110}/>
          </div>
        )
        }
      </div>
      </div>
      </div>
    );

   /* From .map array method create new array to open all existing images.
      Anton Prasantha Fernando All Right Reserved!. 
                   27/04/02023 */
  


}

export default App;