import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const SickOfTimeTravel: BadgeData = {
  type: 'exploration',
  key: 'sick-of-time-travel',
  setTitleId: [2424],
  name: 'Sick of Time Travel',
  morality: 'all',
  badgeText: `Several investigations into food poisoning at this restaurant found no problem with the food. It was eventually discovered that the frequent dimensional reversions caused by the nearby Temporal Anchor were to blame.`,
  zoneKey: ReclusesVictory.key,
  loc: [-653.2, 0.3, 63.7],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '7',
}
