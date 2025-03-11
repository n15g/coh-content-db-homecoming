import { BadgeData } from 'coh-content-db'

export const Technophobe: BadgeData = {
  type: 'DEFEAT',
  key: 'technophobe',
  setTitle: { id: 1469 },
  name: [
    { value: 'Technophobe' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'If the Praetorian Clockwork felt any emotion, they would learn to fear you. You defeated your '
        + 'fair share of Praetorian Clockwork to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Praetorian Clockwork',
  links: [
    { title: 'Technophobe Badge', href: 'https://homecoming.wiki/wiki/Technophobe_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/technophobe.png' },
  ],
}
