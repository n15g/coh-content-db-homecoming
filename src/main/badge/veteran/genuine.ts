import { BadgeData } from 'coh-content-db'

export const Genuine: BadgeData = {
  type: 'VETERAN',
  key: 'genuine',
  setTitle: { id: 1283 },
  name: [
    { value: 'Genuine' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You're true to what you believe in; your peers consider you 'Genuine'. You have attained sixty-nine Veteran levels.` },
    { alignment: 'V', value: `You're true to what you believe in: kicking butt and striking fear into everyone you face. Your peers consider you 'Genuine'. You have attained sixty-nine Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 69',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-69.png' }],
}
