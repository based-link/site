import { NextResponse } from 'next/server'

const profile = {
  description: 'Presidente de El Salvador',
  feed: [
    {
      content:
        'Seguimos en las investigaciones.\n\nCONSEJO: No pongan las manos al fuego por NADIE.',
      date: '2023-08-03T21:23:48.000Z',
      id: '5a39df3dfb444c5454f7c08818e39842',
      link: {
        title: '@nayibbukele',
        url: 'https://twitter.com/nayibbukele/status/1687212697644146688',
      },
      type: 'twitter',
    },
    {
      content: '¿Y por qué borraron el tuit @UniNoticias?',
      date: '2023-08-03T04:41:42.000Z',
      id: '24517e35121f06f5229817a444d15db5',
      image: 'https://pbs.twimg.com/media/F2lJpHmWYAAIcdS.jpg',
      link: {
        title: '@nayibbukele',
        url: 'https://twitter.com/nayibbukele/status/1686960510590124032',
      },
      type: 'twitter',
    },
    {
      content:
        'Llamada con Frank Rubio, Astronauta en la Estación Espacial Internacional',
      date: '2023-07-27T04:02:41.000Z',
      id: '63883aaa92dac132290eb236be88b0c5',
      image: 'https://i.ytimg.com/vi/EQoNIqNf03U/maxresdefault.jpg',
      link: {
        title: 'Nayib Bukele',
        url: 'https://www.youtube.com/watch?v=EQoNIqNf03U',
      },
      type: 'youtube',
    },
    {
      content:
        'Nuestras estrategias de seguridad han desarticulado a las pandillas, obligándolas a migrar de los grandes centros urbanos a esconderse en las zonas rurales de nuestro país, fuera de su hábitat natural.\n\nEstas últimas semanas, hemos identificado varios grupos de pandilleros que se esconden en el departamento de Cabañas, por lo que decidimos cercarlo completamente.\n\n8000 hombres, entre policía y ejército, han acordonado más de 1000 kilómetros cuadrados. Ningún pandillero podrá salir, mientras nuestros equipos de extracción se encargan de sacarlos de sus escondites.\n\nLa población honrada, visitantes y turistas no tienen nada que temer. La seguridad está garantizada.\n\nDios bendiga a nuestro país 🇸🇻',
      date: '2023-08-03T01:25:46.000Z',
      id: 'fb9e67ace0149e3c861c41714e545e8e',
      image:
        'https://scontent-cdg4-2.cdninstagram.com/v/t51.2885-15/364299940_309427341489751_5786817188271690661_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-cdg4-2.cdninstagram.com&_nc_cat=107&_nc_ohc=yVSVjxJ4XykAX9xOq-Y&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9dkiR4tVufQaTu3NW2WNLVmRU96snFJ-wptNwNoD0EA&oe=64D02C1E&_nc_sid=8b3546',
      link: {
        title: 'nayibbukele',
        url: 'https://www.instagram.com/p/CvdsH3nLKs9',
      },
      type: 'instagram',
    },
  ],
  image:
    'https://cloudflare-ipfs.com/ipfs/QmQgd9Hbctb796j6UxtQEQmaZZUUQYVUmUHuTTUuxzfSNm',
  links: [
    {
      type: 'wikipedia',
      url: 'https://en.wikipedia.org/wiki/Nayib_Bukele',
    },
    { type: 'site', url: 'https://www.presidencia.gob.sv' },
    { type: 'facebook', url: 'https://www.facebook.com/nayibbukele/' },
    { type: 'twitter', url: 'https://twitter.com/nayibbukele' },
    { type: 'youtube', url: 'https://www.youtube.com/@nayibbukele' },
    { type: 'instagram', url: 'https://www.instagram.com/nayibbukele/' },
  ],
  login: 'nayibbukele',
  name: 'Nayib Bukele',
}

export async function GET() {
  return NextResponse.json({ data: profile })
}
