import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { NumberSix } from '../../contact/number-six'
import { Ouroboros } from '../../zone/ouroboros'

export const DimensionalInvestigator: BadgeData = {
  type: 'accomplishment',
  key: 'dimensional-investigator',
  setTitleId: [2275],
  name: 'Dimensional Investigator',
  morality: 'all',
  badgeText: `You found a lot of odd things during your fight to hold the last area of Praetoria. Some make sense, while others leave you with more questions than answers.`,
  acquisition: `Find all the Easter eggs in each of missions from ${contactLink(NumberSix)}.`,
  notes: `
* Mission 1 - Broken down warhulk - coords (-1520, 254, 3093) (also appears in mission 5)
* Mission 2 - Praetorian Infernal's axe? - coords (-2106, -23, 2219)
* Mission 3 - Arachnos soldier's combat armor - coords (572, -40, -548)
* Mission 4 - Rikti bomb - coords (707, -160, 710)
* Mission 5 - Sky Raider shield generator - coords (-1577, 253, 3580)

To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "Praetoria's Last Gasp" entry with number 24.15 at level 50.`,
  links: [
    { title: 'Dimensional Investigator Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Investigator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate-challenge.png',
}
