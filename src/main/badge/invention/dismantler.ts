import { BadgeData } from 'coh-content-db'

export const Dismantler: BadgeData = {
  type: 'invention',
  key: 'dismantler',
  setTitleId: [763],
  name: [{ value: 'Dismantler' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Defense Debuff, To Hit Debuff, Taunt, and Confuse.' }],
  links: [
    { title: 'Dismantler Badge', href: 'https://homecoming.wiki/wiki/Dismantler_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 2,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 2,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
