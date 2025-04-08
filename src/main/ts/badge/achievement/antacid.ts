import { BadgeData } from 'coh-content-db'

export const Antacid: BadgeData = {
  type: 'achievement',
  key: 'antacid',
  setTitleId: [1986],
  name: 'Antacid',
  morality: 'all',
  badgeText: `You mocked the Top Dog himself by refusing to use any of the collected Molecular Acids to stop Marauder's reinforcements during a Lambda Sector raid.`,
  acquisition: 'Complete the Lambda Sector Incarnate Trial having destroyed all Containment Canisters in sabotage, but using no Molecular Acids.',
  links: [
    { title: 'Antacid Badge', href: 'https://homecoming.wiki/wiki/Antacid_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png',
}
