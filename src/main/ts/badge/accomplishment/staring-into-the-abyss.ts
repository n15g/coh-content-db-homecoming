import { BadgeData } from 'coh-content-db'
import { HuntingTheHunters } from '../../mission/hunting-the-hunters'

export const StaringIntoTheAbyss: BadgeData = {
  type: 'accomplishment',
  key: 'staring-intothe-abyss',
  setTitleId: [2559],
  name: 'Staring Into The Abyss',
  releaseDate: '2025-06-17',
  morality: 'heroic',
  badgeText: `You negotiated with Nemesis, to the joyful sounds of shattering brass, on his own home turf in the Shadow Shard.`,
  acquisition: `Complete Adelard Ziegler's story arc Hunting the Hunters.`,
  links: [
    { title: 'Staring Into The Abyss Badge', href: 'https://homecoming.wiki/wiki/Staring_Into_The_Abyss_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/staring-intothe-abyss.png',
  requirements: [
    { key: HuntingTheHunters.key, type: 'mission', missionKey: HuntingTheHunters.key },
  ],
}
 