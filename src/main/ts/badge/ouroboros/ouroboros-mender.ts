import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const OuroborosMender: BadgeData = {
  type: 'ouroboros',
  key: 'ouroboros-mender',
  setTitleId: [943],
  name: 'Ouroboros Mender',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have flashed back to 50 story arcs.',
  acquisition: `Complete 50 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Ouroboros Mender Badge', href: 'https://homecoming.wiki/wiki/Ouroboros_Mender_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/ouroboros-mender.png',
}
