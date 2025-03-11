import { BadgeData } from 'coh-content-db'

export const WatchesTheWatchers: BadgeData = {
  type: 'DEFEAT',
  key: 'watches-the-watchers',
  setTitle: { id: 2213 },
  name: [
    { value: 'Watches the Watchers' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Though they fought valiantly, even the watchkeepers of the Eternal Prison were no match for '
        + 'your might. You cleaved your way through a legion of Black Knights to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of The Black Knights',
  links: [
    { title: 'Watches the Watchers Badge', href: 'https://homecoming.wiki/wiki/Watches_the_Watchers_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/watches-the-watchers.png' },
  ],
}
