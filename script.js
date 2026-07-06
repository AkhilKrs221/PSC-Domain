const exams = [
  {
    name: "LDC Main Examination",
    category: "Clerk",
    level: "10th",
    date: "2026-08-17",
    time: "10:30 AM - 12:30 PM",
    year: 2026,
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
    questions: [
      "Who is known as Kerala Gandhi? Answer: K. Kelappan.",
      "The river Periyar originates from which hills? Answer: Sivagiri Hills.",
      "If 18 workers finish a job in 12 days, 24 workers finish it in how many days? Answer: 9 days.",
    ],
  },
  {
    exam: "Police Constable",
    year: 2025,
    questions: [
      "The Kerala Police Academy is located at? Answer: Thrissur.",
      "Which article deals with equality before law? Answer: Article 14.",
      "Simplify 15% of 240. Answer: 36.",
    ],
  },
  {
    exam: "Secretariat Assistant",
    year: 2024,
    questions: [
      "Planning Commission was replaced by? Answer: NITI Aayog.",
      "The first Chief Minister of Kerala was? Answer: E. M. S. Namboodiripad.",
      "Choose the correct synonym of 'abundant'. Answer: Plentiful.",
    ],
  },
  {
    exam: "Village Field Assistant",
    year: 2023,
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
    link: "https://www.keralapsc.gov.in/notifications",
  },
  {
    title: "Police Constable - Armed Police Battalion",
    categoryNo: "226/2026",
    lastDate: "2026-08-14",
    eligibility: "Plus Two pass, required physical standards, and age 18-26 with eligible relaxations.",
    link: "https://www.keralapsc.gov.in/notifications",
  },
  {
    title: "Assistant Engineer Civil - Public Works Department",
    categoryNo: "241/2026",
    lastDate: "2026-08-28",
    eligibility: "Civil engineering degree or equivalent qualification recognized by the state.",
    link: "https://www.keralapsc.gov.in/notifications",
  },
];

const noteTopics = {
  "LDC Main Examination": [
    {
      title: "Kerala History",
      points: ["Renaissance leaders: Sree Narayana Guru, Ayyankali, Chattampi Swamikal.", "Temple entry movements and social equality campaigns.", "Formation of Kerala state on 1 November 1956."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Kerala+history+classes",
    },
    {
      title: "Indian History",
      points: ["1857 revolt, INC formation, Gandhian movements.", "Important acts: 1909, 1919, 1935 Government of India Acts.", "Constitution making and national integration."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Indian+history+classes",
    },
    {
      title: "Maths",
      points: ["Percentages, profit and loss, ratio, time and work.", "Speed, distance, time, averages, and simple interest.", "Practice shortcut methods only after mastering concepts."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+maths+classes",
    },
    {
      title: "Special Topics",
      points: ["Cyber safety, e-governance, Kerala administrative facts.", "Malayalam grammar and English vocabulary.", "Current affairs from state budget, schemes, awards, and sports."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+LDC+classes",
    },
  ],
  "Police Constable": [
    {
      title: "Kerala History",
      points: ["Major social reformers and anti-caste movements.", "Kerala geography: rivers, passes, wildlife sanctuaries.", "District facts and cultural festivals."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Police+Constable+Kerala+history",
    },
    {
      title: "Indian History",
      points: ["Freedom struggle timeline from 1885 to 1947.", "Constitution preamble, fundamental rights, and duties.", "Important national institutions and symbols."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Police+Constable+Indian+history",
    },
    {
      title: "Maths",
      points: ["Number system, simplification, percentages.", "Reasoning: coding, direction, series, analogy.", "Mock timed sets improve speed for uniformed service exams."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Police+Constable+maths",
    },
    {
      title: "Special Topics",
      points: ["Kerala Police Act basics and public safety concepts.", "Physical efficiency test awareness.", "First aid, road safety, and disaster management basics."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Police+Constable+classes",
    },
  ],
  "Secretariat Assistant": [
    {
      title: "Kerala History",
      points: ["Modern Kerala politics and administrative reforms.", "Library movement, responsible government movement, and Travancore-Cochin history.", "Kerala planning, local self government, and decentralization."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Secretariat+Assistant+Kerala+history",
    },
    {
      title: "Indian History",
      points: ["Ancient, medieval, and modern history overview.", "Indian polity, parliament, judiciary, and constitutional bodies.", "Economic planning and major national schemes."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Secretariat+Assistant+classes",
    },
    {
      title: "Maths",
      points: ["Advanced arithmetic with data interpretation.", "Logical reasoning and statement-conclusion questions.", "English comprehension and grammar revision."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Degree+level+maths",
    },
    {
      title: "Special Topics",
      points: ["Secretariat procedures, public administration vocabulary.", "Kerala government schemes and budget highlights.", "Current affairs from national and state governance."],
      video: "https://www.youtube.com/results?search_query=Kerala+PSC+Secretariat+Assistant+current+affairs",
    },
  ],
};

const quizBank = {
  current: [
    {
      q: "Which body conducts recruitment examinations for Kerala state government posts?",
      options: ["Kerala Public Service Commission", "UPSC", "NTA", "SSC"],
      answer: 0,
      note: "Kerala PSC conducts recruitment for many state government services.",
    },
    {
      q: "Kerala state was formed on which date?",
      options: ["15 August 1947", "26 January 1950", "1 November 1956", "2 October 1957"],
      answer: 2,
      note: "Kerala Piravi is observed on 1 November.",
    },
    {
      q: "Which portal is commonly used by applicants for Kerala PSC one-time registration?",
      options: ["DigiLocker", "Thulasi", "UMANG", "Swayam"],
      answer: 1,
      note: "Thulasi is the Kerala PSC candidate profile portal.",
    },
  ],
  math: [
    {
      q: "A train covers 180 km in 3 hours. What is its average speed?",
      options: ["45 km/h", "50 km/h", "60 km/h", "75 km/h"],
      answer: 2,
      note: "Speed = distance / time = 180 / 3 = 60 km/h.",
    },
    {
      q: "Find 20% of 350.",
      options: ["35", "50", "70", "90"],
      answer: 2,
      note: "20% is one-fifth. 350 / 5 = 70.",
    },
    {
      q: "If the ratio of boys to girls is 3:2 and total students are 50, how many girls are there?",
      options: ["15", "20", "25", "30"],
      answer: 1,
      note: "Total parts are 5. Each part is 10, so girls = 2 x 10 = 20.",
    },
  ],
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentAffairs = [2026, 2025, 2024, 2023].flatMap((year) =>
  months.map((month, index) => ({
    year,
    month,
    title: `${month} ${year} Current Affairs`,
    notes: [
      `${month} focus: revise Kerala government schemes, appointments, awards, sports, and science updates.`,
      `Create a one-page monthly fact sheet with dates, places, firsts, and persons in news.`,
      `Practice 25 PSC-style questions from ${month} ${year} before moving to the next month.`,
    ],
    id: `${year}-${String(index + 1).padStart(2, "0")}`,
  }))
);

let activeQuiz = "current";
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
          <button class="secondary-action" data-open-tab="syllabus">Syllabus</button>
        </article>
      `;
    })
    .join("");
}

function fillYearSelect(selectId, years) {
  const select = $(selectId);
  select.innerHTML = `<option value="all">All years</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
}

function renderSyllabus() {
  const year = $("#syllabus-year").value;
  const query = $("#syllabus-search").value.toLowerCase();
  const filtered = exams.filter((exam) => {
    const haystack = `${exam.name} ${exam.category} ${exam.syllabus.join(" ")}`.toLowerCase();
    return (year === "all" || String(exam.year) === year) && haystack.includes(query);
  });

  $("#syllabus-list").innerHTML = filtered
    .map(
      (exam) => `
      <article class="content-card">
        <span class="card-meta">${exam.year} | ${exam.category}</span>
        <h3>${exam.name}</h3>
        <ul class="topic-list">
          ${exam.syllabus.map((topic) => `<li>${topic}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderQuestions() {
  const year = $("#question-year").value;
  const query = $("#question-search").value.toLowerCase();
  const filtered = previousQuestions.filter((paper) => {
    const haystack = `${paper.exam} ${paper.questions.join(" ")}`.toLowerCase();
    return (year === "all" || String(paper.year) === year) && haystack.includes(query);
  });

  $("#question-list").innerHTML = filtered
    .map(
      (paper) => `
      <article class="content-card">
        <span class="card-meta">${paper.year}</span>
        <h3>${paper.exam}</h3>
        <ol class="answer-list">
          ${paper.questions.map((item) => `<li>${item}</li>`).join("")}
        </ol>
        <a href="https://www.keralapsc.gov.in/previous-question-papers" target="_blank" rel="noreferrer">Open official question paper archive</a>
      </article>
    `
    )
    .join("");
}

function renderNotesList() {
  const query = $("#notes-search").value.toLowerCase();
  const examNames = Object.keys(noteTopics).filter((exam) => exam.toLowerCase().includes(query));
  $("#notes-exams").innerHTML = examNames
    .map((exam, index) => `<button class="${index === 0 ? "active" : ""}" data-exam="${exam}">${exam}</button>`)
    .join("");
  renderTopicNotes(examNames[0] || Object.keys(noteTopics)[0]);
}

function renderTopicNotes(examName) {
  const topics = noteTopics[examName] || [];
  $("#topic-notes").innerHTML = `
    <div class="topic-card">
      <span class="card-meta">Selected exam</span>
      <h3>${examName}</h3>
      <p>Click each topic&apos;s class link to open available YouTube lessons and playlists.</p>
    </div>
    ${topics
      .map(
        (topic) => `
        <article class="topic-card">
          <h3>${topic.title}</h3>
          <ul>
            ${topic.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
          <a class="video-link" href="${topic.video}" target="_blank" rel="noreferrer">YouTube classes</a>
        </article>
      `
      )
      .join("")}
  `;
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

function renderQuiz() {
  const item = quizBank[activeQuiz][quizIndex];
  $("#quiz-card").innerHTML = `
    <span class="card-meta">Question ${quizIndex + 1} of ${quizBank[activeQuiz].length}</span>
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
  $("#today-focus").textContent = `Revise ${sortedExams[0].syllabus[0].toLowerCase()} and complete one maths quiz before ${sortedExams[0].name}.`;
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

  $("#notes-exams").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-exam]");
    if (!button) return;
    $$("#notes-exams button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTopicNotes(button.dataset.exam);
  });

  $$(".quiz-type").forEach((button) =>
    button.addEventListener("click", () => {
      activeQuiz = button.dataset.quiz;
      quizIndex = 0;
      $$(".quiz-type").forEach((item) => item.classList.toggle("active", item === button));
      renderQuiz();
    })
  );

  $("#quiz-card").addEventListener("click", (event) => {
    const option = event.target.closest(".quiz-option");
    if (!option) return;
    const item = quizBank[activeQuiz][quizIndex];
    $$(".quiz-option").forEach((button) => {
      const isCorrect = Number(button.dataset.answer) === item.answer;
      button.classList.toggle("correct", isCorrect);
      button.classList.toggle("wrong", button === option && !isCorrect);
    });
    $("#answer-reveal").classList.add("visible");
  });

  $("#show-answer").addEventListener("click", () => {
    const item = quizBank[activeQuiz][quizIndex];
    $$(".quiz-option").forEach((button) => button.classList.toggle("correct", Number(button.dataset.answer) === item.answer));
    $("#answer-reveal").classList.add("visible");
  });

  $("#next-question").addEventListener("click", () => {
    quizIndex = (quizIndex + 1) % quizBank[activeQuiz].length;
    renderQuiz();
  });

  $("#prev-question").addEventListener("click", () => {
    quizIndex = (quizIndex - 1 + quizBank[activeQuiz].length) % quizBank[activeQuiz].length;
    renderQuiz();
  });
}

function init() {
  fillYearSelect("#syllabus-year", [2026, 2025, 2024, 2023]);
  fillYearSelect("#question-year", [2025, 2024, 2023]);
  fillYearSelect("#ca-year", [2026, 2025, 2024, 2023]);
  $("#ca-month").innerHTML = `<option value="all">All months</option>${months.map((month) => `<option value="${month}">${month}</option>`).join("")}`;

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
