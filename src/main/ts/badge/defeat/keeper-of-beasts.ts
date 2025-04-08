import { BadgeData } from 'coh-content-db'

export const KeeperOfBeasts: BadgeData = {
  type: 'defeat',
  key: 'keeper-of-beasts',
  setTitleId: [2214],
  name: 'Keeper of Beasts',
  morality: 'all',
  badgeText: `Vicious though they might seem, the beasts of the Spirit Stalkers proved no match for you. You defeated many members of the Spirit Stalkers to earn this badge.`,
  acquisition: 'Defeat 100 points worth of Spirit Stalkers.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Keeper of Beasts Badge', href: 'https://homecoming.wiki/wiki/Keeper_of_Beasts_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/keeper-of-beasts.png',
}
