import { BadgeData } from 'coh-content-db'

export const Adept: BadgeData = {
  type: 'achievement',
  key: 'adept',
  setTitleId: [2537],
  name: 'Adept',
  morality: 'all',
  badgeText: `The amount of moral options open to you sometimes leads to compulsory or contradictory decisions, but that's part of the freedom to make choices. You've completed several Alignment Tip missions and made some moral decisions.`,
  acquisition: 'Complete 10 Alignment [Tip](https://homecoming.wiki/wiki/Tip) missions.',
  links: [
    { title: 'Adept Badge', href: 'https://homecoming.wiki/wiki/Adept_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/alignment-tips.png',
}
