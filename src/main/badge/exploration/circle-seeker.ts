import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../map/the-hollows'

export const CircleSeeker: BadgeData = {
  type: 'EXPLORATION',
  key: 'circle-seeker',
  setTitle: { id: 1519 },
  name: [{ value: 'Circle Seeker' }],
  alignment: ['H'],
  mapKey: TheHollows.key,
  loc: [1729, 166, 2066],
  badgeText: [{
    value: 'The Legacy Chain have been seeking the purpose of these strange structures that have been created by the Circle.'
      + ' They have been working together with their Rogue Isles branch, who are investigating similar structures in Cap au Diable.'
      + ' Some theorize they\'re teleporters, while others suggest they\'re beacons for powerful demons in the underworld.',
  }],
  notes: 'Located in the Eastgate Park neighborhood of The Hollows.\n'
    + '\n'
    + 'It is on top of the northernmost Circle of Thorns structure, 260 yards north of the neighborhood marker.',
  links: [
    { title: 'Circle Seeker Badge', href: 'https://homecoming.wiki/wiki/Circle_Seeker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
