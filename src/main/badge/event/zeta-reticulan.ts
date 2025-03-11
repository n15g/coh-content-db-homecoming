import { BadgeData } from 'coh-content-db'

export const ZetaReticulan: BadgeData = {
  type: 'EVENT',
  key: 'zeta-reticulan',
  setTitle: { id: 2527 },
  name: [
    { value: 'Zeta Reticulan' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've relived the past by defeating 25 of the old school Rikti found during the City of Heroes Anniversary Event.` },
  ],
  acquisition: `Defeat 25 old school Rikti spawned from time capsules during the anniversary event.`,
  links: [
    { title: 'Zeta Reticulan Badge', href: 'https://homecoming.wiki/wiki/Zeta_Reticulan_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/zeta-reticulan.png' }],
}
