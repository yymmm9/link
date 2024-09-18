import { SOCIAL_DATA } from '@/data/social_data'
import { type Data } from '@/types'
import { USER_DATA } from '@/data/user_data'

export const data: Data = SOCIAL_DATA

export type Links = {
  title: string
  url: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
} 
type UserData = {
    [key: string]: {
      slug: string;
      name: string;
      initials: string;
      avatar: string;
      about: string;
      contacts: Links[];
      socials: Links[];
      communities: Links[];
    };
  };


export const userData: UserData= USER_DATA
