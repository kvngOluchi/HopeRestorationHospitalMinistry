import AdvancedSettings from "./advanced-settings-icon";
import Apartment from "./apartment-icon";
import House from "./house-icon";
import Search from "./search-icon";
import Villa from "./villa-icon";
import { ICONS, IconProps } from "./types";
import Townhome from "./townhome-icon";
import Bungalow from "./bungalow-icons";
import Loft from "./loft-icon";
import ArrowTopRight from "./arrow-top-right-icon";
import RoundTick from "./round-tick-icon";
import ProjectManagment from "./project-managment-icon";
import Key from "./key-icon";
import MoneyBag from "./money-bag-icon";
import Phone from "./phone-icon";
import Linkedin from "./linkedin-icon";
import Office from "./office-icon";
import Instagram from "./instagram-icon";
import Twitter from "./twitter-icon";
import Facebook from "./facebook-icon";
import ArrowRight from "./arrow-right";
import MapAlt from "./map-alt-icon";
import Bank from "./bank-icon";
import HamburgerMenu from "./hamburger-menu-icon";
import ArrowLeft from "./arrow-left-icon";
import Close from "./close-icon";
import ArrowDown from "./arrow-down";

interface Props extends IconProps {
  type: ICONS;
}

export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case ICONS.advanced_settings_icon:
      return <AdvancedSettings {...props} />;

    case ICONS.apartment_icon:
      return <Apartment {...props} />;

    case ICONS.arrow_down:
      return <ArrowDown {...props} />;

    case ICONS.arrow_left_icon:
      return <ArrowLeft {...props} />;

    case ICONS.arrow_right_icon:
      return <ArrowRight {...props} />;

    case ICONS.arrow_top_right_icon:
      return <ArrowTopRight {...props} />;

    case ICONS.bank_icon:
      return <Bank {...props} />;

    case ICONS.bungalow_icon:
      return <Bungalow {...props} />;

    case ICONS.close_icon:
      return <Close {...props} />;

    case ICONS.facebook_icon:
      return <Facebook {...props} />;

    case ICONS.hamburger_menu_icon:
      return <HamburgerMenu {...props} />;

    case ICONS.house_icon:
      return <House {...props} />;

    case ICONS.instagram_icon:
      return <Instagram {...props} />;

    case ICONS.key_icon:
      return <Key {...props} />;

    case ICONS.linkedin_icon:
      return <Linkedin {...props} />;

    case ICONS.loft_icon:
      return <Loft {...props} />;

    case ICONS.map_alt_icon:
      return <MapAlt {...props} />;

    case ICONS.money_bag_icon:
      return <MoneyBag {...props} />;

    case ICONS.office_icon:
      return <Office {...props} />;

    case ICONS.phone_icon:
      return <Phone {...props} />;

    case ICONS.project_managment_icon:
      return <ProjectManagment {...props} />;

    case ICONS.round_tick_icon:
      return <RoundTick {...props} />;

    case ICONS.search_icon:
      return <Search {...props} />;

    case ICONS.townhome_icon:
      return <Townhome {...props} />;

    case ICONS.twitter_icon:
      return <Twitter {...props} />;

    case ICONS.villa_icon:
      return <Villa {...props} />;
    default:
      return <p>Pick an Icon</p>;
  }
}
