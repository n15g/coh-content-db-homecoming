import { BadgeData } from 'coh-content-db'

export const Tourist: BadgeData = {
  type: 'achievement',
  key: 'tourist',
  setTitleId: [26, 1660],
  name: [
    { alignment: 'hero', value: 'Tourist' },
    { alignment: 'villain', value: 'Visitor' },
    { alignment: 'praetorian', value: 'Lead-Follower' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have earned 10 badges. You are officially a tourist in Paragon City.' },
    { alignment: 'villain', value: `You've earned 10 Badges, making you a Visitor of the Rogue Isles.` },
    { alignment: 'praetorian', value: `Keeping your eyes and ears open, you've earned 10 badges. Amongst those who follow these things, this qualifies you as a Lead-Follower.` },
  ],
  acquisition: 'Earn 10 badges.',
  links: [
    { title: 'Tourist Badge', href: 'https://homecoming.wiki/wiki/Tourist_Badge' },
    { title: 'Visitor Badge', href: 'https://homecoming.wiki/wiki/Visitor_Badge' },
    { title: 'Lead-Follower Badge', href: 'https://homecoming.wiki/wiki/Lead-Follower_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tourist-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tourist-v.png' },
  ],
}
