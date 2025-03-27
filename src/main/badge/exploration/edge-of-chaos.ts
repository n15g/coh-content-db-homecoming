import { BadgeData, mapLink } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'
import { ReclusesVictory } from '../../map/recluses-victory'

export const EdgeOfChaos: BadgeData = {
  type: 'EXPLORATION',
  key: 'edge-of-chaos',
  setTitle: { id: 1515 },
  name: [{ value: 'Edge of Chaos' }],
  alignment: ['H'],
  mapKey: AtlasPark.key,
  loc: [-145, -784, -902],
  badgeText: [{
    value: 'Longbow has set up this portal in the heart of City Hall. It leads to a possible future where Recluse achieves his ultimate victory over Atlas Park.'
      + ' While it\'s business as usual in City Hall, Longbow fights for their lives against Arachnos on the other side of this portal.',
  }],
  notes: `The Edge of Chaos Badge is located in City Hall at the back of the D.A.T.A room.\n'
    + '\n'
    + 'It is just before you reach the elevator that takes you to the portal to ${mapLink(ReclusesVictory)}`,
  links: [
    { title: 'Edge of Chaos Badge', href: 'https://homecoming.wiki/wiki/Edge_of_Chaos_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
