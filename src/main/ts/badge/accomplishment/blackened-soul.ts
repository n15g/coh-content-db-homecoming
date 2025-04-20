import { BadgeData } from 'coh-content-db'
import { TheHeartsOfDarknessHeroicMeasures } from '../../mission/the-hearts-of-darkness-heroic-measures'

export const BlackenedSoul: BadgeData = {
  type: 'accomplishment',
  key: 'blackened-soul',
  setTitleId: [2018],
  name: 'Blackened Soul',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `Having won the contest by besting your rivals, you've been given the task of now dealing with them... permanently.`,
  links: [
    { title: 'Blackened Soul Badge', href: 'https://homecoming.wiki/wiki/Blackened_Soul_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/blackened-soul.png',
  requirements: [
    { key: TheHeartsOfDarknessHeroicMeasures.key, type: 'mission', missionKey: TheHeartsOfDarknessHeroicMeasures.key },
  ],
}
