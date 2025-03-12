import { BadgeData } from 'coh-content-db'

export const Sentry: BadgeData = {
  type: 'DEFEAT',
  key: 'sentry',
  setTitle: { id: 833 },
  name: [
    { value: 'Sentry' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated 100 of the invading Rikti hordes!' },
  ],
  acquisition: 'Defeat 100 Rikti during a Rikti World Invasion',
  links: [
    { title: 'Sentry Badge', href: 'https://homecoming.wiki/wiki/Sentry_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/new-rikti.png' },
  ],
}
