import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const Geologist: BadgeData = {
  type: 'exploration',
  key: 'geologist',
  setTitleId: [194],
  name: 'Geologist',
  morality: 'heroic',
  zoneKey: TheHollows.key,
  loc: [-749, -539, -1647],
  badgeText: `This spot marks the first sighting of the strange, rock-like creatures known as Pumicites.`,
  notes: `Roughly 80 yards NE-E from the Grendel's Gulch's marker.`,
  links: [
    { title: 'Geologist Badge', href: 'https://homecoming.wiki/wiki/Geologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '3',
}
