import { BadgeData } from 'coh-content-db'
import { PraetorDuncan } from '../../contact/praetor-duncan'

export const PraetorSelfish: BadgeData = {
  type: 'accomplishment',
  key: 'praetor-selfish',
  setTitleId: [2197],
  name: 'Praetor Selfish',
  morality: 'all',
  badgeText: `You played through Praetor Duncan's personal story, witnessing the event where Duncan was confronted by her past and kidnapped by Diabolique and Mot.`,
  links: [
    { title: 'Praetor Selfish Badge', href: 'https://homecoming.wiki/wiki/Praetor_Selfish_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: 'ole', type: 'MISSION', missionName: 'One Loose End', contactKey: PraetorDuncan.key },
  ],
}
