'use client';
import React, {useState,useTransition} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA=[
    {
        title:"Skills",
        id:"skills",
        content:(
            
            <ul className='list-disc pl-2'>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>React JS</li>
                <li>React Native</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Flutter</li>
                <li>Python</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>MCA,2023-25,NMAMIT,Nitte:7.61CGPA</li>
                <li>BCA,2020-23,Vijaya College,Mulki:8.55CGPA</li>
                <li>PUC[PCMC],2018-20,SLJPU College,Belman(State board):85.67%</li>
                <li>10th,2017-18,SLJI School,Belman(CBSE):78.6%</li>
            </ul>
        )
    },
    {
        title:"Experiences",
        id:"experience",
        content:(
            <ul className='list-disc pl-2'>
               <li> Internship,DLithe:AIML and Data science Intern[Ongoing].</li> 
                <li>Online Internship, Acmegrade: Implemented Python NLP for spam/ham 
                classification. </li>
                <li>Internship, V-Enterprises: Developed "VISITORS PASS" web application using 
                React.js, Express.js, Node.js, and MySQL.  </li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li><a href="/certificates/codingNinjaFE.pdf">Coding Ninjas Frontend</a></li>
                <li><a href='/certificates/CodingNinjajavaDS.pdf'>Coding Ninjas DSA in Java</a></li>
                <li><a href='/certificates/CodingNinjajava.pdf'>Coding Ninjas Introduction to java</a></li>
                <li><a href='/certificates/Be.pdf'>AI Tools Workshop, Be10x,July 2023</a></li>
                <li><a href='/certificates/react.pdf'>Introduction to React, AIMIT,June 2023</a> </li>
                <li><a href='/certificates/pp.pdf'>Completed 5-day Adobe Premiere Pro video editing workshop by SkillNation in 
                October 2022.</a> </li>
                <li><a href='/certificates/dd.png'>Attended Data Science and AI career bootcamp by Datamites on 22nd September 
                2022.</a></li>
                <li><a href='/certificates/BB1.jpg'>Online workshop on Python basics-By BetaBlue foundation,July 2021</a></li>
                <li><a href='/certificates/BB2.jpg'>Online workshop on Python with data science-By BetaBlue foundation,July 2021</a></li>
                <li><a href='/certificates/BB3.jpg'>Online workshop on Python with Machine Learning-By BetaBlue foundation,July 2021</a></li>
                <li><a href='/certificates/BB4.jpg'>Online workshop on Cybersecurity-By BetaBlue foundation,July 2021</a></li>
                <li><a href='/certificates/5dwd.jpg'>Web Designing, HTML, CSS, JavaScript, AIMIT June-2021.</a></li>
                <li><a href='/certificates/BOV.jpg'>Python Online Course, Brain O Vision-May-2021.</a></li>
                <li><a href='/certificates/GreatlearningD.jpg'>Course on Introduction to Digital Marketing by Great Learning,November-2020</a></li>
                <li><a href='/certificates/GreatlearningJ.jpg'>Course on Java by Great Learning,November-2020</a></li>

            </ul>
        )
    },
    {
        title:"Participation in events",
        id:"parts",
        content:(
            <ul className='list-disc pl-2'>
                <li>Prticipated in Joshiana 13.0 conducted by St Joseph College Vamanjoor,Manglore dt:29th and 30th August 2024</li>
                <li>Participated offline fest ‘Canfest’ (IT best manager) conducted by Canara First Grade 
                College, Mangalore dt: 11 and 12th of April 2023.  </li>
                <li>Participated offline fest ‘N-IGMA’ (Chathurvedhi-Quiz event and Nicozn social media 
                    contest) conducted by NSAMFG Nitte dt: 3 and 4 July 2023. </li>
                 <li> Participated offline fest ‘N-IGMA’ (Rapidez-Quiz event) conducted by NSAMFG Nitte dt: 
                 13 and 14 July 2022.</li> 
                 <li>Participated online fest (Brainy Beings event) conducted by Rosary College, Goa dt: 
                 9th and 10th of December 2021. </li>  
                 <li>
                 Participated ‘Techistics’ (Quiz Event) online fest conducted by AIMIT College, 
                 Mangalore dt.28-05-2021.  
                 </li>
                 
            </ul>
        )
    },
    {
        title:"Hobbies",
        id:"hobbies",
        content:(
            <ul className='list-disc pl-2'>
                <li>Mobile Photography. </li>
                <li>Video Editing</li>
                <li>Playing roles in yakshagana</li>
                <li> Learning and playing chende (musical instrument). </li>
                <li>Learning astrology(Nakshatra Naadi)</li>
                <li>Little interested in MC </li>
            </ul>
        )
    },
    {
        title:"Languages Spoken",
        id:"languages",
        content:(
            <ul className='list-disc pl-2'>
                <li>Tulu</li>
                <li>Kannada</li>
                <li>Hindi</li>
                <li>English</li>
            </ul>
        )
    },
    {
        title:"Awards and Recognitions",
        id:"rewards",
        content:(
            <ul className='list-disc pl-2'>
                <li>Won third place in Quiz competition conducted by our institution in collaboration with 
                health department on the topic :”Health and hygiene”.  </li>
                <li>Won first prize in Nicozn social media contest which was conducted by NSAM First 
Grade Nitte College, During the time of N-IGMA :Shaurya, a state level intercollegiate 
fest conducted on 3rd and 4th April 2023.  </li>
<li>Secured 2nd Rank in Tulu script Exam with 99%,in May 2022.</li>
<li>Secured first rank in school in Ramayana exam with 72%, in the year 2016. </li>
            </ul>
        )
    },
    {
        title:"Voluntary Activities",
        id:"voluntary",
        content:(
            <ul className='list-disc pl-2'>
                <li>Was a member of Jai Tulunaadu association.</li>
                <li>Was a member of JJc Belman. </li>
                <li>Taught Tulu language’s script in my locality.</li>
                <li>Was in event announcement team for intercollegiate PU level fest-Inceptra 2022 conducted 
                by my college Vijaya College, Mulki on dt: 01/08/2022. </li>
                <li>Registered myself as an organ donor</li>
                <li>Attended beach cleaning camp in Hejamady on dt:31/01/2022</li>
            </ul>
        )
    },
    {
        title:"Responsibilities handled",
        id:"responsibilities",
        content:(
            <ul className='list-disc pl-2'>
                <li>Handled responsibilities as female magazine editor of SAMCA.</li>  
                <li>Handled responsibilities of class by being class representative. </li>
                <li>Handled responsibilities as a secretary for the Youth Red Cross association of the college for the academic 
                2021-22.</li>
            </ul>
        )
    }
   
]
const AboutSection = () => {
    const [tab,setTab]=useState("skills");
    const [isPending,startTransition]=useTransition();
    const handleTabChange=(id)=>{
        startTransition(()=>{
           
                setTab(id)
            
        });

    };
    
  return (
    <section className='text-white'>
        <div className='md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative'>
            <Image src="/images/about-image.png" alt="Saakshi J" width={300} height={300}/></div>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg'> 
                "Hello! I'm a self-driven and enthusiastic MCA graduate with a strong foundation in software development and a passion for crafting innovative and impactful solutions. With hands-on experience in developing Android applications and exploring cutting-edge technologies like machine learning, I strive to create user-centric and efficient digital experiences. I enjoy tackling challenging problems, learning new skills, and applying creative thinking to deliver effective results. 

In addition to my technical expertise, I am deeply committed to continuous personal and professional growth, embracing new opportunities to expand my knowledge and skill set. Whether collaborating with a team or working independently, I bring dedication, adaptability, and a results-oriented mindset to every project. I aim to make a meaningful contribution to the tech industry while championing innovation and excellence."
                </p>
                <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={()=>handleTabChange("education")} active={tab==='education'}>{""}Education {""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab==='skills'}>{""}Skills {""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("experience")} active={tab==='experience'}>{""}Experiences{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("certifications")} active={tab==='certifications'}>{""}Certifications{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("parts")} active={tab==='parts'}>Participation in events</TabButton>
                    <TabButton selectTab={()=>handleTabChange("rewards")} active={tab==='rewards'}>{""}Awards{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("voluntary")} active={tab==='voluntary'}>{""}Voluntary Activities{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("responsibilities")} active={tab==='responsibilities'}>{""}Responsibilities Handled{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("hobbies")} active={tab==='hobbies'}>{""}Hobbies{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("languages")} active={tab==='languages'}>{""}Languages Spoken{""}</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
