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
      answer: 'You leave with a 30-day action map customized to your team, access to key resource
