import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const Balancer: BadgeData = {
  type: 'ouroboros',
  key: 'balancer',
  setTitleId: [938],
  name: 'Balancer',
  morality: 'all',
  badgeText: 'You have flashed back to 25 story arcs.',
  acquisition: `Complete 25 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Balancer Badge', href: 'https://homecoming.wiki/wiki/Balancer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/balancer.png',
}
