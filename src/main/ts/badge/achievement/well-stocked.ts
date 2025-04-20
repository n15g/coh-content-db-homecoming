import { BadgeData } from 'coh-content-db'

export const WellStocked: BadgeData = {
  type: 'achievement',
  key: 'well-stocked',
  setTitleId: [1985],
  name: 'Well-Stocked',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Demonstrating a dogged persistence, you wore Marauder down in Lambda Sector without using a single Pacification Grenade despite having a full set.',
  acquisition: 'Complete the Lambda Sector Incarnate Trial having destroyed all the Weapons Caches in sabotage, but using no Pacification Grenades.',
  links: [
    { title: 'Well-Stocked Badge', href: 'https://homecoming.wiki/wiki/Well-Stocked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png',
}
