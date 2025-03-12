import { BadgeData } from 'coh-content-db'

export const Encouraged: BadgeData = {
  type: 'VETERAN',
  key: 'encouraged',
  setTitle: { id: 1010 },
  name: [
    { value: 'Encouraged' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `There's no denying you've got a name for yourself out there, and you're not about to have that fall into obscurity anytime soon. You have attained fifty-one Veteran levels.` }],
  acquisition: 'Reach Veteran level 51',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-51.png' }],
}
