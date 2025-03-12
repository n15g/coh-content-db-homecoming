import { BadgeData } from 'coh-content-db'

export const Roman: BadgeData = {
  type: 'DEFEAT',
  key: 'roman',
  setTitle: { id: 995 },
  name: [
    { value: 'Roman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You\'ve defeated the great usurper, Romulus Augustus, first to merge with Nictus aliens. With '
        + 'his defeat, you\'ve thwarted his plans to build temporal strongholds throughout time and space.',
    },
  ],
  acquisition: 'Defeat Nictus Romulus, a villain in the Imperious Task Force',
  links: [
    { title: 'Roman Badge', href: 'https://homecoming.wiki/wiki/Roman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/roman.png' },
  ],
}
