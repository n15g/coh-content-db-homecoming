import { BadgeData } from 'coh-content-db'
import { AbandonedSewersTrial } from '../../map/abandoned-sewers-trial'

export const HeadOfTheHydra: BadgeData = {
  type: 'EXPLORATION',
  key: 'head-of-the-hydra',
  setTitle: { id: 146 },
  name: [{ value: 'Head of the Hydra' }],
  alignment: ['H'],
  mapKey: AbandonedSewersTrial.key,
  loc: [0, -695, 15],
  badgeText: [{
    value: `The Hydra threatens Paragon City from the bowels of the sewer system.`,
  }],
  notes: `Located in the [map:${AbandonedSewersTrial.key}] under where the Hydra spawns.`,
  links: [
    { title: 'Head of the Hydra Badge', href: 'https://homecoming.wiki/wiki/Head_of_the_Hydra_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
}
