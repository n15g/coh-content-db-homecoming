import { BadgeData } from 'coh-content-db'

export const RiskTaker: BadgeData = {
  type: 'PVP',
  key: 'risk-taker',
  setTitle: { id: 368 },
  name: [
    { alignment: 'H', value: 'Risk Taker' },
    { alignment: 'V', value: 'Most Wanted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You\'ve contributed to the effort against the Villains by completing a patrol in a PvP zone.' },
    { alignment: 'V', value: 'You\'ve contributed to the effort against the Heroes by completing a patrol in a PvP zone.' },
  ],
  acquisition: 'Complete a patrol mission in a PvP zone (Bloody Bay, Siren\'s Call, or Warburg)',
  links: [
    { title: 'Risk Taker Badge', href: 'https://homecoming.wiki/wiki/Risk_Taker_Badge' },
    { title: 'Most Wanted Badge', href: 'https://homecoming.wiki/wiki/Most_Wanted_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png' },
  ],
}
