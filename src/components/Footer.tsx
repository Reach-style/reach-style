import { Link } from "react-router-dom";

// Import icons
import emailIcon from "@/assets/email_icon_transparent.png";
import whatsappIcon from "@/assets/whatsapp_icon_transparent.png";
import contactIcon from "@/assets/contact_icon_transparent.png";

const Footer = () => {
  const footerLinks = [
    { label: "About REACH Style Manager", path: "/about" },
    { label: "Benefits of REACH Style Manager", path: "/benefits" },
    { label: "Presentations", path: "/presentations" },
    { label: "REACH Style Manager Images", path: "/rmmimages" },
    { label: "Articles", path: "/articles" },
    {
      label: "About REACH Technologies",
      external: "https://reach-tech.com/aboutUs.html",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block w-fit">
              <span className="text-primary">REACH</span> Style Manager
            </Link>
            <p className="text-gray-300 max-w-md">
              The REACH Style Manager
            </p>

            {/* Contact Icons Section */}
            <div className="mt-6 space-y-4">

              {/* Email */}
              <div className="flex items-center gap-3">
                <img
                  src={emailIcon}
                  alt="Email icon for contacting REACH Style Manager"
                  className="w-8"
                />
                <span className="text-gray-300 text-lg">
                  info@reach-tech.com
                </span>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918459278496"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp contact icon for REACH Style Manager support"
                  className="w-8"
                />
                <span className="text-gray-300 text-lg">
                  +91 84592 78496
                </span>
              </a>

              {/* Write to Us */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdwXlZfazuaOvXWFpWIwwNPoiAmqj4m_Gl_LzUsFKGkyZHF5Q/viewform?usp=sharing&ouid=102794643040205824313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img
                  src={contactIcon}
                  alt="Contact form icon for writing to REACH Style Manager team"
                  className="w-7"
                />
                <span className="text-gray-300 text-lg">
                  Write to Us
                </span>
              </a>

            </div>
          </div>

          <div>
            <nav className="space-y-3">
              {footerLinks.map((link, index) => (
                <div key={index}>
                  {link.external ? (
                    <a
                      href={link.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors duration-300 block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path!}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 block"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <nav className="space-y-3">
              <Link to="/SalesPartners" className="block text-gray-300 hover:text-primary transition">Sales Partners</Link>
              <Link to="/TrainingPartners" className="block text-gray-300 hover:text-primary transition">Training Partners</Link>
              <Link to="/SupportPartners" className="block text-gray-300 hover:text-primary transition">Support Partners</Link>
              <Link to="/GovernmentAgencies" className="block text-gray-300 hover:text-primary transition">Government Agencies</Link>
              <Link to="/NonProfitOrganisations" className="block text-gray-300 hover:text-primary transition">Non Profit Organisations</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; REACH Technologies 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
