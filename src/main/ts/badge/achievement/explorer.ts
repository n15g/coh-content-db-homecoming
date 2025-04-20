import { BadgeData } from 'coh-content-db'

export const Explorer: BadgeData = {
  type: 'achievement',
  key: 'explorer',
  setTitleId: [28, 1662],
  name: [
    { alignment: 'hero', value: 'Explorer' },
    { alignment: 'villain', value: 'Obsessed' },
    { alignment: 'praetorian', value: 'Knows the Truth' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Your diligence has earned you 50 badges.' },
    { alignment: 'villain', value: `That's 50 Badges. Some call you determined. Most call you Obsessed.` },
    { alignment: 'praetorian', value: `From the depths of the Underground to the top of the Magisterium, Praetoria is built on lies. After 50 badges, you've learned this truth.` },
  ],
  acquisition: 'Earn 50 badges.',
  links: [
    { title: 'Explorer Badge', href: 'https://homecoming.wiki/wiki/Explorer_Badge' },
    { title: 'Obsessed Badge', href: 'https://homecoming.wiki/wiki/Obsessed_Badge' },
    { title: 'Knows the Truth Badge', href: 'https://homecoming.wiki/wiki/Knows_the_Truth_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/explorer-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/explorer-v.png' },
  ],
}
