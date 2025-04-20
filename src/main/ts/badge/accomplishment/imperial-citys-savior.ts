import { BadgeData } from 'coh-content-db'
import { TheEmperorsSword } from '../../mission/the-emperors-sword'

export const ImperialCitysSavior: BadgeData = {
  type: 'accomplishment',
  key: 'imperial-citys-savior',
  setTitleId: [2217],
  name: `Imperial City's Savior`,
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You helped the forces of Primal Earth take Imperial City from Praetor Sinclair.',
  links: [
    { title: `Imperial City's Savior Badge`, href: 'https://homecoming.wiki/wiki/Imperial_City%27s_Savior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/imperial-citys-savior.png',
  requirements: [
    { key: TheEmperorsSword.key, type: 'mission', missionKey: TheEmperorsSword.key },
  ],
}
