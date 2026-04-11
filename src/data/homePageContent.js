const meetupPhotos = {
  march: "/meetup-photos/1st-meetup.jpg",
  april: "/meetup-photos/2nd-meetup.jpg",
};

export const heroStats = [
  {
    label: "Founded Through Meetups",
    value: "2 technical meetups completed",
    description: "March 20, 2026 and April 11, 2026",
  },
  {
    label: "Next Meetup",
    value: "May 2, 2026",
    description: "React project experience and showcase check-in",
  },
  {
    label: "Community Mix",
    value: "Remote devs + CS students",
    description: "Frontend, fullstack, and student builders learning together",
  },
];

export const meetupRecaps = [
  {
    date: "March 20, 2026",
    title: "AI In Development Now",
    summary:
      "Tandag Software Engineers started by gathering remote developers and computer science students for a local conversation about how AI is changing software work today.",
    details:
      "The session focused on real day-to-day usage, and included a live Claude Code walkthrough plus discussion around Codex.",
    image: meetupPhotos.march,
    imageAlt:
      "Members of Tandag Software Engineers during the March 20, 2026 meetup.",
    links: [
      {
        label: "Claude Code",
        href: "https://www.anthropic.com/claude-code",
      },
      {
        label: "OpenAI Codex",
        href: "https://openai.com/codex/",
      },
    ],
  },
  {
    date: "April 11, 2026",
    title: "React Demo Meetup",
    summary:
      "The second meetup moved into hands-on frontend work with a React demo for the group.",
    details:
      "This session set up the next phase: building small React projects for practice, experience, and future showcases.",
    image: meetupPhotos.april,
    imageAlt:
      "Members of Tandag Software Engineers during the April 11, 2026 meetup.",
    links: [
      {
        label: "React",
        href: "https://react.dev/",
      },
    ],
  },
];

export const prepTasks = [
  {
    title: "Install Git and Git Bash",
    description:
      "Everyone should download Git before the next technical meetup. Git Bash is included for Windows users.",
    href: "https://git-scm.com/downloads",
    cta: "Open Git downloads",
  },
  {
    title: "Create a GitHub account",
    description:
      "Each participant should set up a GitHub account so project repositories and collaboration can start smoothly.",
    href: "https://github.com/signup",
    cta: "Create GitHub account",
  },
];

export const projectAssignments = [
  {
    nickname: "JM",
    fullName: "John Michael Tenefrancisa",
    project: "Fish Catch Tracking System",
  },
  {
    nickname: "Lance",
    fullName: "Lance Wendell Pico",
    project: "Record of Barangay Inhabitants",
  },
  {
    nickname: "Franz",
    fullName: "Franz Fernandez",
    project: "Fun Run Registration System",
  },
  {
    nickname: "Spidey",
    fullName: "Spidey Brads Evangelista",
    project: "Flower Identification Platform / Watering Tracking",
  },
];
