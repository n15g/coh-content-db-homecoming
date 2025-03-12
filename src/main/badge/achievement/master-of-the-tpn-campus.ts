import { BadgeData } from 'coh-content-db'

export const MasterOfTheTpnCampus: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-tpn-campus',
  setTitle: { id: 2077 },
  name: [
    { value: 'Master of the TPN Campus' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: TPN Campus.' },
  ],
  acquisition: 'Earn the Spin Doctor, News Flash, Fair & Balanced, Television Addict, and Tonight\'s Top Story badges',
  links: [
    { title: 'Master of the TPN Campus Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_TPN_Campus_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-tpn-campus.png' },
  ],
}
