import { BadgeData } from 'coh-content-db'
import { PerezPark } from '../../map/perez-park'

export const OpheliasFinalScene: BadgeData = {
  type: 'EXPLORATION',
  key: 'ophelias-final-scene',
  setTitle: { id: 1776 },
  name: [{ value: 'Ophelia\'s Final Scene' }],
  alignment: ['H'],
  mapKey: PerezPark.key,
  loc: [-1743, -32, 2567],
  badgeText: [{
    value: 'When Perez Park was still a place of safe recreation, Greek tragedies and the plays of Shakespeare were a common occurrence at the nearby open-air theater.'
      + ' In productions of Hamlet, it had become tradition for Ophelia\'s drowning scene to be played out in the waters of Everett Lake as Queen Gertrude stood on the dock,'
      + ' lamenting the death of her daughter.',
  }],
  notes: 'Located in [map:perez-park] 215 yards northeast of the Everett Lake marker on the map, on the extreme northeast coast of the lake.',
  links: [
    { title: 'Ophelia\'s Final Scene Badge', href: 'https://homecoming.wiki/wiki/Ophelia%27s_Final_Scene_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
