import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'
import { WebIcon } from '@/components/icons/web'
import { WhatsappIcon } from '@/components/icons/whatsapp'

export const USER_DATA = {
  temp: {
  slug: '',
  name: 'Li Ye',
  initials: 'LY',
  avatar: '',
  about: `Eu dolore anim quis laboris cillum sunt deserunt id sint esse culpa. Do Lorem non ex ea consequat quis cillum occaecat tempor mollit tempor aliquip incididunt et velit.`,
  contacts: [
    {
      title: 'Website',
      url: 'youtube.com',
      icon: WebIcon
    },
    // {
    //   title: 'Resume',
    //   url: 'https://cv.emapeire.xyz',
    //   icon: ResumeIcon
    // },
    {
      title: 'Email',
      url: 'mailto:yymmm9@gmail.com',
      icon: MailIcon
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/+3347972856',
      icon: WhatsappIcon
    }
  ],
  socials: [
    {
      title: 'Conf 2024',
      url: '',
      // icon: GithubIcon
    },
  ],
  communities: [
    {
      title: 'Email',
      url: 'mailto:yymmm9@gmail.com',
      icon: MailIcon
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emanuelpeire',
      icon: LinkedinIcon
    }
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
  ]
}}
