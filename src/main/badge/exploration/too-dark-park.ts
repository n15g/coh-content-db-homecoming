import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const TooDarkPark: BadgeData = {
  type: 'exploration',
  key: 'too-dark-park',
  setTitleId: [1783],
  name: 'Too Dark Park',
  morality: 'heroic',
  zoneKey: EchoDarkAstoria.key,
  loc: [935, -1, 4321],
  badgeText: 'In a far corner of the district lies McCraughly Park, a shadowy strip of green that had a dark reputation even before Astoria and its citizens were consumed by evil.'
    + ' Clusters of suicides, strange disappearances, and even a well-publicized multiple murder cast a dark shadow across the park.'
    + ' In the years leading up to the rise of Dark Astoria, the park was largely shunned, but now that the Banished Pantheon have dominion over the district, the park has become a focal'
    + ' point for their evil rituals.',
  notes: `Located in ${zoneLink(EchoDarkAstoria)} 323 yards SE of Dido's View, at the base of the tree near the southernmost point of the eastern war wall.`,
  links: [
    { title: 'Too Dark Park Badge', href: 'https://homecoming.wiki/wiki/Too_Dark_Park_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '6',
}
