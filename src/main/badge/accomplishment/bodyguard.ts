import { BadgeData } from 'coh-content-db'
import { Crimson } from '../../contact/crimson'

export const Bodyguard: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'bodyguard',
  setTitle: { id: 84 },
  name: 'Bodyguard',
  alignment: ['H'],
  badgeText: 'You stopped the assassination of a Rikti peace negotiator.',
  links: [
    { title: 'Bodyguard Badge', href: 'https://homecoming.wiki/wiki/Bodyguard_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bodyguard.png',
  requirements: [
    { key: 'rescue-rikti-negotiator-quickly', type: 'MISSION', missionName: 'Rescue Rikti Negotiator Quickly', contactKey: Crimson.key },
  ],
}
