import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../map/talos-island'

export const Minotaur: BadgeData = {
  type: 'EXPLORATION',
  key: 'minotaur',
  setTitle: { id: 125 },
  name: [{ value: 'Minotaur' }],
  alignment: ['H'],
  mapKey: TalosIsland.key,
  loc: [1698, 16, 7697],
  badgeText: [{
    value: 'While wrestling with the Chimera in the waters of the bay, Talos tore a rift in the ocean floor.'
      + ' Although the hero never rose from the waters, the island that formed was named in his honor.',
  }],
  notes: 'Located on the pedestal of the large minotaur statue, directly in front of the Field Analyst, approximately 580 yards southwest of the New Thebes neighborhood marker.',
  links: [
    { title: 'Minotaur Badge', href: 'https://homecoming.wiki/wiki/Minotaur_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
