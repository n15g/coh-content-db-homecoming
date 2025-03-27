import { BadgeData, mapLink } from 'coh-content-db'
import { TheAbyss } from '../../map/the-abyss'

export const NoEscape: BadgeData = {
  type: 'EXPLORATION',
  key: 'no-escape',
  setTitle: { id: 1864 },
  name: [{ value: 'No Escape' }],
  alignment: ['H', 'V', 'P'],
  mapKey: TheAbyss.key,
  loc: [-291, -29, -687],
  badgeText: [{
    value: `You'd heard a recording of the last transmission sent from this loc: a frantic helicopter pilot trying to get his whirlybird off the platform before the monsters closed in.
You could hear the terror in his voice and it made you smile. You know what that terror is like.
You've felt it and been the source of it for others. That last fifteen seconds as the pilot's scream mixes with the heli's collision alarm are audio gold.`,
  }],
  notes: `Located in ${mapLink(TheAbyss)}, 515 yards northeast of the Grandville transfer point, in the center of the helipad which in turn is in roughly the center of the developed island.`,
  links: [
    { title: 'No Escape Badge', href: 'https://homecoming.wiki/wiki/No_Escape_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
