import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { NextHeader } from '../../organisms/NextHeader'
import { NextFooter } from '../../organisms/NextFooter'
import { items } from '../../../data'

type Props = {
  isLogged?: boolean
  url?: string
  title?: string
  description?: string
  logoSrc?: string
  logoHeight?: number
  logoSubtitle?: string
  logoSubtitleColor?: string
  keywords?: Array<string>
  image?: string
  siteName?: string
}

export const NextLayout = ({
  isLogged = true,
  children,
  url = items.layout.url,
  title = items.layout.title,
  description = items.layout.description,
  logoSrc = items.layout.logoSrc,
  logoHeight = items.layout.logoHeight,
  logoSubtitle = items.layout.logoSubtitle,
  logoSubtitleColor = items.layout.logoSubtitleColor,
  keywords = ['bolão'],
  image = '/images/image_page.png',
  siteName = items.layout.siteName
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords?.join(', ')} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="page" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="article:author" content={siteName} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:image:src" content={image} />
      </Head>
      <NextHeader
        isLogged={isLogged}
        logoSrc={logoSrc}
        logoHeight={logoHeight}
        logoSubtitle={logoSubtitle}
        logoSubtitleColor={logoSubtitleColor}
      />
      <main>{children}</main>
      <NextFooter />
    </>
  )
}
