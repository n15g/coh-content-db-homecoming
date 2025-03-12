import { BadgeData } from 'coh-content-db'

export const WellStocked: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'well-stocked',
  setTitle: { id: 1985 },
  name: [
    { value: 'Well-Stocked' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Demonstrating a dogged persistence, you wore Marauder down in Lambda Sector without using a '
        + 'single Pacification Grenade despite having a full set.',
    },
  ],
  acquisition: 'Complete the Lambda Sector Incarnate Trial having destroyed all the Weapons Caches in sabotage, but using no Pacification Grenades',
  links: [
    { title: 'Well-Stocked Badge', href: 'https://homecoming.wiki/wiki/Well-Stocked_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png' },
  ],
}
