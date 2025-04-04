import { BadgeData } from 'coh-content-db'

export const BrassHunter: BadgeData = {
  type: 'defeat',
  key: 'brass-hunter',
  setTitleId: [2442],
  name: 'Brass Hunter',
  morality: 'all',
  badgeText: `Your ongoing efforts to root out Nemesis' influence have resulted in the destruction of at a least thousand of his Jaegers, and local bars are serving drinks in your honor.`,
  acquisition: 'Defeat 1000 Nemesis Jaegers.',
  links: [
    { title: 'Brass Hunter Badge', href: 'https://homecoming.wiki/wiki/Brass_Hunter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/brass-hunter.png',
}
