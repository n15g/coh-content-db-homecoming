import { BadgeData, zoneLink } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const Oobatz: BadgeData = {
  type: 'accomplishment',
  key: 'oobatz',
  setTitleId: [2319],
  name: 'Oobatz',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You stopped Longbow from raiding a Family casino in St. Martial, then proceeded to rob the Family blind. The goons of the Family have taken to calling you 'Oobatz', crazy, for daring to cross them.`,
  acquisition: `Complete the The Family Raid zone event in ${zoneLink(StMartial)}.`,
  links: [
    { title: 'Oobatz Badge', href: 'https://homecoming.wiki/wiki/Oobatz_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png',
}
