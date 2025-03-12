import { BadgeData } from 'coh-content-db'

export const Banisher: BadgeData = {
  type: 'DEFEAT',
  key: 'banisher',
  setTitle: { id: 37 },
  name: [
    { value: 'Banisher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You are a banisher of evil spirits. The Banished Pantheon fears your very name.' },
  ],
  acquisition: 'Defeat 200 Banished Pantheon Spirit Masks',
  links: [
    { title: 'Banisher Badge', href: 'https://homecoming.wiki/wiki/Banisher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/banished.png' },
  ],
}
