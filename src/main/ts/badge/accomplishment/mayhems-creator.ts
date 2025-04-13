import { BadgeData } from 'coh-content-db'
import { TheEndOfAYin } from '../../mission/the-end-of-a-yin'

export const MayhemsCreator: BadgeData = {
  type: 'accomplishment',
  key: 'mayhems-creator',
  setTitleId: [2260],
  name: `Mayhem's Creator`,
  morality: 'villainous',
  badgeText: `You were personally responsible for the creation of a new villainess, Penelope Mayhem. What she will do now is anyone's guess.`,
  acquisition: 'Complete the third story arc from Mr. G (Primal Earth).',
  links: [
    { title: `Mayhem's Creator Badge`, href: 'https://homecoming.wiki/wiki/Mayhem%27s_Creator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png',
  requirements: [
    { key: TheEndOfAYin.key, type: 'mission', missionKey: TheEndOfAYin.key },
  ],
}
