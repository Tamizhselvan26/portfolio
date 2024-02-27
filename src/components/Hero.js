import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin ,AiOutlineGithub} from "react-icons/ai";
export default function Hero(){
    

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='w-1/2 flex flex-col'>
             <h1 className='md:w-1/2 text-white text-6xl font-hero-font' >Hi, <br/>Im<span className='text-black'>TamizhSelvan</span>
             <p className='text-2xl'>I am  a Software developer</p>
             </h1>
             <div className='flex py-10 '>   
                <a href='https://www.linkedin.com/in/tamizh-selvan-r-6335aa202/' className='pr-5 hover:text-white' ><AiOutlineLinkedin size={40}/></a>
                <a href='https://github.com/Tamizhselvan26' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
             </div>
       </div>
       <img className='md:w-1/3'src={HeroImg}></img>
    </section>
}
