import { BadgeData } from 'coh-content-db'

export const Officiator: BadgeData = {
  type: 'EVENT',
  key: 'officiator',
  setTitle: { id: 2549 },
  name: [
    { value: 'Officiator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Despite the Freedom Phalanx and Arachnos elite being dressed in their finest for a special occasion, you pulled no punches and demonstrated your prowess in combat by defeating each and every one.` },
  ],
  acquisition: `Defeat all 14 signature Heroes and Villains during the event.`,
  links: [
    { title: 'Officiator', href: 'https://homecoming.wiki/wiki/Officiator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/officiator.png' }],
}
