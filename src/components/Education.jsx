// src/components/Education.jsx
'use client'

import React from 'react'
import ScrollReveal from './ScrollReveal' // path A: src/components/ScrollReveal.jsx

export default function Education() {
  return (
    <section className="bg-gray-900 py-16 px-6 lg:px-8" id="education">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <ScrollReveal from="down">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Education & Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal from="up" delay={0.06}>
            <p className="mt-2 text-gray-400">Formal education, apprenticeship & work projects</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Apprentice / BEL */}
          <ScrollReveal from="up" delay={0.04}>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                  <svg
                    className="h-6 w-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2l7 4v6c0 5-7 9-7 9s-7-4-7-9V6l7-4z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Graduate Apprentice — Bharat Electronics Limited (BEL)
                  </h3>
                  <p className="text-sm text-gray-300">Bengaluru, Karnataka (On-site)</p>
                </div>
              </div>

              <div className="mt-4 text-gray-300">
                <p className="font-medium">Duration</p>
                <p>Aug 2024 — Present</p>

                <div className="mt-3">
                  <p className="font-medium">About BEL</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Bharat Electronics Limited (BEL) is a Navratna PSU under the Ministry of Defence, manufacturing
                    advanced electronic systems and diversified solutions across defence, cyber, space, medical,
                    telecom, metro, railways and more.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-medium text-white">Work Experience Projects</p>
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-300">
                    <li>
                      <strong>IT Support Ticket Raising System:</strong> Internal UI to raise, track and manage tickets
                      (forms, status workflows, admin view).
                    </li>
                    <li>
                      <strong>Quiz Application:</strong> Interactive MCQ system with scoring, validation and smooth UI
                      interactions.
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="font-medium">Skills Gained</p>
                  <ul className="list-disc ml-5 mt-1 text-sm text-gray-300">
                    <li>Core Java & OOP</li>
                    <li>Java programming</li>
                    <li>Problem solving</li>
                    <li>Team collaboration</li>
                    <li>Professional communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* University / College */}
          <ScrollReveal from="up" delay={0.12}>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17l10 5 10-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12l10 5 10-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Visvesvaraya Technological University</h3>
                  <p className="text-sm text-gray-300">Akshaya Institute of Technology, Tumkur</p>
                </div>
              </div>

              <div className="mt-4 text-gray-300">
                <p className="font-medium">Degree</p>
                <p>Computer Science and Engineering</p>

                <div className="mt-3">
                  <p className="font-medium">Duration</p>
                  <p>2019 — 2023</p>
                </div>

                <div className="mt-3">
                  <p className="font-medium">Highlights</p>
                  <ul className="list-disc ml-5 mt-1 text-sm text-gray-300">
                    <li>Strong fundamentals in algorithms, data structures and databases</li>
                    <li>Web development internship experience</li>
                    <li>Project presentation & teamwork experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* PUC */}
          <ScrollReveal from="up" delay={0.20}>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M12 2l7 4v6c0 5-7 9-7 9s-7-4-7-9V6l7-4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Abhyudaya PU Science College</h3>
                  <p className="text-sm text-gray-300">Muddebihal, Vijayapura</p>
                </div>
              </div>

              <div className="mt-4 text-gray-300">
                <p className="font-medium">Course</p>
                <p>PUC — Science (Mathematics)</p>

                <div className="mt-3">
                  <p className="font-medium">Duration</p>
                  <p>2017 — 2019</p>
                </div>

                <div className="mt-3">
                  <p className="font-medium">Grade</p>
                  <p>62.63%</p>
                </div>

                <div className="mt-3">
                  <p className="font-medium">Location</p>
                  <p>Muddebihal, Bidarkundi, Karnataka 586212, India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* School */}
          <ScrollReveal from="up" delay={0.28}>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M12 2l7 4v6c0 5-7 9-7 9s-7-4-7-9V6l7-4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Santa Kanakadas Primary & High School</h3>
                  <p className="text-sm text-gray-300">Muddebihal</p>
                </div>
              </div>

              <div className="mt-4 text-gray-300">
                <p className="font-medium">Level</p>
                <p>Primary & High School</p>

                <div className="mt-3">
                  <p className="font-medium">Duration</p>
                  <p>2007 — 2017</p>
                </div>

                <div className="mt-3">
                  <p className="font-medium">Notes</p>
                  <ul className="list-disc ml-5 mt-1 text-sm text-gray-300">
                    <li>Completed foundational schooling with focus on sciences</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10 text-center">
          <ScrollReveal from="up" delay={0.36}>
            <a
              href="https://drive.google.com/file/d/1F8QggXQIhuX8NN78asPY9qTxwmUwPkUB/view?usp=drive_link"
              className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
              target="_blank"
              rel="noreferrer"
            >
              View / Download CV
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
