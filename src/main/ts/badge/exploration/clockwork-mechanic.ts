import { BadgeData } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const ClockworkMechanic: BadgeData = {
  type: 'exploration',
  key: 'clockwork-mechanic',
  setTitleId: [1636],
  name: 'Clockwork Mechanic',
  morality: 'all',
  badgeText: `Beneath the City Maintenance Facility lies the Maintenance & Treatment Chamber, where malfunctioning Clockwork are stored to prevent their errant code from infecting others of their kind.`,
  notes: `Located approximately 240 yards NE of City Access B.`,
  links: [
    { title: 'Clockwork Mechanic Badge', href: 'https://homecoming.wiki/wiki/Clockwork_Mechanic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNova.key, coords: [-3504, 512, -783] }, vidiotMapKey: '1' },
  ],
}
