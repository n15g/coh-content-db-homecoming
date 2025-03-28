import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Ghoulish: BadgeData = {
  type: 'EXPLORATION',
  key: 'ghoulish',
  setTitle: { id: 258 },
  name: [{ value: 'Ghoulish' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: BloodyBay.key,
  loc: [91, 65, 360],
  badgeText: [{ value: 'The shards must be vibrating the very bones of the graves. You are almost sure you can hear scratching and clawing from the inside of the mausoleums.' }],
  notes: 'The Ghoulish Badge is 185 yards east and slightly north of the Ground Zero neighborhood in Bloody Bay near the center of the map.'
    + ' There is a small building with a tunnel through it over the stone walkway.'
    + ' The badge marker is inside that small building.',
  links: [
    { title: 'Ghoulish Badge', href: 'https://homecoming.wiki/wiki/Ghoulish_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '4',
}
