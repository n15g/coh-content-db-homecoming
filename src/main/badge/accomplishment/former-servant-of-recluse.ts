import { BadgeData } from 'coh-content-db'
import { LordRecluse } from '../../contact/lord-recluse'

export const FormerServantOfRecluse: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'former-servant-of-recluse',
  setTitle: { id: 323 },
  name: [
    { alignment: 'H', value: 'Former Servant of Recluse' },
    { alignment: 'V', value: 'Servant of Recluse' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `You have broken Paragon City's 'best,' and now must atone for those actions.` },
    { alignment: 'V', value: `You have broken Paragon City's 'best.' Let everyone fear you!` },
  ],
  links: [
    { title: 'Former Servant of Recluse Badge', href: 'https://homecoming.wiki/wiki/Former_Servant_of_Recluse_Badge' },
    { title: 'Servant of Recluse Badge', href: 'https://homecoming.wiki/wiki/Servant_of_Recluse_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/former-servant-of-recluse.png',
  requirements: [
    { key: 'lord-recluse-strike-force', type: 'TASK_FORCE', missionName: 'Lord Recluse Strike Force', contactKey: LordRecluse.key },
  ],
}
