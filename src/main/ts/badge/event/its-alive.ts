import { BadgeData } from 'coh-content-db'

export const ItsAlive: BadgeData = {
  type: 'event',
  key: 'its-alive',
  setTitleId: [2087],
  name: `It's Alive!`,
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You defeated the Abomination and 99 of Dr. Kane's zombies in under 12 minutes!`,
  acquisition: 'Defeat 99 zombies in the graveyard while the Abomination is alive, and then defeat the Abomination in under 12 minutes during the Halloween event.',
  links: [
    { title: `It's Alive! Badge`, href: 'https://homecoming.wiki/wiki/It%27s_Alive!_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/its-alive.png',
}
