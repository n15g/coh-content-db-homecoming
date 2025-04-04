import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const BroadShoulders: BadgeData = {
  type: 'exploration',
  key: 'broad-shoulders',
  setTitleId: [261],
  name: 'Broad Shoulders',
  morality: 'all',
  zoneKey: SirensCall.key,
  loc: [257.5, -63.9, 361],
  badgeText: 'Talos spent a good part of his childhood here.',
  notes: `Located at the base of the meteor monument just southwest of the inset corner east of the hero base.`,
  links: [{ title: 'Broad Shoulders Badge', href: 'https://homecoming.wiki/wiki/Broad_Shoulders_Badge' }],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '3',
}
