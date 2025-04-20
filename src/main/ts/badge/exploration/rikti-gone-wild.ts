import { BadgeData } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const RiktiGoneWild: BadgeData = {
  type: 'exploration',
  key: 'rikti-gone-wild',
  setTitleId: [1575],
  name: 'Rikti Gone Wild',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The horde of Rikti Monkeys on Monster Island seems to have been confined to this area, supposedly by Crey.
Investigations into what exactly went wrong have been going on for some time.
Many suspect that the Devouring Earth assaulted the island, destroying the barriers put in place to keep the Rikti in.`,
  notes: `Located in the Cutlass Isles neighborhood at a section of ruined gate 241 yards ENE of the neighborhood marker.`,
  links: [
    { title: 'Rikti Gone Wild Badge', href: 'https://homecoming.wiki/wiki/Rikti_Gone_Wild_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PeregrineIsland.key, coords: [-2893, 0, -6950], icon: 'badge', iconText: '5' } },
  ],
}
