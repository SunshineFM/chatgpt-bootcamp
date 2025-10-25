import './globals.css';

export const metadata = {
  title: 'ChatGPT Business Bootcamp - Close Your AI Readiness Gap in 4 Hours',
  description: 'Close your team\'s AI readiness gap in 4 hours. Learn ChatGPT alignment, practical workflows, and latest tools (Atlas, Agents, Apps). Led by Sat, AICV founder.',
  keywords: 'ChatGPT training, AI bootcamp, team alignment, ChatGPT workshop, business AI',
  
  openGraph: {
    title: 'ChatGPT Business Bootcamp - Close Your AI Readiness Gap',
    description: 'Transform your team from scattered ChatGPT experiments to aligned, productive workflows in one 4-hour session.',
    url: 'https://chatgpt-bootcamp.vercel.app',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Business Bootcamp',
    description: 'Close your AI readiness gap in 4 hours. Premium team transformation.',
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
              description: 'Premium 4-hour team transformation workshop',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+1-949-228-9475',
                email: 'sat@aicv.co',
              },
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
              description: 'Close your team\'s AI readiness gap in 4 hours',
              eventAttendanceMode: 'OnlineEventAttendanceMode',
              url: 'https://chatgpt-bootcamp.vercel.app',
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
                    text: 'Yes. Most intro sessions stop at theory. We align real teams around applied workflows and measurable adoption.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do we need to be technical to join?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. It\'s designed for all roles — HR, marketing, ops, finance, and IT.',
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
