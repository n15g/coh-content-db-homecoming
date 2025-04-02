import { BadgeData } from 'coh-content-db'
import { ErnestoHess } from '../../contact/ernesto-hess'

export const BurkholdersBane: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'burkholders-bane',
  setTitle: { id: 202 },
  name: `Burkholder's Bane`,
  alignment: ['H'],
  badgeText: 'You have stopped the Council from launching their giant robot against Paragon City.',
  links: [
    { title: `Burkholder's Bane Badge`, href: 'https://homecoming.wiki/wiki/Burkholder%27s_Bane_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/burkholders-bane.png',
  requirements: [
    { key: 'ernesto-hess-task-force', type: 'TASK_FORCE', missionName: 'Ernesto Hess Task Force', contactKey: ErnestoHess.key },
  ],
}
