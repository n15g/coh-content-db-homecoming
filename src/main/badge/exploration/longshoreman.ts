import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const Longshoreman: BadgeData = {
  type: 'exploration',
  key: 'longshoreman',
  setTitleId: [1726],
  name: [
    { sex: 'M', value: 'Longshoreman' },
    { sex: 'F', value: 'Longshorewoman' },
  ],
  morality: 'all',
  zoneKey: Neutropolis.key,
  loc: [2924, -56, 1375],
  badgeText: `Praetoria is perhaps the only exporter of high tech goods still standing since the rise of the Hamidon.
From these docks thousands of tons of weapons, heavy equipment, and humanitarian supplies leave daily.
The Imperial Defense Force provides escort security for the ships once they've left the safety of Neutropolis.`,
  notes: `Located on the docks 575 yards SSW of the Neuron's Reach marker.`,
  links: [
    { title: 'Longshoreman Badge', href: 'https://homecoming.wiki/wiki/Longshoreman_Badge' },
    { title: 'Longshorewoman Badge', href: 'https://homecoming.wiki/wiki/Longshorewoman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '4',
}
