import { BadgeData } from 'coh-content-db'

export const UntilTheEndOfTheWorld: BadgeData = {
  type: 'achievement',
  key: 'until-the-end-of-the-world',
  setTitleId: [2361],
  name: 'Until the End of the World',
  morality: 'all',
  badgeText: `You've seen your world and others come to the brink many times, but each time you've been there to pull them back and keep things going. And you'll continue to be there, no matter what the future brings.`,
  acquisition: 'Collect 1500 badges to earn this badge.',
  links: [
    { title: 'Until the End of the World Badge', href: 'https://homecoming.wiki/wiki/Until_the_End_of_the_World_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/until-the-end-of-the-world-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/until-the-end-of-the-world-v.png' },
  ],
}
