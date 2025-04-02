import { BadgeData } from 'coh-content-db'
import { NumberSix } from '../../contact/number-six'

export const CivilizationsSavior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'civilizations-savior',
  setTitle: { id: 2261 },
  name: `Civilization's Savior`,
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: `You held the line in the last bastion for civilization in Praetoria. You're considered a hero now to these people, who can now establish the beginnings of a new civilization in Praetoria.`,
    },
    {
      alignment: 'V', value: `You held the line in the last bastion for civilization in Praetoria. You're considered a hero now to these people, who can now establish the beginnings of a new civilization in Praetoria.
All according to your plan, of course.`,
    },
  ],
  links: [
    { title: `Civilization's Savior Badge`, href: 'https://homecoming.wiki/wiki/Civilization%27s_Savior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/civilizations-savior.png',
  requirements: [
    { key: 'praetorias-last-gasp', type: 'ARC', missionName: `Praetoria's Last Gasp`, contactKey: NumberSix.key },
  ],
}
