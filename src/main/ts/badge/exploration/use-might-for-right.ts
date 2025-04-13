import { BadgeData } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const UseMightForRight: BadgeData = {
  type: 'exploration',
  key: 'use-might-for-right',
  setTitleId: [1572],
  name: [
    { alignment: 'hero', value: 'Use Might for Right' },
    { alignment: 'villain', value: `Rookie's Mistake` },
  ],
  morality: 'paragon-city-access',
  badgeText: `Longbow has placed various posters in Peregrine Island to attract more powerful heroes back to Atlas Park for the fight against Recluse.
They have plenty of fresh heroes looking to join the fight, though all of them must be turned away due to inexperience,
unless they become fodder for the Arachnos Operatives that plague Recluse's Victory.`,
  notes: `Located in the Bayside Docks neighborhood, behind the Recluse's Victory PvP Recruiter—33 yards northeast of Ghost Falcon and 360 yards southwest of the Bayside Docks marker.`,
  links: [
    { title: 'Use Might for Right Badge', href: 'https://homecoming.wiki/wiki/Use_Might_for_Right_Badge' },
    { title: `Rookie's Mistake`, href: 'https://homecoming.wiki/wiki/Rookie%27s_Mistake_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PeregrineIsland.key, coords: [1424, 0, -774], icon: 'badge', iconText: '2' } },
  ],
}
