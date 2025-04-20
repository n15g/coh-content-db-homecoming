import { BadgeData } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'

export const HadesAspirant: BadgeData = {
  type: 'exploration',
  key: 'hades-aspirant',
  setTitleId: [1822],
  name: 'Hades Aspirant',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `At the deepest point beneath Paragon City the sounds of the millions above and the machinery that support them filter down to this dark place as a mournful groan.
It is not difficult to understand why this part of the Abandoned Sewer Network came to be known as the Underworld, for no where else does it feel more isolated and desolate.`,
  notes: `Located 382 yards southeast of the Underworld marker, at the base of the metal walkway leading to the sub-sewer shaft in the trial room at the center of the zone.`,
  links: [
    { title: 'Hades Aspirant Badge', href: 'https://homecoming.wiki/wiki/Hades_Aspirant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AbandonedSewerNetwork.key, coords: [16, -896, 0], icon: 'badge', iconText: '2' } },
  ],
}
