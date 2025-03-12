import { BadgeData } from 'coh-content-db'

export const Castigator: BadgeData = {
  type: 'DEFEAT',
  key: 'castigator',
  setTitle: { id: 2173 },
  name: [
    { value: 'Castigator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have punished the servants of fury for going too far in their pursuit of vengeance.' },
  ],
  acquisition: 'Defeat 100 points worth of Incarnate-level Talons of Vengeance',
  links: [
    { title: 'Castigator Badge', href: 'https://homecoming.wiki/wiki/Castigator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/castigator.png' },
  ],
}
