import { BadgeData } from 'coh-content-db'

export const Escapist: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'escapist',
  setTitle: { id: 2349 },
  name: [
    { value: 'Escapist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You left your mark in Praetoria before using the Rift Enclosure to travel to Primal Earth.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_align_mission.png' }],
  acquisition: 'Leave Praetoria through the Rift Enclosure after completing the Crusader, Warden, Responsibility or Power story arc.',
  links: [
    { title: 'Escapist Badge', href: 'https://homecoming.wiki/wiki/Escapist_Badge' },
  ],
}
