import { BadgeData } from 'coh-content-db'
import { StopBothGroupsOfMysticMadmen } from '../../mission/stop-both-groups-of-mystic-madmen'

export const SpiritWarrior: BadgeData = {
  type: 'accomplishment',
  key: 'spirit-warrior',
  setTitleId: [74],
  name: 'Spirit Warrior',
  morality: 'heroic',
  badgeText: 'You stopped a war between the Banished Pantheon and the Circle of Thorns.',
  acquisition: 'Complete the Stop both Groups of Mystic Madmen mission from Andrea Mitchell, Cain Royce, Dr. Cheng, Piper Irving, Oliver Haak, or Josef Keller.',
  links: [
    { title: 'Spirit Warrior Badge', href: 'https://homecoming.wiki/wiki/Spirit_Warrior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spirit-warrior.png',
  requirements: [
    { key: StopBothGroupsOfMysticMadmen.key, type: 'mission', missionKey: StopBothGroupsOfMysticMadmen.key },
  ],
}
