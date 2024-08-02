import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rocket from '../../basic-react/src/assets/roket1.svg'
import feature1 from '../../basic-react/src/assets/img01.png'
import feature2 from '../../basic-react/src/assets/img02.png'
import feature3 from '../../basic-react/src/assets/img03.png'
import feature4 from '../../basic-react/src/assets/img04.png'

const Lol=()=>{
  return (
   
    <div class="header">
      <ul class="menu">
        <li>
          <a href="target=_blank"> HOME </a>
        </li>
        <li>
          <a href="target=_blank"> FEATURE </a>
        </li>
        <li>
          <a href="target=_blank"> ROADMAP </a>
        </li>
        <li>
          <a href="target=_blank"> BLOG </a>
        </li>
        <li>
          <a href="target=_blank"> CONTACT </a>
        </li>
        

      </ul>

    </div>

   
  )
}

const Lol1=()=>{
  return (
    <div class= "banner">
      <div class="banner1"></div>
     <p>Putting Your Money in Product<br></br>
      Backed Projects
     </p>
     <div class="img0" >
      <img src={rocket} alt=''/>
     </div>
     <div class="login">
       <button> Login </button>
     </div>
      
    </div>
  )
}

const Lol2=()=>{
  return (
    <div class="imran">
      <p>Ico Will Start in.. </p>
      <div class="imran1">
       <div class="imran2">
        <div class="imran3">
          
        </div>
       </div>

      </div>
      
    </div>
  )
}

const Lol3=()=>{
  return (
   <div className="main">
    <div class="child"> 

    <div class="baby"> <h2>Mobile Payment <br/>Make Easy </h2><br/><p>Add new, trending and rare <br/> artwork to your collection.</p></div>
    <div class="img"><img src={feature1} alt=''/></div>
    </div>

    <div class="child"> <div class="baby"> <h2>Lifetime Free <br/>Transaction </h2><br/><p>Add new, trending and rare <br/> artwork to your collection.</p></div>
    <div class="img"><img src={feature2} alt=''/></div>
    </div>

    <div class="child"> <div class="baby"> <h2>Protect The Identity  </h2><br/><p>Add new, trending and rare<br/> artwork to your collection.</p></div>
    <div class="img"><img src={feature3} alt=''/></div>
    </div>

    <div class="child"><div class="baby"> <h2>Security&Control<br/>Over Money </h2><br/><p>Add new, trending and rare <br/> artwork to your collection.</p></div>
    <div class="img"><img src={feature4} alt=''/></div>
    </div>

   </div>
  )
}

const Lol4=()=>{
  return (
    <div className="sdk">
     <div class="mrk">

      <div class="nrk">
        <div class="pdr"></div>
        <div class="pdr"></div>
        <div class="pdr"></div>

      
        
        <div class="pbr"></div>
      </div>
     </div>
    </div>
  )
}


function App() {

  return (
    <>
    
    <Lol/>
    
    <Lol1/>

    <Lol2/>

    <Lol3/>

    <Lol4/>

    </>
  )
}

export default App
