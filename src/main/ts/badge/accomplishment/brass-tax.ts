import { BadgeData } from 'coh-content-db'
import { MergersAndAcquisitions } from '../../mission/mergers-and-acquisitions'

export const BrassTax: BadgeData = {
  type: 'accomplishment',
  key: 'brass-tax',
  setTitleId: [2567],
  name: 'Brass Tax'
  releaseDate: '2025-06-??',
  morality: 'villainous',
  badgeText: ` You negotiated with Nemesis, to the joyful sounds of shattering brass, on his own home turf in the Shadow Shard.`,
  acquisition: `Complete the bonus objectives Dap-Dap the Deal-Maka's story arc Mergers and Acquisitions.`,
  links: [
    { title: 'Brass Tax Badge', href: 'https://homecoming.wiki/wiki/Brass_Tax_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brass-tax.png',
  requirements: [
    { key: MergersAndAcquisitions.key, type: 'mission', missionKey: MergersAndAcquisitions.key },
  ],
}