import { BadgeData } from 'coh-content-db'

export const Coldblooded: BadgeData = {
  type: 'DEFEAT',
  key: 'coldblooded',
  setTitle: { id: 306 },
  name: [
    { alignment: 'H', value: 'Coldblooded' },
    { alignment: 'V', value: 'Coldhearted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You\'ve defeated 100 cold demons, making you Coldblooded.' },
    { alignment: 'V', value: 'You\'ve defeated 100 cold demons, making you Coldhearted.' },
  ],
  acquisition: 'Defeat 100 Circle of Thorns cold demons, including Hordelings, Hellfrosts and Blade Princes',
  links: [
    { title: 'Coldblooded Badge', href: 'https://homecoming.wiki/wiki/Coldblooded_Badge' },
    { title: 'Coldhearted Badge', href: 'https://homecoming.wiki/wiki/Coldhearted_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/coldblooded.png' },
  ],
}
