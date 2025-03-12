import { BadgeData } from 'coh-content-db'

export const Visionary: BadgeData = {
  type: 'DEFEAT',
  key: 'visionary',
  setTitle: { id: 204 },
  name: [
    { value: 'Visionary' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have been successful in a campaign to blind the Overseers in the Shadow Shard.' },
  ],
  acquisition: 'Defeat 500 points worth of Rularuu Sentries (Watchers and Observers are worth 1 point, Overseers are worth 5 points).',
  links: [
    { title: 'Visionary Badge', href: 'https://homecoming.wiki/wiki/Visionary_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/visionary.png' },
  ],
}
