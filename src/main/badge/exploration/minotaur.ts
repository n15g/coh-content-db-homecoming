import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const Minotaur: BadgeData = {
  type: 'exploration',
  key: 'minotaur',
  setTitleId: [125],
  name: 'Minotaur',
  morality: 'heroic',
  zoneKey: TalosIsland.key,
  loc: [1698, 16, 7697],
  badgeText: `While wrestling with the Chimera in the waters of the bay, Talos tore a rift in the ocean floor.
Although the hero never rose from the waters, the island that formed was named in his honor.`,
  notes: 'Located on the pedestal of the large Minotaur statue, directly in front of the Field Analyst, approx. 580 yards southwest of the New Thebes neighborhood marker.',
  links: [
    { title: 'Minotaur Badge', href: 'https://homecoming.wiki/wiki/Minotaur_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
