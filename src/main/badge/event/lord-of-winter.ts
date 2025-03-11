import { BadgeData } from 'coh-content-db'

export const LordOfWinter: BadgeData = {
  type: 'EVENT',
  key: 'lord-of-winter',
  setTitle: { id: 1377 },
  name: [
    { sex: 'M', value: 'Lord of Winter' },
    { sex: 'F', value: 'Lady of Winter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You helped thwart Lord Winter\'s scheme to turn Paragon City into an icy wasteland.' },
    { alignment: 'V', value: 'You helped thwart Lord Winter\'s scheme to turn the Rogue Isles into an icy wasteland.' },
  ],
  acquisition: 'Defeat Lord Winter during the Winter event.',
  links: [
    { title: 'Lord of Winter Badge', href: 'https://homecoming.wiki/wiki/Lord_of_Winter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/lord-of-winter.png' }],
}
