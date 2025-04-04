import { BadgeData } from 'coh-content-db'
import { Corrupter } from '../accomplishment/corrupter'

export const NemesisSoldier: BadgeData = {
  type: 'gladiator',
  key: 'nemesis-soldier',
  setTitleId: [495],
  name: [
    { value: 'Nemesis Soldier' },
  ],
  morality: 'heroic',
  badgeText: [
    { value: 'You have a robotic warrior for the games.' },
  ],
  links: [
    { title: 'Nemesis Soldier Badge', href: 'https://homecoming.wiki/wiki/Nemesis_Soldier_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Corrupter.key, type: 'badge', badgeKey: Corrupter.key },
  ],
}
