import { BadgeData } from 'coh-content-db'
import { TheHeartsOfDarknessRoguesContest } from '../../mission/the-hearts-of-darkness-rogues-contest'

export const DarkHeart: BadgeData = {
  type: 'accomplishment',
  key: 'dark-heart',
  setTitleId: [2017],
  name: 'Dark Heart',
  morality: 'villainous',
  badgeText: `Your role in this contest was irrevocably changed when you became Scirocco's spy.`,
  links: [
    { title: 'Dark Heart Badge', href: 'https://homecoming.wiki/wiki/Dark_Heart_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/dark-heart.png',
  requirements: [
    { key: TheHeartsOfDarknessRoguesContest.key, type: 'mission', missionKey: TheHeartsOfDarknessRoguesContest.key },
  ],
}
