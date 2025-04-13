import { BadgeData } from 'coh-content-db'
import { TheUnluckyArtifact } from '../../mission/the-unlucky-artifact'

export const BadLuck: BadgeData = {
  type: 'accomplishment',
  key: 'bad-luck',
  setTitleId: [340],
  name: 'Bad Luck',
  morality: 'villainous',
  badgeText: 'You and Hard Luck recovered a mystical amulet designed to jinx everyone around the wearer.',
  links: [
    { title: 'Bad Luck Badge', href: 'https://homecoming.wiki/wiki/Bad_Luck_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-6.png',
  requirements: [
    { key: TheUnluckyArtifact.key, type: 'mission', missionKey: TheUnluckyArtifact.key },
  ],
}
