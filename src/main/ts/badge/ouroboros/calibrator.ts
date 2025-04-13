import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const Calibrator: BadgeData = {
  type: 'ouroboros',
  key: 'calibrator',
  setTitleId: [936],
  name: 'Calibrator',
  morality: 'all',
  badgeText: 'You have flashed back to 15 story arcs.',
  acquisition: `Complete 15 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Calibrator Badge', href: 'https://homecoming.wiki/wiki/Calibrator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/calibrator.png',
}
