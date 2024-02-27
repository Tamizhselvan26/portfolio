import websiteimg1  from '../assets/chat.png'
import websiteimg2 from '../assets/email.png'
import websiteimg3 from '../assets/food-ecommerce.jpg'
export default function Projects(){
    return <section id='projects' className="flex flex-col py-20  px-5 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-10">
             <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold">Projects</h1> 
           <p>These are some of my projects. I have built these with MERN Stack.check them out </p>
            </div>
           
        </div>
        <div className="w-full">
           <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
              <img className='h-[200px] w-[400px]' src={websiteimg1}/>
              <div className='project-desc'>
                <p className='text-center px-5 py-5'>A chat Application build with Js,socketio.</p>
                <div className='flex justify-center'>
                 <a className='btn' target='_blank'href='https://github.com/Tamizhselvan26/chat-app'>view project</a>
              </div>
            </div>
             </div>
           <div className='relative'>
             <img className='h-[200px] w-[400px]' src={websiteimg2}/>
             <div className='project-desc'>
                <p className='text-center px-5 py-5'>A Moive card Application build with Javascript,React.js</p>
                <div className='flex justify-center'>
                 <a className='btn' target='_blank'href='https://github.com/Tamizhselvan26/movie-card'>view project</a>
              </div>
              </div>
           </div>
           <div className='relative'>
             <img className='h-[200px] w-[400px]' src={websiteimg3}/>
             <div className='project-desc'>
                <p className='text-center px-5 py-5' >A Food ordering Application with Javascript,React.js</p>
                <div className='flex justify-center'>
                 <a className='btn' target='_blank'href='https://github.com/Tamizhselvan26/food-ordering'>view project</a>
              </div>
              </div>
           </div>
          </div>
        </div>
    </section>
}