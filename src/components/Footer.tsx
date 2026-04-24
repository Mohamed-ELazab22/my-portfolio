import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohamed Ahmed Elazab. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          {[
            { icon: Mail, href: "mailto:mohamedelazab1199@gmail.com" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-elazab-cs10" },
            { icon: Github, href: "https://github.com/Mohamed-ELazab22" },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
