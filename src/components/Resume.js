import ResumeImg from '../assets/resume.jpg'
export default function Resume(){
    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5 '>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end' >
            <img className="w-[300px]"src={ResumeImg}/>
        </div>
        <div  className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[rgb(115,168,206)] mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5' >You can view my resume <a className='btn' href='TAMIZHSELVAN R DEVELOPER.pdf' download="TAMIZHSELVAN R DEVELOPER.pdf">Download</a></p>
        </div>
            
        </div>
    </section>
}