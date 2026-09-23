/* Content for the nine inner pages linked from the nav and footer.
   Facts sourced from ucftexas.org (the client's existing site). */

export const CONTENT_PAGES = {
  'services/medical': {
    hero: {
      image: 'ucf-healthy-living.png',
      tag: 'Services',
      sub: 'Preventive & Primary Care',
      title: 'Medical Care for Every Stage of Life',
      intro: 'Preventive and primary care medical services for underserved and uninsured families across Harris and Fort Bend counties. Insurance is never required to be seen.',
    },
    intro: {
      tag: 'Medical',
      sub: 'What to Expect',
      heading: 'Care Coordinated Around Your Family',
      body: [
        "Our physicians and nurse practitioners take a care-coordination approach. Rather than treating one symptom in isolation, we look at your overall health, discuss the screenings that make sense for your age and history, and explain next steps in plain language.",
        'When specialist care, lab work, or imaging is needed, we coordinate the referral through our network so you get low-cost access instead of navigating it alone.',
      ],
    },
    cardsHeading: 'Medical Services We Provide',
    cards: [
      { icon: 'stethoscope-icon-replace.webp', title: 'Medical Consultations', desc: 'Routine and sick visits with our physicians and nurse practitioners.' },
      { icon: 'doctor-icon-replace.webp', title: 'Specialist Consultation', desc: 'Coordinated referrals to specialist care when your needs go further.' },
      { icon: 'personal-information-icon-replace.webp', title: 'Mental Health Evaluation', desc: 'Screening and evaluation, with referrals to further support as needed.' },
      { icon: 'microscope-icon-replace.webp', title: 'Lab Tests', desc: 'Diagnostic testing arranged at reduced cost through our referral network.' },
      { icon: 'report-icon-replace.webp', title: 'Health Screenings', desc: 'Preventive screenings to catch concerns early, before they escalate.' },
      { icon: 'syringe-icon-replace.webp', title: 'Immunizations', desc: 'Routine immunizations for children and adults, plus school and sports physicals.' },
    ],
    accordionHeading: 'Common Questions About Medical Care',
    accordion: [
      { q: 'Do I need insurance to be seen?', a: 'No. Uninsured and underinsured patients may qualify for free or low-cost care through our Title V, PHC, or Family Planning programs. Our team can talk through the options with you regardless of insurance status.' },
      { q: 'How do I get a specialist referral?', a: 'Specialist consultation is available by referral from our medical team, following your initial consultation or health screening.' },
      { q: 'Where can I receive medical care?', a: 'Medical services are available at our Rosenberg, Wharton, Sugar Land, and Houston Health and Wellness Centers, and at Wilcrest Community Medical Center in Houston. Most locations welcome walk-ins.' },
    ],
    closing: {
      heading: 'Ready to See a Provider?',
      body: 'Call us or reach out online to schedule a visit or ask about eligibility for our free and low-cost programs.',
    },
  },

  'services/dental': {
    hero: {
      image: 'ucf-dental.png',
      tag: 'Services',
      sub: 'Dental Care',
      title: 'Dental Care for the Whole Family',
      intro: 'Preventive and primary dental services for every member of the family, regardless of insurance status, with a focus on prevention and education alongside treatment.',
    },
    intro: {
      tag: 'Dental',
      sub: 'What to Expect',
      heading: 'Healthy Smiles, Built on Prevention',
      body: [
        'Our dental team focuses on keeping problems small: regular exams, cleanings, and hygiene education that helps families maintain healthy teeth between visits.',
        'Children and adolescents under 21 from uninsured or underinsured low-income households may qualify for free dental care through our Title V Child Health and Dental Program.',
      ],
    },
    cardsHeading: 'Dental Services We Provide',
    cards: [
      { icon: 'health-check-icon.webp', title: 'Dental Exam & X-Ray', desc: 'Full examination with imaging to identify concerns early.' },
      { icon: 'personal-information-icon-replace.webp', title: 'Hygiene Education', desc: 'Practical guidance for keeping teeth and gums healthy at home.' },
      { icon: 'dna-icon-replace.webp', title: 'Dental Cleanings', desc: 'Routine professional cleanings for children and adults.' },
      { icon: 'medical-kit-icon-replace.webp', title: 'Dental Procedures', desc: 'Treatment when more than preventive care is needed.' },
    ],
    accordionHeading: 'Common Questions About Dental Care',
    accordion: [
      { q: 'Can my child get free dental care?', a: 'Children and adolescents under 21 from uninsured or underinsured low-income households may qualify for free dental care through the Title V Child Health and Dental Program. Eligibility is based on income and residency in Harris or Fort Bend County.' },
      { q: 'Do you see adults for dental care?', a: 'Yes. Dental services are available to adults as well, with reduced-cost self-pay pricing for patients without insurance.' },
      { q: 'Which locations offer dental services?', a: 'Dental care is available at our Rosenberg, Wharton, Sugar Land, and Houston Health and Wellness Centers. Call ahead to confirm dental hours at your nearest location.' },
    ],
    closing: {
      heading: 'Book a Dental Visit',
      body: 'Reach our team to schedule an exam or ask whether your child qualifies for free dental care.',
    },
  },

  'services/educational-programs': {
    hero: {
      image: 'community-education-class.jpg',
      tag: 'Services',
      sub: 'Learning & Skills',
      title: 'Programs That Open Doors',
      intro: 'Classes and training designed to build skills and strengthen our community, for students, job seekers, and anyone looking to grow.',
    },
    intro: {
      tag: 'Education',
      sub: 'Who It Is For',
      heading: 'Skills for Work and for Life',
      body: [
        'Our educational programs are open to community members of all backgrounds, and many classes are offered at no cost.',
        'We also provide individual and group mentorship for students from low-income backgrounds, and referrals to free or low-cost training programs across Harris and Fort Bend counties.',
      ],
    },
    cardsHeading: 'Programs We Offer',
    cards: [
      { icon: 'personal-information-icon-replace.webp', title: 'Mental Health First Aid', desc: 'Training to recognise and respond to mental health concerns.' },
      { icon: 'dna-icon-replace.webp', title: 'Dental Assistant Training', desc: 'Vocational training toward work in a dental practice.' },
      { icon: 'report-icon-replace.webp', title: 'Financial Literacy', desc: 'Budgeting, saving, and money management for everyday life.' },
      { icon: 'insurance-icon-replace.webp', title: 'Language Classes', desc: 'Language instruction to help families participate more fully.' },
      { icon: 'microscope-icon-replace.webp', title: 'Basic Computer Skills', desc: 'Foundational digital skills for work, school, and daily tasks.' },
      { icon: 'doctor-icon-replace.webp', title: 'Mentorship', desc: 'Individual and group mentorship for students from low-income backgrounds.' },
    ],
    accordionHeading: 'Common Questions About Our Programs',
    accordion: [
      { q: 'Do the classes cost anything?', a: 'Many of our educational programs are offered free of charge. Our team can confirm which classes are currently running and whether any fee applies.' },
      { q: 'Who can enroll?', a: 'Our educational programs are open to community members of all backgrounds. Our team can help match you with the right program for your goals and schedule.' },
      { q: 'Do you help with job training beyond your own classes?', a: 'Yes. Alongside the classes we run, we refer community members to free or low-cost training programs across Harris and Fort Bend counties.' },
    ],
    closing: {
      heading: 'Ready to Learn Something New?',
      body: 'Reach our team to ask about upcoming classes and how to enroll.',
      cta: 'Ask About Classes',
    },
  },

  'services/social-services': {
    hero: {
      image: 'emergency-preparedness.jpg',
      tag: 'Services',
      sub: 'Community Support',
      title: 'Support Beyond the Exam Room',
      intro: 'Health is shaped by far more than medical care. Our social services team connects families with the support that makes day-to-day stability possible.',
    },
    intro: {
      tag: 'Social Services',
      sub: 'How It Works',
      heading: 'Connected to What Your Family Needs',
      body: [
        'Some of these services we provide directly. Others we coordinate through trusted community partners, depending on what your household needs.',
        'If you are unsure where to start, our staff can talk through your situation and point you toward the right resource.',
      ],
    },
    cardsHeading: 'Services We Connect You To',
    cards: [
      { icon: 'emergency-call-icon-replace.webp', title: 'Emergency Preparedness', desc: 'Planning and response resources for local families.' },
      { icon: 'report-icon-replace.webp', title: 'Employment Resources', desc: 'Job search support, plus training and recovery referrals.' },
      { icon: 'hospital-bed-icon-replace.webp', title: 'Senior Services', desc: 'Support tailored to older adults in our community.' },
      { icon: 'health-check-icon.webp', title: 'Food Assistance', desc: 'Food and nutrition support for households in need.' },
      { icon: 'insurance-icon-replace.webp', title: 'Insurance Enrollment', desc: 'Hands-on help enrolling in health coverage.' },
      { icon: 'personal-information-icon-replace.webp', title: 'Immigration Referrals', desc: 'Referrals to trusted immigration support services.' },
    ],
    accordionHeading: 'Common Questions About Social Services',
    accordion: [
      { q: 'Do I need to be a patient to access these services?', a: 'Our social services team is here for the community. Reach out and our staff can talk through what support is available to your household.' },
      { q: 'Is there a cost?', a: 'These services are offered free or at low cost, and many are delivered through referral to partner organisations at no charge to you.' },
      { q: 'How do I get started?', a: 'Call us at (281) 853-5555 or reach out through the Contact page, and our team will point you toward the right resource.' },
    ],
    closing: {
      heading: 'Need Help Beyond Medical Care?',
      body: 'Reach our team to ask what social services are available to your family.',
      cta: 'Get Connected',
    },
  },

  'services/free-programs': {
    hero: {
      image: 'ucf-titlev.png',
      tag: 'Services',
      sub: 'Free & Low-Cost Care',
      title: 'Care Without a Price Barrier',
      intro: 'Three state-funded programs for uninsured and underinsured families across Harris and Fort Bend counties. No family is turned away due to inability to pay.',
    },
    intro: {
      tag: 'Free Programs',
      sub: 'Eligibility',
      heading: 'Programs Built for Families Without Coverage',
      body: [
        'Each program has its own eligibility rules, generally based on age, income, insurance status, and residency in Harris or Fort Bend County.',
        'Bring a photo ID, proof of household income, and proof of residency to your first visit. Our care coordinators will walk you through the requirements for each program.',
      ],
    },
    cardsHeading: 'Our Free & Low-Cost Programs',
    cards: [
      { icon: 'pacifier-icon-replace.webp', title: 'Title V Child Health & Dental', desc: 'Free medical and dental care for uninsured and underinsured children and adolescents under 21 from low-income households.' },
      { icon: 'heart-icon-replace.webp', title: 'Primary Health Care (PHC)', desc: 'Comprehensive primary and preventive care for uninsured and underinsured adults in Texas.' },
      { icon: 'sanitary-pad-icon-replace.webp', title: 'Family Planning Program (FPP)', desc: 'Confidential reproductive health, preventive screenings, and chronic disease prevention.' },
    ],
    accordionHeading: 'What Each Program Covers',
    accordion: [
      { q: 'Title V Child Health & Dental Program', a: 'Provides free medical and dental care for uninsured and underinsured children and adolescents under 21 years of age from low-income households. Eligibility is based on income and residency in Harris or Fort Bend County.' },
      { q: 'Primary Health Care (PHC) Program', a: 'Provides comprehensive primary and preventive health care for individuals who are uninsured or underinsured in Texas, including diagnosis and treatment of acute and chronic conditions, emergency and urgent care when needed, family-planning support, immunizations and health screenings, diagnostic testing such as labs and X-rays, health education, and nutrition and social support services.' },
      { q: 'Family Planning Program (FPP)', a: 'Provides comprehensive, confidential services across three areas: family planning and reproductive health, preventive screenings and women’s health services, and chronic disease prevention and wellness care, regardless of insurance status.' },
      { q: 'What documents do I need to apply?', a: 'Typically a photo ID, proof of household income, and proof of residency in Harris or Fort Bend County. Our staff will confirm the exact requirements when you call or visit.' },
    ],
    closing: {
      heading: 'Think You Might Qualify?',
      body: 'Reach our team to check eligibility for our free and low-cost programs.',
      cta: 'Check Eligibility',
    },
  },

  'about-us/history': {
    hero: {
      image: 'our-story-our-mission.jpg',
      tag: 'About Us',
      sub: 'Our Story',
      title: 'Serving Our Community Since 2019',
      intro: 'United Community Foundation was founded on a simple belief: every person deserves access to quality health and educational resources, regardless of income, insurance status, or background.',
      titleWidth: 640,
    },
    intro: {
      tag: 'History',
      sub: 'How We Grew',
      heading: 'From One Location to Five',
      body: [
        'United Community Foundation was founded in 2019 as a Texas 501(c)(3) nonprofit organization.',
        'Since then we have grown to five community locations across Rosenberg, Wharton, Sugar Land, and Houston, expanding our reach across Harris and Fort Bend counties. Over the past several years we have partnered with local organizations throughout the region to bring free and low-cost medical, dental, educational, and social services directly to the families who need them.',
        'Our Title V Child Health and Dental Program, Primary Health Care Program, and Family Planning Program have become central to that mission, ensuring lack of insurance or ability to pay is never a barrier to care.',
      ],
    },
    cardsHeading: 'What Guides Us',
    cards: [
      { icon: 'insurance-icon-replace.webp', title: 'Our Vision', desc: 'Empower and strengthen underserved communities through access to resources and information.' },
      { icon: 'stethoscope-icon-replace.webp', title: 'Our Mission', desc: 'To explore, connect, educate, and provide quality health and educational opportunities to underserved communities in Texas.' },
      { icon: 'heart-icon-replace.webp', title: 'Our Goal', desc: 'To improve the quality of life of low-income and underserved communities.' },
    ],
    closing: {
      heading: 'Want to Learn More?',
      body: 'Reach our team to learn more about our programs and the communities we serve.',
      cta: 'Contact Us',
    },
  },

  'about-us/board-of-directors': {
    hero: {
      image: 'primary-care-team.jpg',
      tag: 'About Us',
      sub: 'Governance',
      title: 'Our Board of Directors',
      intro: 'Our Board provides governance and community oversight for United Community Foundation’s programs and clinics.',
    },
    intro: {
      tag: 'Board',
      sub: 'Our Role',
      heading: 'Guided by Community Leadership',
      body: [
        'The Board works closely with Executive Management to keep our free and low-cost programs accessible to the families who need them most across Harris and Fort Bend counties.',
      ],
      },
    list: [
      'Zerin Chowdhury — Board Member',
      'Shirmeen Lakhani — Board Member',
      'Jalal Kapadia — Board Member',
      'Nuruddin Ali — Board Member',
      'Faizmin Lokhandwala — Board Member',
    ],
    closing: {
      heading: 'Want to Learn More?',
      body: 'Reach our team to learn more about our leadership and programs.',
      cta: 'Contact Us',
    },
  },

  'about-us/executive-management': {
    hero: {
      image: 'welcoming-new-patients.jpg',
      tag: 'About Us',
      sub: 'Leadership',
      title: 'Executive Management',
      intro: 'Our leadership team directs day-to-day operations and clinical standards, so every patient receives quality, coordinated care regardless of ability to pay.',
    },
    intro: {
      tag: 'Leadership',
      sub: 'Our Team',
      heading: 'The People Behind Our Programs',
      body: [
        'Our Executive Management team oversees operations, clinical quality, and the funding that keeps our free programs sustainable for the communities we serve.',
      ],
    },
    cardsHeading: 'Our Leadership Team',
    cards: [
      { icon: 'doctor-icon-replace.webp', title: 'Liaquat Khowaja', desc: 'Chief Executive Officer. Leads operations and strategy, working with the Board to keep our free and low-cost programs accessible.' },
      { icon: 'stethoscope-icon-replace.webp', title: 'Salman Aly, M.D.', desc: 'Medical Director. Oversees clinical standards and medical programs across all five locations.' },
      { icon: 'health-check-icon.webp', title: 'Sarfraz Aly, M.D.', desc: 'Chief Clinical Officer. Directs clinical operations and provider training across our network of clinics.' },
      { icon: 'report-icon-replace.webp', title: 'Syed Raza', desc: 'Finance Manager. Manages finances and grant funding so programs like Title V remain sustainable.' },
    ],
    closing: {
      heading: 'Want to Learn More?',
      body: 'Reach our team to learn more about our leadership and programs.',
      cta: 'Contact Us',
    },
  },

  locations: {
    hero: {
      image: 'ucf-locations-bg.webp',
      tag: 'Locations',
      sub: 'Harris & Fort Bend Counties',
      title: 'Find a Location Near You',
      intro: 'Five community locations offering free and low-cost medical, dental, and social services. Most locations welcome walk-ins alongside scheduled appointments.',
    },
    intro: {
      tag: 'Visit Us',
      sub: 'Before You Come',
      heading: 'Walk In or Book Ahead',
      body: [
        'Most of our locations accept walk-in patients alongside scheduled appointments, so you do not always need to plan far ahead.',
        'Hours and available services vary by location. Call (281) 853-5555 to confirm before you travel.',
      ],
    },
    cardsHeading: 'Our Five Locations',
    cards: [
      { icon: 'hospital-location-icon-replace.webp', title: 'Main Location — Rosenberg', desc: 'Health and Wellness Center, 4114 Avenue H, Rosenberg, TX 77471. Mon–Fri 9:00am–2:00pm. Walk-ins welcome.' },
      { icon: 'hospital-icon-replace.webp', title: 'Wharton', desc: 'Health and Wellness Center, 416 N Alabama Rd, Wharton, TX 77488. Mon–Fri 9:00am–2:00pm. Walk-ins welcome.' },
      { icon: 'hospital-bed-icon-replace.webp', title: 'Sugar Land', desc: 'Health and Wellness Center, 6903 Brisbane Ct, Suite 100-A, Sugar Land, TX 77479. Saturday 9:00am–2:00pm.' },
      { icon: 'hospital-icon-replace.webp', title: 'Houston', desc: 'Health and Wellness Center, 9100 Southwest Freeway, Suite 114-A, Houston, TX 77074. Saturday 9:00am–2:00pm.' },
      { icon: 'medical-kit-icon-replace.webp', title: 'Wilcrest Community Medical Center', desc: 'Medical Clinic, 11226 S. Wilcrest Dr., Houston, TX 77099. Phone (281) 977-7462. Mon–Sat 7:00am–5:00pm, patients accepted until 4pm.' },
    ],
    closing: {
      heading: 'Not Sure Which Location to Visit?',
      body: 'Call us and our team will point you to the nearest location offering the service you need.',
      cta: 'Contact Us',
    },
  },
};
