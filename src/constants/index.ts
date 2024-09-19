import { SOCIAL_DATA } from '@/data/social_data'
import { type Data } from '@/types'
import { USER_DATA } from '@/data/user_data'

export const data: Data = SOCIAL_DATA

export type Links = {
  title: string
  url: string
  icon?: any;
}

export type UserData = {
  [key: string]: {
    slug: string;
    title: string;
    role: string;
    wechat: string;
    firstName: string;
    lastName: string;
    organization: string;
    workPhone: string;
    website: string;
    email: string;
    birthday: string;
    initials: string;
    avatar: string;
    about: string;
    contacts: Links[];
    socials: Links[];
    communities: Links[];
  };
};

export const userData: UserData = USER_DATA
