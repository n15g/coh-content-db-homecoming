import { BadgeData } from 'coh-content-db'

export const Unswerving: BadgeData = {
  type: 'VETERAN',
  key: 'unswerving',
  setTitle: { id: 634 },
  name: [
    { value: 'Unswerving' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `After paying your dues you have been recognized as 'Unswerving' by the government of Paragon City. You have attained thirty-three Veteran levels.` },
    { alignment: 'V', value: `You continue to elude capture after all this time. You have attained thirty-three Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 33',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-33.png' }],
}
