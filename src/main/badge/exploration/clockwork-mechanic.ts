import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundNova } from '../../map/underground-nova'

export const ClockworkMechanic: BadgeData = {
  type: 'EXPLORATION',
  key: 'clockwork-mechanic',
  setTitle: { id: 1636 },
  name: [{ value: 'Clockwork Mechanic' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundNova.key,
  loc: [-3504, 512, -783],
  badgeText: [{
    value: 'Beneath the City Maintenance Facility lies the Maintenance & Treatment Chamber, where malfunctioning Clockwork are stored to prevent their'
      + ' errant code from infecting others of their kind.',
  }],
  notes: `Located in ${mapLink(UndergroundNova)} approximately 240 yards NE of City Access B.`,
  links: [
    { title: 'Clockwork Mechanic Badge', href: 'https://homecoming.wiki/wiki/Clockwork_Mechanic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
