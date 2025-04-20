import { BadgeData } from 'coh-content-db'
import { PenelopeYinTaskForce } from '../../mission/penelope-yin-task-force'

export const PenelopeYinsFriend: BadgeData = {
  type: 'accomplishment',
  key: 'penelope-yins-friend',
  setTitleId: [2241],
  name: [
    { alignment: 'hero', value: `Penelope Yin's Friend` },
    { alignment: 'villain', value: `Penelope Yin's Betrayer` },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Penelope Yin has expressed her gratitude by presenting you with this medal.' },
    { alignment: 'villain', value: 'Penelope Yin probably wishes she could erase the memory of having given you this medal.' },
  ],
  links: [
    { title: `Penelope Yin's Friend Badge`, href: 'https://homecoming.wiki/wiki/Penelope_Yin%27s_Friend_Badge' },
    { title: `Penelope Yin's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Penelope_Yin%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tf-3.png',
  requirements: [
    { key: PenelopeYinTaskForce.key, type: 'mission', missionKey: PenelopeYinTaskForce.key },
  ],
}
