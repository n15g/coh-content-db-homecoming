import { BadgeData } from 'coh-content-db'
import { StevenSheridan } from '../../contact/steven-sheridan'

export const DoNoHarm: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'do-no-harm',
  setTitle: { id: 2386 },
  name: 'Do No Harm',
  alignment: ['H'],
  badgeText: `You have delivered medical supplies to the Rikti.`,
  notes: `Also available via Ouroboros, level 35-39, mission 0.35 'Hippocratic Oath'.`,
  links: [
    { title: 'Do No Harm Badge', href: 'https://homecoming.wiki/wiki/Do_No_Harm_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/do_no_harm.png',
  requirements: [
    { key: 'hippocratic-oath', type: 'MISSION', missionName: 'Hippocratic Oath', contactKey: StevenSheridan.key },
  ],
}
