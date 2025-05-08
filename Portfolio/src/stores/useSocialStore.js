import { defineStore } from 'pinia'

export const useSocialStore = defineStore('social', {
  state: () => ({
    icons: [
      { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/tu_usuario' },
      { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/tu_usuario' },
      { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/tu_usuario' },
      { name: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/tu_numero' },
    ],
    circles: [
      { classes: 'top-[-200px] left-1/4 w-72 h-72 bg-primary100/50' },
      { classes: 'bottom-[-100px] left-20 w-64 h-64 bg-accent100/50' },
      { classes: 'bottom-0 right-0 w-48 h-48 bg-primary200/50' },
    ],
  }),
})
