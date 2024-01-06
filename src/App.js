import './App.css';
import Nav from './components/Nav';
import { FaLinkedin, FaGithub, FaReact, FaAws, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaArrowCircleRight, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaDocker } from "react-icons/fa6";
import { SiTailwindcss, SiMongodb, SiKubernetes, SiAwsamplify, SiAwslambda, SiAmazonrds } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from 'react';
import Setting from './components/Settings';
import Project from './components/Poject';
import { ThemeProvider } from './context/theme';
import { FaHashnode } from "react-icons/fa6";
// import { LocomotiveScrollProvider } from 'react-locomotive-scrol

function App() {

  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [dialogue, setDialogue] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [themeMode, setThememode] = useState("dark")
  const [firstLoad, setFirstLoad] = useState(true)

  const sendEmail = () => {

    const config = {
      SecureToken: 'f554ff9b-0d76-4134-8787-754de5fb66b7',
      To : 'yasar.coder@yopmail.com',
      From : "imyasar07@gmail.com",
      Subject : `${Email} is contacted through portfolio.`,
      Body : `${Message}`
    }

    if(Email && Message){
      if(window.Email){
        window.Email.send(config).then(()=> {
          setSending(false)
          setEmail("")
          setMessage("")
          setDialogue(true)
          setSuccess(true)
          setTimeout(()=> {
            setSuccess(false)
            setDialogue(false)
          }, 5000)
        })
        .catch(err=> {
          setSending(false)
          setDialogue(true)
          setFailure(true)
          setTimeout(()=> {
            setFailure(false)
            setDialogue(false)
          }, 5000)
        });
      }
    }
    else{
      setSending(false)
      setDialogue(true)
      setFailure(true)
      setTimeout(()=> {
        setFailure(false)
        setDialogue(false)
      }, 5000)
    }
  }

  const darkTheme = () => {
    setThememode('dark')
  }

  const lightTheme = () => {
    setThememode('light')
  }

  useEffect(()=> {
    if(firstLoad){
      const prevtheme = localStorage.getItem('theme');
      if(prevtheme){
        document.documentElement.classList.add(prevtheme)
        setFirstLoad(false)
        setThememode(prevtheme)
      }
      else{
        setFirstLoad(false)
        setThememode('light');
      }
    }
    else{
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(themeMode)
      localStorage.setItem('theme', themeMode);
    }
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="relative w-full h-screen bg-white dark:bg-slate-900 scroll-container">
          <Nav/>
          <div id="intro" className="scroll-page w-full h-fit md:h-full flex flex-col items-center justify-center gap-6 px-2 lg:px-6">
            <div className='w-3/4 h-2/4 flex flex-col lg:flex-row p-2 lg:p-6'>
              <div className='w-full h-full flex justify-center flex-col gap-6'>
                <span className='w-full h-fit flex lg:items-center justify-between gap-4 lg:gap-16 flex-col lg:flex-row dark:text-white'>
                  <h1 className='lg:text-7xl text-4xl'>Full Stack Web developer</h1>
                  <div className='flex h-fit flex items-center lg:justify-center gap-4'>
                    <p className='text-lg font-bolder text-green-600'>Open to opportunities 🧑‍💻</p>
                    <span className='inline-block animate-pulse rounded-full p-2 bg-green-600'></span>
                  </div>
                </span>
                <p className='text-xl text-secondarytext dark:text-secondarytextdark'>🚀 Hi, I'm yasar arafath—a tech enthusiast and software engineer. From lines of code to innovative solutions, I'm on a mission to blend creativity with technology. With expertise in front end, backend and databases, I bring a dynamic approach to problem-solving and a passion for turning ideas into reality. Let's build something amazing together!</p>
                <p className='text-xl text-glossyblue'>Lets Connect 🚀!</p>
                <div className='w-full h-16 flex flex-col gap-6 xl:flex-row xl:gap-0 dark:text-secondarytextdark'>
                  <div className='w-1/6 h-full flex items-center gap-6'>
                    <a href='https://www.linkedin.com/in/yasararafathdev/' target='blank'><FaLinkedin/></a>
                    <a href='https://twitter.com/Yasararafathdev' target='blank'><FaSquareXTwitter/></a>
                    <a href='https://github.com/Yasar195' target='blank'><FaGithubSquare/></a>
                  </div>
                  <div className='w-5/6 h-full flex items-center gap-6'>
                    <a href='https://iamyasar.hashnode.dev/' target='blank'><button className='text-base flex items-center gap-4 bg-glossyblue px-6 py-2 text-white rounded-lg'>Blog <FaHashnode/></button></a>
                  </div>
                </div>
              </div>
            </div>
            <h1 className='invisible lg:visible text-base hidden lg:block dark:text-secondarytextdark'>TECH STACK</h1>
            <div className='w-3/4 flex overflow-hidden space-x-2'>
              <div className='invisible lg:visible inline-block  w-full h-fit p-6 flex space-x-2 items-center justify-center gap-10 animate-loop-scroll'>
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
              <div className='invisible lg:visible inline-block  w-full h-fit p-6 flex space-x-2 items-center justify-center gap-10 animate-loop-scroll' aria-hidden="true">
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
          </div>
          <div id="projects" className="scroll-page w-full h-fit flex items-center justify-center px-2 lg:px-6">
            <div className='w-5/6 lg:w-3/4 h-3/4'>
              <div className='w-full h-12 text-glossyblue flex items-center justify-start gap-6'>
                <FaArrowCircleRight/>
                <h1>Projects</h1>
              </div>
              <hr className="h-4 dark:border-gray-700"/>
              <Project number={'1'} name={"Easy Auth"} description={"Easy auth or Easy authentication/authorization is saas service aimed at developers who are finding it difficult to integrate jwt authentication in their projects."} techs={[<FaReact className='text-blue-500'/>, <FaNodeJs className='text-green-500'/>, <BiLogoPostgresql className='text-blue-900'/>, <SiAwsamplify className='text-red-700'/>, <SiAwslambda className='text-orange-500'/>, <SiAmazonrds className='text-violet-500'/>]} url={'https://easy-auth.vercel.app/'}/>
              <Project number={'2'} name={'Spot - A peer to peer data transfer system'} description={'Spot is a realtime data sharing platform. it works using webrtc protocoal which is fully peer to peer network.'} techs={[<FaReact className='text-blue-500'/>, <FaNodeJs className='text-green-500'/>]} url={'https://spoted.online/'}/>
            </div>
          </div>  
          <div id="contact" className="scroll-page w-full h-fit md:h-full flex items-center justify-center px-2 lg:px-6">
            <div className='w-5/6 lg:w-3/4 h-3/4'>
                <div className='w-full h-12 text-glossyblue flex items-center justify-start gap-6'>
                  <FaArrowCircleRight/>
                  <h1>Contact me</h1>
                </div>
                <hr className="h-4"/>
                <div className='w-full h-fit text-secondarytext text-xl p-4 rounded-lg mb-4'>
                  <p className='mb-4 dark:text-secondarytextdark'>Hey i really appreciate your time and effort to check out my portfolio. If you would be so kind i kindly request to say hi.</p>
                  <div className='w-full h-fit p-4 flex items-center justify-evenly flex flex-col gap-6'>
                    <input value={Email} onChange={(e)=> setEmail(e.target.value)} className='py-2 px-4 border-2 border-gray-500 outline-2 outline-blue-500 w-full lg:w-3/4 rounded-lg dark:bg-slate-900 dark:text-white' placeholder='example@gmail.com'/>
                    <textarea value={Message} onChange={(e)=> setMessage(e.target.value)} placeholder='type something' className='p-4 border-2 border-gray-500 outline-2 outline-blue-500 w-full lg:w-3/4 h-60 rounded-lg dark:bg-slate-900 dark:text-white'/>
                    <button disabled={sending} onClick={()=>{
                      setSending(true)
                      sendEmail()
                    }} className='w-2/4 py-2 rounded-lg text-white bg-glossyblue flex items-center justify-center gap-6'>
                      {
                        sending ? <div className='loader'></div>
                        :
                        <div className='w-full h-full flex items-center justify-center gap-6'>Send <IoMdSend/></div>
                      }
                    </button>
                    {
                      dialogue && <div className='w-full h-8 flex items-center justify-center text-white rounded-lg'>
                        {
                          success && <p className='px-6 lg:px-12 h-full bg-green-800 rounded-lg'>
                            Thank you for reaching out
                          </p>
                        }
                        {
                          failure && <p className='px-6 lg:px-12 h-full bg-red-800 rounded-lg'>
                            Failed to send email.
                          </p>
                        }
                      </div>
                    }
                  </div>
                </div>
              </div>
          </div>
          <div id="about" className="scroll-page w-full h-fit flex items-center justify-center px-2 lg:px-6">
            <div className='w-5/6 lg:w-3/4 h-3/4'>
              <div className='w-full h-12 text-glossyblue flex items-center justify-start gap-6'>
                <FaArrowCircleRight/>
                <h1>About</h1>
              </div>
              <hr className="h-4"/>
              <div className='w-full h-fit text-secondarytext dark:text-secondarytextdark text-xl p-4 rounded-lg mb-4'>
                <p className='mb-4'>Greetings 👋 i am yasar arafath. a passionate and results-driven software engineer with a deep love for technology and a knack for solving complex problems. As a full stack engineer, I thrive on turning innovative ideas into reality and contributing to projects that push the boundaries of whats possible.</p>
                <p className='mb-4'>I believe in the power of technology to transform lives and industries. My journey in the tech world has been marked by a relentless pursuit of excellence and a commitment to continuous learning. From coding elegant solutions to collaborating on cross-functional teams, I find joy in every step of the development process.</p>
                {/* <img src={profile} alt='profile' className='w-80 h-80'/> */}
              </div>
            </div>
          </div>
          <Setting/>
        <div className='w-full h-60 bg-black text-white mt-16 p-10 flex items-center flex-col justify-center gap-6'>
          <h1 className="font-bold">yasararafath.dev</h1>
          <p className='text-lg'>All rights reserved &copy; Yasar Arafath 2024</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
