import { BadgeData } from 'coh-content-db'

export const ProtectorOfInnocents: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'protector-of-innocents',
  setTitle: { id: 21, praetorianId: 1669 },
  name: [
    { alignment: 'H', value: 'Protector of Innocents' },
    { alignment: 'V', value: 'Soldier' },
    { alignment: 'P', value: 'Praetorian Professional' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Positron has awarded you this badge for achieving Security Level 10.' },
    { alignment: 'V', value: 'Arachnos has awarded you the Soldier Badge for reaching Level 10.' },
    {
      alignment: 'P', value: 'Working your way through the ins-and-outs of Praetoria\'s political landscape has become second '
        + 'nature to you.',
    },
  ],
  acquisition: 'Reach level 10',
  links: [
    { title: 'Protector of Innocents Badge', href: 'https://homecoming.wiki/wiki/Protector_of_Innocents_Badge' },
    { title: 'Soldier Badge', href: 'https://homecoming.wiki/wiki/Soldier_Badge' },
    { title: 'Praetorian Professional Badge', href: 'https://homecoming.wiki/wiki/Praetorian_Professional_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/protector-of-innocents-v.png' },
  ],
}
