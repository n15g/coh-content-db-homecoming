import { BadgeData, zoneLink } from 'coh-content-db'
import { PocketD } from '../../zone/pocket-d'

export const NutrientRich: BadgeData = {
  type: 'accomplishment',
  key: 'nutrient-rich',
  setTitleId: [2541],
  name: 'Nutrient-Rich',
  morality: 'all',
  badgeText: `Despite missing or ignoring the hazardous material warning, Blarf is now fed, although probably not in the way you anticipated...`,
  acquisition: `Click on Blarf in ${zoneLink(PocketD)} until it defeats you.`,
  notes: `Blarf's location is marked with a blue dot on the map at (-153.6, 0.0, -780.3).`,
  links: [
    { title: 'Nutrient-Rich Badge', href: 'https://homecoming.wiki/wiki/Nutrient-Rich_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/nutrient-rich.png',
}
