import { BadgeData } from 'coh-content-db'

export const LordOfWinter: BadgeData = {
  type: 'event',
  key: 'lord-of-winter',
  setTitleId: [1377],
  name: [
    { sex: 'M', value: 'Lord of Winter' },
    { sex: 'F', value: 'Lady of Winter' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You helped thwart Lord Winter's scheme to turn Paragon City into an icy wasteland.` },
    { alignment: 'villain', value: `You helped thwart Lord Winter's scheme to turn the Rogue Isles into an icy wasteland.` },
  ],
  acquisition: 'Defeat Lord Winter during the Winter event.',
  links: [
    { title: 'Lord of Winter Badge', href: 'https://homecoming.wiki/wiki/Lord_of_Winter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/lord-of-winter.png',
}
