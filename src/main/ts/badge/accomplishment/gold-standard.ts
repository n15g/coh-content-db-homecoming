import { BadgeData } from 'coh-content-db'
import { DrAeonStrikeForce } from '../../mission/dr-aeon-strike-force'

export const GoldStandard: BadgeData = {
  type: 'accomplishment',
  key: 'gold-standard',
  setTitleId: [2476],
  name: 'Gold Standard',
  releaseDate: '2020-11-26',
  morality: 'villainous',
  badgeText: `You assisted Dr. Aeon in finally settling the score with King Midas and his Gold Brickers who were
manipulating the local gold market using unstable dimensional counterfeits in order to establish themselves as independent players on the Rogue Isles.
You've shown them the real measure of what passes the quality standard for gold.`,
  effect: 'Unlocks access to The Crucible in the Long Range Teleporter for Villains and Rogues.',
  links: [
    { title: 'Gold Standard Badge', href: 'https://homecoming.wiki/wiki/Gold_Standard_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/gold-standard.png',
  requirements: [
    { key: DrAeonStrikeForce.key, type: 'mission', missionKey: DrAeonStrikeForce.key },
  ],
}
