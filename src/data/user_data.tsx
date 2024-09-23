import { BiWechat } from "@/components/icons/wechat";
import { TdesignLogoWechatStroke } from "@/components/icons/wechat-2";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { PhoneIcon, MailIcon, MessageCircleMoreIcon } from "lucide-react";

export const USER_DATA = {
  liye: {
    workPhone: "+34692085962",
    birthday: "",
    website: "",
    email: "ye8507@hotmail.com",
    avatar: "",
    wechat: "liye722",
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
    socials: [],
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
    ],
  },
  weifeng: {
    avatar:
      "https://xihuajiaohui.com/wp-content/uploads/2018/05/%E7%BD%91%E7%AB%99%E4%BC%9A%E5%BE%BD-1.png",
    workPhone: "+34645886631",
    birthday: "",
    website: "hov.y-m.dev/u/weifeng",
    email: "weifeng0526@hotmail.com",
    wechat: "weifeng645886631",
    contacts: [
      {
        title: "Email",
        url: "mailto:weifeng0526@hotmail.com",
        icon: <MailIcon />,
      },
      {
        title: "Tel",
        url: "tel:+34645886631",
        icon: <PhoneIcon />,
      },
      {
        title: "WhatsApp",
        url: "https://wa.me/+34645886631",
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
        url: "mailto:weifeng0526@hotmail.com",
        icon: <MailIcon />,
      },
      {
        title: "Phone",
        url: "tel:+34645886631",
        icon: <PhoneIcon />,
      },
    ],
  },
};
