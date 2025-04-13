import { BadgeData } from 'coh-content-db'
import { HippocraticOath } from '../../mission/hippocratic-oath'

export const DoNoHarm: BadgeData = {
  type: 'accomplishment',
  key: 'do-no-harm',
  setTitleId: [2386],
  name: 'Do No Harm',
  morality: 'heroic',
  badgeText: `You have delivered medical supplies to the Rikti.`,
  links: [
    { title: 'Do No Harm Badge', href: 'https://homecoming.wiki/wiki/Do_No_Harm_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/do_no_harm.png',
  requirements: [
    { key: HippocraticOath.key, type: 'mission', missionKey: HippocraticOath.key },
  ],
}
