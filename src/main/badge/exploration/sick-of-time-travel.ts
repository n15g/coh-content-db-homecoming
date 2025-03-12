import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../map/recluses-victory'

export const SickOfTimeTravel: BadgeData = {
  type: 'EXPLORATION',
  key: 'sick-of-time-travel',
  setTitle: { id: 2424 },
  name: [{ value: 'Sick of Time Travel' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Several investigations into food poisoning at this restaurant found no problem with the food. It was eventually discovered that the frequent dimensional reversions caused by the nearby Temporal Anchor were to blame.` }],
  mapKey: ReclusesVictory.key,
  loc: [-653.2, 0.3, 63.7],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '7',
}
