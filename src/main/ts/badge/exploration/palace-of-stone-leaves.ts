import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const PalaceOfStoneLeaves: BadgeData = {
  type: 'exploration',
  key: 'palace-of-stone-leaves',
  setTitleId: [2180],
  name: 'Palace of Stone Leaves',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Even with every man, woman and child in Dark Astoria slaughtered, the city never ceased to be a thriving metropolis.
The bonds that held Mot in its torpor also prevented the spirits of the slain from passing on.
Forced to remain as ghosts among the empty remnants of their city, the citizens of Dark Astoria did their best to resume a semblance of normality.
Founded by a powerful Tsoo ancestor spirit, the Palace of Stone Leaves was the nerve center of this ghostly community.
Now a refuge protected vigorously by its living Tsoo guardians, it houses the few remaining spirits that were lucky enough to not be swept away and consumed when Mot first stirred from its slumber.`,
  notes: `Located in the Barca Plaza neighborhood, 212 yards north of the Barca marker, in the middle of the area behind the skyscraper.`,
  links: [
    { title: 'Palace of Stone Leaves Badge', href: 'https://homecoming.wiki/wiki/Palace_of_Stone_Leaves_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: DarkAstoria.key, coords: [4160, -42, 720], icon: 'badge', iconText: '2' } },
  ],
}
