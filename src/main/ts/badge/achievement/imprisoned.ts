import { BadgeData } from 'coh-content-db'

export const Imprisoned: BadgeData = {
  type: 'achievement',
  key: 'imprisoned',
  setTitleId: [20, 1695],
  name: [
    { alignment: 'hero', value: 'Imprisoned' },
    { alignment: 'villain', value: 'Dazed and Confused' },
    { alignment: 'praetorian', value: 'Trapped' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Your skill at being held immobile and not being able to do anything is unmatched.' },
    { alignment: 'villain', value: `That's 1 hour you've spent on your back Slept, Immobilized or Held. Yet still you fight on.` },
    { alignment: 'praetorian', value: 'With all the time you spend in invisible boxes and cages, have you considered a career as a mime?' },
  ],
  acquisition: 'Be held for 60 minutes.',
  links: [
    { title: 'Imprisoned Badge', href: 'https://homecoming.wiki/wiki/Imprisoned_Badge' },
    { title: 'Dazed and Confused Badge', href: 'https://homecoming.wiki/wiki/Dazed_and_Confused_Badge' },
    { title: 'Trapped Badge', href: 'https://homecoming.wiki/wiki/Trapped_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
