import { BadgeData } from 'coh-content-db'

export const Coldblooded: BadgeData = {
  type: 'defeat',
  key: 'coldblooded',
  setTitleId: [306],
  name: [
    { alignment: 'hero', value: 'Coldblooded' },
    { alignment: 'villain', value: 'Coldhearted' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've defeated 100 cold demons, making you Coldblooded.` },
    { alignment: 'villain', value: `You've defeated 100 cold demons, making you Coldhearted.` },
  ],
  acquisition: 'Defeat 100 Circle of Thorns cold demons, including Hordelings, Hellfrosts and Blade Princes.',
  links: [
    { title: 'Coldblooded Badge', href: 'https://homecoming.wiki/wiki/Coldblooded_Badge' },
    { title: 'Coldhearted Badge', href: 'https://homecoming.wiki/wiki/Coldhearted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/coldblooded.png',
}
