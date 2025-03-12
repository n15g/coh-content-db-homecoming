import { BadgeData } from 'coh-content-db'

export const RiktiDrone: BadgeData = {
  type: 'GLADIATOR',
  key: 'rikti-drone',
  setTitle: { id: 496 },
  name: [
    { value: 'Rikti Drone' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'This unit has been programmed to serve as your gladiator in the Arena.' },
  ],
  acquisition: 'Earn the [badge:savant] Badge (Rikti)',
  links: [
    { title: 'Rikti Drone Badge', href: 'https://homecoming.wiki/wiki/Rikti_Drone_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
