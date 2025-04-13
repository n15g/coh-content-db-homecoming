import { BadgeData } from 'coh-content-db'
import { AbandonedSewersTrial } from '../../zone/abandoned-sewers-trial'

export const HeadOfTheHydra: BadgeData = {
  type: 'exploration',
  key: 'head-of-the-hydra',
  setTitleId: [146],
  name: 'Head of the Hydra',
  morality: 'paragon-city-access',
  badgeText: `The Hydra threatens Paragon City from the bowels of the sewer system.`,
  notes: `Located under the Hydra spawn point.`,
  links: [
    { title: 'Head of the Hydra Badge', href: 'https://homecoming.wiki/wiki/Head_of_the_Hydra_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AbandonedSewersTrial.key, coords: [0, -695, 15] } },
  ],
}
