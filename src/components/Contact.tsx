
import { SectionTitle } from "./ui/SectionTitle";
import { ContactForm } from "./ui/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";
import { SocialLinks } from "./hero/SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-container">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="soft-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities where I can contribute to impactful products.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mayhaydihasan.com@gmail.com"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-6 h-6" />
                <span>mayhaydihasan.com@gmail.com</span>
              </a>
              <a
                href="https://github.com/mahadihasandev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
                <span>github.com/mahadihasandev</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mayhaydi-hasan-b02476259/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/mayhaydi-hasan-b02476259/</span>
              </a>
            </div>
            <div className="mt-10 justify-center">
              <SocialLinks/>
            </div>
          </div>

          <div className="soft-card p-8 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
