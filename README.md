# Grademap

**See. Assess. Predict.**

A calculation tool that tells college students exactly how much marks they need to score in their end-semester exams to hit a target or desired grade — removing the guesswork and stress that comes with mid-semester internal marks.

<img width="942" height="499" alt="GradeMap hero-section" src="https://github.com/user-attachments/assets/0920a3dd-84a5-4e4a-99c0-ea48a68a4f2e" />

## The Problem

Students in internal-assessment-based grading systems often finish their internals with mid-level marks and get anxious about the marks they need to obtain in their end-semester exams to maintain a good grade. Grademap turns "what do I need on my end-semester?" from an anxious guess into an exact, calculated answer.

## Features

- **Subject entry** — add subjects with credits, course type (theory/integrated), and internal marks obtained
- **Required-marks breakdown** — for any subject, see the exact end-semester mark needed for every possible grade, with a clear difficulty indicator (easily achievable → impossible) and automatic handling of minimum pass-mark rules
- **SGPA estimation** — select a realistic grade per subject and calculate your semester GPA, with support for lab-only/non-graded courses that don't have a traditional mark breakdown
- **CGPA estimation** — combine your current CGPA and credit history with the estimated semester to project your overall CGPA
- **Persistent data** — entries are saved locally, so a refresh doesn't wipe your work; a one-click reset is available to start fresh
- **Fully responsive** — built mobile-first, with a distinct desktop layout for larger screens

## User Flow

1. Enter a subject's name, credits, type, and internal marks
2. Instantly see the required end-semester mark for every grade (S through C), color-coded by difficulty
3. Set a realistic desired grade per subject in the summary table
4. Estimate your SGPA — optionally add lab-only or ungraded courses for a better and accurate calculation
5. Enter your current CGPA and total credits to project your overall CGPA

## Tech Stack

React.js · Tailwind CSS · Vite · local Storage

## Design Decisions

- **The calculation engine is entirely separated from the UI. ** Every grade calculation, SGPA, and CGPA function is plain, framework-free JavaScript, independently testable and reusable regardless of the interface built around it.
- **SGPA estimation uses forward calculation, not reverse-solving. ** A single target SGPA has many valid combinations of per-subject grades. Rather than guessing at "the" combination, GradeMap lets students set a realistic grade per subject and calculates the resulting SGPA, which is both mathematically unambiguous and closer to how students actually reason about their semester.
- **The grading slab is currently configured for a specific university regulation. ** This was a deliberate scope decision to ship a fully working v1; the calculation engine is structured so a configurable/editable slab can be added without restructuring the core logic.

## What's Next

- User-editable grading slabs, for use across different universities/regulations
- API-based auto-fill of subject data by university and semester
- Data visualization of grade progress and SGPA trends

## Local Setup

\`\`\`bash
git clone https://github.com/creator-chandru/GradeMap
cd GradeMap
npm install
npm run dev
\`\`\`

## Live Demo
https://grade-map-one.vercel.app/

