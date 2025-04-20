import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const Adjuster: BadgeData = {
  type: 'ouroboros',
  key: 'adjuster',
  setTitleId: [935],
  name: 'Adjuster',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have flashed back to 10 story arcs.',
  acquisition: `Complete 10 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Adjuster Badge', href: 'https://homecoming.wiki/wiki/Adjuster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/adjuster.png',
}
