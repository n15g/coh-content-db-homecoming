import { BadgeData, zoneLink } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'
import { Grandville } from '../../zone/grandville'

export const HamidonsIre: BadgeData = {
  type: 'exploration',
  key: 'hamidons-ire',
  setTitleId: [1865],
  name: 'Hamidon\'s Ire',
  morality: 'all',
  zoneKey: TheAbyss.key,
  loc: [-823, -43, -1183],
  badgeText: `Apparently Hamidon hates humanity for their damage they have wrought upon the Earth's biosphere.
Every city is like a festering sore, every clear cut forest is a scar, blah blah blah. You get it.
But standing before this waste disposal site, with its ranks of waste barrels, you have to wonder what the people who ran this place were thinking.
Do they even know what kind of world they live in? Where genocidal mega-villains like Hamidon make it a point to target places like this?
The people who died here deserved what they got.`,
  notes: `Located 735 yards northeast of the ${zoneLink(Grandville)} transfer point in a fenced pen of barrels in the northeast portion of the developed island.`,
  links: [
    { title: `Hamidon's Ire Badge`, href: 'https://homecoming.wiki/wiki/Hamidon%27s_Ire_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '6',
}
