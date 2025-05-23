import { BadgeData } from 'coh-content-db'

export const BunkerBuster: BadgeData = {
  type: 'achievement',
  key: 'bunker-buster',
  setTitleId: [1991],
  name: 'Bunker Buster',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Your league's coordinated strike blew the hinges off multiple bunker doors at once during your fight at Keyes Island Reactor.`,
  acquisition: 'During the Keyes Island Reactor Trial, bust down all three doors on a bunker within three seconds, and then repeat for all bunkers near Reactor Infinity.',
  links: [
    { title: 'Bunker Buster Badge', href: 'https://homecoming.wiki/wiki/Bunker_Buster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png',
}
