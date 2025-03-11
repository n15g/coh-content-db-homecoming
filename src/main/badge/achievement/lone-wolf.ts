import { BadgeData } from 'coh-content-db'

export const LoneWolf: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'lone-wolf',
  setTitle: { id: 2202 },
  name: [
    { value: 'Lone Wolf' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You fought against the armies of the Banished Pantheon by yourself, choosing to have the other '
        + 'Incarnates support the rest of Astoria.',
    },
  ],
  acquisition: 'Refuse help from other Incarnate NPCs in the final mission from Dream Doctor',
  links: [
    { title: 'Lone Wolf Badge', href: 'https://homecoming.wiki/wiki/Lone_Wolf_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png' },
  ],
}
