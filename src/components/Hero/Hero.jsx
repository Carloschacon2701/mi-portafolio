
import foto from "../../images/pepe.jpg";
import "./HeroStyles.css";
import { Typewriter } from 'react-simple-typewriter'
import "aos/dist/aos.css";

export const Hero = () => {


  return (
    <div id="hero">
        <img className='background' alt=' ' src={foto}/>
        <div className='my-name' >
            <h1  >Hi! I am  <br/>  <Typewriter
            words={['Carlos Chacon']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1500} /> </h1>
            <p className='description'>JavaScript - HTML - CSS And React-JS</p>
        </div>
    

    </div>
  )
}
