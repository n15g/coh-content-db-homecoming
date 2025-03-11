import { BadgeData } from 'coh-content-db'
import { PeregrineIsland } from '../../map/peregrine-island'

export const UseMightForRight: BadgeData = {
  type: 'EXPLORATION',
  key: 'use-might-for-right',
  setTitle: { id: 1572 },
  name: [
    { alignment: 'H', value: 'Use Might for Right' },
    { alignment: 'V', value: 'Rookie\'s Mistake' },
  ],
  alignment: ['H'],
  mapKey: PeregrineIsland.key,
  loc: [1424, 0, -774],
  badgeText: [{
    value: 'Longbow has placed various posters in Peregrine Island to attract more powerful heroes back to Atlas Park for the fight against Recluse.'
      + ' They have plenty of fresh heroes looking to join the fight, though all of them must be turned away due to inexperience, unless they become fodder for the Arachnos Operatives'
      + ' that plague Recluse\'s Victory.',
  }],
  notes: 'Located in the Bayside Docks neighborhood of [map:peregrine-island], 33 yards northeast of Ghost Falcon, 360 yards Southwest of the Bayside Docks marker,'
    + ' and behind the Recluse\'s Victory PvP Recruiter.',
  links: [
    { title: 'Use Might for Right Badge', href: 'https://homecoming.wiki/wiki/Use_Might_for_Right_Badge' },
    { title: 'Rookie\'s Mistake', href: 'https://homecoming.wiki/wiki/Rookie%27s_Mistake_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
