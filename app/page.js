'use client';

import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [pricingType, setPricingType] = useState('half-day');

  const handleWaitlist = () => {
    window.location.href = 'mailto:sat@aicv.co?subject=Join%20ChatGPT%20Business%20Bootcamp%20Waitlist&body=I\'m%20interested%20in%20scheduling%20a%20ChatGPT%20Business%20Bootcamp%20for%20my%20team.%0A%0ATeam%20Size:%0APreferred%20Date:%0AFormat:%20Half-Day%20or%20Full-Day%0A%0APlease%20call%20me%20back%20at:%0A%0AThank%20you!';
  };

  const handleConsult = () => {
    window.location.href = 'mailto:sat@aicv.co?subject=Schedule%20Free%20Consultation&body=I\'d%20like%20to%20schedule%20a%20free%20consultation%20to%20discuss%20the%20ChatGPT%20Business%20Bootcamp.%0A%0ABest%20times%20to%20reach%20me:%0A%0APhone:%0A%0AThank%20you!';
  };

  const handleCall = () => {
    window.location.href = 'tel:949-228-9475';
  };

  const testimonials = [
    {
      name: 'Martha Z',
      stars: 5,
      text: 'So much knowledge, believe this should be taught in schools! This was a really fun workshop and eager to be that 1% in learning where it takes off.',
    },
    {
      name: 'Jeff H',
      stars: 5,
      text: 'Today\'s class was eye opening and potential career altering. Sat and Habib continue to demonstrate opportunities utilizing the AI tools available today that can positively impact our local businesses.',
    },
    {
      name: 'David W',
      stars: 5,
      text: 'I am far more than excited about these workshops as they deliver the goods! I can\'t remember any other workshop where I have learned real-world, practical uses and had time to try these processes at the same time.',
    },
    {
      name: 'Binita S',
      stars: 5,
      text: 'Loving the community-centered aspect and meeting so many talented, knowledgeable folks. Today\'s custom GPT creation was fantastic! Would be great to do one of these each week.',
    },
    {
      name: 'Brian L',
      stars: 5,
      text: 'Exceeded my expectations — which were high. So eager to attend more sessions as often as possible.',
    },
    {
      name: 'Workshop Participant',
      stars: 5,
      text: 'Outstanding work, knowledge, and expertise. The ability to communicate effectively and help teams move forward together is exceptional.',
    },
  ];

  const stages = [
    {
      icon: '🧭',
      title: 'The Scan',
      description: 'How Aligned Are You, Really? We start with a diagnostic based on your team\'s pre-bootcamp quiz — to uncover how ChatGPT is being used, where it\'s underused, where the team is fractured, and where there\'s real opportunity to raise confidence and coordination.',
    },
    {
      icon: '🟢',
      title: 'The Unlock',
      description: 'Beyond Prompts and Email Drafts. We go past the basics. Your team learns how to choose the right model, set up memory, create shareable projects, apply roles, and design real-world workflows to work faster, better, and smarter.',
    },
    {
      icon: '🟢',
      title: 'The Update',
      description: 'Atlas, Agents, and the Future of Work. We walk through OpenAI\'s latest tools — Atlas, Agents, Apps — and help your team separate the hype from what\'s real. Know what to use, what to test, and what could 10x your organization\'s velocity.',
    },
    {
      icon: '🟢',
      title: 'The Map',
      description: 'From Curious to Coordinated. Who pilots what? What\'s worth scaling? What should become shared muscle across teams? Together, we co-create a practical roadmap for ChatGPT adoption tailored to your org\'s real dynamics.',
    },
    {
      icon: '🟢',
      title: 'The Alignment',
      description: 'One Team. Superpowers Unlocked. By the end, your team won\'t just "know ChatGPT" — they\'ll be ChatGPT Jedis. Aligned, empowered, and operating with a new swagger of confidence, clarity, and shared momentum.',
    },
  ];

  const pricingOptions = {
    'half-day': [
      {
        size: '👥 Small Teams (up to 20 people)',
        halfDay: '$7,500',
        fullDay: '$12,500',
        features: [
          'Core workshop experience',
          'Readiness mapping + superpowers walkthrough',
          'OpenAI DevDay tools demo (Atlas, Agents, Apps)',
          '30-day adoption roadmap',
        ],
      },
      {
        size: '👥 Mid-Size Teams (21–50 people)',
        halfDay: '$10,000',
        fullDay: '$20,000',
        features: [
          'Everything above',
          'Custom prompts + use cases per department',
          'Team breakouts + shared playbooks',
        ],
      },
      {
        size: '👥 Enterprise Teams (51–100 people)',
        halfDay: '$15,000',
        fullDay: '$25,000',
        features: [
          'Everything above',
          'Agent prototyping + governance planning',
          'Ideal for regulated industries or fast-scaling orgs',
        ],
      },
    ],
  };

  const faqs = [
    {
      question: 'We\'ve already done basic AI training — will this still help?',
      answer: 'Yes. Most intro sessions stop at theory. We align real teams around applied workflows, current features, and measurable adoption. This bootcamp goes beyond awareness into collective intelligence and readiness gap closure.',
    },
    {
      question: 'Do we need to be technical to join?',
      answer: 'No. It\'s designed for all roles — HR, marketing, ops, finance, and IT. Each person sees examples relevant to their daily work. We meet teams where they are.',
    },
    {
      question: 'Can we customize it for our company or industry?',
      answer: 'Absolutely. Every bootcamp starts with your data, tools, and examples. We tailor prompts, demos, and adoption maps to your team\'s reality. No two bootcamps are identical.',
    },
    {
      question: 'What do we get after the bootcamp?',
      answer: 'You leave with a 30-day action map customized to your team, access to key resources, and direct access to Sat for follow-up questions during your first month.',
    },
    {
      question: 'What\'s the ideal team size?',
      answer: 'We accommodate teams of 15–40 per session (ideal size for engagement). Larger teams (50–100) can add facilitators. We scale to your needs.',
    },
    {
      question: 'In-person or remote?',
      answer: 'Both. We come to your location or meet online — whatever works for your team. The experience is identical either way.',
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>CHATGPT BOOTCAMP</div>
          <ul className={styles.navLinks}>
            <li><a href="#why">Why It Matters</a></li>
            <li><a href="#stages">The Five Stages</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Your Team's Already Using ChatGPT — Just Not Together.</h1>
            <p className={styles.heroSubtitle}>
              Our Business Bootcamp fixes that. Your Team. Your Place. One Playbook.
            </p>
            <p className={styles.heroCredentials}>
              Led by Sat Singh, TedX Speaker and Founder
            </p>
            <div className={styles.heroCTA}>
              <button className={styles.btnPrimary} onClick={handleWaitlist}>
                Join the Waitlist
              </button>
              <button className={styles.btnSecondary} onClick={handleConsult}>
                Schedule Free Consult
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className={styles.whyMatters} id="why">
        <div className={styles.container}>
          <div className={styles.whyMattersContent}>
            <h2 className={styles.whyMattersTitle}>⚡ Why This Matters Now</h2>
            <div className={styles.whyMattersText}>
              <p>
                Most teams didn't get a playbook for this moment. So what's happening? Individuals are experimenting with ChatGPT in isolation — across departments, roles, even leadership. Some are confident. Others are quiet. The result? A lot of activity, and very little alignment.
              </p>
              <p>
                <strong>And without alignment, there's no compounding effect.</strong>
              </p>
              <p>
                This isn't about learning "more features." It's about giving your organization a shared operating system for AI — one that shows up in workflows, decisions, strategy, and speed. The longer you wait to sync your team, the more fragmented (and expensive) things become.
              </p>
              <p>
                <strong>The sooner you close the readiness gap, the sooner your team can:</strong>
              </p>
              <ul>
                <li>Move faster across ops and product</li>
                <li>Reduce friction in communication and execution</li>
                <li>Spot innovation opportunities others miss</li>
              </ul>
              <p>
                ChatGPT is already reshaping how people think, write, work, and build. But it's not a superpower if it's only in the hands of a few. Alignment is what turns it into a system your whole team can run on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Stages */}
      <section className={styles.fiveStages} id="stages">
        <div className={styles.container}>
          <h2 className={styles.fiveStagesTitle}>🧭 The Five Stages to Team AI</h2>
          <p className={styles.fiveStagesSubtitle}>
            We'll upskill you with a shared understanding, smarter workflows, and real alignment around how ChatGPT gets used across your organization. Where you take it next? That's up to you. But either way, you'll be way ahead of your competitors.
          </p>
          <div className={styles.stagesContainer}>
            {stages.map((stage, idx) => (
              <div key={idx} className={styles.stageCard}>
                <div className={styles.stageIcon}>{stage.icon}</div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.testimonialsTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Real Feedback from Real Workshops
          </h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <p className={styles.testimonialName}>— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitator */}
      <section className={styles.facilitator}>
        <div className={styles.container}>
          <div className={styles.facilitatorContent}>
            <div className={styles.facilitatorImage}>
              <img src="/Sat Headshot 400 x 400.png" alt="Sat Singh, Founder of AICV" />
            </div>
            <div className={styles.facilitatorText}>
              <h2>Your Facilitator</h2>
              <p>
                Sat Singh is the founder of AICV — AI Coachella Valley, and a driving force behind team-based AI adoption across the region. He's led over 20 hands-on AI workshops with 200+ participants from local businesses, nonprofits, and universities — helping teams move from scattered experimentation to real strategic alignment.
              </p>
              <p>
                A former executive with Fortune 500 companies and a startup founder who sold his mobile gaming venture to King.com, Sat brings a rare mix of business rigor, creative energy, and deep tech fluency. He's been in the startup world since 2011, and his sweet spot is getting teams from zero to one — fast.
              </p>
              <p>
                In 2025, Sat took the TEDx Rancho Mirage stage to talk about AI transformation and human potential. His superpower? Making AI practical, collaborative, and deeply relevant for teams across industries. Whether you're in marketing, operations, HR, or leadership — Sat speaks your language and helps teams move forward, together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}>
          <div className={styles.pricingHeader}>
            <h2>Transparent Pricing</h2>
            <p>Straightforward, impact-based, and mission-driven.</p>
            <p>
              We're upfront about pricing — because we've seen what it costs to fly in consultants who don't know your community, your teams, or your industry. We're based here in the Coachella Valley, and our mission is to make sure every organization in the desert is not just keeping up with AI — but leading with it.
            </p>
            <p>
              <strong>You're not paying for slides. You're investing in alignment, superpowers, and a clear plan forward.</strong>
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {pricingOptions['half-day'].map((card, idx) => (
              <div key={idx} className={styles.pricingCard}>
                <h3>{card.size}</h3>
                <div className={styles.pricingPrices}>
                  <div className={styles.priceRow}>
                    <span>Half-Day:</span>
                    <strong>{card.halfDay}</strong>
                  </div>
                  <div className={styles.priceRow}>
                    <span>Full-Day:</span>
                    <strong>{card.fullDay}</strong>
                  </div>
                </div>
                <ul className={styles.pricingFeatures}>
                  {card.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.pricingCustomize}>
                  Need multiple sessions or custom formats? We're happy to tailor it — just book a quick call with Sat Singh and we'll find the right fit.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} id="faq">
        <div className={styles.container}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Close the AI Readiness Gap at Your Organization?</h2>
          <p>
            This isn't just a ChatGPT feature demo. It's a Business Bootcamp designed to align your entire team, close your organization's readiness gap, and unlock real AI productivity — fast.
          </p>
          <p>
            Don't let your competitors take the lead. Most are already experimenting. The smart ones are aligning. This bootcamp helps you do both — before AI gets siloed, stalled, or outpaced.
          </p>

          <div className={styles.ctaHighlight}>
            <h3>🔒 Limited Availability</h3>
            <p>
              We only run one bootcamp per week to keep it high-impact and highly tailored. If this sounds like the edge your team needs, let's talk.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary} onClick={handleWaitlist}>
              Join the Waitlist
            </button>
            <button className={styles.btnSecondary} onClick={handleConsult}>
              Schedule a Free Consult
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>💬 Direct Contact</h3>
            <p><strong>Sat Singh</strong></p>
            <p>Founder, AICV (AI Coachella Valley)</p>
            <div className={styles.footerContact}>
              <span>📞</span>
              <a href="tel:949-228-9475">949-228-9475</a>
            </div>
            <div className={styles.footerContact}>
              <span>✉️</span>
              <a href="mailto:sat@aicv.co">sat@aicv.co</a>
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
              Responses typically within 24 hours
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3>🔍 About AICV</h3>
            <p>
              AICV is the go-to resource for AI adoption, training, and transformation across the Coachella Valley. In 2025 alone, we've delivered 20+ workshops to 200+ participants — from nonprofits to city governments to fast-moving startups.
            </p>
            <p>
              We live here. We build here. And we believe AI readiness should be for everyone — not just the early adopters.
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 ChatGPT Business Bootcamp by AICV. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
