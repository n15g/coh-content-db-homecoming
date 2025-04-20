import { BadgeData } from 'coh-content-db'

export const Pursuer: BadgeData = {
  type: 'event',
  key: 'pursuer',
  setTitleId: [699],
  name: [
    { alignment: 'hero', value: 'Pursuer' },
    { alignment: 'villain', value: 'Elusive' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Villains have escaped from the Big Zig, and you have taken it upon yourself to track them down.' },
    { alignment: 'villain', value: 'Ever since you got out of the Big Zig, heroes and do-gooders have hunted you down.' },
  ],
  acquisition: 'Awarded for logging in to the game during November.',
  links: [
    { title: 'Pursuer Badge', href: 'https://homecoming.wiki/wiki/Pursuer_Badge' },
    { title: 'Elusive Badge', href: 'https://homecoming.wiki/wiki/Elusive_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/pursuer.png',
}
