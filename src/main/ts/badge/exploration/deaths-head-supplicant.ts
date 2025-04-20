import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const DeathsHeadSupplicant: BadgeData = {
  type: 'exploration',
  key: 'deaths-head-supplicant',
  setTitleId: [2182],
  name: `Death's Head Supplicant`,
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Behold! Before you lies the glory of Mot.
In this place its true body lies exposed; a vast expanse of reconstituting flesh and yawning maws, feasting on life so it can be resuscitated as it perpetually dies and rots anew.
Mot's capacity for consumption does not yet equal its appetites, for much of the body is desiccated by centuries of imprisonment or is still bound in ways both arcane and metaphysical.
The many mouths that scar its horrid form are, as of yet, still stifled and immature compared to their glory in antiquity.
Only one has fully extended to its full voraciousness, but that one is enough to drag all of Dark Astoria into crushing oblivion.`,
  notes: `Located in the Moth Cemetery neighborhood, approx. 191 yards northwest of the Moth Cemetery marker.`,
  links: [
    { title: `Death's Head Supplicant Badge`, href: 'https://homecoming.wiki/wiki/Death%27s_Head_Supplicant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: DarkAstoria.key, coords: [1727, 233, 905], icon: 'badge', iconText: '4' } },
  ],
}
