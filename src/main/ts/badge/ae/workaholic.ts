import { BadgeData } from 'coh-content-db'

export const Workaholic: BadgeData = {
  type: 'architect-entertainment',
  key: 'workaholic',
  setTitleId: [1314],
  name: 'Workaholic',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've completed your first non-required mission objective in a Architect mission. Other heroes consider you a Workaholic.` },
    { alignment: 'villain', value: `You've completed your first non-required mission objective in a Architect mission. Other villains consider you a Workaholic.` },
  ],
  acquisition: 'Earn this badge by completing one non-required mission objective in an Architect mission.',
  links: [
    { title: 'Workaholic Badge', href: 'https://homecoming.wiki/wiki/Workaholic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/workaholic.png',
}
