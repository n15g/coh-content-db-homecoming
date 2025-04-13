import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const Ironic: BadgeData = {
  type: 'exploration',
  key: 'ironic',
  setTitleId: [1520],
  name: 'Ironic',
  morality: 'paragon-city-access',
  badgeText: `The Pinnacle Apartments were some of the most sought after apartments in Eastgate, until the Hollowing. Now all that's left to remember them is this billboard. Some say it's ironic that it would be the last thing still standing.`,
  notes: `Located in the Cherry Hills neighborhood on top of the building 433 yards ESE of the neighborhood marker.`,
  links: [
    { title: 'Ironic Badge', href: 'https://homecoming.wiki/wiki/Ironic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHollows.key, coords: [207, 129, -3162], icon: 'badge', iconText: '8' } },
  ],
}
