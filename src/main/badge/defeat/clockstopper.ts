import { BadgeData } from 'coh-content-db'

export const Clockstopper: BadgeData = {
  type: 'DEFEAT',
  key: 'clockstopper',
  setTitle: { id: 32 },
  name: [
    { value: 'Clockstopper' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have defeated Babbage, one of the greatest works of the Clockwork King.' },
  ],
  acquisition: 'Defeat Babbage, a monster that spawns in Boomtown or in an ambush in the Synapse Task Force',
  links: [
    { title: 'Clockstopper Badge', href: 'https://homecoming.wiki/wiki/Clockstopper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/clockwork.png' },
  ],
}
