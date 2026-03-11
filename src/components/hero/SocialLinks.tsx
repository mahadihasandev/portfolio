import { Github, Linkedin } from 'lucide-react';
import { FaFacebook} from 'react-icons/fa';
import { BsFillPersonFill } from "react-icons/bs";

const links = [
  {
    href: 'https://github.com/mahadihasandev',
    icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/mayhaydi-hasan-b02476259//',
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/arnob38',
    icon: <FaFacebook className="w-6 h-6 text-[#25D366]" />,
    label: 'WhatsApp',
  },
  {
    href: 'https://mybdjobs.bdjobs.com/jobseeker-panel/edit-profile?lang=en',
    icon: <BsFillPersonFill className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'Bdjobs',
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
