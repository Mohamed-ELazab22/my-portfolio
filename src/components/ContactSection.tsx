import { Github, Linkedin, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", href: "mailto:mohamedelazab1199@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-elazab-cs10" },
  { icon: Github, label: "GitHub", href: "https://github.com/Mohamed-ELazab22" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/201091708224" },
  { icon: MapPin, label: "Location", href: "https://maps.google.com/?q=Alexandria,Egypt" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B1110]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F1F3EF]">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-[#3A9B78] mx-auto rounded-full mb-6" />
        <p className="text-[#A4AEA8] text-center max-w-lg mx-auto mb-12">
          Feel free to reach out for data analytics projects, machine learning collaborations, or professional opportunities.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {contacts.map(({ icon: Icon, label, href }) => (
            <a 
              key={label} 
              href={href} 
              target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : "_self"} 
              rel={href.startsWith("http") || href.startsWith("mailto") ? "noopener noreferrer" : ""} 
              className="glass rounded-xl p-6 relative card-hover group flex flex-col items-center justify-center border border-[#24332D] hover:border-[#315343] transition-all min-h-[140px]"
            >
              {/* Large official icon */}
              <div className="w-14 h-14 rounded-xl bg-[#16211D] border border-[#315343] flex items-center justify-center mb-3 group-hover:bg-[#3A9B78]/20 group-hover:border-[#3A9B78] transition-all">
                <Icon size={28} className="text-[#78C6A3] group-hover:text-[#F1F3EF] transition-colors" />
              </div>

              {/* Service Name */}
              <h3 className="font-medium text-[#F1F3EF] text-sm group-hover:text-[#78C6A3] transition-colors">{label}</h3>

              {/* Small external-link icon in bottom-right corner */}
              <div className="absolute bottom-3 right-3 text-[#737F78] group-hover:text-[#78C6A3] transition-colors">
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
