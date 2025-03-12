import { BadgeData } from 'coh-content-db'

export const LambdaLooter: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'lambda-looter',
  setTitle: { id: 1987 },
  name: [
    { value: 'Lambda Looter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Perhaps you didn\'t know this, but the items collected in Lambda Sector can be used in the '
        + 'fight versus Marauder to make it easier. Your league, however, decided to collect a full set '
        + 'of both items and not use a single one. Kudos to you.',
    },
  ],
  acquisition: 'Complete the Lambda Sector Incarnate Trial having destroyed all containers in sabotage, but using no Pacification Grenades or Molecular Acids',
  links: [
    { title: 'Lambda Looter Badge', href: 'https://homecoming.wiki/wiki/Lambda_Looter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png' },
  ],
}
