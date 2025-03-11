import { BadgeData } from 'coh-content-db'

export const KeeperOfSecrets: BadgeData = {
  type: 'DEFEAT',
  key: 'keeper-of-secrets',
  setTitle: { id: 38 },
  name: [
    { value: 'Keeper of Secrets' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have defeated the demon, Adamastor, brought forth by the Banished Pantheon to destroy the '
        + 'world.',
    },
  ],
  acquisition: 'Defeat Adamastor, a monster who can be summoned in Echo: Dark Astoria',
  links: [
    { title: 'Keeper of Secrets Badge', href: 'https://homecoming.wiki/wiki/Keeper_of_Secrets_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/banished.png' },
  ],
}
