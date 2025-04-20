import { BadgeData } from 'coh-content-db'

export const Reformed: BadgeData = {
  type: 'defeat',
  key: 'reformed',
  setTitleId: [311],
  name: [
    { alignment: 'hero', value: 'Reformed' },
    { alignment: 'villain', value: 'Villain' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Once you were considered a villain, but now you walk the path of the straight and narrow.' },
    { alignment: 'villain', value: 'Longbow now officially considers you a Villain.' },
  ],
  acquisition: 'Defeat 1000 Longbow.',
  links: [
    { title: 'Reformed Badge', href: 'https://homecoming.wiki/wiki/Reformed_Badge' },
    { title: 'Villain Badge', href: 'https://homecoming.wiki/wiki/Villain_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/reformed.png',
}
