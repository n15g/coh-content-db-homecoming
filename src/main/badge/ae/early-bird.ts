import { BadgeData } from 'coh-content-db'

export const EarlyBird: BadgeData = {
  type: 'AE',
  key: 'early-bird',
  setTitle: { id: 1151 },
  name: [
    { value: 'Early Bird' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'Your eagerness to try out newly created Architect Missions has earned you the Early Bird badge. This badge is awarded to all characters on your account.' }],
  acquisition: 'Be one of the first players to rate a Mission Architect story arc.',
  links: [
    { title: 'Early Bird Badge', href: 'https://homecoming.wiki/wiki/Early_Bird_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/early-bird.png' }],
}
