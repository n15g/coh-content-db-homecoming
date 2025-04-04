import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const CircleSeeker: BadgeData = {
  type: 'exploration',
  key: 'circle-seeker',
  setTitleId: [1519],
  name: 'Circle Seeker',
  morality: 'heroic',
  zoneKey: TheHollows.key,
  loc: [1729, 166, 2066],
  badgeText: `The Legacy Chain have been seeking the purpose of these strange structures that have been created by the Circle.
They have been working together with their Rogue Isles branch, who are investigating similar structures in Cap au Diable.
Some theorize they're teleporters, while others suggest they're beacons for powerful demons in the underworld.`,
  notes: `Located in the Eastgate Park neighborhood, on top of the northernmost Circle of Thorns structure, 260 yards north of the neighborhood marker.`,
  links: [
    { title: 'Circle Seeker Badge', href: 'https://homecoming.wiki/wiki/Circle_Seeker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '7',
}
