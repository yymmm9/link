import { LinkedinIcon } from "@/components/icons/linkedin";
import { MailIcon } from "@/components/icons/mail";
import { WebIcon } from "@/components/icons/web";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { PhoneIcon } from "lucide-react";
import { MessageCircleMoreIcon } from "lucide-react";

export const USER_DATA = {
  liye: {
    slug: "",
    name: "Li Ye",
    initials: "LY",
    avatar: "",
    about: `Eu dolore anim quis laboris Lorem non ex ea consequat quis cillum occaecat tempor mollit tempor aliquip incididunt et velit.`,
    contacts: [
      {
        title: "Wechat",
        url: "liye722",
        icon: MessageCircleMoreIcon,
      },
      {
        title: "Email",
        url: "mailto:ye8507@hotmail.com",
        icon: MailIcon,
      },
      {
        title: "Tel",
        url: "tel:+34692085962",
        icon: MailIcon,
      },
      {
        title: "WhatsApp",
        url: "https://wa.me/+34692085962",
        icon: WhatsappIcon,
      },
    ],
    // socials: [
    //   {
    //     title: "Conf 2024",
    //     url: "",
    //     // icon: GithubIcon
    //   },
    // ],
    communities: [
      {
        title: "Email",
        url: "mailto:ye8507@hotmail.com",
        icon: MailIcon,
      },
      {
        title: "Phone",
        url: "tel:+34692085962",
        icon: PhoneIcon,
      },
      {
        title: "Wechat: liye722",
        url: "liye722",
        icon: MessageCircleMoreIcon,
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
