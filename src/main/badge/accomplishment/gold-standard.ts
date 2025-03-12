import { BadgeData } from 'coh-content-db'

export const GoldStandard: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'gold-standard',
  setTitle: { id: 2476 },
  name: [
    { value: 'Gold Standard' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You assisted Dr. Aeon in finally settling the score with King Midas and his Gold Brickers who were manipulating the local gold market using unstable dimensional counterfeits in order to establish themselves as independent players on the Rogue Isles. You've shown them the real measure of what passes the quality standard for gold.`,
    },
  ],
  acquisition: `Complete Dr. Aeon's Strike Force.`,
  links: [
    { title: 'Gold Standard Badge', href: 'https://homecoming.wiki/wiki/Gold_Standard_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/gold-standard.png' },
  ],
}
