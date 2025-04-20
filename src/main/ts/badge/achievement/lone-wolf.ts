import { BadgeData, contactLink } from 'coh-content-db'
import { DreamDoctor } from '../../contact/dream-doctor'

export const LoneWolf: BadgeData = {
  type: 'achievement',
  key: 'lone-wolf',
  setTitleId: [2202],
  name: 'Lone Wolf',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You fought against the armies of the Banished Pantheon by yourself, choosing to have the other Incarnates support the rest of Astoria.',
  acquisition: `Refuse help from other Incarnate NPCs in the final mission from ${contactLink(DreamDoctor)}.`,
  links: [
    { title: 'Lone Wolf Badge', href: 'https://homecoming.wiki/wiki/Lone_Wolf_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png',
}
