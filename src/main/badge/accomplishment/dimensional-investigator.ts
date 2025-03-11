import { BadgeData } from 'coh-content-db'

export const DimensionalInvestigator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'dimensional-investigator',
  setTitle: { id: 2275 },
  name: [
    { value: 'Dimensional Investigator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You found a lot of odd things during your fight to hold the last area of Praetoria. Some make '
        + 'sense, while others leave you with more questions than answers.',
    },
  ],
  acquisition: 'Find all the Easter eggs in each of missions from Number Six',
  links: [
    { title: 'Dimensional Investigator Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Investigator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate-challenge.png' },
  ],
}
