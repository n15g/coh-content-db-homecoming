import { BadgeData } from 'coh-content-db'

export const Pedestrian: BadgeData = {
  type: 'achievement',
  key: 'pedestrian',
  setTitleId: [550],
  name: [
    { alignment: 'hero', value: 'Pedestrian' },
    { alignment: 'villain', value: 'Impounder' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: 'No one sane lets you get anywhere close to their vehicles now.' },
    { alignment: 'villain', value: `You've done your part to help keep Paragon City's streets clear of traffic.` },
  ],
  acquisition: 'Destroy 100 Cars in Mayhem Missions.',
  links: [
    { title: 'Pedestrian Badge', href: 'https://homecoming.wiki/wiki/Pedestrian_Badge' },
    { title: 'Impounder Badge', href: 'https://homecoming.wiki/wiki/Impounder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pedestrian.png',
}
