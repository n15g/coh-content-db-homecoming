import { BadgeData } from 'coh-content-db'

export const MansBestFriend: BadgeData = {
  type: 'event',
  key: 'mans-best-friend',
  setTitleId: [2244],
  name: [
    { sex: 'M', value: `Man's Best Friend` },
    { sex: 'F', value: `Woman's Best Friend` },
  ],
  morality: 'all',
  badgeText: `You defeated Frank 'Hunnerd Yard' McCain within 10 seconds of defeating his dog, Killer.`,
  acquisition: `In the Summer Blockbuster, defeat Frank 'Hunnerd Yard' McCain within 10 seconds of defeating his dog, Killer.`,
  links: [
    { title: `Man's Best Friend Badge`, href: 'https://homecoming.wiki/wiki/Man%27s_Best_Friend_Badge' },
    { title: `Woman's Best Friend Badge`, href: 'https://homecoming.wiki/wiki/Woman%27s_Best_Friend_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/mans-best-friend.png',
}
