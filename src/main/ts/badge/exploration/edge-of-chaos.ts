import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const EdgeOfChaos: BadgeData = {
  type: 'exploration',
  key: 'edge-of-chaos',
  setTitleId: [1515],
  name: 'Edge of Chaos',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Longbow has set up this portal in the heart of City Hall.
It leads to a possible future where Recluse achieves his ultimate victory over Atlas Park.
While it's business as usual in City Hall, Longbow fights for their lives against Arachnos on the other side of this portal.`,
  notes: `Located in City Hall at the back of the D.A.T.A room, just before you reach the elevator that takes you to the portal to ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Edge of Chaos Badge', href: 'https://homecoming.wiki/wiki/Edge_of_Chaos_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [-145, -784, -902], icon: 'badge', iconText: '7' } },
  ],
}
