import { BadgeData } from 'coh-content-db'

export const NoAuthority: BadgeData = {
  type: 'defeat',
  key: 'no-authority',
  setTitleId: [1467],
  name: 'No Authority',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You're a wanted criminal according to the Praetorian Police. You defeated enough Praetorian Police Department members to earn this badge.`,
  acquisition: 'Defeat 100 points worth of Praetorian PD.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'No Authority Badge', href: 'https://homecoming.wiki/wiki/No_Authority_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/no-authority.png',
}
