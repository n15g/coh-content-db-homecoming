import { BadgeData } from 'coh-content-db'

export const Pedestrian: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'pedestrian',
  setTitle: { id: 550 },
  name: [
    { alignment: 'H', value: 'Pedestrian' },
    { alignment: 'V', value: 'Impounder' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: 'No one sane lets you get anywhere close to their vehicles now.' },
    { alignment: 'V', value: 'You\'ve done your part to help keep Paragon City\'s streets clear of traffic.' },
  ],
  acquisition: 'Destroy 100 Cars in Mayhem Missions',
  links: [
    { title: 'Pedestrian Badge', href: 'https://homecoming.wiki/wiki/Pedestrian_Badge' },
    { title: 'Impounder Badge', href: 'https://homecoming.wiki/wiki/Impounder_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pedestrian.png' },
  ],
}
