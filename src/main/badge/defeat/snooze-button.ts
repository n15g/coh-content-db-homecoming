import { BadgeData } from 'coh-content-db'

export const SnoozeButton: BadgeData = {
  type: 'DEFEAT',
  key: 'snooze-button',
  setTitle: { id: 2058 },
  name: [
    { value: 'Snooze Button' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'The rejects from the Seer program could have used more training if they wanted to stand up to '
        + 'you. You defeated several Awakened to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of The Awakened',
  links: [
    { title: 'Snooze Button Badge', href: 'https://homecoming.wiki/wiki/Snooze_Button_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/snooze-button.png' },
  ],
}
