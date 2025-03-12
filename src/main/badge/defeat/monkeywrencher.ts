import { BadgeData } from 'coh-content-db'

export const Monkeywrencher: BadgeData = {
  type: 'DEFEAT',
  key: 'monkeywrencher',
  setTitle: { id: 59 },
  name: [
    { value: 'Monkeywrencher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have crushed Malta\'s Zeus Titans, the combination of two damaged Hercules Titan robots.' },
  ],
  acquisition: 'Defeat 50 Malta Group Zeus Titan robots',
  links: [
    { title: 'Monkeywrencher Badge', href: 'https://homecoming.wiki/wiki/Monkeywrencher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/malta.png' },
  ],
}
