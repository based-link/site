import type { Link } from '@/entities/profile'

import { LinkType } from '@/entities/profile'
import Image from 'next/image'

const icons = {
  [LinkType.Facebook]: '/icons/facebook.svg',
  [LinkType.Instagram]: '/icons/instagram.svg',
  [LinkType.Site]: '/icons/site.svg',
  [LinkType.Twitter]: '/icons/twitter.svg',
  [LinkType.Wikipedia]: '/icons/wikipedia.svg',
  [LinkType.Youtube]: '/icons/youtube.svg',
}

export function Link({ type, url }: Link) {
  const icon = icons[type]

  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <Image alt={`${type} url`} height={40} src={icon} width={40} />
    </a>
  )
}
