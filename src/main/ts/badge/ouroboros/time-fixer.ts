import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const TimeFixer: BadgeData = {
  type: 'ouroboros',
  key: 'time-fixer',
  setTitleId: [942],
  name: 'Time Fixer',
  morality: 'all',
  badgeText: 'You have flashed back to 45 story arcs.',
  acquisition: `Complete 45 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Time Fixer Badge', href: 'https://homecoming.wiki/wiki/Time_Fixer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/time-fixer.png',
}
