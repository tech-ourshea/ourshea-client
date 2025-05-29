import { Link } from "react-router";
import IconCall from "~/components/ui/icons/icon-call";
import IconFacebook from "~/components/ui/icons/icon-facebook";
import IconInstagram from "~/components/ui/icons/icon-instagram";
import IconLinkedin from "~/components/ui/icons/icon-linkedin";
import IconWhatsapp from "~/components/ui/icons/icon-whatsapp";
import IconYoutube from "~/components/ui/icons/icon-youtube";
import { EMAIL } from "~/utils/general";

const ContactsBanner = () => {
  return (
    <div className="px-5 lg:px-20 py-2 border-primary-900 border-b-[0.5px] text-[6px] text-primary-900 lg:text-sm">
      <div className="flex justify-between">
        <ul className="flex gap-2.5 list-none">
          <li>
            <Link
              className="flex items-center gap-1.5"
              to="tel:+23324-448-5242"
            >
              <IconCall className="w-[5px] lg:w-6 h-[6px] lg:h-6" />
              <span className="hidden lg:block">+23324-448-5242</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://wa.me/12069798033?text=Hi%2C%20I%20found%20you%20through%20your%20website"
              className="flex items-center gap-1.5"
            >
              <IconWhatsapp className="w-[5px] lg:w-6 h-[6px] lg:h-6" />
              <span className="hidden lg:block">+1206-979-8033</span>
            </Link>
          </li>
          <li className="bg-primary-900 w-[0.5px]"></li>
          <li className="flex justify-center items-center">
            <Link to={`mailto:${EMAIL}`}>{EMAIL}</Link>
          </li>
          <li className="bg-primary-900 w-[0.5px]"></li>
          <li className="flex justify-center items-center">
            Mon – Sat: 8:00 am – 5:00 pm GMT
          </li>
        </ul>
        <ul className="flex items-center gap-1 lg:gap-5">
          <li>
            <a
              className="opacity-30"
              href="http://www.facebook.com"
              target="_blanc"
            >
              <IconFacebook className="w-[6px] lg:w-6 h-[6px] lg:h-6" />
            </a>
          </li>
          <li>
            <a
              className="opacity-30"
              href="http://www.linkedin.com"
              target="_blanc"
            >
              <IconLinkedin className="w-[6px] lg:w-6 h-[6px] lg:h-6" />
            </a>
          </li>
          <li>
            <a
              className="opacity-30"
              href="http://www.instagram.com"
              target="_blanc"
            >
              <IconInstagram className="w-[6px] lg:w-6 h-[6px] lg:h-6" />
            </a>
          </li>
          <li>
            <a
              className="opacity-30"
              href="http://www.youtube.com"
              target="_blanc"
            >
              <IconYoutube className="w-[6px] lg:w-6 h-[6px] lg:h-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsBanner;
