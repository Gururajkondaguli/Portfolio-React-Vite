'use client'

import React from 'react'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiSass, SiNodedotjs, SiExpress, SiSpring, SiMongodb,
  SiMysql, SiJava, SiPython, SiGit, SiFigma,
  SiLinux, SiVisualstudiocode, SiIntellijidea
} from 'react-icons/si'

const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, user-friendly UI and modern web interfaces.',
    items: [
      { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'Sass', icon: <SiSass className="text-pink-500" /> }
    ],
  },
  {
    title: 'Backend Development',
    description: 'Developing REST APIs, server logic, and backend integrations.',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'Spring', icon: <SiSpring className="text-green-400" /> }
    ],
  },
  {
    title: 'Databases',
    description: 'Experience in relational and NoSQL databases.',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-sky-500" /> }
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Core programming and problem-solving proficiency.',
    items: [
      { name: 'Java', icon: <SiJava className="text-red-500" /> },
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Tools used for development, design, and deployment.',
    items: [
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-400" /> },
      { name: 'Linux', icon: <SiLinux className="text-yellow-400" /> },
      { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-400" /> },
      { name: 'IntelliJ', icon: <SiIntellijidea className="text-purple-400" /> }
    ],
  },
]

export default function Ability() {
  return (
    <section id="ability" className="bg-gray-900 py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Abilities</h2>
          <p className="mt-2 text-gray-400">Skills & tools extracted from GitHub & work experience</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{group.description}</p>

              <div className="mt-4 space-y-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center">
          <p>
            Source: GitHub profile •{' '}
            <a className="text-indigo-400" href="https://github.com/Gururajkondaguli" target="_blank" rel="noreferrer">
              github.com/Gururajkondaguli
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
