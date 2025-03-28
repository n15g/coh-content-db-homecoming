import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const Ironic: BadgeData = {
  type: 'EXPLORATION',
  key: 'ironic',
  setTitle: { id: 1520 },
  name: [{ value: 'Ironic' }],
  alignment: ['H'],
  zoneKey: TheHollows.key,
  loc: [207, 129, -3162],
  badgeText: [{
    value: 'The Pinnacle Apartments were some of the most sought after apartments in Eastgate, until the Hollowing.'
      + ' Now all that\'s left to remember them is this billboard. Some say it\'s ironic that it would be the last thing still standing.',
  }],
  notes: 'Located in the Cherry Hills neighborhood of The Hollows.\n'
    + '\n'
    + 'It is on top of the building 433 yards ESE of the neighborhood marker.',
  links: [
    { title: 'Ironic Badge', href: 'https://homecoming.wiki/wiki/Ironic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
