import { BadgeData, mapLink } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const GoldDigger: BadgeData = {
  type: 'EXPLORATION',
  key: 'gold-digger',
  setTitle: { id: 1630 },
  name: [{ value: 'Gold Digger' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [280, 28, -2288],
  badgeText: [{
    value: 'In Aureas, ground is being broken on new office towers to support Praetoria\'s ever burgeoning economy.'
      + ' Witness the tireless Clockwork who labor continuously to bring the dream of Praetoria to life.',
  }],
  notes: `Located in ${mapLink(ImperialCity)} on top of a building under construction 460 yards N of the Aureas marker.`,
  links: [
    { title: 'Gold Digger Badge', href: 'https://homecoming.wiki/wiki/Gold_Digger_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
