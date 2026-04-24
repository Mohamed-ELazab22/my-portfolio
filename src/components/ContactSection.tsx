import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "mohamedelazab1199@gmail.com", href: "mailto:mohamedelazab1199@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Mohamed Elazab", href: "https://www.linkedin.com/in/mohamed-elazab-cs10" },
  { icon: Github, label: "GitHub", value: "Mohamed-ELazab22", href: "https://github.com/Mohamed-ELazab22" },
  { icon: MessageCircle, label: "WhatsApp", value: "+20 109 170 8224", href: "https://wa.me/201091708224" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
          I'm always open to discussing data projects, collaboration opportunities, or just connecting.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-8 text-center card-hover group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{label}</h3>
              <span className="text-sm text-muted-foreground break-all">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
