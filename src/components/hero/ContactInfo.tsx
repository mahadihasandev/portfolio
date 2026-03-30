import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl ${href ? 'hover:scale-105' : ''} transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center md:items-start gap-1 soft-card px-2 py-2">
      <ContactItem
        icon={<Phone className="w-5 h-5" />}
        text="+880 01735696417"
        href="tel:+8801735696417"
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text="mayhaydihasan.com@gmail.com"
        href="mailto:mayhaydihasan.com@gmail.com"
      />
      <ContactItem
        icon={<MapPin className="w-5 h-5" />}
        text="Ashulia,Savar,Dhaka,Bangladesh"
      />
    </div>
  );
}
