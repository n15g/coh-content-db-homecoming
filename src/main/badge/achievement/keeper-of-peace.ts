import { BadgeData } from 'coh-content-db'

export const KeeperOfPeace: BadgeData = {
  type: 'achievement',
  key: 'keeper-of-peace',
  setTitleId: [22, 1670],
  name: [
    { alignment: 'hero', value: 'Keeper of Peace' },
    { alignment: 'villain', value: 'Insider' },
    { alignment: 'praetorian', value: 'Survivor of Praetoria' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Positron has awarded you this badge for achieving Security Level 20.' },
    { alignment: 'villain', value: 'Arachnos has awarded you the Insider Badge for reaching Level 20.' },
    { alignment: 'praetorian', value: 'Not many last so long in Praetoria as you have managed. Keep up the good work.' },
  ],
  acquisition: 'Reach level 20.',
  links: [
    { title: 'Keeper of Peace Badge', href: 'https://homecoming.wiki/wiki/Keeper_of_Peace_Badge' },
    { title: 'Insider Badge', href: 'https://homecoming.wiki/wiki/Insider_Badge' },
    { title: 'Survivor of Praetoria Badge', href: 'https://homecoming.wiki/wiki/Survivor_of_Praetoria_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/keeper-of-peace-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/keeper-of-peace-v.png' },
  ],
}
