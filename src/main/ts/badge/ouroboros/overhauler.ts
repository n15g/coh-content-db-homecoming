import { BadgeData, contactLink } from 'coh-content-db'
import { PillarOfIceAndFlame } from '../../contact/pillar-of-ice-and-flame'

export const Overhauler: BadgeData = {
  type: 'ouroboros',
  key: 'overhauler',
  setTitleId: [941],
  name: 'Overhauler',
  morality: 'all',
  badgeText: 'You have flashed back to 40 story arcs.',
  acquisition: `Complete 40 Flashback story arcs from the ${contactLink(PillarOfIceAndFlame)}.`,
  links: [
    { title: 'Overhauler Badge', href: 'https://homecoming.wiki/wiki/Overhauler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/overhauler.png',
}
