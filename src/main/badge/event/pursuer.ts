import { BadgeData } from 'coh-content-db'

export const Pursuer: BadgeData = {
  type: 'EVENT',
  key: 'pursuer',
  setTitle: { id: 699 },
  name: [
    { alignment: 'H', value: 'Pursuer' },
    { alignment: 'V', value: 'Elusive' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Villains have escaped from the Big Zig, and you have taken it upon yourself to track them down.' },
    { alignment: 'V', value: 'Ever since you got out of the Big Zig, heroes and do-gooders have hunted you down.' },
  ],
  acquisition: 'Awarded for logging in to the game during November.',
  links: [
    { title: 'Pursuer Badge', href: 'https://homecoming.wiki/wiki/Pursuer_Badge' },
    { title: 'Elusive Badge', href: 'https://homecoming.wiki/wiki/Elusive_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/pursuer.png' }],
}
