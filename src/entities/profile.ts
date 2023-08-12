export enum LinkType {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Site = 'site',
  Twitter = 'twitter',
  Wikipedia = 'wikipedia',
  Youtube = 'youtube',
}

export enum FeedItemType {
  Instagram = 'instagram',
  Twitter = 'twitter',
  Youtube = 'youtube',
}

export type Link = {
  type: LinkType
  url: string
}

export type FeedItem = {
  content: string
  date: string
  id: string
  image?: string
  link: Link
  type: FeedItemType
}

export type Profile = {
  description: string
  feed: FeedItem[]
  image: string
  links: Link[]
  login: string
  name: string
}
