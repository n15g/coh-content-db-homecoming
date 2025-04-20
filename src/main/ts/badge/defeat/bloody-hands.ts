import { BadgeData } from 'coh-content-db'

export const BloodyHands: BadgeData = {
  type: 'defeat',
  key: 'bloody-hands',
  setTitleId: [549],
  name: [
    { alignment: 'hero', value: 'Bloody Hands' },
    { alignment: 'villain', value: 'Hero Slayer' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'The memory of the heroes you defeated haunts you throughout Paragon.' },
    { alignment: 'villain', value: 'Not even the best of the best can stop you!' },
  ],
  acquisition: 'Defeat 25 Heroes in Mayhem Missions.',
  links: [
    { title: 'Bloody Hands Badge', href: 'https://homecoming.wiki/wiki/Bloody_Hands_Badge' },
    { title: 'Hero Slayer Badge', href: 'https://homecoming.wiki/wiki/Hero_Slayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/bloody-hands.png',
}
