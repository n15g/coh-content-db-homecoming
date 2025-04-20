import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const Troubleshooter: BadgeData = {
  type: 'ouroboros',
  key: 'troubleshooter',
  setTitleId: [934],
  name: 'Troubleshooter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have flashed back to 5 story arcs.',
  acquisition: `Complete 5 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Troubleshooter Badge', href: 'https://homecoming.wiki/wiki/Troubleshooter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/troubleshooter.png',
}
