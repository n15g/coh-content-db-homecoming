import { BadgeData } from 'coh-content-db'
import { TheGraveyardShift } from '../../mission/the-graveyard-shift'

export const UncivilWarrior: BadgeData = {
  type: 'accomplishment',
  key: 'uncivil-warrior',
  setTitleId: [2437],
  name: 'Uncivil Warrior',
  morality: 'heroic',
  badgeText: `As the crescendo to a wild adventure that took you all over the city and into many life-threatening scenarios, you went straight to the heart of where the last Vahzilok
leader was trying to navigate the complex civil war within the ranks.
Cortex was able to escape you, but Dr. Pierce was left trapped in her own mess of lies and deceptions, her fate left to the authorities and the Paragon justice system.`,
  links: [
    { title: 'Uncivil Warrior Badge', href: 'https://homecoming.wiki/wiki/Uncivil_Warrior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/uncivil-warrior.png',
  requirements: [
    { key: TheGraveyardShift.key, type: 'mission', missionKey: TheGraveyardShift.key },
  ],
}
