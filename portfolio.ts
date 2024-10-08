import emoji from 'react-easy-emoji';
import {
    EducationType,
    ExperienceType,
    FeedbackType,
    GreetingsType,
    ProjectType,
    SEODataType,
    SkillBarsType,
    SkillsSectionType,
    SocialLinksType,
} from './types/sections';

export const greetings: GreetingsType = {
    name: 'Titus Murithi',
    title: "Hello, I'm Titus Murithi",
    description:
        "Experienced Back-end Engineer with a demonstrated history of working in the software industry. Skilled in Spring Boot, (java/kotlin) and Nest.js, with a strong understanding of event-driven architecture using Kafka. Proficient in database management, particularly with MySQL, and equipped with DevOps knowledge that aids in the seamless integration and deployment of software solutions. Passionate about solving complex problems and delivering efficient, scalable software applications.",
    resumeLink:
        'https://docs.google.com/document/d/1tfIL5ZRr-UAXpVqc8945VGHZRgFfI3XQz-hbOPy0KS0/edit?usp=sharing',
};

export const openSource = {
    githubUserName: 'titus-360',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
    url: 'https://titus-360.github.io/',
    linkedin: 'https://www.linkedin.com/in/titus-murithi-4048a8188/',
    github: 'https://github.com/titus-360',
    instagram: 'https://www.instagram.com/_megasparks/',
    facebook: 'https://web.facebook.com/titus.murithi.79025/',
    twitter: 'https://twitter.com/baby_spoiler',
};

export const skillsSection: SkillsSectionType = {
    title: 'What I do',
    subTitle: 'Experienced Back-end Engineer with a demonstrated history of working in the software industry. Skilled in Spring Boot, (java/kotlin) and Nest.js, with a strong understanding of event-driven architecture using Kafka. Proficient in database management, particularly with MySQL, and equipped with DevOps knowledge that aids in the seamless integration and deployment of software solutions. Passionate about solving complex problems and delivering efficient, scalable software applications.',
    data: [
        {
            title: 'Backend Development',
            lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    '⚡ Experienced Back-end Engineer with a demonstrated history of working in the software industry. Skilled in Spring Boot, (java/kotlin) and Nest.js, with a strong understanding of event-driven architecture using Kafka. '
                ),
                emoji('⚡ Proficient in database management, particularly with MySQL, and equipped with DevOps knowledge that aids in the seamless integration and deployment of software solutions.'),
                emoji('⚡ Passionate about solving complex problems and delivering efficient, scalable software applications.'),
            ],
            softwareSkills: [
                {
                    skillName: 'Spring Boot',
                    iconifyTag: 'logos:spring',
                },
                {
                    skillName: 'Java',
                    iconifyTag: 'devicon:java',
                },
                {
                    skillName: 'TypeScript',
                    iconifyTag: 'logos:typescript',
                },
                {
                    skillName: 'Reactjs',
                    iconifyTag: 'vscode-icons:file-type-reactjs',
                },
                {
                    skillName: 'Kafka',
                    iconifyTag: 'skill-icons:kafka',
                },
                {
                    skillName: 'Python',
                    iconifyTag: 'logos:python',
                },
                {
                    skillName: 'Kotlin',
                    iconifyTag: 'logos:kotlin',
                },

                {
                    skillName: 'Redux',
                    iconifyTag: 'logos:redux',
                },
                {
                    skillName: 'NPM',
                    iconifyTag: 'logos:npm-icon',
                },
                {
                    skillName: 'Jenkins',
                    iconifyTag: 'logos:jenkins',
                },
            ],
        },
        {
            title: 'Cloud Infra-Architecture',
            lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
            skills: [
                emoji('⚡ Experience of working on multiple cloud platforms'),
                emoji(
                    '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
                ),
                emoji(
                    '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
                ),
            ],
            softwareSkills: [
                // ? Check README To get icon details
                {
                    skillName: 'AWS',
                    iconifyTag: 'logos:aws',
                },
                {
                    skillName: 'Azure',
                    iconifyTag: 'logos:microsoft-azure',
                },
                {
                    skillName: 'Heroku',
                    iconifyTag: 'logos:heroku-icon',
                },
                {
                    skillName: 'PostgreSQL',
                    iconifyTag: 'logos:postgresql',
                },
                {
                    skillName: 'Github',
                    iconifyTag: 'akar-icons:github-fill',
                },
                {
                    skillName: 'Docker',
                    iconifyTag: 'logos:docker-icon',
                },
                {
                    skillName: 'Github Actions',
                    iconifyTag: 'logos:github-actions',
                },
                {
                    skillName: 'Cloudinary',
                    iconifyTag: 'logos:cloudinary',
                },
                {
                    skillName: 'Nginx',
                    iconifyTag: 'logos:nginx',
                },
                {
                    skillName: 'Sentry',
                    iconifyTag: 'logos:sentry-icon',
                },
            ],
        },
        {
            title: 'Blockchain',
            lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
                ),
                emoji(
                    '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
                ),
                emoji(
                    '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
                ),
                emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
                emoji(
                    '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
                ),
            ],
            softwareSkills: [
                {
                    skillName: 'Ethereum',
                    iconifyTag: 'logos:ethereum',
                },
                {
                    skillName: 'Solidity',
                    iconifyTag: 'logos:solidity',
                },
                {
                    skillName: 'Web3js',
                    iconifyTag: 'logos:web3js',
                },
                {
                    skillName: 'Metamask',
                    iconifyTag: 'logos:metamask-icon',
                },
                // {
                //   skillName: 'Ganache',
                //   iconifyTag: 'logos:ganache-icon',
                // },
            ],
        },
    ],
};

export const SkillBars: SkillBarsType[] = [
    // {
    //     Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    //     progressPercentage: '76', //Insert relative proficiency in percentage
    // },
    {
        Stack: 'Backend',
        progressPercentage: '96',
    },
    {
        Stack: 'Programming',
        progressPercentage: '60',
    },
    {
        Stack: 'Graphic design',
        progressPercentage: '100',
    },
];

export const educationInfo: EducationType[] = [
    {
        schoolName: 'Maseno University',
        subHeader: 'Bachelor of Science in Computer Science',
        duration: 'September 2019 - May 2023',
        desc: 'Participated in the researches and worked on 3 projects.',
        grade: 'Second Class, Upper Division',
        descBullets: [
            'Acquired skills in various programming languages such as java (Spring Boot), angular,\n' +
            'Node Js and Javascript.',
            'Gained experience working with databases such as MYSQL.',
        ],
    },
    {
        schoolName: 'Ikuu Boys High School',
        subHeader: 'High School Education ',
        duration: 'JANUARY 2014 – NOVEMBER 2018 ',
        desc: 'Completed my High School Education',
        grade: 'Grade B+',
        descBullets: [
            // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
            // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
    },
    {
        schoolName: 'Abothuguchi Boarding Primary School',
        subHeader: 'Primary School Education',
        duration: '2004 – DECEMBER 2014 ',
        desc: 'I  did my primary school Education.',
        grade: 'Grade B+',
        descBullets: [
            // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
            // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
    },
];

export const experience: ExperienceType[] = [
    {
        role: 'ICT officer',
        company: 'Smart Champions Sacco',
        companyLogo: '/img/icons/common/download (2).jfif',
        date: 'Apr 2022 – Jun 2022',
        desc: 'As the ICT Officer at Smart Champions Sacco, I had the privilege of driving digital transformation within the cooperative sector. I passionately led technological initiatives that transformed traditional financial services into innovative digital experiences. My role involved architecting and implementing cutting-edge IT solutions, ensuring the seamless integration of technology into the cooperative\'s core functions. From pioneering secure online banking platforms to implementing user-friendly mobile payment solutions, I played a key role in enhancing member engagement and operational efficiency. Through the strategic use of data analytics, I provided actionable insights that facilitated strategic decision-making and personalized member services. My dedication to merging cooperative principles with advanced technology empowered Smart Champions Sacco, fostering growth, member satisfaction, and a lasting impact on the cooperative community.',
    },
    {
        role: 'Backend Engineer',
        company: 'Turnkey Africa (Agencify Limited)',
        companyLogo: '',
        date: 'Dec 2023 – Present',
        desc: 'As a Backend Engineer at Turnkey Africa (Agencify Limited), I built a notification service for Novu and a scheduler service using Quartz for scheduling notifications. Additionally, I developed a Nest.js backend service for a CRM portal, utilizing Kafka for event-driven architecture. I worked with various databases including Oracle, MongoDB, PostgreSQL, and MySQL. I also leveraged Docker and Kubernetes for containerization and orchestration, and Jenkins for continuous integration and deployment. Furthermore, I wrote Python scripts to assist in migrating large datasets and automated several notifications using the services I built. My role involved ensuring the seamless integration of these technologies into the company\'s core functions, enhancing operational efficiency and member engagement.',
    },

];

export const projects: ProjectType[] = [
    {
        name: 'developer-portfolio',
        desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
        github: 'https://github.com/titus-360/developer-portfolio',
        link: 'https://developer-portfolio-r1ivi25v2-titus-360s-projects.vercel.app/',
    },

];

export const feedbacks: FeedbackType[] = [
    {
        name: 'Denis Gitonga',
        feedback:
            'It is my distinct pleasure to wholeheartedly recommend Titus Murithi as an exceptional software engineer. Titus\'s technical proficiency in languages such as Python, Java, and JavaScript, coupled with expertise in frameworks like Django and React, has consistently resulted in the development of robust and innovative applications. What truly sets Titus apart is his ability to approach challenges with an innovative mindset, finding creative solutions that elevate project functionality and user experience. Titus is not only a skilled engineer but also a collaborative team player, effectively communicating complex technical concepts and fostering a positive work environment. His exceptional project management skills ensure timely and budget-friendly deliveries, making him an invaluable asset to any team. I am confident that Titus Murithi\'s unwavering dedication, coupled with his leadership qualities, will continue to drive success in all his future endeavors.',
    },
    {
        name: 'Titus Maiyo',
        feedback:
            'I am thrilled to endorse Titus Murithi as a software engineer of unparalleled talent and innovation. Titus\'s mastery of diverse programming languages, including Python, Java, and JavaScript, combined with expertise in frameworks like Django and React, is truly commendable. What sets Titus apart is his exceptional ability to approach complex problems with creativity, consistently devising innovative solutions that enhance project functionality. Beyond technical acumen, Titus is a collaborative team player, adept at bridging communication gaps and fostering a positive, efficient work environment. His strong project management skills, marked by a keen eye for detail and a commitment to timely deliveries, have made significant contributions to our team\'s success. Titus Murithi\'s unwavering dedication and leadership make him an invaluable asset to any organization, ensuring the continual achievement of milestones and innovation in every project he undertakes.',
    },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
    title: 'Titus Murithi',
    description:
        'A passionate Full Stack Web Developer and Blockchain Developer.',
    author: 'Titus Murithi',
    // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
    url: 'https://developer-portfolio-titus-360s-projects.vercel.app/',
    keywords: [
        'Titus',
        'Titus Murithi',
        '@Titus Bundi',
        'Titus-360',
        'Portfolio',
        'Titus Portfolio ',
        'Titus Murithi Portfolio',
    ],
};
