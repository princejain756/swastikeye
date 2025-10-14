import { Helmet, HelmetProvider } from 'react-helmet-async'
import type { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  url?: string
  image?: string
  children?: ReactNode
}

export function SeoProvider({ children }: { children: ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>
}

export function Seo({ title, description, url = 'https://swastikeye.com/', image }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Swastik Eye Hospital" />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}
    </Helmet>
  )
}

