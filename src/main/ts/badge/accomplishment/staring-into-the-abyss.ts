import { BadgeData } from 'coh-content-db'
import { HuntingTheHunters } from '../../mission/hunting-the-hunters'

export const StaringIntoTheAbyss: BadgeData = {
  type: 'accomplishment',
  key: 'staring-into-the-abyss',
  setTitleId: [2559],
  name: 'Staring Into The Abyss',
  releaseDate: '2025-06-17',
  morality: 'heroic',
  badgeText: `You assisted Adelard Ziegler with his investigation into the disappearance of the majority of the Council's Void Hunter division.
What you found out was disturbing, with an ominous warning about a possible invasion coming soon.`,
  links: [
    { title: 'Staring Into The Abyss Badge', href: 'https://homecoming.wiki/wiki/Staring_Into_The_Abyss_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/staring-into-the-abyss.png',
  requirements: [
    { key: HuntingTheHunters.key, type: 'mission', missionKey: HuntingTheHunters.key },
  ],
}
