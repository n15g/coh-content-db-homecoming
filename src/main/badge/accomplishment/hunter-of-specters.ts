import { BadgeData } from 'coh-content-db'

export const HunterOfSpecters: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'hunter-of-specters',
  setTitle: { id: 2191 },
  name: [
    { value: 'Hunter of Specters' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You worked together with Praetor Duncan to put an end to Diabolique, who was discovered to be '
        + 'working together with Mot.',
    },
  ],
  acquisition: 'Complete the story arc from Praetor Duncan',
  links: [
    { title: 'Hunter of Specters Badge', href: 'https://homecoming.wiki/wiki/Hunter_of_Specters_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png' },
  ],
}
