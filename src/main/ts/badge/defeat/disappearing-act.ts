import { BadgeData } from 'coh-content-db'

export const DisappearingAct: BadgeData = {
  type: 'defeat',
  key: 'disappearing-act',
  setTitleId: [2057],
  name: 'Disappearing Act',
  morality: 'all',
  badgeText: `It is somewhat difficult to discern, but you've gotten rid of a fair amount Apparitions... You think. You defeated several Apparitions to earn this badge.`,
  acquisition: 'Defeat 100 points worth of Apparitions.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Disappearing Act Badge', href: 'https://homecoming.wiki/wiki/Disappearing_Act_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/disappearing-act.png',
}
