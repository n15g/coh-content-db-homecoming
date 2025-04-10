import { BadgeData } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const FerrymanOfTheDamned: BadgeData = {
  type: 'exploration',
  key: 'ferryman-of-the-damned',
  setTitleId: [1638],
  name: [
    { sex: 'M', value: 'Ferryman of the Damned' },
    { sex: 'F', value: 'Ferrywoman of the Damned' },
  ],
  morality: 'all',
  badgeText: `Beneath Praetoria lies the Lethe, a subterranean river that predates the founding of Emperor Cole's city.
It has become the secret highway on which the State transports the truly condemned: Failed Experiments, convicted traitors, and those who have simply fallen from favor.`,
  notes: `Located approximately 271 yds SE of the Imperial Tunnel point.`,
  links: [
    { title: 'Ferryman of the Damned Badge', href: 'https://homecoming.wiki/wiki/Ferryman_of_the_Damned_Badge' },
    { title: 'Ferrywoman of the Damned Badge', href: 'https://homecoming.wiki/wiki/Ferrywoman_of_the_Damned_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNova.key, coords: [-1407, 506, -1506], icon: 'badge', iconText: '3' } },
  ],
}
