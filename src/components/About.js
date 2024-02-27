import AboutImg from '../assets/about.png'
export default function About(){
    return <section className='flex flex-col md:flex-row bg-primary px-5 ' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div  className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[rgb(115,168,206)] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5' >Hi i am Tamizh Selvan .I am Software Developer . I built my Portfolio website using React.js and Tailwind css</p>
            <p className='pb-5'>I am proficient in Frontend skills like Javascript,React.js,Css,Html  </p>
            <p className='pb-5'> In Backend skills like SQL, MongoDB, Git</p>
            </div>
            
        </div>
    </section>
}