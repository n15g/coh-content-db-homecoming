import { BadgeData, mapLink } from 'coh-content-db'
import { Brickstown } from '../../map/brickstown'

export const SixthPassenger: BadgeData = {
  type: 'EXPLORATION',
  key: 'sixth-passenger',
  setTitle: { id: 1569 },
  name: [{ value: 'Sixth Passenger' }],
  alignment: ['H'],
  mapKey: Brickstown.key,
  loc: [-2810, -43, 2569],
  badgeText: [{
    value: 'Sebastian Frost hid in the trunk of this old car for three days after he was broken out from the Zig.'
      + ' It was after the third day, under the cover of night, that his goons in the Family were able to come rescue him.'
      + ' Frost has been extra careful ever since then to never get caught again.',
  }],
  notes: `Located along the south edge of ${mapLink(Brickstown)}, 390 yards southwest of the Science store.

          There is a section of road that has been built over the ruined foundations of some buildings, and the badge is located near a blue car that is buried under there.`,
  links: [
    { title: 'Sixth Passenger Badge', href: 'https://homecoming.wiki/wiki/Sixth_Passenger_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
