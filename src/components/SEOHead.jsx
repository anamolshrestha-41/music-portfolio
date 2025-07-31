import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "Anamol Shrestha - Professional Music Portfolio",
  description = "Discover original compositions, voice samples, and musical creations by Anamol Shrestha. Professional musician crafting melodies that touch the soul.",
  image = "/og-image.svg",
  url = "",
  type = "website"
}) => {
  const fullUrl = `https://music-portfolio-anamol.vercel.app${url}`
  const fullImageUrl = image.startsWith('http') ? image : `https://music-portfolio-anamol.vercel.app${image}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  )
}

export default SEOHead