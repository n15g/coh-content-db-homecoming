import { BadgeData, zoneLink } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'
import { SirensCall } from '../../zone/sirens-call'
import { Warburg } from '../../zone/warburg'

export const RiskTaker: BadgeData = {
  type: 'pvp',
  key: 'risk-taker',
  setTitleId: [368],
  name: [
    { alignment: 'hero', value: 'Risk Taker' },
    { alignment: 'villain', value: 'Most Wanted' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've contributed to the effort against the Villains by completing a patrol in a PvP zone.` },
    { alignment: 'villain', value: `You've contributed to the effort against the Heroes by completing a patrol in a PvP zone.` },
  ],
  acquisition: `Complete a patrol mission in a PvP zone (${zoneLink(BloodyBay)}, ${zoneLink(SirensCall)}, or ${zoneLink(Warburg)}).`,
  links: [
    { title: 'Risk Taker Badge', href: 'https://homecoming.wiki/wiki/Risk_Taker_Badge' },
    { title: 'Most Wanted Badge', href: 'https://homecoming.wiki/wiki/Most_Wanted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png',
}
