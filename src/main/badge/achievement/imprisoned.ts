import { BadgeData } from 'coh-content-db'

export const Imprisoned: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'imprisoned',
  setTitle: { id: 20, praetorianId: 1695 },
  name: [
    { alignment: 'H', value: 'Imprisoned' },
    { alignment: 'V', value: 'Dazed and Confused' },
    { alignment: 'P', value: 'Trapped' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Your skill at being held immobile and not being able to do anything is unmatched.' },
    { alignment: 'V', value: 'That\'s 1 hour you\'ve spent on your back Slept, Immobilized or Held. Yet still you fight on.' },
    {
      alignment: 'P', value: 'With all the time you spend in invisible boxes and cages, have you considered a career as a '
        + 'mime?',
    },
  ],
  acquisition: 'Be held for 60 minutes',
  links: [
    { title: 'Imprisoned Badge', href: 'https://homecoming.wiki/wiki/Imprisoned_Badge' },
    { title: 'Dazed and Confused Badge', href: 'https://homecoming.wiki/wiki/Dazed_and_Confused_Badge' },
    { title: 'Trapped Badge', href: 'https://homecoming.wiki/wiki/Trapped_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
