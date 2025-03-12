import { BadgeData } from 'coh-content-db'

export const TheCleanser: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'the-cleanser',
  setTitle: { id: 2022 },
  name: [
    { value: 'The Cleanser' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You defeated all of the Lost worshippers before tackling their leader, ensuring he had no '
        + 'followers to fuel his power.',
    },
  ],
  acquisition: 'Defeat all the Lost Worshippers in the Death from Below Sewer Trial before defeating the Lost Leader',
  links: [
    { title: 'The Cleanser Badge', href: 'https://homecoming.wiki/wiki/The_Cleanser_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sewer-trial.png' },
  ],
}
