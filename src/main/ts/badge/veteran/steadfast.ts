import { BadgeData } from 'coh-content-db'

export const Steadfast: BadgeData = {
  type: 'veteran',
  key: 'steadfast',
  setTitleId: [630],
  name: 'Steadfast',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `All this crimefighting has people calling you Steadfast. You have attained twenty-one Veteran levels.` },
    { alignment: 'villain', value: `You have a reputation for always being there, and always being bad. You have attained twenty-one Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 21.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-21.png',
}
