'use client'

import type { FeedItem } from '@/entities/profile'

import { FeedItemType } from '@/entities/profile'
import cn from 'classnames'
import format from 'date-fns/format'
import Image from 'next/image'
import { Instagram, Twitter, Youtube } from 'react-feather'

const colors = {
  [FeedItemType.Instagram]:
    'bg-gradient-to-r from-yellow-400/20 via-red-500/20 to-pink-500/20',
  [FeedItemType.Twitter]: 'bg-blue-400/10',
  [FeedItemType.Youtube]: 'bg-red-500/10',
}

const icons = {
  [FeedItemType.Instagram]: <Instagram />,
  [FeedItemType.Twitter]: <Twitter />,
  [FeedItemType.Youtube]: <Youtube />,
}

export function Post({ content, date, image, link, type }: FeedItem) {
  const bgColor = colors[type] || 'bg-slate-400/10'
  const icon = icons[type]

  return (
    <article className={cn('rounded-md px-3 py-4', bgColor)}>
      <a
        className="block"
        href={link.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          {icon}
          <p>{format(new Date(date), 'd MMM yyyy')}</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          {image && (
            <Image
              onError={e => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
              alt=""
              className="w-full rounded-md border-2 border-solid border-gray-200/10 md:h-full md:w-1/4"
              height={100}
              src={image}
              width={200}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </a>
    </article>
  )
}
