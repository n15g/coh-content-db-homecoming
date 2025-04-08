import { BadgeData } from 'coh-content-db'
import { Levantera } from '../../contact/levantera'

export const MemberOfVanguard: BadgeData = {
  type: 'accomplishment',
  key: 'member-of-vanguard',
  setTitleId: [832],
  name: 'Member of Vanguard',
  morality: 'all',
  badgeText: 'You are now a member of Vanguard and can earn Merits for defeating Rikti.',
  links: [
    { title: 'Member of Vanguard Badge', href: 'https://homecoming.wiki/wiki/Member_of_Vanguard_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/member-of-vanguard.png',
  requirements: [
    { key: 'join-the-vanguard', type: 'MISSION', missionName: 'Join The Vanguard', contactKey: Levantera.key },
  ],
}
