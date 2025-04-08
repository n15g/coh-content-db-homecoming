import { BadgeData } from 'coh-content-db'
import { HeatherTownshend } from '../../contact/heather-townshend'

export const ArchitectWriter: BadgeData = {
  type: 'accomplishment',
  key: 'architect-writer',
  setTitleId: [2194],
  name: 'Architect Writer',
  morality: 'all',
  badgeText: `You played through Heather Townshend's personal story, witnessing the event where she joined the Letter Writer's team.`,
  links: [
    { title: 'Architect Writer Badge', href: 'https://homecoming.wiki/wiki/Architect_Writer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: 'remnants-of-the-past', type: 'MISSION', missionName: 'Remnants of the Past', contactKey: HeatherTownshend.key },
  ],
}
