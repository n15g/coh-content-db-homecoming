import { BadgeData } from 'coh-content-db'
import { ErnestoHessTaskForce } from '../../mission/ernesto-hess-task-force'

export const BurkholdersBane: BadgeData = {
  type: 'accomplishment',
  key: 'burkholders-bane',
  setTitleId: [202],
  name: `Burkholder's Bane`,
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have stopped the Council from launching their giant robot against Paragon City.',
  links: [
    { title: `Burkholder's Bane Badge`, href: 'https://homecoming.wiki/wiki/Burkholder%27s_Bane_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/burkholders-bane.png',
  requirements: [
    { key: ErnestoHessTaskForce.key, type: 'mission', missionKey: ErnestoHessTaskForce.key },
  ],
}
