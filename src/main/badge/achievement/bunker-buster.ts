import { BadgeData } from 'coh-content-db'

export const BunkerBuster: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'bunker-buster',
  setTitle: { id: 1991 },
  name: [
    { value: 'Bunker Buster' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Your league\'s coordinated strike blew the hinges off multiple bunker doors at once during your '
        + 'fight at Keyes Island Reactor.',
    },
  ],
  acquisition: 'During the Keyes Island Reactor Trial, bust down all three doors on a bunker within three seconds, and then repeat for all bunkers near Reactor Infinity',
  links: [
    { title: 'Bunker Buster Badge', href: 'https://homecoming.wiki/wiki/Bunker_Buster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png' },
  ],
}
