import { BadgeData } from 'coh-content-db'

export const FireMarshal: BadgeData = {
  type: 'achievement',
  key: 'fire-marshal',
  setTitleId: [640],
  name: [
    { alignment: 'hero', value: 'Fire Marshal' },
    { alignment: 'villain', value: 'Fired' },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Paragon officials recognize your efforts in thwarting arsons, and have made you an honorary Fire Marshal.' },
    { alignment: 'villain', value: 'You were Fired from your honorary post as Fire Marshal when you left for the Rogue Isles.' },
  ],
  acquisition: 'Stop 5 arson side missions in Safeguard Missions.',
  links: [
    { title: 'Fire Marshal Badge', href: 'https://homecoming.wiki/wiki/Fire_Marshal_Badge' },
    { title: 'Fired Badge', href: 'https://homecoming.wiki/wiki/Fired_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/fire-marshal.png',
}
