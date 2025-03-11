import { BadgeData } from 'coh-content-db'

export const Explorer: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'explorer',
  setTitle: { id: 28, praetorianId: 1662 },
  name: [
    { alignment: 'H', value: 'Explorer' },
    { alignment: 'V', value: 'Obsessed' },
    { alignment: 'P', value: 'Knows the Truth' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Your diligence has earned you 50 badges.' },
    { alignment: 'V', value: 'That\'s 50 Badges. Some call you determined. Most call you Obsessed.' },
    {
      alignment: 'P', value: 'From the depths of the Underground to the top of the Magisterium, Praetoria is built on lies. '
        + 'After 50 badges, you\'ve learned this truth.',
    },
  ],
  acquisition: 'Earn 50 badges',
  links: [
    { title: 'Explorer Badge', href: 'https://homecoming.wiki/wiki/Explorer_Badge' },
    { title: 'Obsessed Badge', href: 'https://homecoming.wiki/wiki/Obsessed_Badge' },
    { title: 'Knows the Truth Badge', href: 'https://homecoming.wiki/wiki/Knows_the_Truth_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/explorer-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/explorer-v.png' },
  ],
}
