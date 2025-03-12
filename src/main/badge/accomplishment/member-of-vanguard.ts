import { BadgeData } from 'coh-content-db'

export const MemberOfVanguard: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'member-of-vanguard',
  setTitle: { id: 832 },
  name: [
    { value: 'Member of Vanguard' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You are now a member of Vanguard and can earn Merits for defeating Rikti.' },
  ],
  acquisition: 'Complete the first mission from Levantera',
  links: [
    { title: 'Member of Vanguard Badge', href: 'https://homecoming.wiki/wiki/Member_of_Vanguard_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/member-of-vanguard.png' },
  ],
}
