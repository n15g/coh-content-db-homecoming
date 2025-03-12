import { BadgeData } from 'coh-content-db'

export const Synchronized: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'synchronized',
  setTitle: { id: 1984 },
  name: [
    { value: 'Synchronized' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You proved masterful coordination during a raid on Lambda Sector by your league destroying two '
        + 'separate objectives simultaneously.',
    },
  ],
  acquisition: 'Destroy a Weapons Cache and a Containment Canister within 2 seconds of each other during the Lambda Sector Incarnate Trial',
  links: [
    { title: 'Synchronized Badge', href: 'https://homecoming.wiki/wiki/Synchronized_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png' },
  ],
}
