import { BadgeData } from 'coh-content-db'

export const Supernova: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'supernova',
  setTitle: { id: 2016 },
  name: [
    { value: 'Supernova' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The Shining Stars have stopped a Praetorian plot to destroy Paragon, but at great cost.' },
  ],
  acquisition: 'Complete the Level 15-19 Ongoing Training story arc from Twinshot',
  links: [
    { title: 'Supernova Badge', href: 'https://homecoming.wiki/wiki/Supernova_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/supernova.png' },
  ],
}
