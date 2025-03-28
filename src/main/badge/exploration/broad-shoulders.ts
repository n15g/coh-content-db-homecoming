import { BadgeData, zoneLink } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const BroadShoulders: BadgeData = {
  type: 'EXPLORATION',
  key: 'broad-shoulders',
  setTitle: { id: 261 },
  name: [{ value: 'Broad Shoulders' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: SirensCall.key,
  loc: [257.5, -63.9, 361],
  badgeText: [{ value: 'Talos spent a good part of his childhood here.' }],
  notes: `The Broad Shoulders Badge marker is located at the base of the meteor monument just southwest of the inset corner east of the hero base in ${zoneLink(SirensCall)}.`,
  links: [{ title: 'Broad Shoulders Badge', href: 'https://homecoming.wiki/wiki/Broad_Shoulders_Badge' }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '3',
}
