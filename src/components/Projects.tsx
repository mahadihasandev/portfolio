
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Serverless Full Stack e-commerce Next.js web-app',
    description: 'A production-oriented serverless e-commerce app with Next.js and TypeScript. Includes auth, Stripe checkout, global state management, and a Sanity CMS dashboard.',
    image: '/assets/shop-next.png',
    link: 'https://shop-nextjs-full-stack.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/shop-nextjs-fullStack',
    tags: ["Next.js",'Tailwind CSS',"ShadCn"," Zustand", 'Sanity','Stripe','Clark','Typescript','GROQ'],
  },
  {
    title: 'Node.js Full-Stack multi-vendor Ecommerce:',
    description: 'A multi-vendor commerce platform with Next.js frontend, Express.js API, MongoDB database, and admin dashboard for categories, products, and variants.',
    image: '/assets/node-frontend.png',
    link: 'https://next-frontend-express-project-saii.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/next-frontend-express-project',
    tags: ['Next.js', 'Node.js', 'Tailwind CSS','MongoDB','ExpressJS',"ShadCn","TypScript","Next Auth","Jwt Token"],
  },
  {
    title: 'Sanity Dashboard',
    description: 'A dedicated Sanity Studio workspace to manage catalog content, media, and structured commerce data for the serverless e-commerce platform.',
    image: '/assets/sanity.png',
    link: 'https://shop-nextjs-full-stack.vercel.app/studio',
    gitlink:'https://github.com/mahadihasandev/shop-nextjs-fullStack/tree/main/sanity',
    tags: ['Sanity', 'GROQ', 'CMS', 'Dashboard'],
  },
  {
    title: 'Dashboard for multi-vendor Ecommerce',
    description: 'A dashboard-focused React application with secure authentication, analytics-friendly UX, and robust admin controls for daily store operations.',
    image: '/assets/React-dashboard.png',
    link: 'https://e-commerce-dashboard-multivandor-zm.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/eCommerce-Dashboard-multivandor',
    tags: ['React', 'Node.js', 'Tailwind CSS','Redux','Antd Design'],
  },
  {
    title: 'Smart-Banking',
    description: 'A banking platform prototype featuring account flows, transaction history, and fund transfer logic with a Next.js UI and Node.js backend.',
    image: '/assets/smart-bank.png',
    link: 'https://smart-bank-frontend.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/smart-bank-frontend',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'FireChat',
    description: 'A real-time chat platform with Firebase integrations, social graph features, friend requests, and group conversation support.',
    image: '/assets/firechat.png',
    link: 'https://fire-chat-orpin.vercel.app/',
    gitlink:'https://github.com/mahadihasandev/FireChat',
    tags: ['React', 'Node.js', 'Tailwind CSS','Redux','ShadCn','Firebase','Realtime Chatting','Google auth'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}