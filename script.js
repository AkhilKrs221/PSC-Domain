const officialLinks = {
  notifications: "https://www.keralapsc.gov.in/notifications",
  schedule: "https://www.keralapsc.gov.in/examination-schedule",
  syllabus: "https://www.keralapsc.gov.in/syllabus",
  questions: "https://www.keralapsc.gov.in/previous-question-papers",
};

const exams = [
  {
    name: "LDC Main Examination",
    category: "Clerk",
    level: "10th",
    date: "2026-08-17",
    time: "10:30 AM - 12:30 PM",
    year: 2026,
    pdf: "assets/pdfs/syllabus-ldc-main-2026.pdf",
    syllabus: [
      "Kerala renaissance and social reform movements",
      "Indian freedom struggle and constitution basics",
      "Quantitative aptitude and mental ability",
      "Malayalam grammar and English usage",
      "Information technology and cyber awareness",
    ],
  },
  {
    name: "Police Constable",
    category: "Uniformed service",
    level: "plus-two",
    date: "2026-09-06",
    time: "1:30 PM - 3:15 PM",
    year: 2026,
    pdf: "assets/pdfs/syllabus-police-constable-2026.pdf",
    syllabus: [
      "Kerala geography, districts, rivers, and culture",
      "Indian history from ancient to modern",
      "General science and public health",
      "Arithmetic, reasoning, and data interpretation",
      "Special topic: Kerala Police Act and duties",
    ],
  },
  {
    name: "Secretariat Assistant",
    category: "Administrative",
    level: "degree",
    date: "2026-10-12",
    time: "10:30 AM - 12:15 PM",
    year: 2026,
    pdf: "assets/pdfs/syllabus-secretariat-assistant-2026.pdf",
    syllabus: [
      "Indian polity and governance",
      "Kerala history and administrative reforms",
      "Economics, planning, and social welfare",
      "Current affairs with Kerala focus",
      "English, Malayalam, reasoning, and maths",
    ],
  },
  {
    name: "Village Field Assistant",
    category: "Revenue",
    level: "10th",
    date: "2026-11-02",
    time: "1:30 PM - 3:15 PM",
    year: 2026,
    pdf: "assets/pdfs/syllabus-village-field-assistant-2026.pdf",
    syllabus: [
      "Kerala land revenue basics",
      "Geography of Kerala and India",
      "Maths and mental ability",
      "General knowledge and current affairs",
      "Malayalam, English, and computer basics",
    ],
  },
  {
    name: "Assistant Engineer Civil",
    category: "Engineering",
    level: "technical",
    date: "2026-11-28",
    time: "10:30 AM - 12:30 PM",
    year: 2026,
    pdf: "assets/pdfs/syllabus-assistant-engineer-civil-2026.pdf",
    syllabus: [
      "Structural analysis and RCC design",
      "Geotechnical and transportation engineering",
      "Water resources and environmental engineering",
      "Construction management and estimation",
      "General knowledge and current affairs",
    ],
  },
];

const previousQuestions = [
  {
    exam: "LDC Main Examination",
    year: 2025,
    pdf: "assets/pdfs/pyq-answers-2025-ldc-main.pdf",
    questions: [
      "Who is known as Kerala Gandhi? Answer: K. Kelappan.",
      "The river Periyar originates from which hills? Answer: Sivagiri Hills.",
      "If 18 workers finish a job in 12 days, 24 workers finish it in how many days? Answer: 9 days.",
    ],
  },
  {
    exam: "Police Constable",
    year: 2025,
    pdf: "assets/pdfs/pyq-answers-2025-police-constable.pdf",
    questions: [
      "The Kerala Police Academy is located at? Answer: Thrissur.",
      "Which article deals with equality before law? Answer: Article 14.",
      "Simplify 15% of 240. Answer: 36.",
    ],
  },
  {
    exam: "Secretariat Assistant",
    year: 2024,
    pdf: "assets/pdfs/pyq-answers-2024-secretariat-assistant.pdf",
    questions: [
      "Planning Commission was replaced by? Answer: NITI Aayog.",
      "The first Chief Minister of Kerala was? Answer: E. M. S. Namboodiripad.",
      "Choose the correct synonym of 'abundant'. Answer: Plentiful.",
    ],
  },
  {
    exam: "Village Field Assistant",
    year: 2023,
    pdf: "assets/pdfs/pyq-answers-2023-village-field-assistant.pdf",
    questions: [
      "Kerala Land Reforms Act came into force in? Answer: 1964.",
      "Which district has the largest area in Kerala? Answer: Palakkad.",
      "Find the average of 12, 18, 21, 25. Answer: 19.",
    ],
  },
];

const notifications = [
  {
    title: "LDC Main Examination - district wise recruitment",
    categoryNo: "214/2026",
    lastDate: "2026-07-31",
    eligibility: "SSLC pass or equivalent; age 18-36 with usual reservation relaxations.",
    link: officialLinks.notifications,
  },
  {
    title: "Police Constable - Armed Police Battalion",
    categoryNo: "226/2026",
    lastDate: "2026-08-14",
    eligibility: "Plus Two pass, required physical standards, and age 18-26 with eligible relaxations.",
    link: officialLinks.notifications,
  },
  {
    title: "Assistant Engineer Civil - Public Works Department",
    categoryNo: "241/2026",
    lastDate: "2026-08-28",
    eligibility: "Civil engineering degree or equivalent qualification recognized by the state.",
    link: officialLinks.notifications,
  },
];

const notePdfs = [
  {
    title: "Kerala PSC Core Notes",
    tag: "Foundation",
    pdf: "assets/pdfs/psc-domain-core-notes.pdf",
    topics: ["Kerala history", "Indian history", "Constitution", "General science", "Maths and reasoning"],
  },
  {
    title: "Kerala Police Act and Special Acts Notes",
    tag: "Special laws",
    pdf: "assets/pdfs/psc-domain-special-acts-notes.pdf",
    topics: ["Kerala Police Act", "BNS", "BNSS", "BSA", "POCSO", "RTI", "IT Act 2005"],
  },
  {
    title: "Science NCERT and SCERT Notes",
    tag: "Science",
    pdf: "assets/pdfs/psc-domain-science-notes.pdf",
    topics: ["Biology", "Physics", "Chemistry", "NCERT facts", "SCERT Kerala focus"],
  },
  {
    title: "Geography SCERT Notes",
    tag: "Geography",
    pdf: "assets/pdfs/psc-domain-geography-scert-notes.pdf",
    topics: ["Kerala geography", "Indian geography", "World basics", "Maps", "Environment"],
  },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentAffairs = [2026, 2025, 2024, 2023].flatMap((year) =>
  months.map((month, index) => ({
    year,
    month,
    title: `${month} ${year} Current Affairs`,
    pdf: "assets/pdfs/psc-domain-current-affairs-index.pdf",
    notes: [
      `${month} focus: revise Kerala government schemes, appointments, awards, sports, and science updates.`,
      `Create a one-page monthly fact sheet with dates, places, firsts, and persons in news.`,
      `Practice 25 PSC-style questions from ${month} ${year} before moving to the next month.`,
    ],
    id: `${year}-${String(index + 1).padStart(2, "0")}`,
  }))
);

const quizTopics = [
  { id: "current-affairs", label: "Current Affairs", usesYear: true, usesBoard: false },
  { id: "kerala-history", label: "Kerala History", usesYear: false, usesBoard: false },
  { id: "indian-history", label: "Indian History", usesYear: false, usesBoard: false },
  { id: "biology", label: "Biology", usesYear: false, usesBoard: true },
  { id: "physics", label: "Physics", usesYear: false, usesBoard: true },
  { id: "chemistry", label: "Chemistry", usesYear: false, usesBoard: true },
  { id: "geography-scert", label: "Geography SCERT", usesYear: false, usesBoard: false },
  { id: "constitution", label: "Indian Constitution", usesYear: false, usesBoard: false },
  { id: "bsa", label: "BSA", usesYear: false, usesBoard: false },
  { id: "bnss", label: "BNSS", usesYear: false, usesBoard: false },
  { id: "bns", label: "BNS", usesYear: false, usesBoard: false },
  { id: "kerala-police-act", label: "Kerala Police Act", usesYear: false, usesBoard: false },
  { id: "it-act", label: "IT Act 2005", usesYear: false, usesBoard: false },
  { id: "pocso", label: "POCSO Act", usesYear: false, usesBoard: false },
  { id: "rti", label: "Right to Information Act", usesYear: false, usesBoard: false },
  { id: "upcoming-special", label: "Upcoming Exam Special", usesYear: false, usesBoard: false },
];

const quizBank = {
  "current-affairs": [
    {
      q: "Chandrayaan-3 made India the first country to land near which region of the Moon?",
      options: ["South polar region", "North polar region", "Sea of Tranquility", "Far side equator"],
      answer: 0,
      note: "PSC current-affairs papers often ask space missions, firsts, and dates. Chandrayaan-3 soft-landed near the lunar south polar region in 2023.",
    },
    {
      q: "Which song won the Oscar for Best Original Song in 2023?",
      options: ["Naatu Naatu", "Jai Ho", "Kesariya", "Apna Bana Le"],
      answer: 0,
      note: "Awards from cinema, sports, literature, and science are repeated PSC current-affairs themes.",
    },
    {
      q: "The G20 Leaders' Summit hosted by India in 2023 was held in which city?",
      options: ["New Delhi", "Mumbai", "Bengaluru", "Hyderabad"],
      answer: 0,
      note: "International summits and host cities are common current-affairs questions.",
    },
    {
      q: "Who became the youngest undisputed World Chess Champion in 2024?",
      options: ["D. Gukesh", "R. Praggnanandhaa", "Magnus Carlsen", "Viswanathan Anand"],
      answer: 0,
      note: "Sports titles and Indian achievers are high-yield current-affairs facts.",
    },
    {
      q: "Which country won the ICC Men's T20 World Cup in 2024?",
      options: ["India", "Australia", "England", "South Africa"],
      answer: 0,
      note: "PSC exams frequently ask recent tournament winners and venues.",
    },
  ],
  "kerala-history": [
    {
      q: "Who is popularly known as Kerala Gandhi?",
      options: ["K. Kelappan", "A. K. Gopalan", "T. K. Madhavan", "Pattom Thanu Pillai"],
      answer: 0,
      note: "This is a repeatedly asked Kerala history fact in PSC-style exams.",
    },
    {
      q: "The Vaikom Satyagraha was mainly associated with which social issue?",
      options: ["Temple road access for oppressed classes", "Land tax abolition", "Salt tax protest", "Formation of linguistic states"],
      answer: 0,
      note: "Kerala renaissance questions often connect movements with their objectives.",
    },
    {
      q: "The Temple Entry Proclamation was issued in Travancore in which year?",
      options: ["1936", "1924", "1947", "1956"],
      answer: 0,
      note: "PSC questions often ask year-event matching from Kerala renaissance.",
    },
    {
      q: "Who founded the Sadhu Jana Paripalana Sangham?",
      options: ["Ayyankali", "Sree Narayana Guru", "Chattampi Swamikal", "Vakkom Moulavi"],
      answer: 0,
      note: "Associations founded by reformers are a core PYQ pattern.",
    },
    {
      q: "Kerala state was formed on which date?",
      options: ["1 November 1956", "15 August 1947", "26 January 1950", "1 May 1960"],
      answer: 0,
      note: "Kerala Piravi and state formation facts are foundational PSC GK.",
    },
  ],
  "indian-history": [
    {
      q: "Who was the first Governor-General of independent India?",
      options: ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
      answer: 0,
      note: "PSC papers regularly ask first office holders and transition-period facts.",
    },
    {
      q: "The Indian National Congress was founded in which year?",
      options: ["1885", "1857", "1905", "1919"],
      answer: 0,
      note: "Organisation-year questions are common in Indian history PYQs.",
    },
    {
      q: "Who founded the Indian National Army?",
      options: ["Mohan Singh", "Subhas Chandra Bose", "Rash Behari Bose", "Bhagat Singh"],
      answer: 0,
      note: "The INA was initially formed under Mohan Singh; Subhas Chandra Bose later reorganised and led it.",
    },
    {
      q: "The Dandi March was related to protest against which tax?",
      options: ["Salt tax", "Land revenue", "Income tax", "Customs duty"],
      answer: 0,
      note: "Movement-objective matching is a frequent PSC question type.",
    },
    {
      q: "The Government of India Act that introduced provincial autonomy was passed in which year?",
      options: ["1935", "1909", "1919", "1947"],
      answer: 0,
      note: "Constitutional development before independence is an important PSC area.",
    },
  ],
  biology: [
    {
      q: "Which part of the cell is known as the powerhouse of the cell?",
      options: ["Mitochondria", "Ribosome", "Nucleus", "Golgi body"],
      answer: 0,
      note: "NCERT and SCERT biology questions often test direct concept labels.",
    },
    {
      q: "Which pigment helps plants absorb light for photosynthesis?",
      options: ["Chlorophyll", "Haemoglobin", "Melanin", "Keratin"],
      answer: 0,
      note: "Photosynthesis is a repeated PSC science topic.",
    },
    {
      q: "Deficiency of Vitamin C causes which disease?",
      options: ["Scurvy", "Rickets", "Night blindness", "Beriberi"],
      answer: 0,
      note: "Vitamin-deficiency matching appears often in PSC exams.",
    },
    {
      q: "Which blood cells help in clotting?",
      options: ["Platelets", "Red blood cells", "Neurons", "Lymph"],
      answer: 0,
      note: "Human physiology fact questions are common in 10th and Plus Two level PSC papers.",
    },
    {
      q: "The functional unit of the kidney is called",
      options: ["Nephron", "Neuron", "Alveolus", "Villus"],
      answer: 0,
      note: "Organ-functional unit questions are classic PSC biology MCQs.",
    },
  ],
  physics: [
    {
      q: "The SI unit of force is",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      answer: 0,
      note: "Units and dimensions are frequent PSC physics questions.",
    },
    {
      q: "Which instrument is used to measure electric current?",
      options: ["Ammeter", "Voltmeter", "Barometer", "Thermometer"],
      answer: 0,
      note: "Instrument-use matching is a common PSC pattern.",
    },
    {
      q: "The speed of light is maximum in",
      options: ["Vacuum", "Water", "Glass", "Diamond"],
      answer: 0,
      note: "Basic optics concepts appear across PSC science papers.",
    },
    {
      q: "The phenomenon responsible for the blue colour of the sky is",
      options: ["Scattering", "Reflection", "Refraction", "Dispersion"],
      answer: 0,
      note: "Everyday science questions are strongly represented in PSC PYQs.",
    },
    {
      q: "A fuse wire is connected in which way in an electric circuit?",
      options: ["Series", "Parallel", "Both series and parallel", "It is not connected"],
      answer: 0,
      note: "Domestic electricity and safety devices are repeated SCERT topics.",
    },
  ],
  chemistry: [
    {
      q: "The pH value of a neutral solution at 25 degree Celsius is",
      options: ["7", "0", "1", "14"],
      answer: 0,
      note: "Acids, bases, and pH are standard PSC chemistry areas.",
    },
    {
      q: "Which gas is released when acids react with most metals?",
      options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
      answer: 0,
      note: "Reaction-product questions are common in school-level PSC science.",
    },
    {
      q: "The chemical formula of washing soda is",
      options: ["Na2CO3.10H2O", "NaHCO3", "CaOCl2", "CaCO3"],
      answer: 0,
      note: "Common chemical names and formulae are frequent PSC facts.",
    },
    {
      q: "Which element has the chemical symbol Fe?",
      options: ["Iron", "Fluorine", "Francium", "Fermium"],
      answer: 0,
      note: "Element-symbol questions are direct and high-yield.",
    },
    {
      q: "The process of coating iron with zinc is called",
      options: ["Galvanisation", "Alloying", "Electrolysis", "Vulcanisation"],
      answer: 0,
      note: "Corrosion prevention is a repeated chemistry topic.",
    },
  ],
  "geography-scert": [
    {
      q: "Which is the longest river in Kerala?",
      options: ["Periyar", "Bharathappuzha", "Pamba", "Chaliyar"],
      answer: 0,
      note: "Kerala river facts are common in SCERT-based PSC geography.",
    },
    {
      q: "The Western Ghats are also known as",
      options: ["Sahyadri", "Aravalli", "Satpura", "Vindhya"],
      answer: 0,
      note: "Physical geography names are frequent PSC questions.",
    },
    {
      q: "Which soil is best known for cotton cultivation in India?",
      options: ["Black soil", "Laterite soil", "Alluvial soil", "Mountain soil"],
      answer: 0,
      note: "Soil-crop matching is a standard geography MCQ type.",
    },
    {
      q: "The monsoon that gives most rainfall to Kerala is",
      options: ["South-West monsoon", "North-East monsoon", "Winter monsoon", "Retreating western monsoon"],
      answer: 0,
      note: "Kerala climate questions appear regularly in PSC exams.",
    },
    {
      q: "Silent Valley National Park is located in which district?",
      options: ["Palakkad", "Idukki", "Wayanad", "Pathanamthitta"],
      answer: 0,
      note: "National parks and districts are high-yield Kerala geography facts.",
    },
  ],
  constitution: [
    {
      q: "Which part of the Constitution of India contains Fundamental Rights?",
      options: ["Part III", "Part IV", "Part V", "Part IX"],
      answer: 0,
      note: "Part-article matching is one of the most repeated polity PYQ patterns.",
    },
    {
      q: "Article 14 of the Constitution deals with",
      options: ["Equality before law", "Freedom of speech", "Protection of life", "Right to education"],
      answer: 0,
      note: "Important articles are essential for PSC constitution questions.",
    },
    {
      q: "Directive Principles of State Policy are contained in which part?",
      options: ["Part IV", "Part III", "Part II", "Part VI"],
      answer: 0,
      note: "Fundamental Rights vs Directive Principles is a common comparison area.",
    },
    {
      q: "Who is called the guardian of the Constitution of India?",
      options: ["Supreme Court", "President", "Prime Minister", "Comptroller and Auditor General"],
      answer: 0,
      note: "Judiciary-related questions appear in LDC, degree, and uniformed-service exams.",
    },
    {
      q: "The Preamble of the Constitution was amended by which amendment?",
      options: ["42nd Amendment", "44th Amendment", "24th Amendment", "73rd Amendment"],
      answer: 0,
      note: "Major constitutional amendments are frequently asked.",
    },
  ],
  bsa: [
    {
      q: "BSA stands for",
      options: ["Bharatiya Sakshya Adhiniyam", "Bharatiya Suraksha Adhiniyam", "Bharatiya Samvidhan Adhiniyam", "Basic Security Act"],
      answer: 0,
      note: "New criminal law abbreviations are important for police and legal-topic PSC exams.",
    },
    {
      q: "Bharatiya Sakshya Adhiniyam primarily deals with",
      options: ["Law of evidence", "Substantive offences", "Police organisation", "Prison administration"],
      answer: 0,
      note: "Know the broad subject of each new code before memorising sections.",
    },
    {
      q: "Under evidence law, a fact admitted by the opposite party generally",
      options: ["Need not be proved", "Must always be proved twice", "Is never relevant", "Is treated as hearsay only"],
      answer: 0,
      note: "Evidence questions often test basic principles, not just section numbers.",
    },
    {
      q: "Electronic records are treated in evidence law as",
      options: ["Documentary evidence", "Oral evidence only", "Irrelevant material", "Police diary only"],
      answer: 0,
      note: "Digital evidence is a likely special-topic question area.",
    },
  ],
  bnss: [
    {
      q: "BNSS stands for",
      options: ["Bharatiya Nagarik Suraksha Sanhita", "Bharatiya Nyaya Suraksha Sanhita", "Bharatiya National Security Statute", "Basic Nagarik Service System"],
      answer: 0,
      note: "BNSS replaced the Code of Criminal Procedure framework.",
    },
    {
      q: "BNSS mainly deals with",
      options: ["Criminal procedure", "Evidence only", "Taxation", "Civil contracts"],
      answer: 0,
      note: "Procedure, investigation, arrest, bail, summons, and trial are BNSS focus areas.",
    },
    {
      q: "FIR is most closely related to which stage?",
      options: ["Beginning of criminal investigation", "Final judgment", "Execution of sentence", "Civil decree"],
      answer: 0,
      note: "PSC police exams often ask FIR, arrest, bail, and investigation basics.",
    },
    {
      q: "A summons is generally used to",
      options: ["Require appearance before authority or court", "Declare a person guilty", "Attach salary automatically", "Grant citizenship"],
      answer: 0,
      note: "Legal-process vocabulary appears in uniformed-service PYQs.",
    },
  ],
  bns: [
    {
      q: "BNS stands for",
      options: ["Bharatiya Nyaya Sanhita", "Bharatiya Nagarik Sanhita", "Bharatiya Naturalisation Statute", "Basic National Security Act"],
      answer: 0,
      note: "BNS replaced the Indian Penal Code framework.",
    },
    {
      q: "Bharatiya Nyaya Sanhita mainly defines",
      options: ["Offences and punishments", "Rules of evidence", "Civil court fees", "Election procedure"],
      answer: 0,
      note: "Know whether a legal topic is substantive law, procedure, or evidence.",
    },
    {
      q: "Theft is generally an offence against",
      options: ["Property", "Marriage only", "Public health only", "Election process only"],
      answer: 0,
      note: "Classification of offences is a common police-exam question type.",
    },
    {
      q: "Mens rea generally refers to",
      options: ["Guilty mind", "Physical evidence", "Police station diary", "Court fee"],
      answer: 0,
      note: "Basic criminal-law terms can appear in special-topic quizzes.",
    },
  ],
  "kerala-police-act": [
    {
      q: "The Kerala Police Act currently in force was enacted in which year?",
      options: ["2011", "1960", "1973", "2005"],
      answer: 0,
      note: "Kerala Police Act year and basic provisions are important for police recruitment.",
    },
    {
      q: "Janamaithri Suraksha Project is associated with",
      options: ["Community policing", "Forest conservation", "Land survey", "Public transport"],
      answer: 0,
      note: "Community policing is a repeated Kerala police topic.",
    },
    {
      q: "One major duty of police is to maintain",
      options: ["Public order", "Private profit", "University syllabus", "Bank interest rates"],
      answer: 0,
      note: "Duty-based questions are common in police special-topic sections.",
    },
    {
      q: "A beat system in policing is mainly intended for",
      options: ["Regular local patrol and public contact", "Court fee collection", "Road construction", "School examination"],
      answer: 0,
      note: "Operational policing vocabulary is useful for PSC police exams.",
    },
  ],
  "it-act": [
    {
      q: "The Information Technology Act was enacted in India in which year?",
      options: ["2000", "2005", "2011", "1995"],
      answer: 0,
      note: "The common exam wording may say IT Act; the enactment year is 2000, with later amendments.",
    },
    {
      q: "Which term is most closely associated with the IT Act?",
      options: ["Electronic records", "Agricultural tenancy", "Forest boundaries", "Motor vehicle fitness"],
      answer: 0,
      note: "Electronic records and digital signatures are basic IT Act areas.",
    },
    {
      q: "Unauthorised access to a computer resource is generally treated as",
      options: ["Cyber offence", "Civil marriage", "Land revenue entry", "Public holiday"],
      answer: 0,
      note: "Cyber safety questions appear in PSC general awareness and police exams.",
    },
    {
      q: "A digital signature is used mainly to ensure",
      options: ["Authentication of electronic records", "Rainfall measurement", "Soil fertility", "Blood pressure"],
      answer: 0,
      note: "Digital authentication is a high-yield IT Act concept.",
    },
  ],
  pocso: [
    {
      q: "POCSO Act is related to protection of",
      options: ["Children from sexual offences", "Senior citizens from eviction", "Consumers from unfair trade", "Animals from cruelty"],
      answer: 0,
      note: "Expansion and purpose of special Acts are common PSC questions.",
    },
    {
      q: "Under POCSO, a child means a person below",
      options: ["18 years", "16 years", "14 years", "21 years"],
      answer: 0,
      note: "Age limits in special Acts are important for PSC exams.",
    },
    {
      q: "POCSO cases are tried by",
      options: ["Special Courts", "Consumer Forums", "Election Tribunals", "Revenue Boards"],
      answer: 0,
      note: "Special court provisions are a likely question area.",
    },
    {
      q: "The identity of a child victim under POCSO should generally be",
      options: ["Protected from disclosure", "Published for awareness", "Displayed at police station", "Sent to media by default"],
      answer: 0,
      note: "Victim privacy is a core POCSO protection.",
    },
  ],
  rti: [
    {
      q: "The Right to Information Act came into force in India in which year?",
      options: ["2005", "2000", "2011", "1993"],
      answer: 0,
      note: "RTI year is a frequently asked PSC fact.",
    },
    {
      q: "The officer designated to provide information under RTI is called",
      options: ["Public Information Officer", "Returning Officer", "Village Officer", "Presiding Officer"],
      answer: 0,
      note: "RTI office-holder terms are important.",
    },
    {
      q: "The normal time limit for providing RTI information is",
      options: ["30 days", "7 days", "90 days", "180 days"],
      answer: 0,
      note: "Time limits are repeated in special-law MCQs.",
    },
    {
      q: "RTI applies primarily to",
      options: ["Public authorities", "Private family matters", "Personal diaries only", "Foreign embassies only"],
      answer: 0,
      note: "Scope questions are common in RTI quizzes.",
    },
  ],
  "upcoming-special": [
    {
      q: "For Kerala PSC one-time registration, candidates commonly use which portal?",
      options: ["Thulasi", "DigiLocker", "SWAYAM", "UMANG"],
      answer: 0,
      note: "PSC process questions are useful for upcoming-exam readiness.",
    },
    {
      q: "For LDC level exams, which section is usually essential?",
      options: ["Arithmetic and mental ability", "Advanced surgery", "Aircraft design", "Corporate merger law"],
      answer: 0,
      note: "LDC and 10th-level exams repeatedly test arithmetic, reasoning, GK, languages, and IT basics.",
    },
    {
      q: "For Police Constable recruitment, which extra area is especially important?",
      options: ["Physical efficiency and police-related Acts", "Only painting", "Only music theory", "Only accounting standards"],
      answer: 0,
      note: "Uniformed-service exams combine general topics with physical standards and police/law awareness.",
    },
    {
      q: "The safest source for final PSC exam dates and admit-card instructions is",
      options: ["Official Kerala PSC website", "Unverified social media post", "Random message forward", "Old coaching poster"],
      answer: 0,
      note: "Always verify exam schedules, confirmations, and hall-ticket instructions on the official portal.",
    },
  ],
};

let activeQuizTopic = "current-affairs";
let quizIndex = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${dateString}T00:00:00`));
}

function fillYearSelect(selectId, years) {
  const select = $(selectId);
  select.innerHTML = `<option value="all">All years</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
}

function renderSchedule() {
  const query = $("#schedule-search").value.toLowerCase();
  const level = $("#schedule-level").value;
  const filtered = exams.filter((exam) => {
    const matchesLevel = level === "all" || exam.level === level;
    const haystack = `${exam.name} ${exam.category} ${exam.level}`.toLowerCase();
    return matchesLevel && haystack.includes(query);
  });

  $("#schedule-list").innerHTML = filtered
    .map((exam) => {
      const date = new Date(`${exam.date}T00:00:00`);
      return `
        <article class="timeline-item">
          <div class="date-pill">
            <span>${date.toLocaleDateString("en-IN", { month: "short" })}</span>
            <strong>${date.getDate()}</strong>
            <span>${date.getFullYear()}</span>
          </div>
          <div>
            <span class="level-badge">${exam.level}</span>
            <h3>${exam.name}</h3>
            <p>${exam.category} exam scheduled for ${exam.time}.</p>
          </div>
          <button class="secondary-action" data-open-tab="syllabus">Syllabus PDF</button>
        </article>
      `;
    })
    .join("");
}

function renderSyllabus() {
  const year = $("#syllabus-year").value;
  const query = $("#syllabus-search").value.toLowerCase();
  const filtered = exams.filter((exam) => {
    const haystack = `${exam.name} ${exam.category} ${exam.syllabus.join(" ")}`.toLowerCase();
    return (year === "all" || String(exam.year) === year) && haystack.includes(query);
  });

  $("#syllabus-list").innerHTML = [
    `
      <article class="content-card official-card">
        <span class="card-meta">Official source</span>
        <h3>Complete Kerala PSC Syllabus Archive</h3>
        <p>Open the Kerala PSC website for the latest complete syllabus PDFs for all upcoming examinations.</p>
        <a class="pdf-link" href="${officialLinks.syllabus}" target="_blank" rel="noreferrer">Open official syllabus archive</a>
      </article>
    `,
    ...filtered.map(
      (exam) => `
      <article class="content-card">
        <span class="card-meta">${exam.year} | ${exam.category}</span>
        <h3>${exam.name}</h3>
        <ul class="topic-list">
          ${exam.syllabus.map((topic) => `<li>${topic}</li>`).join("")}
        </ul>
        <a class="pdf-link" href="${exam.pdf}" target="_blank" rel="noreferrer">Open syllabus PDF</a>
      </article>
    `
    ),
  ].join("");
}

function renderQuestions() {
  const year = $("#question-year").value;
  const query = $("#question-search").value.toLowerCase();
  const filtered = previousQuestions.filter((paper) => {
    const haystack = `${paper.exam} ${paper.questions.join(" ")}`.toLowerCase();
    return (year === "all" || String(paper.year) === year) && haystack.includes(query);
  });

  $("#question-list").innerHTML = [
    `
      <article class="content-card official-card">
        <span class="card-meta">Official source</span>
        <h3>All PSC Previous Question Papers</h3>
        <p>Use the official archive for the complete last 3 years of PSC question papers, then attach verified answer PDFs here.</p>
        <a class="pdf-link" href="${officialLinks.questions}" target="_blank" rel="noreferrer">Open official PYQ archive</a>
      </article>
    `,
    ...filtered.map(
      (paper) => `
      <article class="content-card">
        <span class="card-meta">${paper.year}</span>
        <h3>${paper.exam}</h3>
        <ol class="answer-list">
          ${paper.questions.map((item) => `<li>${item}</li>`).join("")}
        </ol>
        <a class="pdf-link" href="${paper.pdf}" target="_blank" rel="noreferrer">Open PYQ answer PDF</a>
      </article>
    `
    ),
  ].join("");
}

function renderNotesList() {
  const query = $("#notes-search").value.toLowerCase();
  const filtered = notePdfs.filter((note) => `${note.title} ${note.tag} ${note.topics.join(" ")}`.toLowerCase().includes(query));
  $("#notes-list").innerHTML = filtered
    .map(
      (note) => `
      <article class="content-card">
        <span class="card-meta">${note.tag}</span>
        <h3>${note.title}</h3>
        <ul class="topic-list">
          ${note.topics.map((topic) => `<li>${topic}</li>`).join("")}
        </ul>
        <a class="pdf-link" href="${note.pdf}" target="_blank" rel="noreferrer">Open notes PDF</a>
      </article>
    `
    )
    .join("");
}

function renderNotifications() {
  $("#notification-list").innerHTML = notifications
    .map(
      (notice) => `
      <article class="notice-card">
        <div>
          <span class="notice-meta">Category ${notice.categoryNo}</span>
          <h3>${notice.title}</h3>
          <p><strong>Eligibility:</strong> ${notice.eligibility}</p>
          <a class="official-link" href="${notice.link}" target="_blank" rel="noreferrer">Verify on official PSC website</a>
        </div>
        <div class="deadline">
          <strong>Last date</strong>
          <p>${formatDate(notice.lastDate)}</p>
        </div>
      </article>
    `
    )
    .join("");
}

function buildQuizItem(topicId, index) {
  const selectedTopic = quizTopics.find((topic) => topic.id === topicId);
  const bank = quizBank[topicId] || quizBank["current-affairs"];
  const base = bank[index % bank.length];
  const year = $("#quiz-year").value;
  const board = $("#quiz-board").value;
  const context = selectedTopic.usesYear ? `${year} current affairs` : selectedTopic.usesBoard ? `${board} science` : selectedTopic.label;
  const shift = index % base.options.length;
  const options = base.options.map((_, optionIndex) => base.options[(optionIndex + shift) % base.options.length]);
  const answer = (base.answer - shift + base.options.length) % base.options.length;

  return {
    q: base.q,
    options,
    answer,
    note: `${base.note} Selected mode: ${context}.`,
  };
}

function renderQuizControls() {
  $("#quiz-topic").innerHTML = quizTopics.map((topic) => `<option value="${topic.id}">${topic.label}</option>`).join("");
  $("#quiz-year").innerHTML = [2026, 2025, 2024, 2023, 2022].map((year) => `<option value="${year}">${year}</option>`).join("");
  $("#quiz-board").innerHTML = ["NCERT", "SCERT"].map((board) => `<option value="${board}">${board}</option>`).join("");
  $("#quiz-topic-pills").innerHTML = quizTopics
    .map((topic) => `<button class="quiz-type ${topic.id === activeQuizTopic ? "active" : ""}" data-quiz="${topic.id}">${topic.label}</button>`)
    .join("");
}

function syncQuizFilters() {
  const selectedTopic = quizTopics.find((topic) => topic.id === activeQuizTopic);
  $("#quiz-topic").value = activeQuizTopic;
  $("#quiz-year").hidden = !selectedTopic.usesYear;
  $("#quiz-board").hidden = !selectedTopic.usesBoard;
  $$(".quiz-type").forEach((button) => button.classList.toggle("active", button.dataset.quiz === activeQuizTopic));
}

function renderQuiz() {
  syncQuizFilters();
  const item = buildQuizItem(activeQuizTopic, quizIndex);
  $("#quiz-card").innerHTML = `
    <span class="card-meta">Infinite question ${quizIndex + 1}</span>
    <h3>${item.q}</h3>
    ${item.options.map((option, index) => `<button class="quiz-option" data-answer="${index}">${option}</button>`).join("")}
    <div class="answer-reveal" id="answer-reveal">${item.note}</div>
  `;
}

function renderCurrentAffairs() {
  const year = $("#ca-year").value;
  const month = $("#ca-month").value;
  const filtered = currentAffairs.filter((item) => {
    return (year === "all" || String(item.year) === year) && (month === "all" || item.month === month);
  });

  $("#ca-list").innerHTML = filtered
    .map(
      (item) => `
      <article class="content-card">
        <span class="card-meta">${item.month} ${item.year}</span>
        <h3>${item.title}</h3>
        <ul class="topic-list">
          ${item.notes.map((note) => `<li>${note}</li>`).join("")}
        </ul>
        <a class="pdf-link" href="${item.pdf}" target="_blank" rel="noreferrer">Open current affairs PDF index</a>
      </article>
    `
    )
    .join("");
}

function setDashboardStats() {
  const sortedExams = [...exams].sort((a, b) => new Date(a.date) - new Date(b.date));
  const sortedNotices = [...notifications].sort((a, b) => new Date(a.lastDate) - new Date(b.lastDate));
  $("#exam-count").textContent = exams.length;
  $("#notification-count").textContent = notifications.length;
  $("#next-exam-name").textContent = sortedExams[0].name;
  $("#next-exam-date").textContent = formatDate(sortedExams[0].date);
  $("#next-deadline-name").textContent = sortedNotices[0].title;
  $("#next-deadline-date").textContent = formatDate(sortedNotices[0].lastDate);
  $("#today-focus").textContent = `Revise ${sortedExams[0].syllabus[0].toLowerCase()} and complete one infinite quiz set before ${sortedExams[0].name}.`;
}

function activateTab(tabId) {
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabId));
  $$(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === tabId));
  window.location.hash = tabId;
}

function bindEvents() {
  $$(".tab").forEach((tab) => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));
  $$("[data-open-tab]").forEach((button) => button.addEventListener("click", () => activateTab(button.dataset.openTab)));

  $("#schedule-search").addEventListener("input", renderSchedule);
  $("#schedule-level").addEventListener("change", renderSchedule);
  $("#syllabus-year").addEventListener("change", renderSyllabus);
  $("#syllabus-search").addEventListener("input", renderSyllabus);
  $("#question-year").addEventListener("change", renderQuestions);
  $("#question-search").addEventListener("input", renderQuestions);
  $("#notes-search").addEventListener("input", renderNotesList);
  $("#ca-year").addEventListener("change", renderCurrentAffairs);
  $("#ca-month").addEventListener("change", renderCurrentAffairs);

  $("#quiz-topic").addEventListener("change", () => {
    activeQuizTopic = $("#quiz-topic").value;
    quizIndex = 0;
    renderQuiz();
  });
  $("#quiz-year").addEventListener("change", renderQuiz);
  $("#quiz-board").addEventListener("change", renderQuiz);
  $("#quiz-topic-pills").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-quiz]");
    if (!button) return;
    activeQuizTopic = button.dataset.quiz;
    quizIndex = 0;
    renderQuiz();
  });

  $("#quiz-card").addEventListener("click", (event) => {
    const option = event.target.closest(".quiz-option");
    if (!option) return;
    const item = buildQuizItem(activeQuizTopic, quizIndex);
    $$(".quiz-option").forEach((button) => {
      const isCorrect = Number(button.dataset.answer) === item.answer;
      button.classList.toggle("correct", isCorrect);
      button.classList.toggle("wrong", button === option && !isCorrect);
    });
    $("#answer-reveal").classList.add("visible");
  });

  $("#show-answer").addEventListener("click", () => {
    const item = buildQuizItem(activeQuizTopic, quizIndex);
    $$(".quiz-option").forEach((button) => button.classList.toggle("correct", Number(button.dataset.answer) === item.answer));
    $("#answer-reveal").classList.add("visible");
  });

  $("#next-question").addEventListener("click", () => {
    quizIndex += 1;
    renderQuiz();
  });

  $("#prev-question").addEventListener("click", () => {
    quizIndex = Math.max(0, quizIndex - 1);
    renderQuiz();
  });
}

function init() {
  fillYearSelect("#syllabus-year", [2026, 2025, 2024, 2023]);
  fillYearSelect("#question-year", [2025, 2024, 2023]);
  fillYearSelect("#ca-year", [2026, 2025, 2024, 2023]);
  $("#ca-month").innerHTML = `<option value="all">All months</option>${months.map((month) => `<option value="${month}">${month}</option>`).join("")}`;

  renderQuizControls();
  setDashboardStats();
  renderSchedule();
  renderSyllabus();
  renderQuestions();
  renderNotesList();
  renderNotifications();
  renderQuiz();
  renderCurrentAffairs();
  bindEvents();

  const initialTab = window.location.hash.replace("#", "");
  if (initialTab && $(`#${initialTab}`)) activateTab(initialTab);
}

init();
