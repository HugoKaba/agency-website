import React from 'react';

type ProjectItem = {
    id: number;
    title: string;
    image: string;
    alt: string;
    descriptions: string;
    context: string;
    objectives: string;
    technologies_used: string[];
    results: string;
    categories: string[];
};

const projects: ProjectItem[] = [
    {
        id: 1,
        title: "Darkverse",
        image: "/img/webp/Darkverse-jiji.webp",
        alt: "Darkverse e-commerce website",
        descriptions: "Development of an e-commerce website.",
        context: "The client, a growing retail business, wanted a platform to sell their products online to reach a wider audience and increase sales.",
        objectives: "Create an intuitive and responsive website that provides a seamless shopping experience for users, with easy navigation and secure payment options.",
        technologies_used: ["HTML", "React"],
        results: "The project resulted in a 30% increase in online sales within the first quarter after launch, significantly boosting the client's revenue and expanding their customer base.",
        categories: ["Web Development", "E-commerce"]
    },
    {
        id: 2,
        title: "UTOPIA",
        image: "/img/webp/UTOPIA_POSTER.webp",
        alt: "UTOPIA task management app",
        descriptions: "Mobile application for task management.",
        context: "The client, a productivity-focused startup, needed an application to help users organize their daily tasks and improve their time management.",
        objectives: "Develop an easy-to-use mobile application that allows users to create, manage, and track their tasks efficiently, with features like reminders and progress tracking.",
        technologies_used: ["JavaScript", "React"],
        results: "The app achieved over 10,000 downloads in the first 3 months, receiving positive feedback for its user-friendly interface and effective task management features.",
        categories: ["Mobile Development", "Productivity"]
    },
    {
        id: 3,
        title: "Nike I",
        image: "/img/webp/Ijade-nike.webp",
        alt: "Ijade institutional website redesign",
        descriptions: "Redesign of an institutional website.",
        context: "The client, a well-established institution, wanted to modernize their website to improve user experience and reflect their brand's current image.",
        objectives: "Improve the navigation and design of the site to make it more user-friendly and visually appealing, while ensuring it meets the latest web standards.",
        technologies_used: ["HTML", "CSS"],
        results: "The redesign led to a 50% increase in time spent on the site, indicating higher user engagement and satisfaction with the new design.",
        categories: ["Web Design", "Web Development"]
    },
    {
        id: 4,
        title: "Kahila",
        image: "/img/webp/kahila.webp",
        alt: "Kahila content management system",
        descriptions: "Development of a content management system.",
        context: "The client, a media company, needed a tool to manage their online content efficiently and securely, with the ability to handle large volumes of data.",
        objectives: "Create a custom and secure CMS that allows the client to easily create, edit, and publish content, with robust user management and analytics features.",
        technologies_used: ["Node.js", "React"],
        results: "The CMS implementation resulted in a 40% reduction in content management time, allowing the client to focus more on content creation and strategy.",
        categories: ["Web Development", "CMS"]
    },
    {
        id: 5,
        title: "Daily News",
        image: "/img/webp/SavvdznDailyNews.webp",
        alt: "Savvdzn startup website",
        descriptions: "Creation of a website for a startup.",
        context: "The client, a new startup, wanted to establish their online presence and attract potential customers and investors.",
        objectives: "Develop an attractive and informative website that effectively communicates the startup's mission, services, and achievements, with a focus on user engagement.",
        technologies_used: ["HTML", "Node.js"],
        results: "The website launch increased the startup's online visibility, attracting potential customers and investors, and contributing to the startup's early success.",
        categories: ["Web Development", "Startup"]
    },
    {
        id: 6,
        title: "Saavdzn",
        image: "/img/webp/saavdzn.images.webp",
        alt: "Saavdzn online training platform",
        descriptions: "Development of an online training platform.",
        context: "The client, an educational organization, wanted to offer online courses to reach a global audience and provide flexible learning options.",
        objectives: "Create an interactive and scalable platform that supports various types of content, including videos, quizzes, and assignments, with user-friendly navigation and progress tracking.",
        technologies_used: ["React", "Node.js"],
        results: "The platform attracted over 5,000 registered users in the first 6 months, providing a valuable resource for learners worldwide and enhancing the client's educational offerings.",
        categories: ["Web Development", "Education"]
    },
    {
        id: 7,
        title: "Dunk",
        image: "/img/webp/Dunk-jiji.webp",
        alt: "Dunk service booking application",
        descriptions: "Service booking application.",
        context: "The client, a service provider, wanted to facilitate service booking for users to improve customer satisfaction and streamline their operations.",
        objectives: "Develop an intuitive and fast application that allows users to easily book services, view availability, and receive confirmations, with a focus on user experience.",
        technologies_used: ["JavaScript", "Node.js"],
        results: "The application led to a 20% reduction in booking time, enhancing user satisfaction and operational efficiency for the client.",
        categories: ["Mobile Development", "Service"]
    },
    {
        id: 8,
        title: "Mercurial",
        image: "/img/webp/Mercurial-vilne.webp",
        alt: "Mercurial portfolio website",
        descriptions: "Development of a portfolio website.",
        context: "The client, a creative professional, wanted to showcase their work online to attract new clients and opportunities.",
        objectives: "Create an elegant and easy-to-navigate website that highlights the client's portfolio, with features like image galleries, project descriptions, and contact information.",
        technologies_used: ["HTML", "CSS"],
        results: "The portfolio website increased collaboration requests and helped the client secure new projects, showcasing their work effectively to a broader audience.",
        categories: ["Web Design", "Portfolio"]
    }
];

export default projects;
