import { BadgeData } from 'coh-content-db'

export const Liberator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'liberator',
  setTitle: { id: 68 },
  name: [
    { alignment: 'H', value: 'Liberator' },
    { alignment: 'V', value: 'Destroyer of Earth' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have freed the captured heroes, preventing them from becoming Devoured.' },
  ],
  acquisition: 'Complete the Eden Spire Trial',
  links: [
    { title: 'Liberator Badge', href: 'https://homecoming.wiki/wiki/Liberator_Badge' },
    { title: 'Destroyer of Earth Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Earth_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png' },
  ],
}
