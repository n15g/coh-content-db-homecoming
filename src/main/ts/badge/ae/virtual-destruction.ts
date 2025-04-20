import { BadgeData } from 'coh-content-db'

export const VirtualDestruction: BadgeData = {
  type: 'architect-entertainment',
  key: 'virtual-destruction',
  setTitleId: [1255],
  name: 'Virtual Destruction',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've destroyed your first object in Test Mode, earning yourself the Virtual Destruction badge.`,
  acquisition: 'Destroy a destructible object while running an Architect mission in test mode.',
  notes: `The Destructible Object must be a Required Mission Objective, or you won't get the badge.`,
  links: [
    { title: 'Virtual Destruction Badge', href: 'https://homecoming.wiki/wiki/Virtual_Destruction_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/virtual-destruction.png',
}
