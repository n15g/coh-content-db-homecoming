import { BadgeData, zoneLink } from 'coh-content-db'
import { PocketD } from '../../zone/pocket-d'

export const NutrientRich: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'nutrient-rich',
  setTitle: { id: 2541 },
  name: [
    { value: 'Nutrient-Rich' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Despite missing or ignoring the hazardous material warning, Blarf is now fed, although probably not in the way you anticipated...` },
  ],
  acquisition: `In ${zoneLink(PocketD)}, click on Blarf until it defeats you. Blarf's location is marked with a blue dot on the map.`,
  links: [
    { title: 'Nutrient-Rich Badge', href: 'https://homecoming.wiki/wiki/Nutrient-Rich_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/nutrient-rich.png' },
  ],
}
