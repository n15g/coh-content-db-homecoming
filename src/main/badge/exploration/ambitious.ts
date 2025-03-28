import { BadgeData, zoneLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const Ambitious: BadgeData = {
  type: 'EXPLORATION',
  key: 'ambitious',
  setTitle: { id: 1400 },
  name: [{ value: 'Ambitious' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: NovaPraetoria.key,
  loc: [-5420.9, 1088.6, -255.3],
  badgeText: [{
    value: 'Even in these strange and uncertain times there are those who still reach for the sky.',
  }],
  notes: `Located in ${zoneLink(NovaPraetoria)} on top of Emperor Cole's tower in Magisterium.`,
  links: [
    { title: 'Ambitious Badge', href: 'https://homecoming.wiki/wiki/Ambitious_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
