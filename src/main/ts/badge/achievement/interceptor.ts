import { BadgeData } from 'coh-content-db'

export const Interceptor: BadgeData = {
  type: 'achievement',
  key: 'interceptor',
  setTitleId: [644],
  name: 'Interceptor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'You have kept several shipments of illegal weapons off of the streets.' },
    { alignment: 'villain', value: 'Keeping your competition from getting their hands on more hardware was remarkably prescient.' },
  ],
  acquisition: 'Stop 10 weapon deal side missions in Safeguard Missions.',
  links: [
    { title: 'Interceptor Badge', href: 'https://homecoming.wiki/wiki/Interceptor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/interceptor.png',
}
