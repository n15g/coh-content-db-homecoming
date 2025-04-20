import { BadgeData } from 'coh-content-db'
import { PraetoriasLastGasp } from '../../mission/praetorias-last-gasp'

export const CivilizationsSavior: BadgeData = {
  type: 'accomplishment',
  key: 'civilizations-savior',
  setTitleId: [2261],
  name: `Civilization's Savior`,
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You held the line in the last bastion for civilization in Praetoria. You're considered a hero now to these people, who can now establish the beginnings of a new civilization in Praetoria.` },
    {
      alignment: 'villain', value: `You held the line in the last bastion for civilization in Praetoria. You're considered a hero now to these people, who can now establish the beginnings of a new civilization in Praetoria.
All according to your plan, of course.`,
    },
  ],
  links: [
    { title: `Civilization's Savior Badge`, href: 'https://homecoming.wiki/wiki/Civilization%27s_Savior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/civilizations-savior.png',
  requirements: [
    { key: PraetoriasLastGasp.key, type: 'mission', missionKey: PraetoriasLastGasp.key },
  ],
}
