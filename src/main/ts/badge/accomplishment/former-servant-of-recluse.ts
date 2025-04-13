import { BadgeData } from 'coh-content-db'
import { LordRecluseStrikeForce } from '../../mission/lord-recluse-strike-force'

export const FormerServantOfRecluse: BadgeData = {
  type: 'accomplishment',
  key: 'former-servant-of-recluse',
  setTitleId: [323],
  name: [
    { alignment: 'hero', value: 'Former Servant of Recluse' },
    { alignment: 'villain', value: 'Servant of Recluse' },
  ],
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You have broken Paragon City's 'best,' and now must atone for those actions.` },
    { alignment: 'villain', value: `You have broken Paragon City's 'best.' Let everyone fear you!` },
  ],
  links: [
    { title: 'Former Servant of Recluse Badge', href: 'https://homecoming.wiki/wiki/Former_Servant_of_Recluse_Badge' },
    { title: 'Servant of Recluse Badge', href: 'https://homecoming.wiki/wiki/Servant_of_Recluse_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/former-servant-of-recluse.png',
  requirements: [
    { key: LordRecluseStrikeForce.key, type: 'mission', missionKey: LordRecluseStrikeForce.key },
  ],
}
