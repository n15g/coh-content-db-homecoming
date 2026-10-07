import { BadgeData } from 'coh-content-db'

export const LeadingTheCharge: BadgeData = {
  type: 'pvp',
  key: 'leading-the-charge',
  gameId: 'OnslaughtLaneDefeats',
  setTitleId: [2596],
  name: 'Leading The Charge',
  releaseDate: '2026-12-30',
  morality: 'all',
  badgeText: `You've gained an understanding of what it means to be a leader for your troops, as you've lead the charge on defeating your enemy's soldiers while playing Arena's Onslaught mode.`,
  acquisition: `Defeat 100 of the enemy team's soldiers in an Onslaught Arena match.`,
  links: [
    { title: 'Leading The Charge Badge', href: 'https://homecoming.wiki/wiki/Leading_The_Charge_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/leading-the-charge-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/leading-the-charge-v.png' },
  ],
}
