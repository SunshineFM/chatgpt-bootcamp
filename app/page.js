'use client';

import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [pricingType, setPricingType] = useState('half-day');

  const handleWaitlist = () => {
    window.location.href = 'mailto:sat@aicv.co?subject=Join%20ChatGPT%20Business%20Bootcamp%20Waitlist&body=I\'m%20interested%20in%20scheduling%20a%20ChatGPT%20Business%20Bootcamp%20for%20my%20team.%0A%0ATeam%20Size:%0APreferred%20Date:%0AFormat:%20Half-Day%20or%20Full-Day%0A%0APlease%20call%20me%20back%20at:%0A%0AThank%20you!';
  };

  const handleConsult = () => {
    window.location.href = 'mailto:sat@aicv.co?subject=Schedule%2015-Minute%20Consultation&body=I\'d%20like%20to%20schedule%20a%2015-minute%20consultation%20to%20discuss%20the%20ChatGPT%20Business%20Bootcamp.%0A%0ABest%20times%20to%20reach%20me:%0A%0APhone:%0A%0AThank%20you!';
  };

  const pricing = {
    'half-day': [
      { size: 'Small Team (up to 20)', price: '$7,500' },
      { size: 'Mid-Size (21–50)', price: '$10,000', featured: true },
      { size: 'Enterprise (51–100)', price: '$15,000' },
    ],
    'full-day': [
      { size: 'Small Team (up to 20)', price: '$12,500' },
      { size: 'Mid-Size (21–50)', price: '$20,000', featured: true },
      { size: 'Enterprise (51–100)', price: '$25,000' },
    ],
  };

  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            CHATGPT BOOTCAMP
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="badge">Limited Availability — One Bootcamp Per Week</div>
            <h1>Close Your Team's AI Readiness Gap in 4 Hours</h1>
            <p className={styles.heroSubtitle}>
              Your team is scattered across ChatGPT experiments. Everyone's on different pages. 
              Leave aligned on vision, fluent in action, ready to move faster together.
            </p>
            <div className={styles.heroCTA}>
              <button className="btn-primary" onClick={handleWaitlist}>
                Join the Waitlist
              </button>
              <button className="btn-secondary" onClick={handleConsult}>
                Chat with Sat (Free)
              </button>
            </div>
            <p style={{ fontSize: '0.95rem', marginTop: '2rem', color: 'rgba(224, 224, 224, 0.7)' }}>
              Led by Sat, Founder of AICV • TedX Speaker • 20+ workshops in 2025 • 4.9/5 satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* The 4-Hour Promise */}
      <section id="experience" className={styles.experience}>
        <div className="container">
          <h2>The 4-Hour Promise</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
            From scattered experiments to collective intelligence — here's what happens:
          </p>
          
          <div className={styles.timelineGrid}>
            <div className={styles.timelineCard} data-step="1">
              <div className={styles.timelineDuration}>30 Minutes</div>
              <h3>Readiness Mapping</h3>
              <p>
                Quick diagnostic of your team's AI maturity: how people currently use ChatGPT, 
                what's working, and where confidence drops. Reveals the readiness gap between 
                scattered experimentation and real productivity.
              </p>
            </div>
            
            <div className={styles.timelineCard} data-step="2">
              <div className={styles.timelineDuration}>75 Minutes</div>
              <h3>Practical Superpowers</h3>
              <p>
                Hands-on walkthrough of high-impact features: custom instructions, memory 
                management, file uploads, Advanced Data Analysis, and multimodal prompts. 
                Turn ChatGPT from a chat toy into a workflow engine.
              </p>
            </div>
            
            <div className={styles.timelineCard} data-step="3">
              <div className={styles.timelineDuration}>75 Minutes</div>
              <h3>Latest Tools Walkthrough</h3>
              <p>
                Guided tour of OpenAI's newest capabilities — Atlas Browser, Agents, and Apps. 
                Learn what's rolling out, what's ready now, and how to test it safely inside 
                your organization.
              </p>
            </div>
            
            <div className={styles.timelineCard} data-step="4">
              <div className={styles.timelineDuration}>40 Minutes</div>
              <h3>Adoption Gameplan</h3>
              <p>
                Co-create a 30-day action map: who pilots what, where ROI appears first, and 
                how to measure progress. Leave with one "superpower" to practice immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className={styles.credentials}>
        <div className="container">
          <h2>Why This Matters Now</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Most teams skip the readiness gap and jump straight to "learn more features." 
            That's how you end up with scattered experiments and no ROI. We do the opposite.
          </p>
          
          <div className={styles.credentialsGrid}>
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>📊</div>
              <h3>Diagnose First</h3>
              <p>
                Your team's AI readiness isn't uniform. We map where the gaps are, 
                so every hour counts.
              </p>
            </div>
            
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>🎯</div>
              <h3>Align on Action</h3>
              <p>
                Stop duplicating work. Everyone leaves speaking the same "ChatGPT language" 
                with shared workflows.
              </p>
            </div>
            
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>🚀</div>
              <h3>Move Together</h3>
              <p>
                A shared playbook beats 50 individual experiments. Collective intelligence 
                compounds over weeks.
              </p>
            </div>
            
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>💡</div>
              <h3>Learn What's New</h3>
              <p>
                Atlas, Agents, Apps — OpenAI ships fast. We cut through the hype and show 
                what matters for your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Social Proof */}
      <section className={styles.credentials}>
        <div className="container">
          <h2>Your Facilitator</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Sat is the Founder of AICV (AI Coachella Valley) and has been leading AI adoption 
            workshops since early 2025.
          </p>
          
          <div className={styles.credentialsGrid}>
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>🎤</div>
              <h3>TedX Speaker</h3>
              <p>
                Presented at TedX Rancho Mirage 2025 on AI transformation and opportunity
              </p>
            </div>
            
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>📚</div>
              <h3>20+ Workshops</h3>
              <p>
                Delivered AI workshops in 2025 to 200+ participants across the Coachella Valley
              </p>
            </div>
            
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>⭐</div>
              <h3>4.9/5 Satisfaction</h3>
              <p>
                Consistent feedback: "Real-world, practical uses. Exceptional knowledge and expertise."
              </p>
            </div>
            
            <div className={styles.credentialCard}>
              <div className={styles.credentialIcon}>🏢</div>
              <h3>Local Expertise</h3>
              <p>
                Deep connections across the Coachella Valley — works with businesses, nonprofits, 
                education, and startups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2>What Past Participants Say</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Real feedback from real workshops:
          </p>
          
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★ 5.0</div>
              <p className={styles.testimonialText}>
                "So much knowledge, believe this should be taught in schools! This was a really 
                fun workshop and eager to be that 1% in learning where it takes off."
              </p>
              <div className={styles.testimonialAuthor}>Martha Z.</div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★ 5.0</div>
              <p className={styles.testimonialText}>
                "This class was eye opening and potential career altering for many attendees. 
                Sat and Habib continue to demonstrate opportunities utilizing the AI tools 
                available today that can so positively impact our local businesses."
              </p>
              <div className={styles.testimonialAuthor}>Jeff H.</div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★ 5.0</div>
              <p className={styles.testimonialText}>
                "I can't remember any other workshop where I have learned real-world, practical 
                uses and had time to try these processes at the same time. Outstanding work and 
                expertise."
              </p>
              <div className={styles.testimonialAuthor}>David W.</div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★ 5.0</div>
              <p className={styles.testimonialText}>
                "Loving the community-centered aspect and meeting so many talented, knowledgeable 
                folks. Today's custom GPT creation was fantastic!"
              </p>
              <div className={styles.testimonialAuthor}>Binita S.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <h2>Transparent Pricing</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Price is per impact, not per slide. Choose your format and team size:
          </p>
          
          <div className={styles.pricingToggle}>
            <button 
              className={pricingType === 'half-day' ? 'active' : ''} 
              onClick={() => setPricingType('half-day')}
            >
              Half-Day (4 Hours)
            </button>
            <button 
              className={pricingType === 'full-day' ? 'active' : ''} 
              onClick={() => setPricingType('full-day')}
            >
              Full-Day (6–7 Hours)
            </button>
          </div>
          
          <div className={styles.pricingGrid}>
            {pricing[pricingType].map((plan, i) => (
              <div 
                key={i} 
                className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}
              >
                <h3>{plan.size}</h3>
                <div className={styles.price}>{plan.price}</div>
                
                <ul className={styles.pricingList}>
                  <li>Full workshop experience</li>
                  <li>Readiness mapping session</li>
                  <li>Practical superpowers walkthrough</li>
                  <li>Latest tools demo</li>
                  <li>30-day adoption map</li>
                  {pricingType === 'full-day' && (
                    <>
                      <li>Department breakouts</li>
                      <li>Live GPT/app prototyping</li>
                      <li>Governance planning</li>
                    </>
                  )}
                </ul>
                
                <button className="btn-primary" onClick={handleWaitlist}>
                  Request Quote
                </button>
                
                <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: 'var(--text)' }}>
                  Customization available for multi-session engagements
                </p>
              </div>
            ))}
          </div>
          
          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.05rem' }}>
            <strong>Full-Day adds:</strong> Department breakouts, custom prompt kits, live agent prototyping, 
            and governance frameworks. Best for 75+ person teams or regulated industries.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.faq}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>We've already done basic AI training — will this still help?</h3>
              <p>
                Yes. Most intro sessions stop at theory. We align real teams around applied 
                workflows, current features, and measurable adoption. This bootcamp goes beyond 
                awareness into collective intelligence and readiness gap closure.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Do we need to be technical to join?</h3>
              <p>
                No. It's designed for all roles — HR, marketing, ops, finance, and IT. Each 
                person sees examples relevant to their daily work. We meet teams where they are.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Can we customize it for our company or industry?</h3>
              <p>
                Absolutely. Every bootcamp starts with your data, tools, and examples. We tailor 
                prompts, demos, and adoption maps to your team's reality. No two bootcamps are identical.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>What happens after the workshop?</h3>
              <p>
                You leave with a 30-day action map customized to your team, access to key 
                resources, and direct access to Sat for follow-up questions during your first month.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>How many people can attend?</h3>
              <p>
                We accommodate teams of 15–40 per session (ideal size for engagement). Larger 
                teams (50–100) can add facilitators. We scale to your needs.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Is this in-person or online?</h3>
              <p>
                Both. We come to your location or meet online — whatever works for your team. 
                The experience is identical either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA */}
      <div className={styles.mobileCtaButtons}>
        <a href="tel:949-228-9475" className={styles.phoneButton}>
          📞 Call Now
        </a>
        <button 
          className={styles.emailButton}
          onClick={() => window.location.href = 'mailto:sat@aicv.co'}
        >
          ✉️ Email Sat
        </button>
      </div>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Close Your AI Readiness Gap?</h2>
          <p>
            Join dozens of teams transforming from scattered experiments to aligned, 
            productive AI adoption.
          </p>
          <div className={styles.ctaCTA}>
            <button className="btn-primary" onClick={handleWaitlist}>
              Join the Waitlist
            </button>
            <button className="btn-secondary" onClick={handleConsult}>
              Schedule a Free Chat
            </button>
          </div>
          <p style={{ fontSize: '0.95rem', marginTop: '2rem', opacity: 0.8 }}>
            Exclusive, limited availability — one bootcamp per week
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <h2>Get in Touch</h2>
          <div className={styles.contactGrid}>
            <div>
              <h3>Direct Contact</h3>
              <p><strong>Phone:</strong> <a href="tel:949-228-9475">949-228-9475</a></p>
              <p><strong>Email:</strong> <a href="mailto:sat@aicv.co">sat@aicv.co</a></p>
              <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.8 }}>
                Response time: typically within 24 hours
              </p>
            </div>
            <div>
              <h3>Quick Actions</h3>
              <p>
                <button 
                  className="btn-primary" 
                  onClick={handleWaitlist}
                  style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
                >
                  Join Waitlist
                </button>
              </p>
              <p>
                <button 
                  className="btn-secondary" 
                  onClick={handleConsult}
                  style={{ display: 'block', width: '100%' }}
                >
                  Schedule Consult
                </button>
              </p>
            </div>
            <div>
              <h3>About AICV</h3>
              <p>
                AICV (AI Coachella Valley) is the go-to resource for AI adoption, strategy, 
                and transformation across the valley. Founded by Sat, AICV has delivered 20+ 
                workshops to 200+ participants in 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; 2025 ChatGPT Business Bootcamp by AICV. All rights reserved.</p>
          <p className={styles.footerLinks}>
            <a href="https://openai.com/index/expanding-economic-opportunity-with-ai/" target="_blank" rel="noopener noreferrer">
              OpenAI: Expanding Economic Opportunity with AI
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
