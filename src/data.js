// All copy, links and image references from the reference homepage, verbatim.

export const SITE = {
  name: 'Community Health & Life Center',
  phone: '346-616-0038',
  phoneHref: 'tel:+13466160038',
  email: 'info@communityhealthandlifecenter.com',
  address: '17510 W. Grand Parkway South, Suite #380, Sugar Land, TX 77479',
  mapsHref: 'https://share.google/QAKYSrX8n7kbk4p6y',
  facebook: 'https://www.facebook.com/CommunityHealthAndLifeCenter/',
  linkedin: 'https://www.linkedin.com/company/community-health-and-life-center-pllc',
  instagram: 'https://www.instagram.com/chlc.health/',
  portal: 'https://mycw121.ecwcloud.com/portal16804/jsp/100mp/login_otp.jsp',
  writeReview: 'https://search.google.com/local/writereview?placeid=ChIJGxlslC3iQIYRGeaGTW7qhM8',
  videoEmbed: 'https://www.youtube-nocookie.com/embed/y7_ru8JBRUE?autoplay=1',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Areas of Care', href: '/departments/' },
  { label: 'Patient Center', href: '/patient-center/' },
  { label: 'Services', href: '#', children: [
    { label: 'Services', href: '/services/' },
    { label: 'Services Detail', href: '/services-detail/' },
  ] },
  { label: 'Pages', href: '#', children: [
    { label: 'About Us', href: '/about-us/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact Us', href: '/contact-us/' },
  ] },
  { label: 'Doctors & Staff', href: '/doctors-staff/' },
];

export const FUN_FACTS = [
  { n: 6, label: 'Days a Week Available' },
  { n: 2, label: 'Care Providers On Staff' },
  { n: 24, label: 'Hour Secure Portal' },
  { n: 3, label: 'Core Care Focus Areas' },
];

export const DEPARTMENTS = {
  left: [
    { icon: 'heart-icon-replace.webp', title: 'Family Medicine', desc: 'Comprehensive primary care for every age.', hover: 'two-black-medical-doctors-standing-in-hospital-smiling_eke8msjt-e_thumbnail-full01.png', anim: 'fadeInRight', delay: '0.1s' },
    { icon: 'dna-icon-replace.webp', title: 'Preventive Care', desc: 'Annual physicals, screenings & immunizations.', hover: 'medical-staff-e1491527907551.jpg', anim: 'fadeInRight', delay: '0.15s' },
  ],
  right: [
    { icon: 'bone-icon-replace.webp', title: 'Chronic Care', desc: 'Ongoing management of diabetes & hypertension.', hover: 'multiracial_medical_team.jpeg', anim: 'fadeInLeft', delay: '0.1s' },
    { icon: 'pacifier-icon-replace.webp', title: 'Nutrition Counseling', desc: 'Personalized, dietitian-led nutrition plans.', hover: 'Foster-care-family.jpg', anim: 'fadeInLeft', delay: '0.15s' },
  ],
};

export const OFFER = [
  { title: 'Annual Physicals & Well Visits', desc: 'Thorough, whole-person evaluations to detect, prevent, and optimize your health.' },
  { title: 'On-Site Lab & Diagnostics', desc: 'Convenient in-office lab draws with reliable, timely results.' },
  { title: 'Women’s Health', desc: 'Compassionate care for every stage of a woman’s life.' },
  { title: 'Preventive Care & Screenings', desc: 'Stay ahead of health risks with tailored screening and prevention plans.' },
];

export const PROMISE = {
  chronic: { img: 'mixed-family-1.jpg', tag: 'Chronic Care', title: 'Ongoing Support', desc: 'We help you manage diabetes, hypertension, and other ongoing conditions with personalized, continuous care.', height: 520 },
  family: { img: 'PHOTO_wellnessvisit.jpg', tag: 'Family Medicine', title: 'Preventive Focus', desc: 'We focus on prevention and early detection to keep you and your family healthy.', height: 470 },
  oncology: { img: 'multiracial_medical_team.jpg', tag: 'Oncology', title: 'Dietitian Services', desc: 'Personalized nutrition counseling to support your health goals and medical needs.', height: 485 },
  text: 'We combine advanced medical technology with genuine compassion to redefine patient care for every generation with excellence.',
};

export const TECH = [
  { icon: 'report-icon-replace.webp', title: 'Accurate Lab Results', desc: 'Convenient on-site lab draws with reliable, timely results.' },
  { icon: 'hospital-bed-icon-replace.webp', title: 'Comfortable Offices', desc: 'A welcoming, patient-friendly clinic environment.' },
  { icon: 'medical-kit-icon-replace.webp', title: '800+ Medical & Support Staff', desc: 'Compassionate providers who know you by name.' },
  { icon: 'blood-pressure-icon-replace.webp', title: 'On-Site Dietitian', desc: 'Nutrition counseling personalized to your health goals.' },
  { icon: 'syringe-icon-replace.webp', title: 'Same-Week Appointments', desc: 'Compassionate providers who know you by name.' },
  { icon: 'cardiogram-icon-replace.webp', title: 'Secure Patient Portal', desc: '24-hour online access to your health information.' },
];

export const LOGOS = [
  { src: 'r2.png', alt: 'Two' },
  { src: 'r3.png', alt: 'Three' },
  { src: 'r1.png', alt: 'Four' },
  { src: 'r2.png', alt: 'five' },
  { src: 'r1.png', alt: 'six' },
];

export const LOCATIONS = [
  { img: 'Office-Building.jpg', title: 'Our Clinic', sub: 'Sugar Land, TX', desc: '17510 W. Grand Parkway South, Suite #380, Sugar Land, TX 77479', delay: '0.05s' },
  { img: '2-scaled.jpg', title: 'Office Hours', sub: 'Mon–Fri', desc: '8:00 AM – 5:00 PM, with Saturday appointments available.', delay: '0.1s' },
  { img: '1-scaled.jpg', title: 'Getting Here', sub: 'Free Parking', desc: 'Free parking is available in front of the office. Same-week appointments available.', delay: '0.15s' },
];

export const POSTS = [
  { img: 'chlc-care-team-huddle.jpg', cat: 'Audio', title: '2015 Best USA Hospitals and Clinics', href: '/2015/10/18/grid-gallery-post/' },
  { img: 'chlc-pediatric-visit.jpg', cat: 'News', title: 'Medical Advice for all ages and sexes', href: '/2015/09/30/medical-advice/' },
  { img: 'composition-of-fruits-and-vegetables-in-rainbow-82DUL49-min.jpg', cat: 'News', title: 'Diabetes Diet and Healthy Food Tips', href: '/2015/09/30/diabetes-diet-and-food-tips/' },
];

export const REVIEWS = [
  { name: 'Donovan Grant', time: '3 weeks ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_e550ccdb7d588390675e9bce5ba7a276.jpg', href: 'https://www.google.com/maps/contrib/102781118272541468112/reviews', text: 'Kaylin is awesome! She helped me with everything i needed and made everything so easy' },
  { name: 'Rochae Shelley', time: '3 weeks ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_a60e774976bceba8c409642510307e87.jpg', href: 'https://www.google.com/maps/contrib/116672993600459089937/reviews', text: 'The entire staff was very nice and professional and Dr. Nwachokor was thorough and attentive.' },
  { name: 'Anthony Cannon', time: '3 weeks ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_0475acf7c4339bc52223a5b889c63767.jpg', href: 'https://www.google.com/maps/contrib/106669012718511055389/reviews', text: 'Friendly staff!!! My visit was very pleasant! I definitely recommend them to my friends!' },
  { name: 'Natasja Muina', time: '3 weeks ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_05df51124d7a37ae45d750ce128c50b5.jpg', href: 'https://www.google.com/maps/contrib/105559103920957033974/reviews', text: 'AMAZING ! super nice and friendly staff!' },
  { name: 'Ryan Ski (Ryan Ski)', time: '1 month ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_836ea9292eec008357c2790f1038ed2c.jpg', href: 'https://www.google.com/maps/contrib/111818498396256760730/reviews', text: 'Dr Nwochacor is a great doctor communicates and is generally concerned for your health and does everything he can to help with any qeustions or concerns you may have best doctor I’ve had in years!!' },
  { name: 'Kherin Hernandez', time: '3 months ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_90a63e5dee3fcbd000e81dd0de9eabda.jpg', href: 'https://www.google.com/maps/contrib/113038573765547313236/reviews', text: 'One of the greatest clinics I been too! Their attentiveness is spectacular, Any questions I have they always answer promptly and politely. Very clean and organized facility which makes the visit pleasurable as well! Highly recommend this Clinic' },
  { name: 'Kevin De La Fuente', time: '3 months ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_9a192e2a73e1cf5d5fc153f8a77a526c.jpg', href: 'https://www.google.com/maps/contrib/101811223169426576382/reviews', text: 'I cannot recommend Dr. Nwachokor and their team highly enough. Went in for an IV infusion which I highly recommend doing. Karla was the nurse that took great care of me very gentle with needles and was excellent at breaking down medical information into terms that are easy to understand. From the moment you walk in, the front desk staff is welcoming, and get the job done. Everyone is incredibly knowledgeable, patient, and truly listens to your concerns It is rare to find a medical practice that combines such high-level professionalism with genuine, compassionate care. If you are looking for a doctor who truly cares about your well-being, he’s your guy !' },
  { name: 'Omar Al-Mahmeed', time: '4 months ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_eae386f2655b5c0a80dfe661a6b2af31.jpg', href: 'https://www.google.com/maps/contrib/103153049384946153879/reviews', text: 'Dr. Daniel Nwachakor has been my GP, and I can confidently say I will never go to anyone else! He is everything you want in a primary care doctor—incredibly knowledgeable, patient, and someone who genuinely listens and takes his time with you. On top of that, his office team, the nurses, and the front desk staff are absolutely amazing. They are always welcoming, efficient, and make every single visit seamless and stress-free. Highly, highly recommend!' },
  { name: 'Krizia Martinez', time: '4 months ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_3352b3d754519a5e388743f8512e7851.jpg', href: 'https://www.google.com/maps/contrib/106271770756216543382/reviews', text: 'Dr. Nwachokor is an excellent physician all around. He takes the time to listen, answer questions, and genuinely cares about his patients.His staff is just as wonderful. Giselle and Karla are always friendly, welcoming, and incredibly helpful, and the entire team goes above and beyond to make patients feel comfortable and cared for.It’s rare to find a practice where both the doctor and staff consistently provide such outstanding care. I highly recommend Dr. Nwachokor and his team to anyone looking for compassionate, patient-centered healthcare.' },
  { name: 'gladys zarate', time: '5 months ago', img: 'ChIJGxlslC3iQIYRGeaGTW7qhM8_0ca345ffafe0eeed8accd0c1cb3205ad.jpg', href: 'https://www.google.com/maps/contrib/106833388298894734757/reviews', text: 'Had my first visit here and it was such a great experience! The staff was welcoming, professional, and made me feel comfortable from the moment I walked in. The provider took the time to listen to my concerns, answered all my questions, and didn’t make me feel rushed. The office was clean, organized, and overall very pleasant. I’m really happy I found this PCP office and look forward to continuing my care here. Highly recommend!' },
];

export const GALLERY = ['chlc-gallery-01.jpg', 'chlc-gallery-02.jpg', 'chlc-gallery-03.jpg', 'chlc-gallery-04.jpg', 'chlc-gallery-06.jpg', 'chlc-gallery-07.jpg', 'chlc-gallery-08.jpg', 'chlc-gallery-10.jpg'];

export const FOOTER_CARDS = [
  { icon: 'doctor-icon-replace.webp', title: 'Meet Our Provider', href: '/about-us/' },
  { icon: 'microscope-icon-replace.webp', title: 'Patient Portal', href: SITE.portal },
  { icon: 'health-check-icon.webp', title: 'Appointment', href: '/contact-us/' },
];

export const FOOTER_LINKS = {
  quick: [
    { label: 'Home', href: '/' },
    { label: 'Areas of Care', href: '/departments/' },
    { label: 'Doctors', href: '/about-us/' },
    { label: 'Contact Us', href: '/contact-us/' },
  ],
  resources: [
    { label: 'Patient Portal', href: SITE.portal },
    { label: 'Health Blog', href: '/blog/' },
    { label: 'Insurance Partners', href: '/contact-us/' },
    { label: 'Privacy Policy', href: '/privacy/' },
  ],
  contact: [
    { label: 'Mon–Fri : 8:00 AM – 5:00 PM', href: '#' },
    { label: '17510 W. Grand Parkway South, Suite #380, Sugar Land, TX 77479', href: SITE.mapsHref },
    { label: 'info@communityhealthandlifecenter.com', href: 'mailto:info@communityhealthandlifecenter.com' },
    { label: '346-616-0038', href: SITE.phoneHref },
  ],
};
