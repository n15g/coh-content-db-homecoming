import { BadgeData } from 'coh-content-db'

export const Zealous: BadgeData = {
  type: 'VETERAN',
  key: 'zealous',
  setTitle: { id: 628 },
  name: [
    { value: 'Zealous' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've gained fifteen Veteran levels protecting Rhode Island's jewel, Paragon City.` },
    { alignment: 'V', value: `You've gained fifteen Veteran levels chewing bubblegum and kicking butt. You ran out of gum a long time ago.` },
  ],
  acquisition: 'Reach Veteran level 15',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-15.png' }],
}
