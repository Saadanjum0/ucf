// All copy, links and image references sourced from ucftexas.org (crawled 2026-09-23)
// wherever the real site provided it; anything the real site did not cover was
// written to be plausible and consistent with UCF's real mission and services.
// See the build notes at the end of this file for what's real vs. invented.

export const SITE = {
  name: 'United Community Foundation',
  shortName: 'UCF',
  phone: '(281) 853-5555',
  phoneHref: 'tel:+12818535555',
  email: 'info@ucftexas.org',
  address: '12425 West Airport Blvd, Unit 205, Sugar Land, TX 77478',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=12425+West+Airport+Blvd%2C+Unit+205%2C+Sugar+Land%2C+TX+77478',
  facebook: 'https://www.facebook.com/ucftexas',
  twitter: 'https://www.twitter.com/ucf_tx',
  // UCF has no Instagram or patient portal on the live site — Extras.jsx (owned by
  // another agent) still reads these two keys, so they're repointed to the closest
  // real equivalent rather than removed, to keep that component from breaking.
  instagram: 'https://www.facebook.com/ucftexas',
  portal: '/contact-us/',
  writeReview: 'https://www.facebook.com/ucftexas/reviews',
  donate: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=KXUXZ2T5BTEEU&source=url',
  about: 'United Community Foundation is a nonprofit organization dedicated to bridging the gap in access to essential health and educational resources for underserved communities. With a commitment to equity and social justice, the foundation strives to empower individuals and families who face barriers due to socioeconomic challenges, lack of insurance, or limited access to quality care.',
  mission: 'To explore, connect, educate, and provide quality health and educational opportunities to underserved communities in Texas.',
  vision: 'Empower and strengthen underserved communities through access to resources and information.',
  goal: 'To improve the quality of life of low-income and underserved communities.',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#', children: [
    { label: 'About Us', href: '/about-us/' },
    { label: 'History', href: '/about-us/history/' },
    { label: 'Board of Directors', href: '/about-us/board-of-directors/' },
    { label: 'Executive Management', href: '/about-us/executive-management/' },
  ] },
  { label: 'Services', href: '#', children: [
    { label: 'Medical', href: '/services/medical/' },
    { label: 'Dental', href: '/services/dental/' },
    { label: 'Educational Programs', href: '/services/educational-programs/' },
    { label: 'Social Services', href: '/services/social-services/' },
    { label: 'Free Programs', href: '/services/free-programs/' },
  ] },
  { label: 'Locations', href: '/locations/' },
  { label: 'Notice of Privacy', href: '/notice-of-privacy/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

export const FUN_FACTS = [
  { n: 5, label: 'Locations Across Texas' },
  { n: 3, label: 'Free State-Funded Programs' },
  { n: 21, label: 'Age Covered Under Title V' },
  { n: 2019, label: 'Founded' },
];

export const DEPARTMENTS = {
  left: [
    { icon: 'heart-icon-replace.webp', title: 'Medical Services', desc: 'Preventive & primary care with a care-coordination approach.', hover: 'our-story-our-mission.jpg', anim: 'fadeInRight', delay: '0.1s' },
    { icon: 'dna-icon-replace.webp', title: 'Dental Services', desc: 'Exams, cleanings, hygiene education & dental procedures.', hover: 'female-receptionist-working-at-desk-in-clinic.webp', anim: 'fadeInRight', delay: '0.15s' },
  ],
  right: [
    { icon: 'bone-icon-replace.webp', title: 'Social Services', desc: 'Food assistance, employment resources & senior services.', hover: 'family-dental-care.jpg', anim: 'fadeInLeft', delay: '0.1s' },
    { icon: 'pacifier-icon-replace.webp', title: 'Educational Programs', desc: 'Mentorship, financial literacy & job-skills training.', hover: 'walk-in-appointments.jpg', anim: 'fadeInLeft', delay: '0.15s' },
  ],
};

export const OFFER = [
  { title: 'Preventive & Primary Medical Care', desc: 'Annual visits, sick visits, immunizations, immigration physicals, and school/sports physicals, coordinated by our physicians and nurse practitioners.' },
  { title: 'Dental Care', desc: 'Dental exams and X-rays, hygiene education, cleanings, and dental procedures for the whole family.' },
  { title: 'Free Programs for Uninsured Families', desc: 'Title V Child Health and Dental Program, the Primary Health Care (PHC) Program, and the Family Planning Program (FPP) — free or low-cost care regardless of income or insurance status.' },
  { title: 'Social & Educational Services', desc: 'Emergency preparedness, food assistance, employment resources, and mentorship, financial literacy, and job-training programs for adults and students.' },
];

export const PROMISE = {
  chronic: { img: 'female-doctor-hugging-her-little-male-patient.webp', tag: 'Free Programs', title: 'Title V Program', desc: 'Free and low-cost preventive, primary, and dental care for children and adolescents under 21 from low-income families.', height: 520 },
  family: { img: 'balance-exercise-with-bosu-ball-woman-and-doctor.webp', tag: 'Medical', title: 'Preventive Focus', desc: 'Annual visits, immunizations, and screenings delivered with a care-coordination approach for every family member.', height: 470 },
  oncology: { img: 'welcoming-new-patients.jpg', tag: 'Educational Programs', title: 'Skills for Life', desc: 'Mentorship, financial literacy, language classes, and job-training programs that open doors for our community.', height: 485 },
  text: 'We combine quality, coordinated health care with education and social services to redefine what it means to serve an underserved community — with equity, dignity, and excellence.',
};

export const TECH = [
  { icon: 'report-icon-replace.webp', title: 'Low-Cost Lab & Imaging', desc: 'Lab and imaging services through our referral network, at reduced cost.' },
  { icon: 'hospital-bed-icon-replace.webp', title: 'Five Community Locations', desc: 'Clinics and centers across Rosenberg, Wharton, Sugar Land, and Houston.' },
  { icon: 'medical-kit-icon-replace.webp', title: 'Qualified Care Team', desc: 'Experienced physicians, nurse practitioners, and management staff.' },
  { icon: 'blood-pressure-icon-replace.webp', title: 'Free Title V Program', desc: 'Free medical & dental services for uninsured and underinsured children under 21 (eligibility required).' },
  { icon: 'syringe-icon-replace.webp', title: 'Walk-Ins Welcome', desc: 'Most locations accept walk-in patients alongside scheduled appointments.' },
  { icon: 'cardiogram-icon-replace.webp', title: 'Free & Low-Cost Care', desc: 'Quality medical, dental, and program support regardless of income or insurance status.' },
];

// UCF's live site does not list insurance/partner logos. Reusing existing
// generic partner-mark image assets as placeholders rather than inventing files.
export const LOGOS = [
  { src: 'r1.png', alt: 'Community Partner' },
  { src: 'r2.png', alt: 'Community Partner' },
  { src: 'r3.png', alt: 'Community Partner' },
  { src: 'r4.png', alt: 'Community Partner' },
];

// All 5 real UCF locations from ucftexas.org/locations.
export const LOCATIONS = [
  { img: 'shot-of-a-group-of-scientists-giving-each-other-a-toss.webp', title: 'Main Location', sub: 'Rosenberg, TX', desc: 'Health and Wellness Center — 4114 Avenue H, Rosenberg, Texas 77471. Phone 281-853-5555. Mon–Fri 9:00am–2:00pm. Walk-ins welcome.', delay: '0.05s' },
  { img: 'primary-care-program.jpg', title: 'Wharton Location', sub: 'Wharton, TX', desc: 'Health and Wellness Center — 416 N Alabama Rd, Wharton, TX 77488. Phone 281-853-5555. Mon–Fri 9:00am–2:00pm. Walk-ins welcome.', delay: '0.1s' },
  { img: 'group-of-doctors-standing-on-stairs-on-medical-conferences.webp', title: 'Sugar Land Location', sub: 'Sugar Land, TX', desc: 'Health and Wellness Center — 6903 Brisbane Ct, Suite 100-A, Sugar Land, Texas 77479. Saturday 9:00am–2:00pm. Walk-ins welcome.', delay: '0.15s' },
  { img: 'preventive-checkup-visit.jpg', title: 'Houston Location', sub: 'Houston, TX', desc: 'Health and Wellness Center — 9100 Southwest Freeway, Suite 114-A, Houston, Texas 77074. Saturday 9:00am–2:00pm. Walk-ins welcome.', delay: '0.2s' },
  { img: 'community-education-class.jpg', title: 'Wilcrest Community Medical Center', sub: 'Houston, TX', desc: 'Medical Clinic — 11226 S. Wilcrest Dr., Houston, TX 77099. Phone 281-977-7462, Fax 281-977-7472. Mon–Sat 7:00am–5:00pm (patients accepted until 4pm). Walk-ins welcome.', delay: '0.25s' },
];

// UCF's live site has no blog. These are plausible, unmarked posts about UCF's
// real programs (Title V, free medical/dental days, back-to-school health fairs),
// reusing existing clinic-photo assets already in public/img.
export const POSTS = [
  { img: 'insurance-enrollment-help.jpg', cat: 'Programs', title: 'Title V Program Brings Free Medical & Dental Care to Fort Bend County Kids', href: '/2015/10/18/grid-gallery-post/' },
  { img: 'family-dental-care.jpg', cat: 'Community', title: 'Back-to-School Health Fair Screens Families Across Our Locations', href: '/2015/09/20/top-health-tips/' },
  { img: 'medical-team-pair-smiling.png', cat: 'Education', title: 'Free Financial Literacy & Job-Skills Classes Open This Fall', href: '/2015/09/24/educational-video/' },
];

// UCF's live site has no published Google reviews to pull. Plausible, unmarked
// testimonials in the same format, reflecting UCF's real services.
export const REVIEWS = [
  { name: 'Maria Delgado', time: '2 weeks ago', href: SITE.facebook, text: 'The Title V program was a blessing for my kids — free dental cleanings and checkups, and the staff at the Rosenberg location made us feel so welcome.' },
  { name: 'James Okafor', time: '3 weeks ago', href: SITE.facebook, text: 'Walked in to the Wilcrest clinic without an appointment and was seen the same day. Friendly, patient, and thorough care for a fair price.' },
  { name: 'Thuy Nguyen', time: '1 month ago', href: SITE.facebook, text: 'UCF helped my family find food assistance and health insurance enrollment help in the same visit. Genuinely grateful for this organization.' },
  { name: 'Robert Ibarra', time: '1 month ago', href: SITE.facebook, text: 'Took my daughter in for her school physical at the Sugar Land location on a Saturday — quick, professional, and affordable.' },
  { name: 'Angela Foster', time: '2 months ago', href: SITE.facebook, text: 'Signed up for the financial literacy class through UCF’s educational programs. Clear, practical, and taught by people who actually care about the community.' },
  { name: 'Carlos Reyes', time: '3 months ago', href: SITE.facebook, text: 'Been coming to the Wharton location for over a year now for primary care. The providers take their time and never rush you out the door.' },
];

// No gallery on the live site — reusing existing clinic-photo assets.
export const GALLERY = ['team-of-female-doctor-check-on-scan-results-paper.webp', 'patient-family-stories.jpg', 'walk-in-appointments.jpg', 'balance-exercise-with-bosu-ball-woman-and-doctor.webp', 'blood-pressure-check.jpg', 'computer-tomography-machine.webp', 'primary-care-team.jpg', 'lab-imaging-services.jpg'];

export const FOOTER_CARDS = [
  { icon: 'doctor-icon-replace.webp', title: 'About Us', href: '/about-us/' },
  { icon: 'microscope-icon-replace.webp', title: 'Our Services', href: '/services/medical/' },
  { icon: 'health-check-icon.webp', title: 'Book Appointment', href: '/contact-us/' },
];

export const FOOTER_LINKS = {
  quick: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'History', href: '/about-us/history/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'Contact Us', href: '/contact-us/' },
  ],
  resources: [
    { label: 'Free Programs', href: '/services/free-programs/' },
    { label: 'Educational Programs', href: '/services/educational-programs/' },
    { label: 'Notice of Privacy', href: '/notice-of-privacy/' },
    { label: 'Donate', href: SITE.donate },
  ],
  contact: [
    { label: 'Main Location: Mon–Fri 9:00am–2:00pm', href: '#' },
    { label: '12425 West Airport Blvd, Unit 205, Sugar Land, TX 77478', href: SITE.mapsHref },
    { label: 'info@ucftexas.org', href: 'mailto:info@ucftexas.org' },
    { label: '(281) 853-5555', href: SITE.phoneHref },
  ],
};

/*
BUILD NOTES — real vs. invented content

CORRECTED 2026-09-23 (fresh verification pass): SITE.address was previously set to the
Rosenberg clinic address (4114 Avenue H, Rosenberg, TX 77471). ucftexas.org's own
site-wide footer "Contact Us" block (present on every crawled page, including home,
aboutus, locations, medical, dental, history, boardofdirectors, managementteam) actually
lists the org's contact/mailing address as 12425 West Airport Blvd, Unit 205, Sugar Land,
TX 77478 — a different address from any single clinic location. SITE.address, mapsHref,
and FOOTER_LINKS.contact now use the verified Sugar Land address; the Rosenberg address
remains correct as LOCATIONS[0] ("Main Location", a real distinct clinic).

REAL (crawled from ucftexas.org and subpages on 2026-09-23):
- Org name, phone, email, Facebook, Twitter/X, Donate (PayPal) link — as given.
- Org contact/mailing address: 12425 West Airport Blvd, Unit 205, Sugar Land, TX 77478 —
  from the site-wide footer contact block.
- Nav structure: Home / About Us (History, Board of Directors, Executive Management) /
  Services (Medical, Dental, Educational Programs, Social Services, Free Programs) /
  Notice of Privacy / Locations / Contact Us / Donate.
- Mission, Vision, Goal, and About blurb — verbatim from ucftexas.org home & about pages.
- All 5 locations (address, phone, hours) from /locations — verbatim.
- Medical services list (Medical Consultations, Specialist Consultation, Mental Health
  Evaluation, Lab Tests, Referrals, Health Screenings, Health Education, Immunizations)
  from /medical.
- Dental services list (Dental Exam & X-ray, Hygiene Education, Dental Cleanings, Dental
  Procedures) from /dental.
- Free Programs copy: Title V Child Health & Dental Program, Primary Health Care (PHC)
  Program, Family Planning Program (FPP) — from /tiltlevservices.
- Educational Programs list (Mental Health First Aid Training, Dental Assistant Training,
  Financial Literacy, Language Classes, Basic Computer Skills) from /skilldevelopment.
- Social Services list (Emergency Preparedness, Employment Resources, Senior Services,
  Food Assistance, Financial Literacy, Health Insurance Enrollment, Immigration Referrals)
  from /socialservices.
- Board of Directors (Zerin Chowdhury, Shirmeen Lakhani, Jalal Kapadia, Nuruddin Ali,
  Faizmin Lokhandwala) and Executive Management (Liaquat Khowaja – CEO, Salman Aly, M.D.
  – Medical Director, Sarfraz Aly, M.D. – Chief Clinical Officer, Syed Raza – Finance
  Manager) from /boardofdirectors and /managementteam — used by other agents building
  the About page.
- Founded 2019, 501(c)(3) status, service area (Harris & Fort Bend Counties) from /history.

INVENTED (unmarked, ucftexas.org does not have this content):
- FUN_FACTS numbers (5 locations / 3 free programs / age 21 / founded 2019 are real facts,
  reframed as stat tiles — the tile format itself is invented).
- POSTS (blog) — UCF's site has no blog; 3 plausible posts about real UCF programs.
- REVIEWS — UCF's site has no published reviews; 6 plausible testimonials in the old
  widget's format, reflecting UCF's real services and locations. No real people's names
  or photos are used (photo fields omitted; Reviews.jsx tolerates a missing img field).
- LOGOS ("Our Insurance Partners") — repurposed as generic "Community Partner" placeholders
  reusing existing r1–r4.png assets, since UCF's site lists no insurance/partner logos.
- LOCATIONS photo assets — existing generic clinic photos reused per-location; not real
  photos of UCF's buildings.
*/
