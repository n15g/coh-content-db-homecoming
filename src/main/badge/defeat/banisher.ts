import { BadgeData } from 'coh-content-db'

export const Banisher: BadgeData = {
  type: 'defeat',
  key: 'banisher',
  setTitleId: [37],
  name: 'Banisher',
  morality: 'all',
  badgeText: 'You are a banisher of evil spirits. The Banished Pantheon fears your very name.',
  acquisition: 'Defeat 200 Banished Pantheon Spirit Masks.',
  links: [
    { title: 'Banisher Badge', href: 'https://homecoming.wiki/wiki/Banisher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/banished.png',
}
