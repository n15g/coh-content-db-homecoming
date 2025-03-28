import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const FerrymanOfTheDamned: BadgeData = {
  type: 'EXPLORATION',
  key: 'ferryman-of-the-damned',
  setTitle: { id: 1638 },
  name: [
    { sex: 'M', value: 'Ferryman of the Damned' },
    { sex: 'F', value: 'Ferrywoman of the Damned' },
  ],
  alignment: ['H', 'V', 'P'],
  zoneKey: UndergroundNova.key,
  loc: [-1407, 506, -1506],
  badgeText: [{
    value: 'Beneath Praetoria lies the Lethe, a subterranean river that predates the founding of Emperor Cole\'s city.'
      + ' It has become the secret highway on which the State transports the truly condemned: Failed Experiments, convicted traitors, and those who have simply fallen from favor.',
  }],
  notes: `Located in ${zoneLink(UndergroundNova)} approximately 271 yds SE of the Imperial Tunnel point.`,
  links: [
    { title: 'Ferryman of the Damned Badge', href: 'https://homecoming.wiki/wiki/Ferryman_of_the_Damned_Badge' },
    { title: 'Ferrywoman of the Damned Badge', href: 'https://homecoming.wiki/wiki/Ferrywoman_of_the_Damned_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '3',
}
