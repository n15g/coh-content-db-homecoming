import { BadgeData } from 'coh-content-db'

export const ReaperOfSouls: BadgeData = {
  type: 'event',
  key: 'reaper-of-souls',
  setTitleId: [2507],
  name: 'Reaper of Souls',
  morality: 'all',
  badgeText: `You have defeated 5 hollow reapers, the highest ranking members of the Unseelie Court who invade our world when the spirit realm is at its closest.`,
  acquisition: `Defeat 5 Hollow Reapers during the Halloween event.`,
  effect: `Awards 2 prismatic aether particles.`,
  links: [
    { title: 'Reaper of Souls Badge', href: 'https://homecoming.wiki/wiki/Reaper_of_Souls_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reaper-of-souls.png',
}
