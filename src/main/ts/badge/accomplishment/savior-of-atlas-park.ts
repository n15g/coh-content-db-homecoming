import { BadgeData } from 'coh-content-db'
import { AaronThiery } from '../../contact/aaron-thiery'

export const SaviorOfAtlasPark: BadgeData = {
  type: 'accomplishment',
  key: 'savior-of-atlas-park',
  setTitleId: [2012],
  name: 'Savior of Atlas Park',
  morality: 'heroic',
  badgeText: `You've saved Atlas Park from the Arachnos invasion!`,
  notes: `In order to obtain this badge in Flashback mode, the player must complete the story arc "What Was Lost" (21.01), and then either "No More Fears" (21.02) or "Lay Down Your Burdens" (21.03)
 in order to unlock Aaron Thiery's story arc, "Reason to Fight" (21.04).`,
  links: [
    { title: 'Savior of Atlas Park Badge', href: 'https://homecoming.wiki/wiki/Savior_of_Atlas_Park_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/savior-of-atlas-park.png',
  requirements: [
    { key: 'rtf', type: 'ARC', missionName: 'Reason to Fight', contactKey: AaronThiery.key },
  ],
}
