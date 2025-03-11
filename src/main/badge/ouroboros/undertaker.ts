import { BadgeData } from 'coh-content-db'

export const Undertaker: BadgeData = {
  type: 'OUROBOROS',
  key: 'undertaker',
  setTitle: { id: 894 },
  name: [
    { value: 'Undertaker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 46 and 50 while only using your Primary and Secondary powersets.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 46 and 50 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no pool powers.',
  links: [
    { title: 'Undertaker Badge', href: 'https://homecoming.wiki/wiki/Undertaker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/undertaker.png' }],
}
