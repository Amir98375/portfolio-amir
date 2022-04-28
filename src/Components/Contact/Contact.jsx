import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import {
    ContactContainer,
    ContactForm,
    InputInput1,
    InputInput2,
    A,
    Column,
    P,
    LinksCont,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    FaPhone,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaHackerrank,
    FaMedium,
} from 'react-icons/fa';
import { SiGmail, SiLeetcode } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

const footerData = [
    {
        id: 0,
        title: 'Mobile',
        display: '+919837685032',
        link: 'tel:+919837685032',
        icon: (
            <FaPhone style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    {
        id: 1,
        title: 'Email',
        display: 'Amirkhan98375@gmail.com',
        link: 'mailto:Amirkhan98375@gmail.com',
        icon: (
            <SiGmail style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    {
        id: 2,
        title: 'Github',
        display: 'Github',
        link: 'https://github.com/Amir98375',
        icon: (
            <FaGithub style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    {
        id: 3,
        title: 'LinkedIn',
        display: 'LinkedIn',
        link: 'https://www.linkedin.com/in/mohd-amir-bb9082113/',
        icon: (
            <FaLinkedin
                style={{ color: 'grey' }}
                className='commonIconsFooter'
            />
        ),
    },
    {
        id: 4,
        title: 'Twitter',
        display: 'Twitter',
        link: 'https://twitter.com/.',
        icon: (
            <FaTwitter
                style={{ color: 'grey' }}
                className='commonIconsFooter'
            />
        ),
    },
    {
        id: 5,
        title: 'Medium',
        display: 'Medium',
        link: '',
        icon: (
            <FaMedium style={{ color: 'grey' }} className='commonIconsFooter' />
        ),
    },
    /* {
        id: 6,
        title: 'HackerRank',
        display: 'HackerRank',
        link: 'https://hackerrank.com/aadityaneve',
        icon: <FaHackerrank className='commonIconsFooter' />,
    },
    {
        id: 7,
        title: 'LeetCode',
        display: 'LeetCode',
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode className='commonIconsFooter' />,
    }, */
];

const Contact = () => {
    const [emailSent, setEmailSent] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();

        const { name, subject, email, message } = e.target;

        emailjs
            .send(
                'service_73nxajb',
                'template_g8iqlva',
                {
                    name: name.value,
                    email: email.value,
                    subject: subject.value,
                    message: message.value,
                },
                'user_EnJXFXSrCu2oExDbUCpNz'
            )
            .then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    setEmailSent(true);

                    if (!emailSent) {
                        setInterval(() => {
                            setEmailSent(false);
                        }, 5000);
                    }
                },
                function (err) {
                    console.log('FAILED...', err);
                }
            );

        e.target.reset();
    };
    return (
        <Container className='contact'>
            <Common>
                <H1>Contact</H1>
            </Common>
            <ContactContainer>
                <Column>
                    <ContactForm onSubmit={handleSend}>
                        <InputInput1
                            required
                            name='name'
                            type='text'
                            placeholder='Name'
                        />
                        <InputInput1
                            required
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                        <InputInput1
                            required
                            name='subject'
                            type='text'
                            placeholder='Subject'
                        />
                        <InputInput2
                            required
                            name='message'
                            placeholder='Message'
                        ></InputInput2>
                        <A
                            value='Send'
                            style={{ color: emailSent ? '#FFD479' : 'white' }}
                        >
                            {emailSent ? 'E-MAIL SENT' : 'SEND E-MAIL'}
                        </A>
                        <ToastContainer />
                    </ContactForm>
                </Column>
                <Column>
                    <LinksCont>
                        {footerData.map((item) => (
                            <div
                                key={uuidv4()}
                                title={item.title}
                                style={{ display: 'flex' }}
                            >
                                <div>
                                    {/* <a target="_blank" rel="noreferrer" href={item.link}  style={{textDecoration:"none"}}> */}
                                    {item.icon}
                                    {/* </a> */}
                                </div>
                                <div style={{ marginTop: '-5px' }}>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        href={item.link}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <P>{item.display}</P>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </LinksCont>
                </Column>
            </ContactContainer>
        </Container>
    );
};

export default Contact;
