import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TimeMachinist: BadgeData = {
  type: 'pvp',
  key: 'time-machinist',
  setTitleId: [564],
  name: 'Time Machinist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have taken over 10 pillboxes in Recluse's Victory, making you a Time Machinist.`,
  acquisition: `Capture 10 pillboxes in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Time Machinist Badge', href: 'https://homecoming.wiki/wiki/Time_Machinist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/time-machinist.png',
}
