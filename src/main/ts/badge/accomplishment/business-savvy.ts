import { BadgeData } from 'coh-content-db'
import { MergersAndAcquisitions } from '../../mission/mergers-and-acquisitions'

export const BusinessSavvy: BadgeData = {
  type: 'accomplishment',
  key: 'business-savvy',
  setTitleId: [2560],
  name: 'Business Savvy',
  releaseDate: '2025-06-??',
  morality: 'villainous',
  badgeText: `You bumbled, hustled and crashed through a number of people and places to help Dap-Dap establish the Freaklok as an organization worthy of being taken seriously, especially by the Freakshow.`,
  acquisition: `Complete Dap-Dap the Deal-Maka's story arc Mergers and Acquisitions.`,
  links: [
    { title: 'Business Savvy Badge', href: 'https://homecoming.wiki/wiki/Business_Savvy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/business-savvy.png',
  requirements: [
    { key: MergersAndAcquisitions.key, type: 'mission', missionKey: MergersAndAcquisitions.key },
  ],
}