import { BadgeData } from 'coh-content-db'
import { OneLooseEnd } from '../../mission/one-loose-end'

export const PraetorSelfish: BadgeData = {
  type: 'accomplishment',
  key: 'praetor-selfish',
  setTitleId: [2197],
  name: 'Praetor Selfish',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You played through Praetor Duncan's personal story, witnessing the event where Duncan was confronted by her past and kidnapped by Diabolique and Mot.`,
  links: [
    { title: 'Praetor Selfish Badge', href: 'https://homecoming.wiki/wiki/Praetor_Selfish_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: OneLooseEnd.key, type: 'mission', missionKey: OneLooseEnd.key },
  ],
}
