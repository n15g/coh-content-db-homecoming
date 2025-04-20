import { BadgeData } from 'coh-content-db'

export const Trailblazer: BadgeData = {
  type: 'achievement',
  key: 'trailblazer',
  setTitleId: [407, 1664],
  name: [
    { value: 'Trailblazer' },
    { alignment: 'praetorian', value: 'Emissary' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `You can usually tell where a hero is going by having a look at where they've been, and you've left your mark on almost everything you've touched in Paragon City.
You've been there, done that, and still adventure beckons you. Carry on, Hero!`,
    },
    { alignment: 'villain', value: `You're a villain who knows what they want, and they take it. The world is your oyster, go forth and conquer.` },
    { alignment: 'praetorian', value: `Though you may be a foreigner in Primal Earth, your many and varied accomplishments precede you nowadays.` },
  ],
  acquisition: 'Earn 200 badges.',
  links: [
    { title: 'Trailblazer Badge', href: 'https://homecoming.wiki/wiki/Trailblazer_Badge' },
    { title: 'Emissary Badge', href: 'https://homecoming.wiki/wiki/Emissary_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/trailblazer-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/trailblazer-v.png' },
  ],
}
