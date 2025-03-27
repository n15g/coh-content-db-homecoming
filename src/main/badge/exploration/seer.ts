import { BadgeData, mapLink } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'

export const Seer: BadgeData = {
  type: 'EXPLORATION',
  key: 'seer',
  setTitle: { id: 1407 },
  name: [{ value: 'Seer' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ImperialCity.key,
  loc: [-2838, -12, 2603],
  badgeText: [{
    value: 'Blind yet seeing and casting judgment yet mindless of the crime; the Seer is the instrument of control and the constant threat of the Emperor\'s displeasure.',
  }],
  notes: `Located in ${mapLink(ImperialCity)} 347 yards ENE of the Four Gables marker.`,
  links: [
    { title: 'Seer Badge', href: 'https://homecoming.wiki/wiki/Seer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '6',
}
