import { BadgeData } from 'coh-content-db'

export const Staunch: BadgeData = {
  type: 'VETERAN',
  key: 'staunch',
  setTitle: { id: 629 },
  name: [
    { value: 'Staunch' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `With eighteen Veteran levels to show for your service, you don't see yourself stopping anytime soon.` },
    { alignment: 'V', value: `With eighteen Veteran levels to show for your villainy, one would think you'd have accumulated a decent retirement fund by now.` },
  ],
  acquisition: 'Reach Veteran level 18',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-18.png' }],
}
