import { BadgeData } from 'coh-content-db'

export const Escapee: BadgeData = {
  type: 'defeat',
  key: 'escapee',
  setTitleId: [1473],
  name: 'Escapee',
  morality: 'all',
  badgeText: `Despite all of their genetic modifications and cybernetics, the Failed Experiments were no match for you. You defeated several waves of Failed Experiments to earn this badge.`,
  acquisition: 'Defeat 100 points worth of Failed Experiments.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Escapee Badge', href: 'https://homecoming.wiki/wiki/Escapee_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/escapee.png',
}
