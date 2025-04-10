import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const BrightStar: BadgeData = {
  type: 'exploration',
  key: 'bright-star',
  setTitleId: [109],
  name: 'Bright Star',
  morality: 'paragon-city-access',
  badgeText: `The first Luminary used her light-based powers to disrupt the formation of a large portal to the Rikti homeworld on this spot.`,
  notes: `Located in the Gimry Ridge neighborhood of Steel Canyon, on top of one of the perimeter buildings around the Paragon City University building.

It is found on a ledge between the northeastern most building on the campus and the building just west of it.`,
  links: [
    { title: 'Bright Star Badge', href: 'https://homecoming.wiki/wiki/Bright_Star_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SteelCanyon.key, coords: [-3001.3, -26.2, 1830], icon: 'badge', iconText: '4' } },
  ],
}
