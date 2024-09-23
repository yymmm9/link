import 'server-only'

const dictionaries: any = {
  en: () => import('@/../messages/en.json').then((module) => module.default),
  zh: () => import('@/../messages/zh.json').then((module) => module.default),
} as { [locale: string]: () => Promise<any> }

export const getDictionary =
  async (locale: keyof typeof dictionaries) => dictionaries[locale]()