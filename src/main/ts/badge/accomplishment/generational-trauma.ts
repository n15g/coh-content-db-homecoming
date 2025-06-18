import { BadgeData, missionLink } from 'coh-content-db'
import { HuntingTheHunters } from '../../mission/hunting-the-hunters'

export const GenerationalTrauma: BadgeData = {
  type: 'accomplishment',
  key: 'generational-trauma',
  setTitleId: [2564],
  name: 'Generational Trauma',
  releaseDate: '2025-06-17',
  morality: 'heroic',
  badgeText: `You have discovered the consequences of helping Sister Valeria in the past - your encounter with Livia was actually the first time you met the host Nictus inside Arakhn, which now harbors milennia of hatred for you as a result.
The fact that Ourboros did not mend this is telling.`,
  acquisition: `Complete the bonus objectives in the ${missionLink(HuntingTheHunters)} story arc.`,
  links: [
    { title: 'Generational Trauma Badge', href: 'https://homecoming.wiki/wiki/Generational_Trauma_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/generational-trauma.png',
  requirements: [
    { key: HuntingTheHunters.key, type: 'mission', missionKey: HuntingTheHunters.key },
  ],
}
