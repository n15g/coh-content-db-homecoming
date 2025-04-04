import { BadgeData, zoneLink } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const RiktiGoneWild: BadgeData = {
  type: 'exploration',
  key: 'rikti-gone-wild',
  setTitleId: [1575],
  name: 'Rikti Gone Wild',
  morality: 'heroic',
  zoneKey: PeregrineIsland.key,
  loc: [-2893, 0, -6950],
  badgeText: [{
    value: 'The horde of Rikti Monkeys on Monster Island seems to have been confined to this area, supposedly by Crey.'
      + ' Investigations into what exactly went wrong have been going on for some time.'
      + ' Many suspect that the Devouring Earth assaulted the island, destroying the barriers put in place to keep the Rikti in.',
  }],
  notes: `Located in the Cutlass Isles neighborhood of ${zoneLink(PeregrineIsland)}.
`
    + '\n'
    + 'It is at a section of ruined gate 241 yards ENE of the neighborhood marker.',
  links: [
    { title: 'Rikti Gone Wild Badge', href: 'https://homecoming.wiki/wiki/Rikti_Gone_Wild_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '5',
}
