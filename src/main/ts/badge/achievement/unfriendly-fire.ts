import { BadgeData } from 'coh-content-db'

export const UnfriendlyFire: BadgeData = {
  type: 'achievement',
  key: 'unfriendly-fire',
  setTitleId: [2478],
  name: 'Unfriendly Fire',
  morality: 'villainous',
  badgeText: `You've taught the Gold Brickers the dangers of overclocking their powersuits by taking advantage of the situation and using a Brickernaut's power core that went critical to deal the finishing blow to their own princess.`,
  acquisition: `Use a Golden Brickernaut's self-destruct to deal the finishing blow to Princess Zoe in Dr. Aeon's Strike Force. Zoe's health must be at or below 10% for this to work.`,
  links: [
    { title: 'Unfriendly Fire Badge', href: 'https://homecoming.wiki/wiki/Unfriendly_Fire_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sf-aeon.png',
}
