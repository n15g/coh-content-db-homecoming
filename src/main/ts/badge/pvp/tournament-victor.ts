import { BadgeData } from 'coh-content-db'

export const TournamentVictor: BadgeData = {
  type: 'pvp',
  key: 'tournament-victor',
  setTitleId: [1346],
  name: 'Tournament Victor',
  morality: 'all',
  badgeText: `You've won your first Swiss Draw match, you're considered a Tournament Victor.`,
  acquisition: 'Win a rated or unrated Swiss Draw match in the Arena.',
  links: [
    { title: 'Tournament Victor Badge', href: 'https://homecoming.wiki/wiki/Tournament_Victor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/tournament-victor.png',
}
