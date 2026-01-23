import { Link } from "react-router-dom";

// Icons
import emailIcon from "@/assets/email_icon.png";
import whatsappIcon from "@/assets/whatsapp_icon.png";
import contactIcon from "@/assets/contact_icon.png";

const Header = () => {
  return (
    <header className="w-full">
      {/* TOP UTILITY BAR */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-end gap-5 text-sm sm:text-base">

            <div className="flex items-center gap-2">
              <img
                src={emailIcon}
                alt="Email icon for contacting REACH Style Manager"
                className="w-5 sm:w-6 icon-a31951"
              />
              <span>info@reach-tech.com</span>
            </div>

            <a
              href="https://wa.me/918459278496"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp icon for REACH Style Manager support"
                className="w-5 sm:w-6 icon-a31951"
              />
              <span>+91 84592 78496</span>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdwXlZfazuaOvXWFpWIwwNPoiAmqj4m_Gl_LzUsFKGkyZHF5Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img
                src={contactIcon}
                alt="Contact form icon for writing to REACH Style Manager team"
                className="w-5 sm:w-6 icon-a31951"
              />
              <span>Write to Us</span>
            </a>

          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* LOGO */}
            <Link to="/" className="text-3xl sm:text-4xl font-bold">
              <span style={{ color: "#a61042" }}>REACH</span>
              <span className="text-black"> Style Manager</span>
            </Link>

            {/* NAVIGATION */}
            <nav>
              <ul className="flex flex-wrap gap-8 text-lg font-medium">
                <li>
                  <Link to="/" className="text-gray-800 hover:text-[#a61042] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-800 hover:text-[#a61042] transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/benefits" className="text-gray-800 hover:text-[#a61042] transition">
                    Benefits
                  </Link>
                </li>
              </ul>
            </nav>

          </div>

          {/* TAGLINE */}
          <p className="mt-3 text-base text-gray-600 text-center lg:text-right">
            RSM
          </p>

        </div>
      </div>
    </header>
  );
};

export default Header;
