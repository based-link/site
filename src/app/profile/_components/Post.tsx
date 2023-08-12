'use client'

import type { FeedItem } from '@/entities/profile'

import { FeedItemType } from '@/entities/profile'
import cn from 'classnames'
import format from 'date-fns/format'
import Image from 'next/image'
import { useState } from 'react'
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
  const [isCorrectImage, setIsCorrectImage] = useState(Boolean(image))

  const bgColor = colors[type] || 'bg-slate-400/10'
  const icon = icons[type]

  return (
    <article
      className={cn(
        'mb-4 break-inside-avoid rounded-md transition-shadow hover:shadow-md',
        bgColor,
      )}
    >
      <a
        className="block px-3 py-4"
        href={link.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          {icon}
          <p>{format(new Date(date), 'd MMM yyyy')}</p>
        </div>
        <div className="flex flex-col gap-4">
          {image && isCorrectImage && (
            <Image
              onError={() => {
                setIsCorrectImage(false)
              }}
              alt=""
              className="w-full rounded-md border-2 border-solid border-gray-200/10"
              height={100}
              src={image}
              width={300}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </a>
    </article>
  )
}
