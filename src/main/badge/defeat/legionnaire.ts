import { BadgeData } from 'coh-content-db'

export const Legionnaire: BadgeData = {
  type: 'DEFEAT',
  key: 'legionnaire',
  setTitle: { id: 55 },
  name: [
    { value: 'Legionnaire' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have shown the leaders of the Warriors who the real combatant is.' },
  ],
  acquisition: 'Defeat 100 Warrior bosses',
  links: [
    { title: 'Legionnaire Badge', href: 'https://homecoming.wiki/wiki/Legionnaire_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/legionnaire.png' },
  ],
}
