import { BadgeData } from 'coh-content-db'

export const TournamentVictor: BadgeData = {
  type: 'PVP',
  key: 'tournament-victor',
  setTitle: { id: 1346 },
  name: [
    { value: 'Tournament Victor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve won your first Swiss Draw match, you\'re considered a Tournament Victor.' },
  ],
  acquisition: 'Win a rated or unrated Swiss Draw match in the Arena',
  links: [
    { title: 'Tournament Victor Badge', href: 'https://homecoming.wiki/wiki/Tournament_Victor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/tournament-victor.png' },
  ],
}
