import { BadgeData } from 'coh-content-db'

export const Leader: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'leader',
  setTitle: { id: 244, praetorianId: 1704 },
  name: [
    { value: 'Leader' },
    { alignment: 'P', value: 'The Chosen One' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'Your very name instills both hope and inspiration to the people of Paragon City, you truly are '
        + 'a Leader.',
    },
    {
      alignment: 'V', value: 'Your very name strikes both fear and awe into the hearts of the citizens of the Rogue Isles.  '
        + 'You are considered a Leader.',
    },
    {
      alignment: 'P', value: 'Could it be that all along there has been some hand of fate at work here? Your name commands '
        + 'such weight, you now dare to dream that Praetoria\'s future may be in your hands after all...',
    },
  ],
  acquisition: 'Earn 500,000,000 influence',
  links: [
    { title: 'Leader Badge', href: 'https://homecoming.wiki/wiki/Leader_Badge' },
    { title: 'The Chosen One Badge', href: 'https://homecoming.wiki/wiki/The_Chosen_One_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
