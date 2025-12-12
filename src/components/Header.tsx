import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import icons
import emailIcon from "@/assets/email_icon.png";
import whatsappIcon from "@/assets/whatsapp_icon.png";
import contactIcon from "@/assets/contact_icon.png";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <Link to="/" className="text-3xl sm:text-4xl font-bold leading-tight">
            <span className="text-red-700" style={{ color: "#a61042" }}>
              REACH
            </span>
            <span className="text-black"> Style Manager</span>
          </Link>

          <div className="text-sm sm:text-base text-gray-700 md:block w-full md:w-1/2 lg:w-1/3 text-left md:text-right leading-tight">
              RSM
          </div>

        </div>


                {/* Contact Icons Section */}
        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">

          {/* Email */}
          <div className="flex items-center gap-2">
            <img src={emailIcon} alt="email icon" className="w-7 sm:w-8" />
            <span className="text-base sm:text-lg text-gray-800">
              info@reach-tech.com
            </span>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918459278496"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img src={whatsappIcon} alt="whatsapp icon" className="w-7 sm:w-8" />
            <span className="text-base sm:text-lg text-gray-900">
              +91 84592 78496
            </span>
          </a>

          {/* Write to Us */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwXlZfazuaOvXWFpWIwwNPoiAmqj4m_Gl_LzUsFKGkyZHF5Q/viewform?usp=sharing&ouid=102794643040205824313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img src={contactIcon} alt="contact icon" className="w-7 sm:w-8" />
            <span className="text-base sm:text-lg text-gray-900">
              Write to Us
            </span>
          </a>

        </div>

      </div>
    </header>
  );
};

export default Header;
