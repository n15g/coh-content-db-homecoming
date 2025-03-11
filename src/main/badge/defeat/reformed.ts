import { BadgeData } from 'coh-content-db'

export const Reformed: BadgeData = {
  type: 'DEFEAT',
  key: 'reformed',
  setTitle: { id: 311 },
  name: [
    { alignment: 'H', value: 'Reformed' },
    { alignment: 'V', value: 'Villain' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Once you were considered a villain, but now you walk the path of the straight and narrow.' },
    { alignment: 'V', value: 'Longbow now officially considers you a Villain.' },
  ],
  acquisition: 'Defeat 1000 Longbow',
  links: [
    { title: 'Reformed Badge', href: 'https://homecoming.wiki/wiki/Reformed_Badge' },
    { title: 'Villain Badge', href: 'https://homecoming.wiki/wiki/Villain_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/reformed.png' },
  ],
}
