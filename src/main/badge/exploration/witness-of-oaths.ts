import { BadgeData, zoneLink } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const WitnessOfOaths: BadgeData = {
  type: 'EXPLORATION',
  key: 'witness-of-oaths',
  setTitle: { id: 2184 },
  name: [{ value: 'Witness of Oaths' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: DarkAstoria.key,
  loc: [2909, 191, 4574],
  badgeText: [{
    value: `Many false heroes over the years have claimed vindication over the events that transpired in Dark Astoria, unaware that their hollow words would one day be called to account.
Screaming and pleading, many have been dragged into the ruined city by the Talons of Vengeance to pay the ultimate price for oath breaking.`,
  }],
  notes: `Located in ${zoneLink(DarkAstoria)} in the Raimi Arcade neighborhood, 339 yards east of the Raimi marker, and slightly south.

Note: There are two identical statues a few hundred yards apart. One faces southeast and is closer to the eastern wall; the badge is on the one further west, facing southwest.`,
  links: [
    { title: 'Witness of Oaths Badge', href: 'https://homecoming.wiki/wiki/Witness_of_Oaths_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
