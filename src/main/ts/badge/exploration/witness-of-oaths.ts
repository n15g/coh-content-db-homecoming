import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const WitnessOfOaths: BadgeData = {
  type: 'exploration',
  key: 'witness-of-oaths',
  setTitleId: [2184],
  name: 'Witness of Oaths',
  morality: 'all',
  badgeText: `Many false heroes over the years have claimed vindication over the events that transpired in Dark Astoria, unaware that their hollow words would one day be called to account.
Screaming and pleading, many have been dragged into the ruined city by the Talons of Vengeance to pay the ultimate price for oath breaking.`,
  notes: `Located 339 yards ESE of the Raimi marker, on the western of two identical statues in the area. The correct statue faces southwest and is farther from the eastern wall.`,
  links: [
    { title: 'Witness of Oaths Badge', href: 'https://homecoming.wiki/wiki/Witness_of_Oaths_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: DarkAstoria.key, coords: [2909, 191, 4574], icon: 'badge', iconText: '6' } },
  ],
}
