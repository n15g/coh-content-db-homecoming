import { BadgeData, missionLink } from 'coh-content-db'
import { PraetoriasLastGasp } from '../../mission/praetorias-last-gasp'

export const DimensionalInvestigator: BadgeData = {
  type: 'accomplishment',
  key: 'dimensional-investigator',
  setTitleId: [2275],
  name: 'Dimensional Investigator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You found a lot of odd things during your fight to hold the last area of Praetoria. Some make sense, while others leave you with more questions than answers.`,
  acquisition: `Find all the Easter eggs in the ${missionLink(PraetoriasLastGasp.key)} story arc.`,
  links: [
    { title: 'Dimensional Investigator Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Investigator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate-challenge.png',
  requirements: [
    { key: 'warhulk', type: 'task', notes: '(Mission 1, 5) - Broken down Warhulk', location: { coords: [-1520, 254, 3093] } },
    { key: 'axe', type: 'task', notes: `(Mission 2) - Praetorian Infernal's axe`, location: { coords: [-2106, -23, 2219] } },
    { key: 'armor', type: 'task', notes: `(Mission 3) - Arachnos soldier's combat armor`, location: { coords: [572, -40, -548] } },
    { key: 'bomb', type: 'task', notes: `(Mission 4) - Rikti bomb`, location: { coords: [707, -160, 710] } },
    { key: 'shield', type: 'task', notes: `(Mission 2) - Sky Raider shield generator`, location: { coords: [-1577, 253, 3580] } },
  ],
}
