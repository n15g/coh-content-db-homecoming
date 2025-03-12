import { BadgeData } from 'coh-content-db'

export const Antacid: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'antacid',
  setTitle: { id: 1986 },
  name: [
    { value: 'Antacid' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You mocked the Top Dog himself by refusing to use any of the collected Molecular Acids to stop '
        + 'Marauder\'s reinforcements during a Lambda Sector raid.',
    },
  ],
  acquisition: 'Complete the Lambda Sector Incarnate Trial having destroyed all Containment Canisters in sabotage, but using no Molecular Acids',
  links: [
    { title: 'Antacid Badge', href: 'https://homecoming.wiki/wiki/Antacid_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png' },
  ],
}
