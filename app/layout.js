import './globals.css';

export const metadata = {
  title: 'ChatGPT Business Bootcamp - Close Your AI Readiness Gap',
  description: 'Transform your team from scattered ChatGPT experiments to aligned, productive workflows. Join dozens of teams learning shared ChatGPT workflows and collective intelligence. Led by Sat Singh, AICV founder.',
  keywords: 'ChatGPT bootcamp, team alignment, AI training, business AI adoption, ChatGPT training for teams',
  
  openGraph: {
    title: 'ChatGPT Business Bootcamp',
    description: 'Your Team\'s Already Using ChatGPT — Just Not Together. Our Business Bootcamp fixes that.',
    url: 'https://chatgpt-bootcamp.vercel.app',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Business Bootcamp',
    description: 'Close your AI readiness gap and align your team around ChatGPT adoption.',
  },
  
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://chatgpt-bootcamp.vercel.app" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ChatGPT Business Bootcamp by AICV',
              url: 'https://chatgpt-bootcamp.vercel.app',
              description: 'Premium 4-hour team transformation workshop for ChatGPT alignment',
              founder: {
                '@type': 'Person',
                name: 'Sat Singh',
                title: 'Founder, AICV',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                telephone: '+1-949-228-9475',
                email: 'sat@aicv.co',
              },
              sameAs: [
                'https://www.linkedin.com/company/aicv',
                'https://twitter.com/aicv',
              ],
            }),
          }}
        />

        {/* Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'ChatGPT Business Bootcamp',
              description: 'Transform your team from scattered ChatGPT experiments to aligned, productive workflows',
              eventAttendanceMode: 'MixedEventAttendanceMode',
              url: 'https://chatgpt-bootcamp.vercel.app',
              organizer: {
                '@type': 'Organization',
                name: 'AICV (AI Coachella Valley)',
                url: 'https://aicv.co',
              },
              duration: 'PT4H',
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'We\'ve already done basic AI training — will this still help?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Most intro sessions stop at theory. We align real teams around applied workflows, current features, and measurable adoption. This bootcamp goes beyond awareness into collective intelligence and readiness gap closure.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do we need to be technical to join?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. It\'s designed for all roles — HR, marketing, ops, finance, and IT. Each person sees examples relevant to their daily work. We meet teams where they are.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can we customize it for our company or industry?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. Every bootcamp starts with your data, tools, and examples. We tailor prompts, demos, and adoption maps to your team\'s reality. No two bootcamps are identical.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
