import { defineStore } from 'pinia'
import { Info, FolderGit2, Code2, Mail, Puzzle, Hourglass, Layers } from 'lucide-vue-next'
import githubIcon from '@iconify-icons/mdi/github'
import linkedinIcon from '@iconify-icons/mdi/linkedin'
import whatsappIcon from '@iconify-icons/mdi/whatsapp'
import htmlIcon from '@iconify-icons/mdi/language-html5'
import javascriptIcon from '@iconify-icons/mdi/language-javascript'
import vueIcon from '@iconify-icons/mdi/vuejs'
import cssIcon from '@iconify-icons/mdi/language-css3'
import tailwindIcon from '@iconify-icons/simple-icons/tailwindcss'
import piniaIcon from '@iconify-icons/mdi/pine-tree'
import routerIcon from '@iconify-icons/mdi/router-network'
import viteIcon from '@iconify-icons/simple-icons/vite'
import reactIcon from '@iconify-icons/mdi/react'
import gitIcon from '@iconify-icons/mdi/git'
import javaIcon from '@iconify-icons/mdi/language-java'
import kotlinIcon from '@iconify-icons/mdi/language-kotlin'
import csharpIcon from '@iconify-icons/mdi/language-csharp'
import nodejsIcon from '@iconify-icons/mdi/nodejs'
import dockerIcon from '@iconify-icons/mdi/docker'
import railwayIcon from '@iconify-icons/mdi/train'
import pythonIcon from '@iconify-icons/mdi/language-python'
import apiIcon from '@iconify-icons/mdi/api'
import postmanIcon from '@iconify-icons/simple-icons/postman'
import mysqlIcon from '@iconify-icons/mdi/database'
import postgresIcon from '@iconify-icons/mdi/database'
import mongoIcon from '@iconify-icons/simple-icons/mongodb'
import sqliteIcon from '@iconify-icons/simple-icons/sqlite'
import firebaseIcon from '@iconify-icons/simple-icons/firebase'
import springIcon from '@iconify-icons/simple-icons/spring'
import typescriptIcon from '@iconify-icons/simple-icons/typescript'
import nestjsIcon from '@iconify-icons/simple-icons/nestjs'
import graphqlIcon from '@iconify-icons/simple-icons/graphql'

export const useSocialStore = defineStore('social', {
  state: () => ({
    icons: [
      { name: 'LinkedIn', icon: linkedinIcon, href: 'https://www.linkedin.com/in/saulojedaalonso' },
      { name: 'GitHub', icon: githubIcon, href: 'https://github.com/SaulixDev' },
      { name: 'WhatsApp', icon: whatsappIcon, href: 'https://wa.me/34663486624' },
    ],
    circles: [
      { classes: 'top-[-200px] left-1/4 w-72 h-72 bg-primary100/50' },
      { classes: 'bottom-[-100px] left-20 w-64 h-64 bg-accent100/50' },
      { classes: 'bottom-0 right-0 w-48 h-48 bg-primary200/50' },
    ],
    sectionIcons: {
      about: Info,
      projects: FolderGit2,
      tech: Code2,
      contact: Mail,
    },
    resourcesIcons: {
      extensions: Puzzle,
      repo: Layers,
      wip: Hourglass,
    },
    wipIcons: {
      kotlin: kotlinIcon,
      python: pythonIcon,
      react: reactIcon,
      spring: springIcon,
      typescript: typescriptIcon,
      nestjs: nestjsIcon,
      graphql: graphqlIcon,
    },
    techIcons: {
      html: htmlIcon,
      javascript: javascriptIcon,
      vue: vueIcon,
      css: cssIcon,
      tailwind: tailwindIcon,
      pinia: piniaIcon,
      router: routerIcon,
      vite: viteIcon,
      react: reactIcon,
      git: gitIcon,
      java: javaIcon,
      kotlin: kotlinIcon,
      csharp: csharpIcon,
      nodejs: nodejsIcon,
      github: githubIcon,
      docker: dockerIcon,
      railway: railwayIcon,
      python: pythonIcon,
      api: apiIcon,
      postman: postmanIcon,
      mysql: mysqlIcon,
      postgres: postgresIcon,
      mongo: mongoIcon,
      sqlite: sqliteIcon,
      firebase: firebaseIcon,
    },
  }),
})
