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
        title: "Backend Developer & API",
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
        "My degree in engineering with a focus on radio electronics and semiconductors represents a comprehensive understanding of electrical circuits, semiconductor devices, and their applications in communication systems. My education delved deep into the principles of radio frequency (RF) systems, semiconductor physics, and the design of electronic circuits used in communication technologies. It equipped me with expertise in semiconductor materials, their properties, and the fabrication processes involved in manufacturing semiconductor devices like diodes, transistors, and integrated circuits.",
        name: "NURE UNIVERSITY",
        designation: "Radio electronics semiconductors",
        company: "NURE",
        image: "https://ingek.com/wp-content/uploads/2020/04/Logo_NURE_3_Uk_27mm-300x300.jpg",
    },
    {
        testimonial:
        "My Master's degree in Signal Processing and Smart Antenna focused on advanced signal manipulation and cutting-edge smart antenna design. This program equipped me with expertise in optimizing wireless signal reception through techniques like adaptive signal processing and antenna array design. I gained hands-on experience in implementing signal processing algorithms, preparing me to innovate in improving communication systems by enhancing signal quality and reception using smart antenna technologies.",
        name: "LINNAEUS UNIVERSITY",
        designation: "Signal processing and smart antenna",
        company: "LNU",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY_m1QrQ66ODItSIrB87UZuyjrWN65RCAyg&usqp=CAU",
    },
    {
        testimonial:
            " As a web developer specializing in front-end development, I have extensive experience and proficiency in various technologies. I am skilled in databases, CSS, TypeScript, JavaScript, Tailwind CSS, Figma, and HTML. My expertise spans the spectrum of front-end development, encompassing design (Figma), structuring content (HTML), styling (CSS and Tailwind), and enhancing functionality (JavaScript and TypeScript). With this skill set, I am adept at creating responsive and engaging user interfaces while leveraging databases to build dynamic and interactive web applications",
        name: "YRKESHÖGSKOLAN",
        designation: "Web developer with a focus on front-end development",
        company: "KYH",
        image: "https://admin.studier.se/wp-content/uploads/2022/03/kyh-logga.jpg",
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