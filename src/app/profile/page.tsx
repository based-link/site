import type { Profile } from '@/entities/profile'

import Image from 'next/image'

import { Link } from './_components/Link'
import { Post } from './_components/Post'

export default async function Profile() {
  const res = await fetch('http://localhost:3000/api/profile')
  const { data } = (await res.json()) as { data: Profile }

  return (
    <main>
      <section className="mb-6 py-6 md:flex md:items-start md:gap-9">
        <Image
          alt={data.name}
          className="mx-auto mb-3 h-32 w-32 rounded-full md:mx-0 md:h-40 md:w-40"
          height={150}
          priority
          src={data.image}
          width={150}
        />
        <div className="">
          <h1 className="text-center text-4xl font-semibold md:text-left">
            {data.name}
          </h1>
          <p className="mb-3 text-center text-gray-500 md:text-left">
            @{data.login}
          </p>
          <div className="mb-3 flex justify-center gap-3 md:justify-start">
            {data.links.map(link => (
              <Link key={link.url} {...link} />
            ))}
          </div>
          <p className="text-balance text-center md:text-left">
            {data.description}
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        {data.feed.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </section>
    </main>
  )
}
