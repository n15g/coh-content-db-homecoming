import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const LongWalk: BadgeData = {
  type: 'exploration',
  key: 'long-walk',
  setTitleId: [1487],
  name: 'Long Walk',
  morality: 'rogue-isles-access',
  badgeText: `These long parking tunnels are the last thing that many who cross the Marcones see when they're asked to "come take a long walk."
Those who live in Port Oakes know to steer clear - and that all of the cars in the lot belong to the Marcones.`,
  notes: `Located in the Arena District neighborhood, in the middle of the northern parking tunnel 73 yards south of the hospital.`,
  links: [
    { title: 'Long Walk Badge', href: 'https://homecoming.wiki/wiki/Long_Walk_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PortOakes.key, coords: [-703, 128, 211] }, vidiotMapKey: '5' },
  ],
}
