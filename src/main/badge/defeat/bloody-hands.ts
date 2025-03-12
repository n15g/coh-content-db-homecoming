import { BadgeData } from 'coh-content-db'

export const BloodyHands: BadgeData = {
  type: 'DEFEAT',
  key: 'bloody-hands',
  setTitle: { id: 549 },
  name: [
    { alignment: 'H', value: 'Bloody Hands' },
    { alignment: 'V', value: 'Hero Slayer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'The memory of the heroes you defeated haunts you throughout Paragon.' },
    { alignment: 'V', value: 'Not even the best of the best can stop you!' },
  ],
  acquisition: 'Defeat 25 Heroes in Mayhem Missions',
  links: [
    { title: 'Bloody Hands Badge', href: 'https://homecoming.wiki/wiki/Bloody_Hands_Badge' },
    { title: 'Hero Slayer Badge', href: 'https://homecoming.wiki/wiki/Hero_Slayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/bloody-hands.png' },
  ],
}
