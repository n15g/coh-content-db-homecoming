import { BadgeData } from 'coh-content-db'
import { TheLastLineOfTheLaw } from '../../mission/the-last-line-of-the-law'

export const EmbodimentOfLaw: BadgeData = {
  type: 'accomplishment',
  key: 'embodiment-of-law',
  setTitleId: [2218],
  name: 'Embodiment of Law',
  morality: 'all',
  badgeText: `You played through Emperor Cole's personal story and saw him fight against the entire army of Arachnos.`,
  links: [
    { title: 'Embodiment of Law Badge', href: 'https://homecoming.wiki/wiki/Embodiment_of_Law_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/embodiment-of-law.png',
  requirements: [
    { key: TheLastLineOfTheLaw.key, type: 'mission', missionKey: TheLastLineOfTheLaw.key },
  ],
}
