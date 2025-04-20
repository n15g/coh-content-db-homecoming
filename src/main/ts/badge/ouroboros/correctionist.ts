import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const Correctionist: BadgeData = {
  type: 'ouroboros',
  key: 'correctionist',
  setTitleId: [939],
  name: 'Correctionist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have flashed back to 30 story arcs.',
  acquisition: `Complete 30 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Correctionist Badge', href: 'https://homecoming.wiki/wiki/Correctionist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/correctionist.png',
}
