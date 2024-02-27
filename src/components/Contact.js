import ResumeImg from '../assets/front-img.jpeg'
export default function Contact(){
    return <section id='contact' className='flex flex-col  bg-secondary px-5 py-32 '>
       
        <div  className=' flex flex-col items-center  text-white'>
           
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5' >If you want to discuss more in detail, Please contact </p>
            <p className='py-2'><span className='font-bold'> Email :</span> tamizhselvanrajendran26@gmail.com</p>
            <p className='py-2'><span className='font-bold'> Phone :</span> 7305696862</p>
            
        </div>
    </section>
}