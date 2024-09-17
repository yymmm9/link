import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
// import { type Links } from '@/types'
import { Links } from '@/constants'
export function ButtonLink({ title, url, icon }: Links) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='shadow rounded-full'
          asChild
        >
          <a
            aria-label={`${title} link`}
            key={url}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {icon && icon({ className: 'h-[1.5rem] w-[1.5rem]' })}
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent side='bottom'>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
