import { BadgeData } from 'coh-content-db'
import { ManticoreTaskForce } from '../../mission/manticore-task-force'

export const ManticoresAssociate: BadgeData = {
  type: 'accomplishment',
  key: 'manticores-associate',
  setTitleId: [65],
  name: [
    { alignment: 'hero', value: `Manticore's Associate` },
    { alignment: 'villain', value: `Manticore's Betrayer` },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Manticore was proud to present you with this medal, in recognition of the valor and honor you showed while helping him.' },
    { alignment: 'villain', value: 'Manticore, always the paranoid one, now thinks you let Countess Crey escape on purpose...' },
  ],
  links: [
    { title: `Manticore's Associate Badge`, href: 'https://homecoming.wiki/wiki/Manticore%27s_Associate_Badge' },
    { title: `Manticore's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Manticore%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/manticores-associate.png',
  requirements: [
    { key: ManticoreTaskForce.key, type: 'mission', missionKey: ManticoreTaskForce.key },
  ],
}
