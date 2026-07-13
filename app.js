const officialLinks = {
  notifications: "https://www.keralapsc.gov.in/notifications",
  schedule: "https://www.keralapsc.gov.in/examinations",
  syllabus: "https://www.keralapsc.gov.in/syllabus1",
  questions: "https://www.keralapsc.gov.in/previous-question-papers",
};

const externalSources = {
  freeNotes: "https://thesupernotes.com/free-psc-notes-in-kerala/",
  juneCa: "https://www.keralapscgk.com/2026/06/download-free-malayalam-current-affairs-pdf-june-2026.html",
};

const uploadPath = "assets/uploads/";

const uploadedPdfs = [
  ["Kerala History Quiz", "Kerala History", "kerala_history_quiz.pdf", ["കേരള ചരിത്രം", "നവോത്ഥാനം", "PSC ആവർത്തന ചോദ്യങ്ങൾ"]],
  ["Kerala History MCQ", "Kerala History", "Kerala_History_MCQ.pdf", ["കേരള ചരിത്രം", "സംഭവ വർഷങ്ങൾ", "പ്രമുഖ വ്യക്തികൾ"]],
  ["Kerala History MCQs", "Kerala History", "kerala_history_mcqs.pdf", ["കേരള ചരിത്രം", "മുൻവർഷ ചോദ്യ മാതൃക"]],
  ["Kerala History MCQs - Set 2", "Kerala History", "kerala_history_mcqs (2).pdf", ["കേരള ചരിത്രം", "മാരത്തോൺ റിവിഷൻ"]],
  ["KERALA HISTORY MARATHON", "Kerala History", "KERALA HISTORY -MARATHON.pdf", ["കേരള ചരിത്രം", "മുഴുവൻ റിവിഷൻ", "പ്രധാന PSC facts"]],
  ["Malayalam History MCQs", "History Malayalam", "malayalam_history_mcqs.pdf", ["മലയാളം", "ചരിത്രം", "PSC MCQ"]],
  ["Indian History MCQ", "Indian History", "indian_history_mcq.pdf", ["ഇന്ത്യൻ ചരിത്രം", "സ്വാതന്ത്ര്യ സമരം", "ദേശീയ പ്രസ്ഥാനം"]],
  ["Indian History Quiz", "Indian History", "indian_history_quiz.pdf", ["ഇന്ത്യൻ ചരിത്രം", "MCQ practice"]],
  ["Indian History Exam Questions", "Indian History", "Indian_History_Exam_Questions.pdf", ["മുൻവർഷ ചോദ്യം", "ചരിത്രം"]],
  ["ഇന്ത്യൻ ചരിത്രം FULL REVISION", "Indian History", "ഇന്ത്യൻ  ചരിത്രം FULL REVISION (2).pdf", ["ഇന്ത്യൻ ചരിത്രം", "Malayalam notes", "Full revision"]],
  ["World History MCQ", "World History", "WORLD HISTORY -MCQ.pdf", ["World history", "PSC MCQ", "Revision"]],
  ["World History Revision Test", "World History", "world_history_revision_test.pdf", ["World history", "Revision test", "Questions"]],
  ["December 2025 Current Affairs 50 MCQs", "Current Affairs", "December_2025_CA_50_MCQs.pdf", ["ഡിസംബർ 2025", "Current affairs", "MCQ"]],
  ["February CA 2026 Notes", "Current Affairs", "FEBRUARY CA 2026.pdf", ["ഫെബ്രുവരി 2026", "Malayalam current affairs"]],
  ["February CA 2026 Quiz", "Current Affairs", "february_ca_2026_quiz.pdf", ["ഫെബ്രുവരി 2026", "Current affairs quiz"]],
  ["March CA 2026 Notes", "Current Affairs", "MARCH CA 2026.pdf", ["മാർച്ച് 2026", "Malayalam current affairs"]],
  ["March CA 2026 MCQ", "Current Affairs", "march_ca_2026_mcq.pdf", ["മാർച്ച് 2026", "Current affairs quiz"]],
  ["April CA 2026 Notes", "Current Affairs", "APRIL CA 2026.pdf", ["ഏപ്രിൽ 2026", "Malayalam current affairs"]],
  ["April 2026 Current Affairs Quiz", "Current Affairs", "April_2026_Current_Affairs_Quiz.pdf", ["ഏപ്രിൽ 2026", "Current affairs quiz"]],
  ["June 2026 Current Affairs", "Current Affairs", "Current Affairs Jun 2026.pdf", ["ജൂൺ 2026", "Malayalam current affairs", "PSC facts"]],
  ["Current Affairs - Current Posts", "Current Affairs", "CA (നിലവിലെ പദവികൾ ).pdf", ["നിലവിലെ പദവികൾ", "Appointments", "Kerala PSC"]],
  ["Biology 1", "Science", "BIOLOGY 1.pdf", ["Biology", "NCERT", "SCERT"]],
  ["Physics Prelims", "Science", "PHYSICS -1 (PRELIMS).pdf", ["Physics", "Prelims", "Science"]],
  ["Physics MCQs", "Science", "physics_mcqs.pdf", ["Physics", "MCQ", "PSC"]],
  ["Physics Prelims MCQ", "Science", "physics_prelims_mcq.html.pdf", ["Physics", "Prelims", "MCQ"]],
  ["Constitution Part II with Annotations", "Constitution", "PRELIMS__Constitution______Part__II_with_anno.pdf", ["Indian Constitution", "Prelims", "Annotations"]],
  ["BNS MCQ Compiled", "Special Laws", "BNS_MCQ_Compiled.pdf", ["BNS", "MCQ", "Criminal law"]],
  ["BNS MCQ 1 Answers", "Special Laws", "BNS_MCQ_1 Answers.pdf", ["BNS", "Answers", "MCQ"]],
  ["BNS MCQ 2", "Special Laws", "BNS -MCQ 2.pdf", ["BNS", "Malayalam", "PSC law"]],
  ["BNSS MCQ Malayalam", "Special Laws", "BNSS_MCQ_Malayalam.pdf", ["BNSS", "Malayalam", "MCQ"]],
  ["BNSS Arrest of Persons MCQs", "Special Laws", "BNSS_Arrest_of_Persons_MCQs.pdf", ["BNSS", "Arrest", "Police exams"]],
  ["BNSS Statement Type MCQs", "Special Laws", "BNSS_Statement_Type_MCQs.pdf", ["BNSS", "Statements", "MCQ"]],
  ["BNSS Special Topic MCQs", "Special Laws", "BNSS_Special_Topic_MCQs.pdf", ["BNSS", "Special topics", "Exam focus"]],
  ["Kerala Health Scheme MCQ", "Special Topics", "KERALA HEALTH SCHEME MCQ.pdf", ["Kerala schemes", "Health", "MCQ"]],
  ["Maths BODMAS Rule", "Maths", "MATHS - BODMAS RULE.pdf", ["BODMAS", "ഗണിതം", "PSC basics"]],
  ["Math Average Malayalam", "Maths", "math_average_malayalam.pdf", ["ശരാശരി", "Malayalam maths"]],
  ["Maths Series", "Maths", "Maths - ശ്രേണികൾ.pdf", ["ശ്രേണികൾ", "PSC maths"]],
  ["Numbers and Basic Operations", "Maths", "MATHS_സംഖ്യകൾ_അടിസ്ഥാന_ക്രിയകൾ.pdf", ["സംഖ്യകൾ", "അടിസ്ഥാന ക്രിയകൾ", "Maths"]],
  ["Percentage MCQ Malayalam", "Maths", "percentage_mcq_malayalam.pdf", ["Percentage", "Malayalam", "MCQ"]],
  ["Profit and Loss Malayalam 30 MCQ", "Maths", "profit_and_loss_malayalam_30mcq.pdf", ["ലാഭനഷ്ടം", "30 MCQ", "Maths"]],
  ["Maths Interest MCQ Explanations", "Maths", "maths_interest_mcq_explanations (2).pdf", ["പലിശ", "ഗണിതം", "explanations"]],
  ["Maths Mental Ability 200 Questions", "Maths", "Maths_Mental_Ability_200_Questions.pdf", ["mental ability", "200 questions", "reasoning"]],
  ["Math Questions With Explanations", "Maths", "math_questions_with_explanations.pdf", ["ഗണിതം", "explanations"]],
  ["English Vocabulary", "English", "English -Vocabulary.pdf", ["vocabulary", "English", "PSC"]],
  ["10th Level Marked Vocabulary - Part 1", "English", "10TH_LEVEL_MARKED_VOCABSPEDIA_part1.pdf", ["10th level", "vocabulary", "marked PDF", "Part 1"]],
  ["10th Level Marked Vocabulary - Part 2", "English", "10TH_LEVEL_MARKED_VOCABSPEDIA_part2.pdf", ["10th level", "vocabulary", "marked PDF", "Part 2"]],
].map(([title, tag, file, topics]) => ({ title, tag, pdf: `${uploadPath}${file}`, topics }));

const exams = [
  ["LDC Main Examination", "Clerk", "10th", "2026-08-17", "10:30 AM - 12:30 PM", "assets/pdfs/syllabus-ldc-main-2026.pdf", ["Kerala renaissance and social reform movements", "Indian freedom struggle and constitution basics", "Quantitative aptitude and mental ability", "Malayalam grammar and English usage", "Information technology and cyber awareness"]],
  ["Police Constable", "Uniformed service", "plus-two", "2026-09-06", "1:30 PM - 3:15 PM", "assets/pdfs/syllabus-police-constable-2026.pdf", ["Kerala geography, districts, rivers, and culture", "Indian history from ancient to modern", "General science and public health", "Arithmetic, reasoning, and data interpretation", "Special topic: Kerala Police Act and duties"]],
  ["Secretariat Assistant", "Administrative", "degree", "2026-10-12", "10:30 AM - 12:15 PM", "assets/pdfs/syllabus-secretariat-assistant-2026.pdf", ["Indian polity and governance", "Kerala history and administrative reforms", "Economics, planning, and social welfare", "Current affairs with Kerala focus", "English, Malayalam, reasoning, and maths"]],
  ["Village Field Assistant", "Revenue", "10th", "2026-11-02", "1:30 PM - 3:15 PM", "assets/pdfs/syllabus-village-field-assistant-2026.pdf", ["Kerala land revenue basics", "Geography of Kerala and India", "Maths and mental ability", "General knowledge and current affairs", "Malayalam, English, and computer basics"]],
  ["Assistant Engineer Civil", "Engineering", "technical", "2026-11-28", "10:30 AM - 12:30 PM", "assets/pdfs/syllabus-assistant-engineer-civil-2026.pdf", ["Structural analysis and RCC design", "Geotechnical and transportation engineering", "Water resources and environmental engineering", "Construction management and estimation", "General knowledge and current affairs"]],
].map(([name, category, level, date, time, pdf, syllabus]) => ({ name, category, level, date, time, year: 2026, pdf, syllabus }));

const previousQuestions = [
  ["LDC Main Examination", 2025, "assets/pdfs/pyq-answers-2025-ldc-main.pdf", ["Who is known as Kerala Gandhi? Answer: K. Kelappan.", "The river Periyar originates from which hills? Answer: Sivagiri Hills.", "If 18 workers finish a job in 12 days, 24 workers finish it in how many days? Answer: 9 days."]],
  ["Police Constable", 2025, "assets/pdfs/pyq-answers-2025-police-constable.pdf", ["The Kerala Police Academy is located at? Answer: Thrissur.", "Which article deals with equality before law? Answer: Article 14.", "Simplify 15% of 240. Answer: 36."]],
  ["Secretariat Assistant", 2024, "assets/pdfs/pyq-answers-2024-secretariat-assistant.pdf", ["Planning Commission was replaced by? Answer: NITI Aayog.", "The first Chief Minister of Kerala was? Answer: E. M. S. Namboodiripad.", "Choose the correct synonym of abundant. Answer: Plentiful."]],
  ["Village Field Assistant", 2023, "assets/pdfs/pyq-answers-2023-village-field-assistant.pdf", ["Kerala Land Reforms Act came into force in? Answer: 1964.", "Which district has the largest area in Kerala? Answer: Palakkad.", "Find the average of 12, 18, 21, 25. Answer: 19."]],
  ["Official PSC Previous Question Papers - Last 3 Years", 2026, officialLinks.questions, ["Official Kerala PSC archive for every exam paper.", "Use this source for the complete last-three-year PYQ list.", "Download and verify final answer keys from official sources."]],
  ["Kerala History Uploaded PYQ Practice Pack", 2026, `${uploadPath}KERALA HISTORY -MARATHON.pdf`, ["കേരള ചരിത്രം, നവോത്ഥാനം, സാമൂഹിക പരിഷ്കരണ പ്രസ്ഥാനങ്ങൾ.", "Related PDFs are available in Notes.", "Use with the Kerala History infinite quiz tab."]],
  ["BNS and BNSS Uploaded Answer Practice Pack", 2026, `${uploadPath}BNS_MCQ_1 Answers.pdf`, ["BNS answer practice PDF.", "BNSS arrest, statement, and special topic PDFs are in Notes.", "Useful for police and legal-topic upcoming exams."]],
].map(([exam, year, pdf, questions]) => ({ exam, year, pdf, questions }));

const notifications = [
  ["Extra Ordinary Gazette dated 30/06/2026", "39/2026 to 72/2026", "2026-08-05"],
  ["Extra Ordinary Gazette dated 30/05/2026", "23/2026 to 38/2026", "2026-07-01"],
  ["Extra Ordinary Gazette dated 30/04/2026", "19/2026 to 22/2026", "2026-06-03"],
  ["Extra Ordinary Gazette dated 31/03/2026", "13/2026 to 18/2026", "2026-04-29"],
  ["Extra Ordinary Gazette dated 28/02/2026", "02/2026 to 12/2026", "2026-04-01"],
].map(([title, categoryNo, lastDate]) => ({
  title,
  categoryNo,
  lastDate,
  eligibility: "Official Kerala PSC notification batch. Open the source page to confirm post-wise qualification, age limit, district details, amendments, and final application instructions.",
  link: officialLinks.notifications,
}));

const notePdfs = [
  { title: "Official Kerala PSC Syllabus PDFs", tag: "Official source", pdf: officialLinks.syllabus, source: officialLinks.syllabus, topics: ["എല്ലാ upcoming exams syllabus", "Kerala PSC official archive", "Download latest PDF from source"] },
  { title: "Official Kerala PSC Previous Question Papers", tag: "Official source", pdf: officialLinks.questions, source: officialLinks.questions, topics: ["Last 3 years PYQ", "Question paper PDF archive", "Official Kerala PSC source"] },
  { title: "Official Kerala PSC Notifications", tag: "Official source", pdf: officialLinks.notifications, source: officialLinks.notifications, topics: ["Notification bar source", "Category number", "Last date and eligibility"] },
  { title: "External Free PSC Notes Directory", tag: "External source", pdf: externalSources.freeNotes, source: externalSources.freeNotes, topics: ["Third-party notes link", "Open source page before downloading", "Permission depends on original publisher"] },
  { title: "June 2026 Malayalam Current Affairs Source", tag: "External source", pdf: externalSources.juneCa, source: externalSources.juneCa, topics: ["Malayalam current affairs", "Third-party source link", "Download from publisher page"] },
  { title: "Kerala PSC Core Notes", tag: "Foundation", pdf: "assets/pdfs/psc-domain-core-notes.pdf", topics: ["Kerala history", "Indian history", "Constitution", "General science", "Maths and reasoning"] },
  { title: "Kerala Police Act and Special Acts Notes", tag: "Special laws", pdf: "assets/pdfs/psc-domain-special-acts-notes.pdf", topics: ["Kerala Police Act", "BNS", "BNSS", "BSA", "POCSO", "RTI", "IT Act 2005"] },
  { title: "Science NCERT and SCERT Notes", tag: "Science", pdf: "assets/pdfs/psc-domain-science-notes.pdf", topics: ["Biology", "Physics", "Chemistry", "NCERT facts", "SCERT Kerala focus"] },
  { title: "Geography SCERT Notes", tag: "Geography", pdf: "assets/pdfs/psc-domain-geography-scert-notes.pdf", topics: ["Kerala geography", "Indian geography", "World basics", "Maps", "Environment"] },
  ...uploadedPdfs,
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentAffairsPdfOverrides = {
  "2025-12": `${uploadPath}December_2025_CA_50_MCQs.pdf`,
  "2026-02": `${uploadPath}FEBRUARY CA 2026.pdf`,
  "2026-03": `${uploadPath}MARCH CA 2026.pdf`,
  "2026-04": `${uploadPath}APRIL CA 2026.pdf`,
  "2026-06": `${uploadPath}Current Affairs Jun 2026.pdf`,
};

const currentAffairs = [2026, 2025, 2024, 2023].flatMap((year) =>
  months.map((month, index) => ({
    year,
    month,
    title: `${month} ${year} Current Affairs`,
    pdf: currentAffairsPdfOverrides[`${year}-${String(index + 1).padStart(2, "0")}`] || "assets/pdfs/psc-domain-current-affairs-index.pdf",
    notes: [`${month} focus: Kerala schemes, appointments, awards, sports, science, and international updates.`, `Practice a PSC-style quiz from the Infinite Quizzes tab for ${year}.`, "Verify latest facts from official and trusted monthly PDF sources."],
  }))
);

const quizTopics = [
  ["current-affairs", "Current Affairs", true, false],
  ["kerala-history", "Kerala History", false, false],
  ["indian-history", "Indian History", false, false],
  ["malayalam-history", "Malayalam History", false, false],
  ["biology", "Biology", false, true],
  ["physics", "Physics", false, true],
  ["chemistry", "Chemistry", false, true],
  ["geography-scert", "Geography SCERT", false, false],
  ["constitution", "Indian Constitution", false, false],
  ["bsa", "BSA", false, false],
  ["bnss", "BNSS", false, false],
  ["bns", "BNS", false, false],
  ["kerala-police-act", "Kerala Police Act", false, false],
  ["it-act", "IT Act 2005", false, false],
  ["pocso", "POCSO Act", false, false],
  ["rti", "Right to Information Act", false, false],
  ["maths", "Maths and Mental Ability", false, false],
  ["english-vocabulary", "English Vocabulary", false, false],
  ["upcoming-special", "Upcoming Exam Special", false, false],
].map(([id, label, usesYear, usesBoard]) => ({ id, label, usesYear, usesBoard }));

const quizBank = {
  "current-affairs": [["The year selector in this quiz is used for which subject?", ["Current affairs", "Chemistry only", "Kerala Police Act only", "Maths only"], 0, "Choose the year before starting current affairs practice."], ["PSC current affairs questions often ask about", ["appointments, awards, sports and schemes", "only algebra", "only road signs", "only spelling"], 0, "Monthly PDF revision helps with one-line fact questions."]],
  "kerala-history": [["Who is known as Kerala Gandhi?", ["K. Kelappan", "Ayyankali", "Poykayil Appachan", "Sahodaran Ayyappan"], 0, "Kerala renaissance leaders are repeated PSC topics."], ["Vaikom Satyagraha is associated with", ["temple road access movement", "space mission", "river dam", "banking reform"], 0, "Social reform movements are high-yield."]],
  "indian-history": [["The Indian National Congress was founded in", ["1885", "1857", "1905", "1947"], 0, "Founding years and sessions are common history facts."], ["The Quit India Movement began in", ["1942", "1930", "1919", "1909"], 0, "Freedom struggle chronology is important."]],
  "malayalam-history": [["Malayalam belongs to which language family?", ["Dravidian", "Indo-European", "Sino-Tibetan", "Austroasiatic"], 0, "Language history can appear in Malayalam/history sections."]],
  biology: [["The functional unit of kidney is", ["Nephron", "Neuron", "Alveolus", "Villus"], 0, "Organ-functional unit questions are classic PSC biology MCQs."], ["Photosynthesis mainly occurs in", ["Chloroplast", "Mitochondria", "Ribosome", "Nucleus"], 0, "NCERT and SCERT biology questions often test direct concept labels."]],
  physics: [["SI unit of force is", ["Newton", "Joule", "Watt", "Pascal"], 0, "Units and instruments are repeated in PSC physics."], ["The device used to measure electric current is", ["Ammeter", "Voltmeter", "Barometer", "Hygrometer"], 0, "Know common measuring instruments."]],
  chemistry: [["pH value less than 7 indicates", ["Acidic solution", "Neutral solution", "Basic solution", "Pure water only"], 0, "Acids, bases, and pH are standard PSC chemistry areas."], ["Rusting of iron is mainly", ["Oxidation", "Neutralisation", "Sublimation", "Distillation"], 0, "Corrosion prevention is a repeated chemistry topic."]],
  "geography-scert": [["The largest district in Kerala by area is", ["Palakkad", "Alappuzha", "Ernakulam", "Kottayam"], 0, "Kerala geography facts are frequent."], ["The Western Ghats are also known as", ["Sahyadri", "Aravalli", "Vindhya", "Satpura"], 0, "SCERT geography asks direct map and range facts."]],
  constitution: [["Article 14 of the Indian Constitution deals with", ["Equality before law", "Right to property", "Finance commission", "Official language only"], 0, "Important articles are essential for PSC constitution questions."], ["The Constitution of India came into force on", ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"], 0, "Dates around the Constitution are repeated."]],
  bsa: [["Bharatiya Sakshya Adhiniyam is mainly related to", ["Evidence law", "Substantive offences", "Income tax", "Motor vehicles"], 0, "BSA replaced the Indian Evidence Act framework."], ["Electronic evidence is most closely connected with", ["Digital records", "Land tax", "Forest produce", "Public holidays"], 0, "Evidence law now heavily tests electronic records."]],
  bnss: [["BNSS mainly deals with", ["Criminal procedure", "Evidence only", "Civil marriage", "Income tax"], 0, "BNSS replaced the Code of Criminal Procedure framework."], ["Arrest procedure questions belong mainly to", ["BNSS", "BSA only", "RTI only", "POCSO only"], 0, "Police exams commonly ask arrest and procedure."]],
  bns: [["BNS replaced which old criminal law framework?", ["Indian Penal Code", "Indian Evidence Act", "CrPC", "Companies Act"], 0, "BNS is the substantive criminal law code."], ["Mens rea generally means", ["Guilty mind", "Police diary", "Court fee", "Digital signature"], 0, "Basic criminal-law terms appear in special topics."]],
  "kerala-police-act": [["The Kerala Police Act currently in force was enacted in", ["2011", "1960", "1973", "2005"], 0, "Year and basic provisions are important for police recruitment."], ["Janamaithri Suraksha Project is associated with", ["Community policing", "Forest conservation", "Land survey", "Public transport"], 0, "Community policing is a repeated Kerala police topic."]],
  "it-act": [["The Information Technology Act was enacted in India in", ["2000", "2005", "2011", "1995"], 0, "The user-facing topic may say 2005, but the IT Act is 2000 with later amendments."], ["Digital signature is used mainly for", ["Authentication of electronic records", "Rainfall measurement", "Soil testing", "Blood pressure"], 0, "Digital authentication is a high-yield IT Act concept."]],
  pocso: [["POCSO Act protects", ["children from sexual offences", "senior citizens from eviction", "consumers only", "animals only"], 0, "Purpose and age limits are common PSC questions."], ["Under POCSO, a child means a person below", ["18 years", "16 years", "14 years", "21 years"], 0, "Age limits in special Acts are important."]],
  rti: [["The RTI Act came into force in", ["2005", "2000", "2011", "1993"], 0, "RTI year is a frequently asked PSC fact."], ["The normal RTI time limit is", ["30 days", "7 days", "90 days", "180 days"], 0, "Time limits are repeated in special-law MCQs."]],
  maths: [["If 15% of a number is 45, the number is", ["300", "150", "250", "450"], 0, "Percentage basics are common in prelims."], ["Average of 10, 20, and 30 is", ["20", "30", "15", "60"], 0, "Average questions should be solved quickly."]],
  "english-vocabulary": [["Choose the synonym of abundant.", ["Plentiful", "Scarce", "Tiny", "Weak"], 0, "Vocabulary PDFs support English section revision."]],
  "upcoming-special": [["The safest source for final PSC exam dates is", ["Official Kerala PSC website", "Unverified social media post", "Old coaching poster", "Random message forward"], 0, "Always verify schedules and hall-ticket instructions on the official portal."]],
};

let activeQuizTopic = "current-affairs";
let quizIndex = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
const formatDate = (dateString) => new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${dateString}T00:00:00`));

function fillYearSelect(selectId, years) {
  $(selectId).innerHTML = `<option value="all">All years</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
}

function renderSchedule() {
  const query = $("#schedule-search").value.toLowerCase();
  const level = $("#schedule-level").value;
  const filtered = exams.filter((exam) => (level === "all" || exam.level === level) && `${exam.name} ${exam.category} ${exam.level}`.toLowerCase().includes(query));
  $("#schedule-list").innerHTML = filtered.map((exam) => {
    const date = new Date(`${exam.date}T00:00:00`);
    return `<article class="timeline-item"><div class="date-pill"><span>${date.toLocaleDateString("en-IN", { month: "short" })}</span><strong>${date.getDate()}</strong><span>${date.getFullYear()}</span></div><div><span class="level-badge">${exam.level}</span><h3>${exam.name}</h3><p>${exam.category} exam scheduled for ${exam.time}.</p></div><button class="secondary-action" data-open-tab="syllabus">Syllabus PDF</button></article>`;
  }).join("");
}

function renderSyllabus() {
  const year = $("#syllabus-year").value;
  const query = $("#syllabus-search").value.toLowerCase();
  const filtered = exams.filter((exam) => (year === "all" || String(exam.year) === year) && `${exam.name} ${exam.category} ${exam.syllabus.join(" ")}`.toLowerCase().includes(query));
  $("#syllabus-list").innerHTML = [`<article class="content-card official-card"><span class="card-meta">Official source</span><h3>Complete Kerala PSC Syllabus Archive</h3><p>Open the Kerala PSC website for the latest complete syllabus PDFs for all upcoming examinations.</p><a class="pdf-link" href="${officialLinks.syllabus}" target="_blank" rel="noreferrer">Open official syllabus archive</a></article>`, ...filtered.map((exam) => `<article class="content-card"><span class="card-meta">${exam.year} | ${exam.category}</span><h3>${exam.name}</h3><ul class="topic-list">${list(exam.syllabus)}</ul><a class="pdf-link" href="${exam.pdf}" target="_blank" rel="noreferrer" download>Download syllabus PDF</a></article>`)].join("");
}

function renderQuestions() {
  const year = $("#question-year").value;
  const query = $("#question-search").value.toLowerCase();
  const filtered = previousQuestions.filter((paper) => (year === "all" || String(paper.year) === year) && `${paper.exam} ${paper.questions.join(" ")}`.toLowerCase().includes(query));
  $("#question-list").innerHTML = [`<article class="content-card official-card"><span class="card-meta">Official source</span><h3>All PSC Previous Question Papers</h3><p>Use the official archive for the complete last three years of PSC question papers and answer-key verification.</p><a class="pdf-link" href="${officialLinks.questions}" target="_blank" rel="noreferrer">Open official PYQ archive</a></article>`, ...filtered.map((paper) => `<article class="content-card"><span class="card-meta">${paper.year}</span><h3>${paper.exam}</h3><ol class="answer-list">${list(paper.questions)}</ol><a class="pdf-link" href="${paper.pdf}" target="_blank" rel="noreferrer" ${paper.pdf.startsWith("assets/") ? "download" : ""}>Open PYQ answer PDF</a></article>`)].join("");
}

function renderNotesList() {
  const query = $("#notes-search").value.toLowerCase();
  const filtered = notePdfs.filter((note) => `${note.title} ${note.tag} ${note.topics.join(" ")}`.toLowerCase().includes(query));
  $("#notes-list").innerHTML = filtered.map((note) => `<article class="content-card"><span class="card-meta">${note.tag}</span><h3>${note.title}</h3><ul class="topic-list">${list(note.topics)}</ul><a class="${note.source ? "source-link" : "pdf-link"}" href="${note.pdf}" target="_blank" rel="noreferrer" ${note.source ? "" : "download"}>${note.source ? "Open source page" : "Download notes PDF"}</a></article>`).join("");
}

function renderNotifications() {
  $("#notification-ticker").textContent = notifications.map((notice) => `${notice.categoryNo} last date ${formatDate(notice.lastDate)}`).join(" | ");
  $("#notification-list").innerHTML = notifications.map((notice) => `<article class="notice-card"><div><span class="notice-meta">Category ${notice.categoryNo}</span><h3>${notice.title}</h3><p><strong>Eligibility:</strong> ${notice.eligibility}</p><a class="official-link" href="${notice.link}" target="_blank" rel="noreferrer">Verify on official PSC website</a></div><div class="deadline"><strong>Last date</strong><p>${formatDate(notice.lastDate)}</p></div></article>`).join("");
}

function renderQuizControls() {
  $("#quiz-topic").innerHTML = quizTopics.map((topic) => `<option value="${topic.id}">${topic.label}</option>`).join("");
  $("#quiz-year").innerHTML = [2026, 2025, 2024, 2023, 2022].map((year) => `<option value="${year}">${year}</option>`).join("");
  $("#quiz-board").innerHTML = ["NCERT", "SCERT"].map((board) => `<option value="${board}">${board}</option>`).join("");
  $("#quiz-topic-pills").innerHTML = quizTopics.map((topic) => `<button class="quiz-type ${topic.id === activeQuizTopic ? "active" : ""}" data-quiz="${topic.id}">${topic.label}</button>`).join("");
}

function buildQuizItem(topicId, index) {
  const selectedTopic = quizTopics.find((topic) => topic.id === topicId);
  const bank = quizBank[topicId] || quizBank["current-affairs"];
  const [q, originalOptions, originalAnswer, note] = bank[index % bank.length];
  const year = $("#quiz-year").value;
  const board = $("#quiz-board").value;
  const shift = index % originalOptions.length;
  const options = originalOptions.map((_, optionIndex) => originalOptions[(optionIndex + shift) % originalOptions.length]);
  const answer = (originalAnswer - shift + originalOptions.length) % originalOptions.length;
  const context = selectedTopic.usesYear ? `${year} current affairs` : selectedTopic.usesBoard ? `${board} science` : selectedTopic.label;
  return { q, options, answer, note: `${note} Selected mode: ${context}.` };
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
  $("#quiz-card").innerHTML = `<span class="card-meta">Infinite question ${quizIndex + 1}</span><h3>${item.q}</h3>${item.options.map((option, index) => `<button class="quiz-option" data-answer="${index}">${option}</button>`).join("")}<div class="answer-reveal" id="answer-reveal">${item.note}</div>`;
}

function renderCurrentAffairs() {
  const year = $("#ca-year").value;
  const month = $("#ca-month").value;
  const filtered = currentAffairs.filter((item) => (year === "all" || String(item.year) === year) && (month === "all" || item.month === month));
  $("#ca-list").innerHTML = filtered.map((item) => `<article class="content-card"><span class="card-meta">${item.month} ${item.year}</span><h3>${item.title}</h3><ul class="topic-list">${list(item.notes)}</ul><a class="pdf-link" href="${item.pdf}" target="_blank" rel="noreferrer" download>Open current affairs PDF</a></article>`).join("");
}

function setDashboardStats() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextExam = [...exams].filter((exam) => new Date(`${exam.date}T00:00:00`) >= today).sort((a, b) => new Date(a.date) - new Date(b.date))[0] || exams[0];
  const nextNotice = [...notifications].filter((notice) => new Date(`${notice.lastDate}T00:00:00`) >= today).sort((a, b) => new Date(a.lastDate) - new Date(b.lastDate))[0] || notifications[0];
  $("#exam-count").textContent = exams.length;
  $("#notification-count").textContent = notifications.length;
  $("#quiz-count").textContent = quizTopics.length;
  $("#next-exam-name").textContent = nextExam.name;
  $("#next-exam-date").textContent = formatDate(nextExam.date);
  $("#next-deadline-name").textContent = nextNotice.title;
  $("#next-deadline-date").textContent = formatDate(nextNotice.lastDate);
  $("#today-focus").textContent = `Revise ${nextExam.syllabus[0].toLowerCase()} and complete one infinite quiz set before ${nextExam.name}.`;
}

function activateTab(tabId) {
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabId));
  $$(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === tabId));
  history.replaceState(null, "", `#${tabId}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindEvents() {
  $$(".tab").forEach((tab) => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-tab]");
    if (button) activateTab(button.dataset.openTab);
  });
  $("#schedule-search").addEventListener("input", renderSchedule);
  $("#schedule-level").addEventListener("change", renderSchedule);
  $("#syllabus-year").addEventListener("change", renderSyllabus);
  $("#syllabus-search").addEventListener("input", renderSyllabus);
  $("#question-year").addEventListener("change", renderQuestions);
  $("#question-search").addEventListener("input", renderQuestions);
  $("#notes-search").addEventListener("input", renderNotesList);
  $("#ca-year").addEventListener("change", renderCurrentAffairs);
  $("#ca-month").addEventListener("change", renderCurrentAffairs);
  $("#quiz-topic").addEventListener("change", () => { activeQuizTopic = $("#quiz-topic").value; quizIndex = 0; renderQuiz(); });
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
  $("#next-question").addEventListener("click", () => { quizIndex += 1; renderQuiz(); });
  $("#prev-question").addEventListener("click", () => { quizIndex = Math.max(0, quizIndex - 1); renderQuiz(); });
}

function init() {
  fillYearSelect("#syllabus-year", [2026, 2025, 2024, 2023]);
  fillYearSelect("#question-year", [2026, 2025, 2024, 2023]);
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
