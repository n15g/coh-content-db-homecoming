import { BadgeData } from 'coh-content-db'

export const SpiderSmasher: BadgeData = {
  type: 'DEFEAT',
  key: 'spider-smasher',
  setTitle: { id: 314 },
  name: [
    { value: 'Spider Smasher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You\'ve taken the fight to Arachnos, taking down Lord Recluse\'s personal soldiers.' },
    { alignment: 'V', value: 'You feel you\'ve adequately proven yourself to Lord Recluse by knocking his goons around.' },
  ],
  acquisition: 'Defeat 200 Arachnos Wolf Spiders',
  links: [
    { title: 'Spider Smasher Badge', href: 'https://homecoming.wiki/wiki/Spider_Smasher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/arachnos.png' },
  ],
}
