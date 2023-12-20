import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { FaLinkedin, FaGithub, FaReact, FaAws, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaArrowCircleRight } from "react-icons/fa";
import { FaSquareXTwitter, FaDocker, FaArrowRightLong } from "react-icons/fa6";
import profile from './assets/images/profile.jpeg';
import { SiTailwindcss, SiMongodb, SiKubernetes, SiAwsamplify, SiAwslambda, SiAmazonrds } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";

function App() {
  return (
    <div className="relative w-full h-screen bg-white px-2 lg:px-6">
      {/* <div className='w-full h-full px-16'>

      </div> */}
       <Nav/>
      <div className="w-full h-fit md:h-full flex flex-col items-center justify-center gap-6">
        <div className='w-3/4 h-2/4 flex flex-col lg:flex-row p-6'>
          <div className='w-full h-full flex justify-center flex-col gap-6'>
            <h1 className='lg:text-7xl text-4xl'>Full Stack Web developer</h1>
            <p className='text-xl text-gray-500'>🚀 Hi, I'm yasar arafath—a tech enthusiast and software engineer. From lines of code to innovative solutions, I'm on a mission to blend creativity with technology. With expertise in front end, backend and databases, I bring a dynamic approach to problem-solving and a passion for turning ideas into reality. Let's build something amazing together!</p>
            <p className='text-xl text-blue-500'>Lets Connect 🚀!</p>
            <div className='w-full h-16 flex gap-6'>
              <FaLinkedin/>
              <FaSquareXTwitter/>
            </div>
          </div>
        </div>
        <h1 className='invisible lg:visible text-base hidden lg:block'>TECH STACK</h1>
        <div className='invisible lg:visible w-full h-fit p-6 flex items-center justify-center gap-10'>
          <FaHtml5 className='text-orange-500'/>
          <FaCss3Alt className='text-blue-500'/>
          <IoLogoJavascript className='text-yellow-500'/>
          <FaPython className='text-blue-800'/>
          <FaReact className='text-blue-500'/>
          <SiTailwindcss className='text-blue-400'/>
          <SiExpress/>
          <FaNodeJs className='text-green-500'/>
          <FaGithub />
          <BiLogoPostgresql className='text-blue-900'/>
          <SiMongodb className='text-green-600'/>
          <FaDocker className='text-blue-500'/>
          <SiKubernetes className='text-blue-800'/>
          <FaAws className='text-yellow-700'/>
        </div>
      </div>
      <div className="w-full h-fit flex items-center justify-center">
        <div className='w-5/6 lg:w-3/4 h-3/4'>
          <div className='w-full h-12 text-blue-600 flex items-center justify-start gap-6'>
            <FaArrowCircleRight/>
            <h1>Projects</h1>
          </div>
          <hr className="h-4"/>
          <div className='w-full h-fit border-2 border-gray-100 p-4 rounded-lg mb-4'>
            <div className='w-full h-fit p-4'>
              <div className='w-full h-10 flex items-center justify-start gap-6 text-xl'>
                <div className='w-8 h-8 rounded-full bg-black text-white flex items-center justify-center'><h1>1</h1></div>
                <h1>Easy Auth</h1>
              </div>
            </div>
            <div className='w-full h-fit px-4 pb-4 text-xl text-gray-500'>
              <p>Easy auth or Easy authentication/authorization is saas service aimed at developers who are finding it difficult to integrate jwt authentication in their projects.</p>
            </div>
            <div className='invisible md:visible w-full h-12 px-4 flex items-center justify-start text-xl gap-6 mb-4'>
              <h1>Technologies:-</h1>
              <FaReact className='text-blue-500'/>
              <FaNodeJs className='text-green-500'/>
              <BiLogoPostgresql className='text-blue-900'/>
              <SiAwsamplify className='text-red-700'/>
              <SiAwslambda className='text-orange-500'/>
              <SiAmazonrds className='text-violet-500'/>
            </div>
            <div className='w-full h-12 px-4 flex items-center justify-end'>
              <button className='text-lg text-white rounded-lg bg-blue-500 px-10 lg:px-12 flex items-center justify-center gap-6 py-2'>Deployed url <FaArrowRightLong/></button>
            </div>
          </div>
          <div className='w-full h-fit border-2 border-gray-100 p-4 rounded-lg mb-4'>
            <div className='w-full h-fit p-4'>
              <div className='w-full h-10 flex items-center justify-start gap-6 text-xl'>
                <div className='w-8 h-8 rounded-full bg-black text-white flex items-center justify-center'><h1>2</h1></div>
                <h1>Spot - A peer to peer data transfer system</h1>
              </div>
            </div>
            <div className='w-full h-fit px-4 pb-4 text-xl text-gray-500'>
              <p>Easy auth or Easy authentication/authorization is saas service aimed at developers who are finding it difficult to integrate jwt authentication in their projects.</p>
            </div>
            <div className='invisible md:visible w-full h-12 px-4 flex items-center justify-start text-lg gap-6 mb-4'>
              <h1>Technologies:-</h1>
              <FaReact className='text-blue-500'/>
              <FaNodeJs className='text-green-500'/>
              <BiLogoPostgresql className='text-blue-900'/>
              <SiAwsamplify className='text-red-700'/>
              <SiAwslambda className='text-orange-500'/>
              <SiAmazonrds className='text-violet-500'/>
            </div>
            <div className='w-full h-12 px-4 flex items-center justify-end'>
              <button className='text-lg text-white rounded-lg bg-blue-500 px-10 lg:px-12 flex items-center justify-center gap-6 py-2'>Deployed url <FaArrowRightLong/></button>
            </div>
          </div>
        </div>
      </div>  
      <div className="w-full h-fit md:h-full flex items-center justify-center">
        <div className='w-5/6 lg:w-3/4 h-3/4'>
            <div className='w-full h-12 text-blue-600 flex items-center justify-start gap-6'>
              <FaArrowCircleRight/>
              <h1>Contact me</h1>
            </div>
            <hr className="h-4"/>
            <div className='w-full h-fit text-gray-500 text-xl p-4 rounded-lg mb-4'>
              <p className='mb-4'>Hey i really appreciate you time and effort to check out my portfolio. If you would be so kind i kindly request to say hi.</p>
              <div className='w-full h-fit p-4 flex items-center justify-evenly flex flex-col gap-6'>
                <input className='py-2 px-4 border-2 border-gray-500 outline-2 outline-blue-500 w-full lg:w-3/4 rounded-lg' placeholder='example@gmail.com'/>
                <textarea placeholder='type something' className='p-4 border-2 border-gray-500 outline-2 outline-blue-500 w-full lg:w-3/4 h-60 rounded-lg'/>
                <button className='px-12 py-2 rounded-lg text-white bg-blue-500 flex items-center justify-center gap-6'>Send <IoMdSend/></button>
              </div>
            </div>
          </div>
      </div>
      <div className="w-full h-fit flex items-center justify-center">
        <div className='w-5/6 lg:w-3/4 h-3/4'>
          <div className='w-full h-12 text-blue-600 flex items-center justify-start gap-6'>
            <FaArrowCircleRight/>
            <h1>About</h1>
          </div>
          <hr className="h-4"/>
          <div className='w-full h-fit text-gray-500 text-xl p-4 rounded-lg mb-4'>
            <p className='mb-4'>Greetings 👋 i am yasar arafath. a passionate and results-driven software engineer with a deep love for technology and a knack for solving complex problems. As a full stack engineer, I thrive on turning innovative ideas into reality and contributing to projects that push the boundaries of whats possible.</p>
            <p className='mb-4'>I believe in the power of technology to transform lives and industries. My journey in the tech world has been marked by a relentless pursuit of excellence and a commitment to continuous learning. From coding elegant solutions to collaborating on cross-functional teams, I find joy in every step of the development process.</p>
            <img src={profile} alt='profile' className='w-80 h-80'/>
          </div>
        </div>
      </div>
      <div className='w-full h-60 bg-gray-500 mt-16'>
        
      </div>
    </div>
  );
}

export default App;
