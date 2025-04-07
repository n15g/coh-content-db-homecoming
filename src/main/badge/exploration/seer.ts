import { BadgeData, zoneLink } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const Seer: BadgeData = {
  type: 'exploration',
  key: 'seer',
  setTitleId: [1407],
  name: 'Seer',
  morality: 'all',
  zoneKey: ImperialCity.key,
  loc: [-2838, -12, 2603],
  badgeText: 'Blind yet seeing and casting judgment yet mindless of the crime; the Seer is the instrument of control and the constant threat of the Emperor\'s displeasure.',
  notes: `Located in ${zoneLink(ImperialCity)} 347 yards ENE of the Four Gables marker.`,
  links: [
    { title: 'Seer Badge', href: 'https://homecoming.wiki/wiki/Seer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '6',
}
