import { BadgeData } from 'coh-content-db'

export const Tourist: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'tourist',
  setTitle: { id: 26, praetorianId: 1660 },
  name: [
    { alignment: 'H', value: 'Tourist' },
    { alignment: 'V', value: 'Visitor' },
    { alignment: 'P', value: 'Lead-Follower' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have earned 10 badges. You are officially a tourist in Paragon City.' },
    { alignment: 'V', value: 'You\'ve earned 10 Badges, making you a Visitor of the Rogue Isles.' },
    {
      alignment: 'P', value: 'Keeping your eyes and ears open, you\'ve earned 10 badges. Amongst those who follow these '
        + 'things, this qualifies you as a Lead-Follower.',
    },
  ],
  acquisition: 'Earn 10 badges',
  links: [
    { title: 'Tourist Badge', href: 'https://homecoming.wiki/wiki/Tourist_Badge' },
    { title: 'Visitor Badge', href: 'https://homecoming.wiki/wiki/Visitor_Badge' },
    { title: 'Lead-Follower Badge', href: 'https://homecoming.wiki/wiki/Lead-Follower_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tourist-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tourist-v.png' },
  ],
}
