import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiGithub, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Colin Cargile Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed By</h1>
            <ul className="flex items=center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-md">Colin Cargile</h2>
            <h3 className="text-2xl py-2">Developer and Photographer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Passionate and solutions driven full stack web developer with a web development certificate from Columbia University Engineering School and a Java full stack development certificate from Southern Methodist University. Utilizing a combination of strong communication, collaboration, problem-solving and analytical skills to create projects from ideation to execution. Ability to work in a fast paced and diverse team environment developing solutions and exceeding expectations.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-2xl py-1">
              Services I offer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance developer, I've done remote work for
              <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              I offer from a wide range of services, including programming and teaching to merchandising and management.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web Development
              </h3>
              <p className="py-2">I’m excited to become a part of a quality-driven team to develop and create impactful user experiences by continuing to learn throughout each project we tackle as a team. </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Consulting
              </h3>
              <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
