import { BadgeData } from 'coh-content-db'

export const RegenerateThis: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'regenerate-this',
  setTitle: { id: 1996 },
  name: [
    { value: 'Regenerate This' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You blitzed the Self-Repairing and Lichen Infested War Walkers within 8 minutes of starting '
        + 'combat in the Underground.',
    },
  ],
  acquisition: 'Defeat the Self-Repairing and Lichen Infested War Walkers within 8 minutes of starting the fight',
  links: [
    { title: 'Regenerate This Badge', href: 'https://homecoming.wiki/wiki/Regenerate_This_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png' },
  ],
}
