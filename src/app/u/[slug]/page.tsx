import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ButtonLink } from '@/components/button-link'
import { CardLink } from '@/components/card-link'
// import { data } from '@/constants'
import { userData } from '@/constants'

export default function HomePage({ params }: any) {
  let data = userData[params.slug]
  if (!data) return;
  return (
    <main className='flex items-center flex-col mx-auto w-full justify-center pt-24 px-8'>
      <a
        href=''
        target='_blank'
        rel='noopener noreferrer'
        className='rounded-full'
      >
        <Avatar className='size-28 shadow border'>
          <AvatarImage alt={data.name} src={data.avatar} />
          <AvatarFallback className='font-monoo font-bold'>
            {data.initials}
          </AvatarFallback>
        </Avatar>
      </a>

      <section className='flex flex-col items-center justify-center'>
        <div className='flex gap-4 justify-center items-center mt-8 mb-4'>
          <h1 className='font-bold text-3xl dark:text-white text-black text-center'>
            {data.name}
          </h1>
        </div>
        <h2 className='mx-auto max-w-lg px-4 text-sm font-monoo font-semibold dark:text-neutral-300 text-neutral-700 md:text-pretty text-center'>
          {data.about}
        </h2>
      </section>

      <section className='flex items-center gap-4 my-8'>
        {data.contacts.map((contact) => (
          <ButtonLink key={contact.url} {...contact} />
        ))}
      </section>

      {data.socials.length >0 && <h3 className='font-semibold my-4 text-xl dark:text-white text-black text-center'>
        Highlight
      </h3>}
      {data.socials.map((social) => (
        <CardLink key={social.url} {...social} />
      ))}

      {data.communities.length >0 && <h3 className='font-semibold mt-8 mb-4 text-xl dark:text-white text-black text-center'>
        Links
      </h3>}
      {data.communities.map((community) => (
        <CardLink key={community.url} {...community} />
      ))}
    </main>
  )
}
