import { BadgeData } from 'coh-content-db'

export const JusticeIncarnate: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'justice-incarnate',
  setTitle: { id: 24, praetorianId: 1672 },
  name: [
    { alignment: 'H', value: 'Justice Incarnate' },
    { alignment: 'V', value: 'Captain' },
    { alignment: 'P', value: 'Primal Praetorian' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Positron has awarded you this badge for achieving Security Level 40.' },
    { alignment: 'V', value: 'Arachnos has awarded you the Captain Badge for reaching Level 40.' },
    {
      alignment: 'P', value: 'Regardless of the dimension in which you find yourself, your involvement in the affairs of '
        + 'Primal and Praetorian Earth has allowed you to establish a well-earned reputation in both '
        + 'worlds.',
    },
  ],
  acquisition: 'Reach level 40',
  links: [
    { title: 'Justice Incarnate Badge', href: 'https://homecoming.wiki/wiki/Justice_Incarnate_Badge' },
    { title: 'Captain Badge', href: 'https://homecoming.wiki/wiki/Captain_Badge' },
    { title: 'Primal Praetorian Badge', href: 'https://homecoming.wiki/wiki/Primal_Praetorian_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/justice-incarnate-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/justice-incarnate-v.png' },
  ],
}
