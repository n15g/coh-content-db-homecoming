import { BadgeData } from 'coh-content-db'

export const Lawbreaker: BadgeData = {
  type: 'defeat',
  key: 'lawbreaker',
  setTitleId: [2216],
  name: 'Lawbreaker',
  morality: 'all',
  badgeText: `The laws of the afterlife both require that no living being enter and that no dead being depart. You have defied these laws by defeating those tasked with enforcing them, the Drudges.`,
  acquisition: 'Defeat 100 points worth of Drudges.',
  links: [
    { title: 'Lawbreaker Badge', href: 'https://homecoming.wiki/wiki/Lawbreaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/lawbreaker.png',
}
