import { BadgeData } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'

export const OpheliasFinalScene: BadgeData = {
  type: 'exploration',
  key: 'ophelias-final-scene',
  setTitleId: [1776],
  name: `Ophelia's Final Scene`,
  morality: 'paragon-city-access',
  badgeText: `When Perez Park was still a place of safe recreation, Greek tragedies and the plays of Shakespeare were a common occurrence at the nearby open-air theater.
In productions of Hamlet, it had become tradition for Ophelia's drowning scene to be played out in the waters of Everett Lake as Queen Gertrude stood on the dock, lamenting the death of her daughter.`,
  notes: `Located 215 yards northeast of the Everett Lake marker on the map, on the extreme northeast coast of the lake.`,
  links: [
    { title: `Ophelia's Final Scene Badge`, href: 'https://homecoming.wiki/wiki/Ophelia%27s_Final_Scene_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PerezPark.key, coords: [-1743, -32, 2567], icon: 'badge', iconText: '8' } },
  ],
}
