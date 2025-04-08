import { BadgeData, zoneLink } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'
import { Grandville } from '../../zone/grandville'

export const NoEscape: BadgeData = {
  type: 'exploration',
  key: 'no-escape',
  setTitleId: [1864],
  name: 'No Escape',
  morality: 'all',
  badgeText: `You'd heard a recording of the last transmission sent from this loc: a frantic helicopter pilot trying to get his whirlybird off the platform before the monsters closed in.
You could hear the terror in his voice and it made you smile. You know what that terror is like.
You've felt it and been the source of it for others. That last fifteen seconds as the pilot's scream mixes with the heli's collision alarm are audio gold.`,
  notes: `Located 515 yards northeast of the ${zoneLink(Grandville)} transfer point, in the center of the helipad which in turn is in roughly the center of the developed island.`,
  links: [
    { title: 'No Escape Badge', href: 'https://homecoming.wiki/wiki/No_Escape_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheAbyss.key, coords: [-291, -29, -687] }, vidiotMapKey: '5' },
  ],
}
