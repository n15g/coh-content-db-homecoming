import { BadgeData } from 'coh-content-db'

export const FortunataSeer: BadgeData = {
  type: 'GLADIATOR',
  key: 'fortunata-seer',
  setTitle: { id: 443 },
  name: [
    { value: 'Fortunata Seer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The seers see victory on your side.' },
  ],
  acquisition: 'Defeat 100 Fortunata Seers (Arachnos)',
  links: [
    { title: 'Fortunata Seer Badge', href: 'https://homecoming.wiki/wiki/Fortunata_Seer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
