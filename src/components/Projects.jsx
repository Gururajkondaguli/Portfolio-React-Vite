'use client'

import React from 'react'
import ScrollReveal from './ScrollReveal' // path A

const projects = [
  {
    title: 'VISION-I: A Blind Assistance System',
    desc: 'Object detection and navigation system to assist visually impaired users.',
    href: 'https://github.com/Gururajkondaguli/Blind-Assistance-Object-Detection-and-Navigation',
    icon: '💡',
  },
  {
    title: 'TicTacToe with AI',
    desc: 'TicTacToe game implemented with an AI opponent.',
    href: 'https://github.com/Gururajkondaguli/TicTacToe-game-with-AI',
    icon: '🤖',
  },
  {
    title: 'TicTacToe (Two-player)',
    desc: 'Classic TicTacToe for two players (no AI).',
    href: 'https://github.com/Gururajkondaguli/TicTacToe-two-player-game',
    icon: '🎮',
  },
  {
    title: 'Other Projects',
    desc: 'More repositories and demos on my GitHub profile.',
    href: 'https://github.com/Gururajkondaguli',
    icon: '📁',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <div className="text-center mb-12">
          <ScrollReveal from="down">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projects
            </h2>
          </ScrollReveal>

          <ScrollReveal from="up" delay={0.08}>
            <p className="mt-2 text-gray-400">Selected work and GitHub repositories</p>
          </ScrollReveal>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <ScrollReveal from="up" delay={0.10 + index * 0.08} key={p.title}>
              <div className="rounded-2xl bg-white/3 p-6 ring-1 ring-white/6 hover:translate-y-[-4px] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{p.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-indigo-400 hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-10 text-center">
          <ScrollReveal from="up" delay={0.45}>
            <a
              href="https://github.com/Gururajkondaguli"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
            >
              View all projects on GitHub
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
