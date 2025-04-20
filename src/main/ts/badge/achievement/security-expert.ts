import { BadgeData } from 'coh-content-db'

export const SecurityExpert: BadgeData = {
  type: 'achievement',
  key: 'security-expert',
  setTitleId: [643],
  name: [
    { alignment: 'hero', value: 'Security Expert' },
    { alignment: 'villain', sex: 'M', value: 'Inside Man' },
    { alignment: 'villain', sex: 'F', value: 'Inside Woman' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'You have protected several local businesses in Paragon City, and the public loves you for it.' },
    { alignment: 'villain', value: 'You have protected several local businesses in Paragon City, and now know their security inside and out.' },
  ],
  acquisition: 'Stop 5 vault break-ins in Safeguard Missions.',
  links: [
    { title: 'Security Expert Badge', href: 'https://homecoming.wiki/wiki/Security_Expert_Badge' },
    { title: 'Inside Man Badge', href: 'https://homecoming.wiki/wiki/Inside_Man_Badge' },
    { title: 'Inside Woman Badge', href: 'https://homecoming.wiki/wiki/Inside_Woman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/security-expert.png',
}
