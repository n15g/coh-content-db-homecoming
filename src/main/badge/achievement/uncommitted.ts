import { BadgeData } from 'coh-content-db'

export const Uncommitted: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'uncommitted',
  setTitle: { id: 2536 },
  name: [
    { value: 'Uncommitted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: `There's so many options sometimes in life, you can't help but have a difficult time choosing. You've completed a few Alignment Tip missions and made a couple moral decisions.` },
  ],
  acquisition: 'Complete 5 Alignment Tip missions.',
  links: [
    { title: 'Uncommitted Badge', href: 'https://homecoming.wiki/wiki/Uncommitted_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/alignment-tips.png' },
  ],
}
