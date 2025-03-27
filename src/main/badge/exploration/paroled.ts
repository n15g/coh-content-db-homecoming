import { BadgeData, mapLink } from 'coh-content-db'
import { StMartial } from '../../map/st-martial'

export const Paroled: BadgeData = {
  type: 'EXPLORATION',
  key: 'paroled',
  setTitle: { id: 280 },
  name: [
    { alignment: 'H', value: 'Paroled' },
    { alignment: 'V', value: 'Crimelord' },
  ],
  alignment: ['V'],
  mapKey: StMartial.key,
  loc: [-896, 9, -1496],
  badgeText: [{
    alignment: 'H', value: `Most of Paragon City agrees that you've paid your debt to society. Most, but not all.`,
  }, {
    alignment: 'V', value: `The weeds of crime bear bitter fruit.`,
  }],
  notes: `Located in ${mapLink(StMartial)}, in the Fortune's Wheel neighborhood.

The marker is 138 yards west of the Fortune's Wheel marker, at the base of a tree in the middle of a broken road leading out of the Black Mariah neighborhood.`,
  links: [
    { title: 'Paroled Badge', href: 'https://homecoming.wiki/wiki/Paroled_Badge' },
    { title: 'Crimelord Badge', href: 'https://homecoming.wiki/wiki/Crimelord_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '2',
}
