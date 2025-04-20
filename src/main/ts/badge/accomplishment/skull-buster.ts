import { BadgeData } from 'coh-content-db'
import { TheLordsOfDeath } from '../../mission/the-lords-of-death'

export const SkullBuster: BadgeData = {
  type: 'accomplishment',
  key: 'skull-buster',
  setTitleId: [2316],
  name: 'Skull Buster',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You formed the New Regulators and put a stop to the Skulls' Superadine Ring in Kings Row. You destroyed their lab and put one of The Petrovic Brothers behind bars, leaving the Skulls scattered and weakened.`,
  links: [
    { title: 'Skull Buster Badge', href: 'https://homecoming.wiki/wiki/Skull_Buster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/skull-buster.png',
  requirements: [
    { key: TheLordsOfDeath.key, type: 'mission', missionKey: TheLordsOfDeath.key },
  ],
}
