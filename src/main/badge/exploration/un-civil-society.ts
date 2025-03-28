import { BadgeData, zoneLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const UnCivilSociety: BadgeData = {
  type: 'EXPLORATION',
  key: 'un-civil-society',
  setTitle: { id: 1595 },
  name: [{ value: 'Un-Civil Society' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: NovaPraetoria.key,
  loc: [-4518, 32, -256],
  badgeText: [{
    value: 'We live in uncertain times, where discontent sows unrest and the sheep become the wolves.',
  }],
  notes: `Located in ${zoneLink(NovaPraetoria)} 116 yards W of the Magisterium marker.`,
  links: [
    { title: 'Un-Civil Society Badge', href: 'https://homecoming.wiki/wiki/Un-Civil_Society_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '7',
}
