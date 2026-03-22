
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Serverless Full Stack e-commerce Next.js web-app',
    description: 'A Next.Js Typescript serverless E-commerce Webapp crafted with Shadcn/ui Tailwind. Authentication and session powered by Clark. payment integrated with stripe. Global State management by zastand Backend And Dashoard powered by Sanity cms GROQ quarry',
    image: '/assets/shop-next.png',
    link: 'https://shop-nextjs-full-stack.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/shop-nextjs-fullStack',
    tags: ["Next.js",'Tailwind CSS',"ShadCn"," Zustand", 'Sanity','Stripe','Clark','Typescript','GROQ'],
  },
  {
    title: 'Node.js Full-Stack multi-vendor Ecommerce:',
    description: 'Next-Js frontend, Node.js Backend, React Dashboard crafted with Shadcn/ui tailwind & ant Design. I made an Independent Backend using express.js with MongoDB. Dashboard authentication protected with Jwt token decrypt encryption And Next Auth for user. A robust system with control over category subcategory, product upload variant and many more. ',
    image: '/assets/node-frontend.png',
    link: 'https://next-frontend-express-project-saii.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/next-frontend-express-project',
    tags: ['Next.js', 'Node.js', 'Tailwind CSS','MongoDB','ExpressJS',"ShadCn","TypScript","Next Auth","Jwt Token"],
  },
  {
    title: 'Sanity Dashboard',
    description: 'This is Snanity Dashbord for My Serverless Full Stack e-commerce Next.js web-app. It is a powerful and user-friendly content management system (CMS) that allows you to easily manage and organize your website content. With its intuitive interface and robust features, Sanity Dashboard provides a seamless experience for content creators and developers alike.',
    image: '/assets/sanity.png',
    link: 'https://shop-nextjs-full-stack.vercel.app/studio',
    gitlink:'https://github.com/mahadihasandev/shop-nextjs-fullStack/tree/main/sanity',
    tags: ['Sanity', 'GROQ', 'CMS', 'Dashboard'],
  },
  {
    title: 'Dashboard for multi-vendor Ecommerce',
    description: 'A React Dashboard crafted with tailwind & ant Design. I made an Independent Backend using express.js with MongoDB. Dashboard authentication protected with Jwt token decrypt encryption And Next Auth for user. A robust system with control over category subcategory, product upload variant and many more.',
    image: '/assets/React-dashboard.png',
    link: 'https://e-commerce-dashboard-multivandor-zm.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/eCommerce-Dashboard-multivandor',
    tags: ['React', 'Node.js', 'Tailwind CSS','Redux','Antd Design'],
  },
  {
    title: 'Smart-Banking',
    description: 'A Smart Banking System built with Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB. This project is a comprehensive banking application that allows users to take a lone and manage their finances efficiently. It features a user-friendly interface for account management, transaction history, and fund transfers. The backend is powered by Node.js and Express.js, while MongoDB is used for data storage.',
    image: '/assets/smart-bank.png',
    link: 'https://smart-bank-frontend.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/smart-bank-frontend',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'FireChat',
    description: 'A Realtime Chatting app made with firebase, Next.js, Tailwind CSS, ShadCn This project made with social media logic like friend request, friend list, group and Chatting',
    image: '/assets/firechat.png',
    link: 'https://fire-chat-orpin.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/FireChat',
    tags: ['React', 'Node.js', 'Tailwind CSS','Redux','ShadCn','Firebase','Realtime Chatting','Google auth'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}