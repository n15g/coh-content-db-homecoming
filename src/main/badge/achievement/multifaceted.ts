import { BadgeData } from 'coh-content-db'

export const Multifaceted: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'multifaceted',
  setTitle: { id: 2538 },
  name: [
    { value: 'Multifaceted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: `You've walked too many roads of life to count, and your experience affords you a position of reflection and wisdom. You've completed countless Alignment Tip missions and made many moral decisions.` },
  ],
  acquisition: 'Complete 25 Alignment Tip missions.',
  links: [
    { title: 'Multifaceted Badge', href: 'https://homecoming.wiki/wiki/Multifaceted_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/alignment-tips.png' },
  ],
}
