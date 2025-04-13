import { BadgeData } from 'coh-content-db'

export const SnoozeButton: BadgeData = {
  type: 'defeat',
  key: 'snooze-button',
  setTitleId: [2058],
  name: 'Snooze Button',
  morality: 'all',
  badgeText: `The rejects from the Seer program could have used more training if they wanted to stand up to you. You defeated several Awakened to earn this badge.`,
  acquisition: 'Defeat 100 points worth of The Awakened.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Snooze Button Badge', href: 'https://homecoming.wiki/wiki/Snooze_Button_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/snooze-button.png',
}
