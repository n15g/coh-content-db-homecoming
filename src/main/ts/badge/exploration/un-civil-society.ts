import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const UnCivilSociety: BadgeData = {
  type: 'exploration',
  key: 'un-civil-society',
  setTitleId: [1595],
  name: 'Un-Civil Society',
  morality: 'all',
  badgeText: `We live in uncertain times, where discontent sows unrest and the sheep become the wolves.`,
  notes: `Located 116 yards W of the Magisterium marker.`,
  links: [
    { title: 'Un-Civil Society Badge', href: 'https://homecoming.wiki/wiki/Un-Civil_Society_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NovaPraetoria.key, coords: [-4518, 32, -256] }, vidiotMapKey: '7' },
  ],
}
