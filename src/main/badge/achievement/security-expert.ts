import { BadgeData } from 'coh-content-db'

export const SecurityExpert: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'security-expert',
  setTitle: { id: 643 },
  name: [
    { alignment: 'H', value: 'Security Expert' },
    { alignment: 'V', sex: 'M', value: 'Inside Man' },
    { alignment: 'V', sex: 'F', value: 'Inside Woman' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have protected several local businesses in Paragon City, and the public loves you for it.' },
    {
      alignment: 'V', value: 'You have protected several local businesses in Paragon City, and now know their security '
        + 'inside and out.',
    },
  ],
  acquisition: 'Stop 5 vault break-ins in Safeguard Missions',
  links: [
    { title: 'Security Expert Badge', href: 'https://homecoming.wiki/wiki/Security_Expert_Badge' },
    { title: 'Inside Man Badge', href: 'https://homecoming.wiki/wiki/Inside_Man_Badge' },
    { title: 'Inside Woman Badge', href: 'https://homecoming.wiki/wiki/Inside_Woman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/security-expert.png' },
  ],
}
