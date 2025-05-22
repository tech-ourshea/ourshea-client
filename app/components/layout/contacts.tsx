import IconCall from "~/components/ui/icons/icon-call";
import IconFacebook from "~/components/ui/icons/icon-facebook";
import IconInstagram from "~/components/ui/icons/icon-instagram";
import IconLinkedin from "~/components/ui/icons/icon-linkedin";
import IconWhatsapp from "~/components/ui/icons/icon-whatsapp";
import IconYoutube from "~/components/ui/icons/icon-youtube";

const ContactsBanner = () => {
  return (
    <div className="px-20 py-2 border-primary-900 border-b-[0.5px] text-primary-900 text-sm">
      <div className="flex justify-between">
        <ul className="flex gap-2.5 list-none">
          <li className="flex items-center gap-1.5">
            <IconCall />
            <a href="tel:+23324-448-5242">+23324-448-5242</a>
          </li>
          <li className="flex items-center gap-1.5">
            <IconWhatsapp />
            <a href="https://wa.me/12069798033?text=Hi%2C%20I%20found%20you%20through%20your%20website">
              +1206-979-8033
            </a>
          </li>
          <li className="bg-primary-900 w-[0.5px]"></li>
          <li>
            <a href="mailto:oursheaghltd@gmail.com">oursheaghltd@gmail.com</a>
          </li>
          <li className="bg-primary-900 w-[0.5px]"></li>
          <li>Mon - Sun: 8:00 - 7:30</li>
        </ul>
        <ul className="flex items-center gap-5">
          <a
            className="opacity-30"
            href="http://www.facebook.com"
            target="_blanc"
          >
            <IconFacebook />
          </a>
          <a
            className="opacity-30"
            href="http://www.linkedin.com"
            target="_blanc"
          >
            <IconLinkedin />
          </a>
          <a
            className="opacity-30"
            href="http://www.instagram.com"
            target="_blanc"
          >
            <IconInstagram />
          </a>
          <a
            className="opacity-30"
            href="http://www.youtube.com"
            target="_blanc"
          >
            <IconYoutube />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ContactsBanner;
