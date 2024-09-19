import { BiWechat } from "@/components/icons/wechat";
import { TdesignLogoWechatStroke } from "@/components/icons/wechat-2";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { PhoneIcon, MailIcon, MessageCircleMoreIcon } from "lucide-react";

export const USER_DATA = {
  liye: {
    slug: "",
    firstName: "Li",
    lastName: "Ye",
    organization: "",
    title: "CMO",
    initials: "LY",
    avatar: "",
    about: `Eu dolore anim quis laboris Lorem non ex ea consequat quis cillum occaecat tempor mollit tempor aliquip incididunt et velit.`,
    workPhone: "+34692085962",
    birthday: "",
    website: "",
    email: "e8507@hotmail.com",
    role: "",
    contacts: [
      {
        title: "Wechat",
        url: "liye722",
        icon: <TdesignLogoWechatStroke />,
      },
      {
        title: "Email",
        url: "mailto:ye8507@hotmail.com",
        icon: <MailIcon />,
      },
      {
        title: "Tel",
        url: "tel:+34692085962",
        icon: <PhoneIcon />,
      },
      {
        title: "WhatsApp",
        url: "https://wa.me/+34692085962",
        icon: <WhatsappIcon />,
      },
    ],
    socials: [
      // {
      //   title: "Conf 2024",
      //   url: "",
      //   // icon: GithubIcon
      // },
    ],
    communities: [
      {
        title: "Email",
        url: "mailto:ye8507@hotmail.com",
        icon: <MailIcon />,
      },
      {
        title: "Phone",
        url: "tel:+34692085962",
        icon: <PhoneIcon />,
      },
      {
        title: "Wechat: liye722",
        url: "liye722",
        icon: <TdesignLogoWechatStroke />,
      },
      // {
      //   title: 'Next.js Argentina',
      //   url: 'https://dub.sh/nextjsargentina',
      //   icon: NextJSArgIcon
      // },
      // {
      //   title: 'Discord Community',
      //   url: 'https://dub.sh/dsnextjsarg',
      //   icon: DiscordIcon
      // }
    ],
  },
};
