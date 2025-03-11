import { BadgeData } from 'coh-content-db'
import { CascadeArchipelago } from '../../map/cascade-archipelago'

export const PeaceWalker: BadgeData = {
  type: 'EXPLORATION',
  key: 'peace-walker',
  setTitle: { id: 1806 },
  name: [{ value: 'Peace Walker' }],
  alignment: ['H'],
  mapKey: CascadeArchipelago.key,
  loc: [3096, 1535, 1502],
  badgeText: [{
    value: 'You have found a place of peace and calm in a land of madness and danger.'
      + ' High stone walls hem you in on all sides, but they grant a feeling of security and solitude and not one of confinement.'
      + ' You wonder idly why none of the horrors that prowl the landscape around you ever find their way into this place of calm, and you are grateful.'
      + ' Even the unearthly chattering and howls of the Shadow Shard\'s denizens fail to penetrate here, you almost feel as though you could stay here forever, just lay down and rest,'
      + ' safe from all concern... but you cannot.'
      + ' This sense of ease is an illusion, the safety is a lie. Nowhere is safe here, and you\'d best move on before this land robs you of all desire to.',
  }],
  notes: 'Located in [map:cascade-archipelago] 167 yards SW of The Marooned Shores marker, in the middle of an area surrounded by hills.',
  links: [
    { title: 'Peace Walker Badge', href: 'https://homecoming.wiki/wiki/Peace_Walker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
