import { BadgeData } from 'coh-content-db'

export const Staunch: BadgeData = {
  type: 'veteran',
  key: 'staunch',
  setTitleId: [629],
  name: 'Staunch',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `With eighteen Veteran levels to show for your service, you don't see yourself stopping anytime soon.` },
    { alignment: 'villain', value: `With eighteen Veteran levels to show for your villainy, one would think you'd have accumulated a decent retirement fund by now.` },
  ],
  acquisition: 'Reach Veteran level 18.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-18.png',
}
