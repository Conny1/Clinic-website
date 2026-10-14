/**
 * Lumina Dental & Physio Clinic - Central Business Configuration
 * 
 * ALL business content, contact details, pricing, schedule, team profiles,
 * and image URLs are defined here. Components MUST read from this file only.
 */

export interface ServiceItem {
  id: string;
  category: 'dental' | 'physio';
  title: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  priceFromKES: number;
  priceDisplay: string;
  whatToExpect: string[];
  recommendedFor: string;
  badge?: string;
  iconName: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  department: 'Dental' | 'Physiotherapy';
  qualifications: string;
  registrationNumber: string; // KMPDC or KPA
  languages: string[];
  experienceYears: number;
  bio: string;
  specialties: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  quote: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'dental' | 'physio' | 'insurance';
  question: string;
  answer: string;
}

export interface InsurancePartner {
  name: string;
  shortCode: string;
  tag: string;
}

export const siteConfig = {
  // Clinic Core Brand
  name: "Lumina Dental & Physio Clinic",
  shortName: "Lumina Clinic",
  legalName: "Lumina Healthcare Kenya Limited",
  tagline: "Healthy smiles. Stronger movement.",
  subTagline: "Nairobi's dedicated private clinic for gentle, modern dentistry and evidence-based physiotherapy rehabilitation.",
  kmpdcLicense: "KMPDC/CL/2024/0982",
  websiteUrl: "https://luminaclinic.co.ke",

  // Theme Colors (strict palette rules)
  colors: {
    tealPrimary: "#0E7C86",     // Medical teal
    navyHeading: "#0B2A4A",     // Deep navy for text & headers
    mintBackground: "#E8F6F5",  // Soft mint section backgrounds
    white: "#FFFFFF",
    coralCTA: "#F26B5B",        // Coral strictly for "Book Appointment" CTAs
    slateMuted: "#475569",
    borderSubtle: "#E2E8F0",
  },

  // Contact & Kenyan Locale Details
  contact: {
    phoneDisplay: "+254 712 345 678",
    phoneRaw: "+254712345678",
    emergencyPhoneDisplay: "+254 799 112 233",
    emergencyPhoneRaw: "+254799112233",
    whatsappDisplay: "+254 712 345 678",
    whatsappRaw: "254712345678",
    whatsappPrefillMessage: "Hello Lumina Dental & Physio Clinic! I would like to book an appointment.",
    email: "care@luminaclinic.co.ke",
    supportEmail: "info@luminaclinic.co.ke",
  },

  // Physical Location & Directions (Nairobi, Kenya)
  location: {
    building: "The Promenade, 4th Floor, Suite 402",
    street: "General Mathenge Drive",
    area: "Westlands",
    city: "Nairobi",
    country: "Kenya",
    postalCode: "00100",
    fullAddress: "Suite 402, 4th Floor, The Promenade, General Mathenge Drive, Westlands, Nairobi, Kenya",
    landmark: "Directly opposite Sandalwood Suites, 350m from Sarit Centre & Mpaka Road roundabout",
    parking: "Free secure basement visitor parking available with 24-hr security (ticket validated at clinic reception)",
    mapEmbedUrl: "https://maps.google.com/maps?q=The+Promenade+General+Mathenge+Drive+Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      latitude: -1.2585,
      longitude: 36.8048,
    },
  },

  // Working Hours (East Africa Time - UTC+3)
  hours: {
    timezone: "Africa/Nairobi",
    utcOffsetHours: 3,
    schedule: [
      { days: "Monday – Friday", time: "8:00 AM – 6:00 PM", openHour: 8, closeHour: 18, isWeekend: false },
      { days: "Saturday", time: "9:00 AM – 4:00 PM", openHour: 9, closeHour: 16, isWeekend: true },
      { days: "Sunday & Public Holidays", time: "Emergency On-Call Only", openHour: 0, closeHour: 0, isWeekend: true },
    ],
    emergencyNotice: "24/7 on-call triage available for acute toothache, dental trauma, and severe acute muscle sprains.",
  },

  // Key Value Proportions / Quick Facts
  quickFacts: [
    { title: "Mon – Sat Care", subtitle: "Early 8AM & Saturday slots", iconName: "Calendar" },
    { title: "Westlands, Nairobi", subtitle: "Free basement parking", iconName: "MapPin" },
    { title: "Direct Insurance Billing", subtitle: "Major Kenyan insurers & M-Pesa", iconName: "ShieldCheck" },
    { title: "Emergency Line", subtitle: "+254 799 112 233", iconName: "PhoneCall" },
  ],

  // Generated Visual Assets
  images: {
    hero: "/images/hero_clinic_reception_1791961657833.jpg",
    dentistPortrait: "/images/dentist_doctor_portrait_1791961658328.jpg",
    physioPortrait: "/images/physio_doctor_portrait_1791961659040.jpg",
    smileResult: "/images/smile_before_after_case_1791961659017.jpg",
    physioRoom: "/images/physio_rehab_room_1791961659756.jpg",
  },

  // Insurance Partners & Payment Methods
  insurancePartners: [
    { name: "Jubilee Health", shortCode: "JUBILEE", tag: "Direct Billing" },
    { name: "AAR Insurance", shortCode: "AAR", tag: "Direct Billing" },
    { name: "Britam Health", shortCode: "BRITAM", tag: "Direct Billing" },
    { name: "CIC Group", shortCode: "CIC", tag: "Direct Billing" },
    { name: "APA Insurance", shortCode: "APA", tag: "Direct Billing" },
    { name: "Madison General", shortCode: "MADISON", tag: "Direct Billing" },
    { name: "Old Mutual / UAP", shortCode: "OLD MUTUAL", tag: "Direct Billing" },
    { name: "Minet Kenya", shortCode: "MINET", tag: "Direct Billing" },
    { name: "First Assurance", shortCode: "FIRST", tag: "Direct Billing" },
    { name: "GA Insurance", shortCode: "GA", tag: "Direct Billing" },
    { name: "Social Health Authority (SHA/NHIF)", shortCode: "SHA/NHIF", tag: "Accredited" },
  ],
  paymentMethods: ["M-Pesa Buy Goods Till", "M-Pesa Paybill", "Visa & Mastercard", "Direct Insurance Settlement", "Bank Transfer (EFT/RTGS)"],

  // Services Catalog
  services: [
    // Dental Services
    {
      id: "routine-dental-cleaning",
      category: "dental",
      title: "Routine Dental Checkup & Scale/Polish",
      shortDesc: "Complete oral health examination, digital bitewing scans, gentle ultrasonic plaque removal, and high-shine enamel polish.",
      longDesc: "Preventative care is the cornerstone of dental longevity. Our comprehensive checkup includes digital low-radiation bitewing X-rays, intraoral camera photographic review, gentle ultrasonic plaque and tartar removal, stain polishing, and a personalized preventative home-care guide.",
      duration: "45 minutes",
      priceFromKES: 4500,
      priceDisplay: "From KES 4,500",
      recommendedFor: "Every 6 months for adults and teenagers seeking plaque-free teeth and fresh breath.",
      badge: "Popular Preventative",
      iconName: "Sparkles",
      whatToExpect: [
        "Gentle assessment with intraoral camera view of your teeth on chairside screen",
        "Ultrasonic scaling to remove hardened calculus without scraping enamel",
        "Prophylaxis stain polishing with mint or citrus paste",
        "Fluoride remineralizing rinse and tailored flossing advice",
      ],
    },
    {
      id: "teeth-whitening",
      category: "dental",
      title: "Professional In-Chair Teeth Whitening",
      shortDesc: "Safe, medical-grade LED laser whitening lifting stubborn coffee, tea, and tobacco stains by up to 6–8 shades.",
      longDesc: "Achieve a noticeably brighter smile safely under professional supervision. We protect your gums with a light-cured barrier before applying our pH-neutral hydrogen peroxide gel, activated by cold LED light. Includes desensitizing calcium booster.",
      duration: "60 minutes",
      priceFromKES: 25000,
      priceDisplay: "From KES 25,000",
      recommendedFor: "Individuals preparing for weddings, interviews, or wanting to erase tea/coffee discoloration.",
      badge: "Cosmetic Favorite",
      iconName: "Sun",
      whatToExpect: [
        "Baseline tooth shade matching on the VITA medical scale",
        "Application of protective gingival dam to shield delicate gums",
        "3 cycles of 15-minute cool LED light activation with active whitening gel",
        "Immediate post-treatment desensitizing treatment and take-home shade record",
      ],
    },
    {
      id: "orthodontics-aligners",
      category: "dental",
      title: "Clear Aligners & Orthodontics",
      shortDesc: "Discreet clear aligners and modern ceramic braces to correct crowding, gaps, overbites, and misalignments.",
      longDesc: "Straighten your teeth without metal brackets. Using digital 3D intraoral scans, we visualize your final smile before treatment starts. Clear aligners are removable, comfortable, and virtually invisible.",
      duration: "30–45 mins (Consultation)",
      priceFromKES: 85000,
      priceDisplay: "From KES 85,000",
      recommendedFor: "Adults and teens wanting discreet orthodontic alignment with flexible monthly payment plans.",
      iconName: "Smile",
      whatToExpect: [
        "3D high-resolution digital smile scan (no messy impression trays)",
        "Custom 3D computerized movement simulation showing expected progress",
        "Personalized aligner series fitted with precision attachments",
        "Review checkups every 6 to 8 weeks",
      ],
    },
    {
      id: "pediatric-dentistry",
      category: "dental",
      title: "Pediatric & Kids Dental Care",
      shortDesc: "A warm, patient, and joyful introduction to oral hygiene for toddlers, children, and young teens.",
      longDesc: "We believe childhood dental visits should build trust, not fear. Our pediatric team uses kid-friendly terminology ('counting teeth', 'tooth tickler'), preventative fissure sealants, and cavity fillings in a calm, stress-free setting.",
      duration: "30 minutes",
      priceFromKES: 3500,
      priceDisplay: "From KES 3,500",
      recommendedFor: "Children from age 1 up to 16 for routine checks, cavity prevention, and habit correction.",
      badge: "Child-Friendly",
      iconName: "HeartHandshake",
      whatToExpect: [
        "Playful, unhurried introduction to the dental chair and instruments",
        "Gentle tooth counting and plaque check",
        "Protective fissure sealants and tasty fluoride varnish",
        "Complimentary bravery certificate and kid's oral care reward pack",
      ],
    },
    {
      id: "root-canal-crowns",
      category: "dental",
      title: "Root Canal Therapy & Ceramic Crowns",
      shortDesc: "Painless single-visit endodontic treatment to relieve severe toothache and preserve natural tooth structure.",
      longDesc: "Save infected or deeply decayed teeth from extraction. Using rotary endodontics and apex locators, we clean the infected pulp canals painlessly under local anaesthesia and seal them securely, followed by a custom porcelain crown.",
      duration: "60–90 minutes",
      priceFromKES: 28000,
      priceDisplay: "From KES 28,000",
      recommendedFor: "Patients experiencing persistent throbbing tooth pain, sensitivity to hot food, or cracked teeth.",
      iconName: "Shield",
      whatToExpect: [
        "Profound local anaesthesia ensuring completely pain-free procedure",
        "Digital apex-guided canal cleansing and bio-inert hermetic sealing",
        "Digital intraoral scan for custom all-ceramic crown fabrication",
        "Prompt relief from severe toothache and infection resolution",
      ],
    },
    {
      id: "cosmetic-veneers",
      category: "dental",
      title: "Porcelain & Composite Veneers",
      shortDesc: "Ultra-thin, custom-crafted dental facings designed to perfect chipped, discolored, or unevenly spaced teeth.",
      longDesc: "Custom designed to harmonize with your facial proportions, our veneers provide a natural, luminous smile. Choose between direct aesthetic composite bonding or durable laboratory-milled porcelain laminates.",
      duration: "60 mins / appointment",
      priceFromKES: 35000,
      priceDisplay: "From KES 35,000 / tooth",
      recommendedFor: "Patients seeking definitive cosmetic correction for chipped edges, fluorosis, or gaps.",
      iconName: "Sparkle",
      whatToExpect: [
        "Aesthetic smile design consultation and digital mock-up",
        "Micro-conservative enamel preparation",
        "Handcrafted temporary veneers while porcelain is milled",
        "Final bonded placement with seamless natural margins",
      ],
    },

    // Physiotherapy & Rehab Services
    {
      id: "spine-musculoskeletal",
      category: "physio",
      title: "Spine & Musculoskeletal Assessment",
      shortDesc: "In-depth biomechanical diagnosis for lower back pain, neck stiffness, sciatica, disc herniation, and postural strain.",
      longDesc: "Don't mask chronic back or neck pain with painkillers. Our physiotherapists pinpoint spinal joint restrictions, nerve impingements, and muscle imbalances, using hands-on manual therapy, spinal decompression, and stabilizing exercise prescriptions.",
      duration: "60 minutes",
      priceFromKES: 4500,
      priceDisplay: "From KES 4,500",
      recommendedFor: "Desk workers, commuters, and individuals with nagging lower back, neck, or sciatic pain.",
      badge: "Most Requested",
      iconName: "Activity",
      whatToExpect: [
        "Posture, joint mobility, neurological reflex, and muscle strength testing",
        "Hands-on joint mobilization and spinal traction to relieve acute pressure",
        "Soft-tissue release to ease muscle guarding",
        "Custom home rehab exercise program sent to your phone with video demos",
      ],
    },
    {
      id: "sports-injury-rehab",
      category: "physio",
      title: "Sports Injury Rehabilitation & Return to Play",
      shortDesc: "Targeted sports physiotherapy for runners, gym athletes, footballers, and golfers recovering from joint or tendon strains.",
      longDesc: "From acute ACL sprains and meniscus tears to runner's knee, rotator cuff impingement, and Achilles tendinopathy. We blend manual therapy with progressive neuromuscular retraining to get you back to peak sport performance safely.",
      duration: "45–60 minutes",
      priceFromKES: 5000,
      priceDisplay: "From KES 5,000",
      recommendedFor: "Athletes, marathoners, crossfitters, and weekend warriors recovering from acute or chronic strains.",
      iconName: "Flame",
      whatToExpect: [
        "Dynamic movement analysis (gait, single-leg stability, biomechanical loading)",
        "Active tendon loading protocols and joint stabilization exercises",
        "Kinesiology taping and sports-specific functional agility drills",
        "Clear metric-based criteria for safe return to running and competitive sports",
      ],
    },
    {
      id: "post-operative-rehab",
      category: "physio",
      title: "Post-Operative Orthopaedic Rehab",
      shortDesc: "Structured recovery protocols following knee arthroscopy, total hip/knee replacement, fracture fixation, or rotator cuff repair.",
      longDesc: "Surgery is only half the journey. Our post-op rehab works in close communication with your orthopaedic surgeon to restore range of motion, reduce swelling, prevent scar adhesions, and rebuild muscular stability step-by-step.",
      duration: "45 minutes",
      priceFromKES: 4500,
      priceDisplay: "From KES 4,500",
      recommendedFor: "Patients recovering from joint replacement, ligament repair, spinal fusion, or bone fracture healing.",
      iconName: "Bone",
      whatToExpect: [
        "Gentle passive and active-assisted range-of-motion therapy",
        "Lymphatic drainage techniques and cryotherapy to manage postoperative edema",
        "Gait re-training (crutch weaning and balance confidence)",
        "Surgeon-protocol aligned progressive resistance training",
      ],
    },
    {
      id: "dry-needling-trigger-point",
      category: "physio",
      title: "Dry Needling & Myofascial Release",
      shortDesc: "Targeted filament needle insertion into stubborn myofascial trigger points to release deep muscle tension and spasm.",
      longDesc: "Dry needling involves inserting sterile, ultra-fine acupuncture needles directly into tight muscle bands and knots. This triggers a localized twitch response, improving blood flow, releasing endorphins, and instantly resetting hypertonic muscles.",
      duration: "45 minutes",
      priceFromKES: 5000,
      priceDisplay: "From KES 5,000",
      recommendedFor: "Persistent shoulder knots, chronic tension headaches, gluteal tightness, and stubborn muscle spasms.",
      badge: "Rapid Relief",
      iconName: "Zap",
      whatToExpect: [
        "Precise manual palpation to locate active myofascial trigger points",
        "Sterile single-use filament needle insertion (minimal sensation, brief twitch)",
        "Immediate decrease in localized muscle tension and spasm",
        "Follow-up gentle active stretching and hydration recommendations",
      ],
    },
    {
      id: "ergonomic-posture",
      category: "physio",
      title: "Corporate Ergonomic & Postural Re-Education",
      shortDesc: "Workstation assessment, thoracic mobility, and deep cervical flexor strengthening for computer workers.",
      longDesc: "Combats 'tech neck', rounded shoulders, and repetitive mouse strain. We assess your daily sitting posture and implement targeted micro-break stretches and ergonomic workstation corrections that prevent long-term spinal wear.",
      duration: "45 minutes",
      priceFromKES: 4000,
      priceDisplay: "From KES 4,000",
      recommendedFor: "Professionals spending 6+ hours daily behind laptop screens or in traffic.",
      iconName: "Laptop",
      whatToExpect: [
        "Cervical and thoracic spine alignment check",
        "Scapular stabilization exercises and core endurance testing",
        "Ergonomic chair, monitor, and keyboard positioning guidelines",
        "Quick 3-minute desk routines to prevent afternoon tension headaches",
      ],
    },
    {
      id: "geriatric-mobility",
      category: "physio",
      title: "Active Ageing & Joint Mobility Therapy",
      shortDesc: "Gentle, compassionate movement therapy for seniors to reduce osteoarthritis pain, improve balance, and prevent falls.",
      longDesc: "Maintain physical independence and vitality. We focus on low-impact joint lubrication exercises, balance board proprioception, safe stair climbing techniques, and osteoporosis-safe bone-loading routines.",
      duration: "45 minutes",
      priceFromKES: 4000,
      priceDisplay: "From KES 4,000",
      recommendedFor: "Older adults experiencing knee osteoarthritis stiffness, balance insecurity, or reduced mobility.",
      iconName: "ShieldAlert",
      whatToExpect: [
        "Comprehensive fall-risk screening and functional reach testing",
        "Painless joint mobilization and warmth therapy",
        "Supervised balance, stepping, and sit-to-stand strength exercises",
        "Empathetic coaching to preserve everyday independence and confidence",
      ],
    },
  ],

  // Team & Doctor Profiles
  doctors: [
    {
      id: "dr-wanjiku-mwangi",
      name: "Dr. Wanjiku Mwangi",
      role: "Lead Dental Surgeon & Orthodontic Specialist",
      department: "Dental",
      qualifications: "BDS (University of Nairobi), MSc Orthodontics (King's College London)",
      registrationNumber: "KMPDC Reg. No. A-4821",
      languages: ["English", "Swahili"],
      experienceYears: 13,
      bio: "Dr. Wanjiku brings over a decade of clinical precision with gentle bedside manner. Having completed postgraduate training in the UK, she specializes in aesthetic smile transformations, clear aligners, and preventative dentistry for families.",
      specialties: ["Aesthetic Dentistry", "Clear Aligners", "Smile Reconstruction", "Pediatric Care"],
      image: "/images/dentist_doctor_portrait_1791961658328.jpg",
    },
    {
      id: "peter-kamau",
      name: "Peter Kamau, PT",
      role: "Senior Musculoskeletal & Sports Physiotherapist",
      department: "Physiotherapy",
      qualifications: "BSc Physiotherapy (Moi University), Certified Dry Needling Practitioner (CPD UK)",
      registrationNumber: "KPA Reg. No. PT-1194",
      languages: ["English", "Swahili", "Kikuyu"],
      experienceYears: 11,
      bio: "Peter has worked with Kenya's national athletics clubs and leading corporate wellness programs. He combines evidence-based manual therapy, trigger point dry needling, and biomechanical rehabilitation to resolve spinal pain and joint dysfunction.",
      specialties: ["Sports Injury Rehab", "Spinal Mobilization", "Dry Needling", "Post-Op Orthopaedics"],
      image: "/images/physio_doctor_portrait_1791961659040.jpg",
    },
    {
      id: "dr-brian-otieno",
      name: "Dr. Brian Otieno",
      role: "Associate Dental Surgeon & Endodontist",
      department: "Dental",
      qualifications: "BDS (University of Nairobi), Cert. Rotary Endodontics",
      registrationNumber: "KMPDC Reg. No. A-6102",
      languages: ["English", "Swahili", "Luo"],
      experienceYears: 8,
      bio: "Known for his calming presence, Dr. Brian specializes in pain-free root canal therapy, digital crown restorations, and wisdom teeth management. He is passionate about anxious patient care and pain elimination.",
      specialties: ["Single-visit Root Canals", "Ceramic Crowns", "Emergency Dental Triage", "Oral Surgery"],
      image: "/images/hero_clinic_reception_1791961657833.jpg",
    },
    {
      id: "faith-chebet",
      name: "Faith Chebet, PT",
      role: "Senior Orthopaedic & Ergonomics Physiotherapist",
      department: "Physiotherapy",
      qualifications: "BSc Physiotherapy (JKUAT), Certified Ergonomics Specialist",
      registrationNumber: "KPA Reg. No. PT-1488",
      languages: ["English", "Swahili", "Kalenjin"],
      experienceYears: 7,
      bio: "Faith specializes in posture rehabilitation, neck and shoulder tension from sedentary work, and women's health physiotherapy. She empowers patients with practical habit adjustments and functional core strength.",
      specialties: ["Corporate Posture & Ergonomics", "Neck & Shoulder Rehabilitation", "Active Ageing", "Myofascial Release"],
      image: "/images/physio_rehab_room_1791961659756.jpg",
    },
  ],

  // Patient Testimonials
  testimonials: [
    {
      id: "1",
      author: "David Kariuki",
      location: "Westlands, Nairobi",
      treatment: "Teeth Whitening & Dental Checkup",
      quote: "I used to be extremely apprehensive about visiting dentists until I walked into Lumina. Dr. Wanjiku explained every step clearly and the whitening results exceeded my expectations. Completely pain-free and professional.",
      rating: 5,
      date: "August 2026",
    },
    {
      id: "2",
      author: "Mercy Achieng",
      location: "Kilimani, Nairobi",
      treatment: "Lower Back Rehab & Dry Needling",
      quote: "Suffered severe sciatica from 8 hours of desk work daily. Peter took the time to test my posture and applied dry needling. Within three sessions, the sharp burning pain down my leg was gone. The home exercises were very easy to follow.",
      rating: 5,
      date: "September 2026",
    },
    {
      id: "3",
      author: "Grace & Kevin Ndung'u",
      location: "Lavington, Nairobi",
      treatment: "Kids Dentistry (Ages 6 & 9)",
      quote: "Our children actually look forward to their dental checkups now! The team made them feel like superheroes in the dental chair. Direct billing with our Jubilee insurance made checkout completely hassle-free.",
      rating: 5,
      date: "October 2026",
    },
    {
      id: "4",
      author: "Farhan Sheikh",
      location: "Parklands, Nairobi",
      treatment: "Runner's Knee Sports Rehab",
      quote: "Training for the Standard Chartered Nairobi Marathon when knee pain halted my runs. Peter's progressive tendon loading and gait analysis got me across the finish line with zero pain. Outstanding expertise.",
      rating: 5,
      date: "July 2026",
    },
  ],

  // Clinic Standards & Technology
  standards: [
    {
      title: "Hospital-Grade Class-B Autoclave",
      description: "Every non-disposable instrument undergoes 134°C vacuum sterilization in our certified thermal autoclave, individually pouched with chemical indicator tape.",
      icon: "ShieldCheck",
    },
    {
      title: "Ultra-Low Radiation Digital X-Rays",
      description: "Our digital sensors reduce radiation exposure by up to 85% compared to traditional film, giving instantaneous high-resolution diagnostic images.",
      icon: "Cpu",
    },
    {
      title: "100% Single-Use Sterile Barriers",
      description: "Syringes, suction tips, patient bibs, chair sleeves, and dry needling filaments are 100% single-use and disposed in certified biohazard protocols.",
      icon: "CheckCircle",
    },
    {
      title: "Medical HEPA Air Purification",
      description: "Continuous medical-grade air filtration and multi-air exchange in treatment suites ensure clean, aerosol-reduced air for clinical peace of mind.",
      icon: "Wind",
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      category: "general",
      question: "Where are you located and is there parking available?",
      answer: "We are located on the 4th Floor of The Promenade building on General Mathenge Drive in Westlands, Nairobi (Suite 402). We have free, secure basement parking for all patients—simply bring your parking ticket to our reception desk for validation upon arrival.",
    },
    {
      id: "faq-2",
      category: "dental",
      question: "Are dental treatments painful at Lumina?",
      answer: "No. Patient comfort is our utmost priority. We use topical numbing gels prior to any local anaesthetic injection, ultra-gentle sonic scalers, and clear step-by-step communication throughout your visit. For nervous patients, we allow listening to music and provide pause signals.",
    },
    {
      id: "faq-3",
      category: "physio",
      question: "What should I wear for a physiotherapy appointment?",
      answer: "Please wear or bring comfortable, loose-fitting athletic clothing (such as gym shorts, track pants, or a t-shirt) that allows easy access to the area being treated (e.g., knee, shoulder, or spine). We also provide clean clinic shorts and gowns if needed.",
    },
    {
      id: "faq-4",
      category: "insurance",
      question: "Do you accept direct billing with health insurance?",
      answer: "Yes, we accept direct settlement with major Kenyan insurance providers including Jubilee Health, AAR, Britam, CIC, APA, Madison, Minet, Old Mutual, and SHA/NHIF. Please bring your valid insurance card and national ID. Our front desk coordinates real-time pre-authorization.",
    },
    {
      id: "faq-5",
      category: "general",
      question: "Can I pay using M-Pesa or credit card?",
      answer: "Yes. We accept M-Pesa (Buy Goods Till & Paybill), Visa, Mastercard, and direct electronic bank transfers. Clear printed itemized receipts are provided immediately for self-reimbursement claims.",
    },
    {
      id: "faq-6",
      category: "dental",
      question: "How often should I bring my child to the dentist?",
      answer: "The Kenya Dental Association and international guidelines recommend bringing children for their first dental visit around their first birthday or when their first tooth appears, and every 6 months thereafter. Early visits normalize dental care and prevent childhood cavities.",
    },
    {
      id: "faq-7",
      category: "physio",
      question: "Do I need a doctor's referral to see a physiotherapist?",
      answer: "In Kenya, you can book directly with our licensed physiotherapists without a prior doctor's referral. However, if your private insurance scheme specifically requires a general practitioner or specialist referral note for direct billing cover, our desk can guide you through the process.",
    },
    {
      id: "faq-8",
      category: "general",
      question: "What should I do in a dental or physical emergency?",
      answer: "For severe toothache, knocked-out teeth, uncontrolled oral bleeding, or acute sports trauma, call our dedicated 24/7 emergency hotline immediately at +254 799 112 233. Our on-call clinical triage officer will advise you and arrange immediate clinical intervention.",
    },
  ],

  // Social Links
  socials: {
    instagram: "https://instagram.com/luminaclinic_ke",
    facebook: "https://facebook.com/luminaclinic.ke",
    linkedin: "https://linkedin.com/company/lumina-clinic-kenya",
    twitter: "https://x.com/luminaclinic_ke",
  },

  // Credits & Legal
  credits: {
    developerName: "Darnoc",
    developerUrl: "https://darnoc.co.ke",
    text: "Website by Darnoc",
  },
};

export type SiteConfig = typeof siteConfig;
