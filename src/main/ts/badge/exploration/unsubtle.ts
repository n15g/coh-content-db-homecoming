import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const Unsubtle: BadgeData = {
  type: 'exploration',
  key: 'unsubtle',
  setTitleId: [1570],
  name: 'Unsubtle',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Clamor of the Freakshow used this warehouse as a hideout after escaping from the Zig - sort of.
She lasted barely an hour in hiding before bursting out of the warehouse to attack PPD searching for her.
This spilled out into an all-out brawl with nearby Council and 5th Column, allowing Bile to swoop in and pull Clamor out from the chaos.`,
  notes: `Located in the Abyss Towers neighborhood, in front of the first building on your left as you enter the underside section from the east side.`,
  links: [
    { title: 'Unsubtle Badge', href: 'https://homecoming.wiki/wiki/Unsubtle_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Brickstown.key, coords: [-2260, -64, -1579], icon: 'badge', iconText: '8' } },
  ],
}
