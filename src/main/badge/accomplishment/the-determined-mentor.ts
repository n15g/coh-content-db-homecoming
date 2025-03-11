import { BadgeData } from 'coh-content-db'

export const TheDeterminedMentor: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-determined-mentor',
  setTitle: { id: 2189 },
  name: [
    { value: 'The Determined Mentor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Ice Mistral was absorbed by Mot, but you were able to save Scirocco from the creature known as '
        + 'the Sentinel. Scirocco has pledged to not rest until he rescues Ice Mistral from the maw of '
        + 'Mot.',
    },
  ],
  acquisition: 'Complete the story arc from Mu\'Vorkan',
  links: [
    { title: 'The Determined Mentor Badge', href: 'https://homecoming.wiki/wiki/The_Determined_Mentor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png' },
  ],
}
