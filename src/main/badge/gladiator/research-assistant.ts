import { BadgeData } from 'coh-content-db'

export const ResearchAssistant: BadgeData = {
  type: 'GLADIATOR',
  key: 'research-assistant',
  setTitle: { id: 500 },
  name: [
    { value: 'Research Assistant' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Crey will study the results of your gladiator battles.' },
  ],
  acquisition: 'Earn the [badge:crey-havoc] Badge (Crey)',
  links: [
    { title: 'Research Assistant Badge', href: 'https://homecoming.wiki/wiki/Research_Assistant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
