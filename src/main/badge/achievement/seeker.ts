import { BadgeData } from 'coh-content-db'

export const Seeker: BadgeData = {
  type: 'achievement',
  key: 'seeker',
  setTitleId: [1580, 1665],
  name: [
    { value: 'Seeker' },
    { alignment: 'praetorian', value: 'Overachiever' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You're a hero recognized for your wide range of accomplishments, but you're not done yet!` },
    { alignment: 'villain', value: `You're a villain who'll do whatever it takes to get what they want, and you've only just begun.` },
    { alignment: 'praetorian', value: 'There are still secrets to root out, and battles to be won, but an Overachiever such as yourself can spare a moment to rest on your vast array of laurels.' },
  ],
  acquisition: 'Earn 500 badges.',
  links: [
    { title: 'Seeker Badge', href: 'https://homecoming.wiki/wiki/Seeker_Badge' },
    { title: 'Overachiever Badge', href: 'https://homecoming.wiki/wiki/Overachiever_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/seeker-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/seeker-v.png' },
  ],
}
