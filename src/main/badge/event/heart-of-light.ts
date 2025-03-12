import { BadgeData } from 'coh-content-db'

export const HeartOfLight: BadgeData = {
  type: 'EVENT',
  key: 'heart-of-light',
  setTitle: { id: 524 },
  name: [
    { alignment: 'H', value: 'Heart of Light' },
    { alignment: 'V', value: 'Heart of Darkness' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Through the choices made in your life, you have been blessed with a Heart of Light.' },
    { alignment: 'V', value: 'Through the choices made in your life, you have been cursed with a Heart of Darkness.' },
  ],
  acquisition: 'Defeat Snaptooth once during the Valentine\'s Day Event.',
  links: [
    { title: 'Heart of Light Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Light_Badge' },
    { title: 'Heart of Darkness Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Darkness_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/heart-of-light.png' }],
}
