import { BadgeData } from 'coh-content-db'
import { NemesisRex } from '../../mission/nemesis-rex'

export const TrueNemesis: BadgeData = {
  type: 'accomplishment',
  key: 'true-nemesis',
  setTitleId: [2387],
  name: 'True Nemesis',
  releaseDate: '2019-01-01',
  morality: 'heroic',
  badgeText: `You have stopped Nemesis Rex's incursion into Primal Earth.`,
  links: [
    { title: 'True Nemesis Badge', href: 'https://homecoming.wiki/wiki/True_Nemesis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/true_nemesis.png',
  requirements: [
    { key: NemesisRex.key, type: 'mission', missionKey: NemesisRex.key },
  ],
}
