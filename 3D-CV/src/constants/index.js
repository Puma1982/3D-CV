import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    MAX,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    miro,
    rco,
    kl,
    liu,
    megger,
    Apartly,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React & Next.js Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Electronics engineering and signal processing",  
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "3D-Max Toolkit",
        icon: MAX,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Miro",
        icon: miro,
    },
];

const experiences = [
    {
        title: "Electrical Engineer",
        company_name: "Kl Industry",
        icon:kl,
        iconBg: "#E6DEDD",
        date: "March 2016 - April 2017",
        points: [
            "Specializing in Electrical Installation and Mechanical Work. I excel in manufacturing low voltage switches based on electrical schedules. My expertise extends to various tasks such as:",
            "Assembly of cable ladders and bushings.",
            "Preparation for wiring, assembly, and installation.",
            "Proficient in programming languages like C++, LabVIEW, and MATLAB.",
        ],
    },
    {
        title: "RESEARCH ENGINEER LIU",
        company_name: "LINKÖPING/NORRKÖPING UNIVERSITY",
        icon: liu,
        iconBg: "#E6DEDD",
        date: "Jan 2017 - Feb 2018",
        points: [
            "SERVICE AND MAINTENANCE OF INSTRUMENTS AND MACHINERY.",
            "SERVICE AND MAINTENANCE OF CLEANROOM FACILITIES (CLEANROOM VENTILATION, EXHAUST AIR SYSTEMS, WATER TREATMENT VACUUM PUMPS, COMPRESSED AIR SUPPLY, GAS SUPPLY, ETC.),.",
            "EQUIPMENT INSTALLATION MANUFACTURE OF SIMPLER INSTALLATIONS AND EQUIPMENT COORDINATION OF EXTERNAL SERVICES FOR MAINTENANCE AND REPAIRS.",
            "Participating in code reviews and providing constructive feedback to other developers.",
       "In this revised version, I have reorganized and clarified the information to improve readability and provide a clearer understanding of the services provided by the research engineer at Linköping/Norrköping University."
          ],
          
    },
    {
        title: "Electronics engineer",
        company_name: "Megger",
        icon: megger,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Jan 2023",
        points: [
            "PRODUCT ASSEMBLY, PROTOTYPING, TESTING, PROGRAMMING,SERVICE, INVENTORY MANAGEMENT, AND SUPPORT.",
        ],
    },
    {
        title: "Electronics engineer",
        company_name: "RCO",
        icon: rco,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "MECHANICAL AND ELECTRONICS ASSEMBLY, CODE LOCK TESTING.",
            "PRODUCTS FOR PASSAGE SYSTEMS, PROTOTYPE ASSEMBLY.",
            "TESTING.",
            "SERVICE, INVENTORY MANAGEMENT, AND SUPPORT.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Apartly",
        icon: Apartly,
        iconBg: "#E6DEDD",
        date: "Nov 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        title: "React Native Developer",
        company_name: "Apartly",
        icon: liu,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Testing: I used Jest.js for testing, leverage features like test runners and snapshots, and organize tests logically.",
            "Next.js and Tailwind CSS: I Followed best practices for organizing Next.js applications. I utilized Tailwind CSS's utility classes and customization options for quick styling.",
            "Backend:I utilize AWS services, APIs, or mongooDB. Implement.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "# Dashboard",
        description:
            "I have followed a tutorial on building and deploying a MERN stack admin dashboard. For the frontend, I utilized Material-UI,Material-UI Data Grid, Nivo Charts, Redux Toolkit, and Redux Toolkit Query. As for the backend, I used Node.js, Express.js, Mongoose, and MongoDB. Additionally, I learned about data modeling using Entity Relationship Diagrams (ERDs) and how to perform aggregate calls in MongoDB.",
        tags: [
            {
                name: "Express.js",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "chakra-ui",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Puma1982/Dashboard",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };