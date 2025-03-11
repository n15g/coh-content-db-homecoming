import { BadgeData } from 'coh-content-db'
import { TheAbyss } from '../../map/the-abyss'

export const Reborn: BadgeData = {
  type: 'EXPLORATION',
  key: 'reborn',
  setTitle: { id: 745 },
  name: [{ value: 'Reborn' }],
  alignment: ['H', 'V', 'P'],
  mapKey: TheAbyss.key,
  loc: [679, -544, -3189],
  badgeText: [{
    value: `You have located where the Devouring Earth have attempted to bring forth the Hamidon outside of the prying eyes of Paragon City.`,
  }],
  notes: `Located in [map:${TheAbyss.key}], directly under the nucleus of Hamidon, in the bowl-shaped water area in the northern part of the map.

It is located underwater (but visible, if a villain is close enough to it) roughly where the feeding streams point in the center of the bowl.
 It is possible to get this badge when Hamidon is not present (i.e. there are Devouring Earth Monsters present in the zone).`,
  links: [
    { title: 'Reborn Badge', href: 'https://homecoming.wiki/wiki/Reborn_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
