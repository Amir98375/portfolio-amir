import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaReact, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from 'react-icons/si';
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
        {
            id: 1,
            project_name: 'Kohls cash clone',
            image: `https://raw.githubusercontent.com/Amir98375/portfolio-amir/master/public/ProjectImages/kohl's.JPG`,
            project_desc:
                'kohls cash is an American based store which deals in the sale and purchase of clothes shoes etc.',
            deploy_link: 'https://kohl-s-cash-psz204ich-amir98375.vercel.app/',
            repo_link: 'https://github.com/Hashmat-Noorani/Kohl-s',
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
        },
        {
            id: 2,
            project_name: 'Purple Clone',
            image: 'https://raw.githubusercontent.com/Amir98375/portfolio-amir/master/public/ProjectImages/purple.JPG',
            project_desc:
                'This is a clone of purple.com an e-commerce american based company which deals in the sale purcahse of beauty products.',
            deploy_link: 'https://github.com/Amir98375/purpleclone',
            repo_link: 'https://bejewelled-taffy-26021a.netlify.app/',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaNodeJs />,
                <SiHeroku/>,
               
           
            ],
        }
        ,
        {
            id: 3,
            project_name: 'Weather-App Google map',
            image: 'https://raw.githubusercontent.com/Amir98375/portfolio-amir/master/public/ProjectImages/weather.JPG',
            project_desc:
                "A simple App which is used for Seven Day forcasting  weather and location.Also add tempterature and  wind Speed.",
            deploy_link: 'https://weatherseven-ozte7e3pq-amir98375.vercel.app/',
            repo_link: 'https://github.com/Amir98375/weatherseven',
            tech_stack: [
                // <SiRedux />,
                // <SiMaterialui />,
                // <SiMongodb />,
                // <SiExpress />,
                // <AiFillGithub />,
            //    <FaNodeJs />,
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
            ],
        },
        {
            id: 4,
            project_name: 'News Search bar',
            image: 'https://raw.githubusercontent.com/Amir98375/portfolio-amir/master/public/ProjectImages/news.JPG',
          project_desc:
        'A news app here you can search news this page build by using html css & advace js',
        deploy_link: 'https://sad-mahavira-021b7b.netlify.app/',
        repo_link: 'https://github.com/Amir98375/newsevaluation',
            tech_stack: [
                // <FaNodeJs />,
                // <SiMongodb />,
                <FaJs />,
            //    <SiHeroku />,
               <FaHtml5 />,
        <FaCss3 />,
            ],
        },
        // {
        //     id: 5,
        //     project_name: 'Weather And Google',
        //     image: 'https://github.com/Mukesh16407/git_2nd/blob/master/weatherandGoogle_api.png?raw=true',
        //     project_desc:
        //         'A simple App which is used for Seven Day forcasting  weather and location.Also add tempterature and  wind Speed.',
        //     deploy_link: 'https://my-weathermap.netlify.app/',
        //     repo_link: 'https://github.com/Mukesh16407/weaterandGoolemap',
        //     tech_stack: [ <FaJs />, <FaHtml5 />, <FaCss3 />],
        // },
        //  {
        //     id: 6,
        //     project_name: 'You-tube Clone',
        //     image: 'https://github.com/Ashwininagargoje703/Portfolio/blob/master/public/ProjectImages/youtube-clone%20(2).png?raw=true',
        //     project_desc:
        //         'Its a app look similar to youtube.also add some functionalty similar to youtube using html css js',
        //     deploy_link: '',
        //     repo_link: 'https://github.com/Ashwininagargoje703/Youtube-clone.git',
        //     tech_stack: [<FaJs />, <FaHtml5 />, <FaCss3 />],
        // },
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
