import { BadgeData } from 'coh-content-db'

export const HeartOfLight: BadgeData = {
  type: 'event',
  key: 'heart-of-light',
  setTitleId: [524],
  name: [
    { alignment: 'hero', value: 'Heart of Light' },
    { alignment: 'villain', value: 'Heart of Darkness' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Through the choices made in your life, you have been blessed with a Heart of Light.' },
    { alignment: 'villain', value: 'Through the choices made in your life, you have been cursed with a Heart of Darkness.' },
  ],
  acquisition: `Defeat Snaptooth once during the Valentine's Day Event.`,
  links: [
    { title: 'Heart of Light Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Light_Badge' },
    { title: 'Heart of Darkness Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Darkness_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/heart-of-light.png',
}
