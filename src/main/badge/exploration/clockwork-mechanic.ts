import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const ClockworkMechanic: BadgeData = {
  type: 'EXPLORATION',
  key: 'clockwork-mechanic',
  setTitle: { id: 1636 },
  name: [{ value: 'Clockwork Mechanic' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: UndergroundNova.key,
  loc: [-3504, 512, -783],
  badgeText: [{
    value: 'Beneath the City Maintenance Facility lies the Maintenance & Treatment Chamber, where malfunctioning Clockwork are stored to prevent their'
      + ' errant code from infecting others of their kind.',
  }],
  notes: `Located in ${zoneLink(UndergroundNova)} approximately 240 yards NE of City Access B.`,
  links: [
    { title: 'Clockwork Mechanic Badge', href: 'https://homecoming.wiki/wiki/Clockwork_Mechanic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
