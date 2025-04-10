import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const Alterist: BadgeData = {
  type: 'ouroboros',
  key: 'alterist',
  setTitleId: [937],
  name: 'Alterist',
  morality: 'all',
  badgeText: 'You have flashed back to 20 story arcs.',
  acquisition: `Complete 20 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Alterist Badge', href: 'https://homecoming.wiki/wiki/Alterist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/alterist.png',
}
