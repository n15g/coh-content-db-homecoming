import { BadgeData } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const NaturesWrath: BadgeData = {
  type: 'exploration',
  key: 'natures-wrath',
  setTitleId: [1843],
  name: `Nature's Wrath`,
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This hill rises like a blister above the canopy that spread like a green plaque to devour Woodvale.
This is a good vantage point to see the devastation the Devouring Earth have wrought.
But it is also strangely calm, an oasis of quiet in a sea of slavering monstrosities.
You are not sure why this hill is so devoid of danger, perhaps it is a true reflection of what the Devouring Earth have to offer.
But such thoughts are borderline insane and likely planted there by some trick of Hamidon's making.`,
  notes: `Located 206 yards west of The Pit marker, atop a hill next to a light rail track.`,
  links: [
    { title: `Nature's Wrath Badge`, href: 'https://homecoming.wiki/wiki/Nature%27s_Wrath_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Eden.key, coords: [-1963, 55, 3257], icon: 'badge', iconText: '4' } },
  ],
}
