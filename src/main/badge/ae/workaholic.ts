import { BadgeData } from 'coh-content-db'

export const Workaholic: BadgeData = {
  type: 'AE',
  key: 'workaholic',
  setTitle: { id: 1314 },
  name: [
    { value: 'Workaholic' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've completed your first non-required mission objective in a Architect mission. Other heroes consider you a Workaholic.` },
    { alignment: 'V', value: `You've completed your first non-required mission objective in a Architect mission. Other villains consider you a Workaholic.` },
  ],
  acquisition: 'Earn this badge by completing one non-required mission objective in an Architect mission.',
  links: [
    { title: 'Workaholic Badge', href: 'https://homecoming.wiki/wiki/Workaholic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/workaholic.png' }],
}
