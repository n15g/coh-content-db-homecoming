import { BadgeData } from 'coh-content-db'

export const ProtectorOfInnocents: BadgeData = {
  type: 'achievement',
  key: 'protector-of-innocents',
  setTitleId: [21, 1669],
  name: [
    { alignment: 'hero', value: 'Protector of Innocents' },
    { alignment: 'villain', value: 'Soldier' },
    { alignment: 'praetorian', value: 'Praetorian Professional' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Positron has awarded you this badge for achieving Security Level 10.' },
    { alignment: 'villain', value: 'Arachnos has awarded you the Soldier Badge for reaching Level 10.' },
    { alignment: 'praetorian', value: `Working your way through the ins-and-outs of Praetoria's political landscape has become second nature to you.` },
  ],
  acquisition: 'Reach level 10.',
  links: [
    { title: 'Protector of Innocents Badge', href: 'https://homecoming.wiki/wiki/Protector_of_Innocents_Badge' },
    { title: 'Soldier Badge', href: 'https://homecoming.wiki/wiki/Soldier_Badge' },
    { title: 'Praetorian Professional Badge', href: 'https://homecoming.wiki/wiki/Praetorian_Professional_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-v.png' },
  ],
}
