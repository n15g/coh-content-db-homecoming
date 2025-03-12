import { BadgeData } from 'coh-content-db'

export const NoOneLeftBehind: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'no-one-left-behind',
  setTitle: { id: 1895 },
  name: [
    { value: 'No One Left Behind' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You helped saved the injured Rogue PPD from being killed in a burning building, showing that '
        + 'you\'re willing to lend a helping hand even to your enemies.',
    },
  ],
  acquisition: 'Save all the Rogue PPD in the hero story arc from Roy Cooling',
  links: [
    { title: 'No One Left Behind Badge', href: 'https://homecoming.wiki/wiki/No_One_Left_Behind_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/no-one-left-behind.png' },
  ],
}
