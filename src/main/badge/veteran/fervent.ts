import { BadgeData } from 'coh-content-db'

export const Fervent: BadgeData = {
  type: 'VETERAN',
  key: 'fervent',
  setTitle: { id: 831 },
  name: [
    { value: 'Fervent' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You stand up for what you believe in time and time again, you're considered 'Fervent' by your peers. You have attained forty-two Veteran levels.` },
    { alignment: 'V', value: `You do what you want and eliminate your competition time and time again, you're considered 'Fervent' by your peers. You have attained forty-two Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 42',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-42.png' }],
}
