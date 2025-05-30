import { BadgeData } from 'coh-content-db'
import { AnActOfMercy } from '../../mission/an-act-of-mercy'

export const TheDeterminedMentor: BadgeData = {
  type: 'accomplishment',
  key: 'the-determined-mentor',
  setTitleId: [2189],
  name: 'The Determined Mentor',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Ice Mistral was absorbed by Mot, but you were able to save Scirocco from the creature known as the Sentinel. Scirocco has pledged to not rest until he rescues Ice Mistral from the maw of Mot.',
  links: [
    { title: 'The Determined Mentor Badge', href: 'https://homecoming.wiki/wiki/The_Determined_Mentor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: AnActOfMercy.key, type: 'mission', missionKey: AnActOfMercy.key },
  ],
}
