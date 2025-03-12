import { BadgeData } from 'coh-content-db'

export const Gearsmasher: BadgeData = {
  type: 'DEFEAT',
  key: 'gearsmasher',
  setTitle: { id: 31 },
  name: [
    { value: 'Gearsmasher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have learned that the smallest gear can power the greatest threat, and have taken steps to '
        + 'stop the Clockwork menace.',
    },
  ],
  acquisition: 'Defeat 100 Clockwork gears',
  links: [
    { title: 'Gearsmasher Badge', href: 'https://homecoming.wiki/wiki/Gearsmasher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/clockwork.png' },
  ],
}
