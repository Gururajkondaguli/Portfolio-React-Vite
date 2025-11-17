'use client'

import React from 'react'
import ScrollReveal from './ScrollReveal' // path A (src/components/ScrollReveal.jsx)

const subIcons = {
  HTML5: '📄',
  CSS3: '🎀',
  Bootstrap: '🟣',

  'Tailwind CSS': '🌬️',

  Sass: '🧵',

  React: '⚛️',

  'Node.js': '🟢',
  Express: '🚏',
  Spring: '🌱',

  MongoDB: '🍃',
  MySQL: '🛢️',
  DBMS: '💾',

  Java: '☕',
  Python: '🐍',
  'C#': '🎯',
  JavaScript: '✨',

  Git: '🔧',
  Figma: '🎨',
  Linux: '🐧',
}

const perks = [
  {
    icon: '💻',
    title: 'Frontend Development',
    items: ['HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    icon: '🎨',
    title: 'CSS Framework',
    items: ['Tailwind CSS'],
  },
  {
    icon: '🧵',
    title: 'CSS Preprocessor',
    items: ['Sass'],
  },
  {
    icon: '⚛️',
    title: 'JavaScript Library',
    items: ['React'],
  },
  {
    icon: '🛠️',
    title: 'Backend Development',
    items: ['Node.js', 'Express', 'Spring'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    items: ['MongoDB', 'MySQL', 'DBMS'],
  },
  {
    icon: '📘',
    title: 'Programming Languages',
    items: ['Java', 'Python', 'C#', 'JavaScript'],
  },
  {
    icon: '🧰',
    title: 'Tools & Platforms',
    items: ['Git', 'Figma', 'Linux'],
  },
]

export default function Perks() {
  return (
    <section className="bg-gray-900 py-16 px-6 lg:px-8" id="skills">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal from="down">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Skills & Technologies
            </h2>
          </ScrollReveal>

          <ScrollReveal from="up" delay={0.08}>
            <p className="mt-2 text-gray-400">
              A categorized view of the tools & technologies I work with
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, index) => (
            <ScrollReveal
              key={perk.title}
              from={index % 2 === 0 ? 'up' : 'down'}
              delay={0.10 + index * 0.05}
            >
              <div className="bg-white/5 p-6 rounded-2xl ring-1 ring-white/10 hover:scale-[1.02] transition-transform">

                {/* Category Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{perk.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{perk.title}</h3>
                </div>

                {/* Sub-items with icons */}
                <ul className="space-y-2 text-gray-300 text-sm">
                  {perk.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-lg">{subIcons[item] || '•'}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <ScrollReveal from="up" delay={0.6}>
            <a
              href="https://github.com/Gururajkondaguli?tab=repositories"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 shadow-md"
            >
              View Projects →
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
