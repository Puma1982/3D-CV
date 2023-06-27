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
            "Good project responsive, big project in short time where you used backend and frint end.",
        name: "Pelle Israelsson",
        designation: "Kvalitetsutvecklare",
        company: "KYH",
        image: "https://www.qlok.se/_next/image?url=https%3A%2F%2Fassets.super.so%2Fffecd38b-a748-4702-89ba-e735e095b76d%2Fimages%2F3f244a7a-fe1e-40b4-8cde-90f2fc84e84d%2FFC_20210216_0001_2.jpg&w=1920&q=80",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' like you.",
        name: "Max Wiktorsson",
        designation: "Grundare & CEO",
        company: "Apartly",
        image: "https://www.apartly.se/_next/image?url=%2Fmax.jpg&w=640&q=90",
    },
    {
        testimonial:
            "You have been an exceptional student for two years, consistently completing all your projects as expected. Based on your performance, I predict that you will become one of the top programmers in the future",
        name: "Rebecka Hedlin",
        designation: "KYH",
        company: "Utbildningsledare",
        image: "https://kyh.se/wp-content/uploads/2021/10/rebeckahedlin.webp",
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
        name: "Event Calendar",
        description:
            "Event calendar using Express.js and CSS, and then we can discuss how we can improve it further.",
        tags: [
            {
                name: "Express.js",
                color: "blue-text-gradient",
            },
            {
                name: "package.json",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Puma1982/Note-Porject",
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
        source_code_link: "https://github.com/Puma1982/Note-Porject",
    },
];

export { services, technologies, experiences, testimonials, projects };