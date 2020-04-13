import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

interface SeoProps {
  title: string
  description: string
}

const SEO: React.FC<SeoProps> = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  const defaults = site.siteMetadata

  const seo = {
    title: title || defaults.defaultTitle,
    description: description || defaults.description,
    twitterUsername: defaults.twitterUsername || "",
  }

  return (
    <Helmet>
      {seo.title && ( <title>{seo.title}</title> )}
      {seo.description && ( <meta name="description" content={seo.description} /> )}
      {seo.title && ( <meta name="og:title" property="og:title" content={seo.title} /> )}
      {seo.description && ( <meta property="og:description" content={seo.description} /> )}

      {seo.twitterUsername && ( <meta name="twitter:creator" content={seo.twitterUsername} /> )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && ( <meta name="twitter:description" content={seo.description} /> )}
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title,
        description,
        twitterUsername,
        siteUrl
      }
    }
  }
`