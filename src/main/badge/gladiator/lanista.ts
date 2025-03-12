import { BadgeData } from 'coh-content-db'

export const Lanista: BadgeData = {
  type: 'GLADIATOR',
  key: 'lanista',
  setTitle: { id: 473 },
  name: [
    { value: 'Lanista' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have won your first rated creature battle in the Arena!' },
  ],
  acquisition: 'Win one Gladiator match in the Arena (Arena)',
  links: [
    { title: 'Lanista Badge', href: 'https://homecoming.wiki/wiki/Lanista_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
