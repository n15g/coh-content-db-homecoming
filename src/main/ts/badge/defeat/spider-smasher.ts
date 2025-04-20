import { BadgeData } from 'coh-content-db'

export const SpiderSmasher: BadgeData = {
  type: 'defeat',
  key: 'spider-smasher',
  setTitleId: [314],
  name: 'Spider Smasher',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've taken the fight to Arachnos, taking down Lord Recluse's personal soldiers.` },
    { alignment: 'villain', value: `You feel you've adequately proven yourself to Lord Recluse by knocking his goons around.` },
  ],
  acquisition: 'Defeat 200 Arachnos Wolf Spiders.',
  links: [
    { title: 'Spider Smasher Badge', href: 'https://homecoming.wiki/wiki/Spider_Smasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/arachnos.png',
}
