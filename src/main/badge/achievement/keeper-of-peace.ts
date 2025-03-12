import { BadgeData } from 'coh-content-db'

export const KeeperOfPeace: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'keeper-of-peace',
  setTitle: { id: 22, praetorianId: 1670 },
  name: [
    { alignment: 'H', value: 'Keeper of Peace' },
    { alignment: 'V', value: 'Insider' },
    { alignment: 'P', value: 'Survivor of Praetoria' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Positron has awarded you this badge for achieving Security Level 20.' },
    { alignment: 'V', value: 'Arachnos has awarded you the Insider Badge for reaching Level 20.' },
    { alignment: 'P', value: 'Not many last so long in Praetoria as you have managed. Keep up the good work.' },
  ],
  acquisition: 'Reach level 20',
  links: [
    { title: 'Keeper of Peace Badge', href: 'https://homecoming.wiki/wiki/Keeper_of_Peace_Badge' },
    { title: 'Insider Badge', href: 'https://homecoming.wiki/wiki/Insider_Badge' },
    { title: 'Survivor of Praetoria Badge', href: 'https://homecoming.wiki/wiki/Survivor_of_Praetoria_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/keeper-of-peace-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/keeper-of-peace-v.png' },
  ],
}
