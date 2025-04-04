import { BadgeData } from 'coh-content-db'

export const RaiderEngineer: BadgeData = {
  type: 'GLADIATOR',
  key: 'raider-engineer',
  setTitle: { id: 487 },
  name: [
    { value: 'Raider Engineer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'This will provide a good defense for your gladiators.' },
  ],
  acquisition: 'Destroy 100 Force Field Generators summoned by Sky Raider Engineers (Sky Raiders)',
  links: [
    { title: 'Raider Engineer Badge', href: 'https://homecoming.wiki/wiki/Raider_Engineer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
