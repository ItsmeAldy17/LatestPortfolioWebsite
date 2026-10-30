# SEO Technical Audit: LatestPortfolioWebsite

Date: 2026-10-30
Scope: read only, no build, no repo changes. Sources checked via Read.

## Summary

Base SEO is strong: unique titles and descriptions per route, canonical, robots meta, OG plus Twitter, JSON-LD graph on every page, sitemap filter for thin pages. Main gaps: no hreflang, FAQ schema only on homepage, project detail uses CreativeWork instead of more specific type, and some anchor text is generic.

## Findings

| Priority | Area | Location | Finding | Fix |
|---|---|---|---|---|
| [HIGH] | hreflang | src/layouts/BaseLayout.astro:40-41 | html lang is en only, no hreflang alternates. Content is English only so low risk now, but blocks future ID version. | If ID version is planned, add link rel alternate hreflang en and id plus x-default. If English only, keep as is and record decision. |
| [HIGH] | FAQ schema coverage | src/pages/index.astro:19, src/lib/schema.ts:52-60 | faqSchema is attached only on homepage. FAQ content exists only there, so this is correct, but no FAQPage on deeper pages. | Keep FAQPage on homepage only. Do not duplicate FAQ schema on other routes. No action unless FAQ block is added elsewhere. |
| [HIGH] | Project schema type | src/pages/projects/[id].astro:24-37 | Detail pages use CreativeWork plus WebPage. Valid, but SoftwareApplication or TechArticle with author and datePublished would give richer results for shipped apps. | For app like projects, switch CreativeWork to SoftwareApplication with applicationCategory, operatingSystem, offers. For research like posts, use TechArticle with datePublished. Keep creator and author linked to person ID. |
| [MED] | Sitemap link tag | src/layouts/BaseLayout.astro:94 | Uses link rel sitemap to sitemap-index.xml. Valid hint, but crawlers use robots.txt Sitemap directive as source of truth. | Keep as is. Already covered by public/robots.txt:50 which points to https://aldyardnsyh.my.id/sitemap-index.xml. No change needed. |
| [MED] | OG image check | src/config/site.ts:34, src/layouts/BaseLayout.astro:65-68 | ogImage defaults to /og-image.png with 1200x630 tags. File exists in dist. Alt text is name plus job title. | Verify /og-image.png is exactly 1200x630 and under 300KB. Keep absolute URL via absoluteUrl. |
| [MED] | Anchor text generic | src/pages/projects/index.astro:66-68, src/components/Projects.astro:42-44 | Listing cards use View project and homepage uses View all N projects. Descriptive but repeated on every card. | Change card CTA to include project name in accessible label, example: aria-label View {p.name} project detail. Keep visual text short. Same for highlights cards. |
| [MED] | Heading structure | src/components/Hero.astro:34, src/components/SectionHeader.astro:16, src/pages/projects/[id].astro:91-115 | Homepage has single H1 in Hero, section titles are H2 via SectionHeader. Project detail H1 comes from PageHeader, subsections use H2. Correct. | No fix. Keep rule: one H1 per page from PageHeader or Hero, never add second H1 in body. |
| [MED] | Highlights detail meta | src/pages/highlights/[slug].astro:41 | Uses type article plus publishedTime and modifiedTime. Good. dateModified equals datePublished. | If source article is updated, set modifiedTime to real update date, not publish date. |
| [LOW] | Meta keywords | src/layouts/BaseLayout.astro:51 | meta keywords is present from site.keywords. Google ignores it, but harmless. | Keep or remove. No SEO effect. Keep for internal consistency only. |
| [LOW] | Geo meta | src/layouts/BaseLayout.astro:83-84 | geo.region uses ID-YO which is not a valid ISO 3166-2 code for Yogyakarta. Correct code is ID-YO for Yogyakarta is actually valid for DIY, but format is ID plus region. Value is ID-YO which matches DIY. | Verify intended region: DIY is ID-YO, correct. No change. If targeting all Indonesia, drop geo tags. |
| [LOW] | Twitter creator | src/layouts/BaseLayout.astro:80 | twitter:creator is hardcoded to @aldyardnsyh. | Confirm this handle exists, else remove tag or update to real handle. |
| [LOW] | 404 and signal indexing | src/pages/404.astro:5, src/pages/signal.astro:6 | Both set robots noindex, nofollow. Sitemap filter in astro.config.mjs:19 excludes /signal. Consistent with robots.txt Disallow /signal. | No fix. Triple layer is correct: meta robots plus sitemap filter plus robots.txt disallow. |

## Per route check

| Route | Title unique | Desc unique | H1 single | Schema |
|---|---|---|---|---|
| / | Default site name plus job title via BaseLayout:34 | site.description | Yes, Hero.astro:34 | ProfilePage plus FAQPage |
| /projects | All Projects | Unique ML portfolio desc | Yes, PageHeader | BreadcrumbList plus ItemList |
| /projects/[id] | p.name | p.overview | Yes, PageHeader | CreativeWork plus WebPage plus BreadcrumbList |
| /achievements | All Achievements | Unique awards desc | Yes, PageHeader | BreadcrumbList |
| /certifications | All Certifications | Unique cert desc | Yes, PageHeader | BreadcrumbList |
| /highlights | Highlights and Press | Unique press desc | Yes, PageHeader title Press | CollectionPage plus BreadcrumbList |
| /highlights/[slug] | h.title | h.description | Yes, PageHeader | BlogPosting plus BreadcrumbList |
| /signal | Drop a signal | Unique contact desc | Yes, PageHeader | None extra, noindex correct |
| /404 | Page not found | Unique 404 desc | Yes | None extra, noindex correct |

## Sitemap and robots

1. public/robots.txt: allows all, disallows /signal, lists AI bots explicitly, Sitemap points to live SITE_URL. Matches src/config/site.ts:6 https://aldyardnsyh.my.id.
2. astro.config.mjs: filter excludes /signal, priority 1.0 home, 0.8 projects detail, 0.6 rest. Sound.
3. dist/: sitemap-index.xml plus sitemap-0.xml generated. Contains home, achievements, certifications, highlights, highlights detail, projects. Signal excluded. Good.
4. public/_redirects: legacy /all-projects, /project/*, /all-achievements, /all-certifications redirect with 301 to canonical routes. Preserves link equity. Good.

## Internal linking

1. Projects.astro:42 links to /projects with text View all N projects. Good.
2. Achievements index links to /certifications. Good cross link.
3. Project detail related section links 2 related projects. Good for crawl depth.
4. Breadcrumb nav with aria-label in PageHeader.astro:14 plus BreadcrumbList schema on every index and detail page. Good.
5. Back to home links on every index page. Good.

## Action list in order

1. Add aria-label with project name on card links ([MED], 10 min).
2. Confirm twitter handle or remove tag ([LOW], 2 min).
3. Decide on SoftwareApplication vs CreativeWork for app projects ([HIGH], needs content decision).
4. Verify og-image.png dimensions and size ([MED], 5 min).
5. Record hreflang decision for future ID version ([HIGH], docs only).
