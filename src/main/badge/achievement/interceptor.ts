import { BadgeData } from 'coh-content-db'

export const Interceptor: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'interceptor',
  setTitle: { id: 644 },
  name: [
    { value: 'Interceptor' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have kept several shipments of illegal weapons off of the streets.' },
    { alignment: 'V', value: 'Keeping your competition from getting their hands on more hardware was remarkably prescient.' },
  ],
  acquisition: 'Stop 10 weapon deal side missions in Safeguard Missions',
  links: [
    { title: 'Interceptor Badge', href: 'https://homecoming.wiki/wiki/Interceptor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/interceptor.png' },
  ],
}
