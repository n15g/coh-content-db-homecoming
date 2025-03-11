import { BadgeData } from 'coh-content-db'

export const CivilizationsSavior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'civilizations-savior',
  setTitle: { id: 2261 },
  name: [
    { value: 'Civilization\'s Savior' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You held the line in the last bastion for civilization in Praetoria. You\'re considered a hero '
        + 'now to these people, who can now establish the beginnings of a new civilization in Praetoria.',
    },
    {
      alignment: 'V', value: 'You held the line in the last bastion for civilization in Praetoria. You\'re considered a hero '
        + 'now to these people, who can now establish the beginnings of a new civilization in Praetoria. '
        + 'All according to your plan, of course.',
    },
  ],
  acquisition: 'Complete the story arc from Number Six',
  links: [
    { title: 'Civilization\'s Savior Badge', href: 'https://homecoming.wiki/wiki/Civilization%27s_Savior_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/civilizations-savior.png' },
  ],
}
