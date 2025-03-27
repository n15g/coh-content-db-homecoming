import { BadgeData, mapLink } from 'coh-content-db'
import { PeregrineIsland } from '../../map/peregrine-island'

export const RiktiGoneWild: BadgeData = {
  type: 'EXPLORATION',
  key: 'rikti-gone-wild',
  setTitle: { id: 1575 },
  name: [{ value: 'Rikti Gone Wild' }],
  alignment: ['H'],
  mapKey: PeregrineIsland.key,
  loc: [-2893, 0, -6950],
  badgeText: [{
    value: 'The horde of Rikti Monkeys on Monster Island seems to have been confined to this area, supposedly by Crey.'
      + ' Investigations into what exactly went wrong have been going on for some time.'
      + ' Many suspect that the Devouring Earth assaulted the island, destroying the barriers put in place to keep the Rikti in.',
  }],
  notes: `Located in the Cutlass Isles neighborhood of ${mapLink(PeregrineIsland)}.
`
    + '\n'
    + 'It is at a section of ruined gate 241 yards ENE of the neighborhood marker.',
  links: [
    { title: 'Rikti Gone Wild Badge', href: 'https://homecoming.wiki/wiki/Rikti_Gone_Wild_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
