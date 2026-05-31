import { site, faqs, absoluteUrl, SITE_URL } from '../config/site';

const personId = `${SITE_URL}/#person`;

// Person schema — inti identitas untuk Knowledge Panel & AI search.
export const personSchema = {
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  jobTitle: site.jobTitle,
  description: site.description,
  url: SITE_URL,
  image: absoluteUrl(site.image),
  email: site.email,
  knowsAbout: [...site.knowsAbout],
  knowsLanguage: [...site.languages],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: site.university.name,
    url: site.university.url,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.countryCode,
  },
  sameAs: [site.social.github, site.social.linkedin],
};

// Graph utama dipasang di setiap halaman via BaseLayout.
export function buildGraph(extra: object[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${site.name} — Portfolio`,
        description: site.description,
        publisher: { '@id': personId },
        inLanguage: 'en',
      },
      ...extra,
    ],
  };
}

export const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function profilePageSchema(url: string) {
  return {
    '@type': 'ProfilePage',
    '@id': `${url}#profilepage`,
    url,
    name: `${site.name} — ${site.jobTitle}`,
    about: { '@id': personId },
    mainEntity: { '@id': personId },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.url),
    })),
  };
}
