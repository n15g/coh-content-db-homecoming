import { BadgeData, zoneLink } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'

export const HadesAspirant: BadgeData = {
  type: 'EXPLORATION',
  key: 'hades-aspirant',
  setTitle: { id: 1822 },
  name: [{ value: 'Hades Aspirant' }],
  alignment: ['H'],
  zoneKey: AbandonedSewerNetwork.key,
  loc: [16, -896, 0],
  badgeText: [{
    value: 'At the deepest point beneath Paragon City the sounds of the millions above and the machinery that support them filter down to this dark place as a mournful groan.'
      + ' It is not difficult to understand why this part of the Abandoned Sewer Network came to be known as the Underworld, for no where else does it feel more isolated and desolate.',
  }],
  notes: `Located in ${zoneLink(AbandonedSewerNetwork)} 382 yards southeast of the Underworld marker, at the base of the metal walkway leading to the sub-sewer shaft in the trial room in the center of the zone.`,
  links: [
    { title: 'Hades Aspirant Badge', href: 'https://homecoming.wiki/wiki/Hades_Aspirant_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
