import { BadgeData } from 'coh-content-db'

export const Visionary: BadgeData = {
  type: 'defeat',
  key: 'visionary',
  setTitleId: [204],
  name: 'Visionary',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have been successful in a campaign to blind the Overseers in the Shadow Shard.',
  acquisition: `Defeat 500 points worth of Rularuu Sentries in the Shadow Shard.`,
  notes: `Watchers and Observers are worth 1 point, Overseers are worth 5 points.`,
  links: [
    { title: 'Visionary Badge', href: 'https://homecoming.wiki/wiki/Visionary_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/visionary.png',
}
