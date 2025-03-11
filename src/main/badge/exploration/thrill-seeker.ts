import { BadgeData } from 'coh-content-db'
import { ArchitectEntertainmentBuildings } from '../../map/architect-entertainment-buildings'

export const ThrillSeeker: BadgeData = {
  type: 'EXPLORATION',
  key: 'thrill-seeker',
  setTitle: { id: 1080 },
  name: [{ value: 'Thrill Seeker' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ArchitectEntertainmentBuildings.key,
  badgeText: [{ value: 'You\'re always looking for new forms of entertainment, and it\'s said that the Mission Architect technology is entertainment in its purest form.' }],
  notes: 'Visit any Architect Entertainment Building\'s Main Studio floor.'
    + ' The coordinates of this Exploration Badge vary with each zone, but its relative location within the AE building is constant.'
    + ' The badge is clearly visible on the floor between, and just off to the side of, the hologram contacts and Architect Entertainment Stations.',
  links: [
    { title: 'Thrill Seeker Badge', href: 'https://homecoming.wiki/wiki/Thrill_Seeker_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: 'X',
}
