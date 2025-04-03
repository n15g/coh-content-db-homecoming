import { BadgeData } from 'coh-content-db'
import { MuVorkan } from '../../contact/muvorkan'

export const TheDeterminedMentor: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-determined-mentor',
  setTitle: { id: 2189 },
  name: 'The Determined Mentor',
  alignment: ['H', 'V', 'P'],
  badgeText: 'Ice Mistral was absorbed by Mot, but you were able to save Scirocco from the creature known as the Sentinel. Scirocco has pledged to not rest until he rescues Ice Mistral from the maw of Mot.',
  links: [
    { title: 'The Determined Mentor Badge', href: 'https://homecoming.wiki/wiki/The_Determined_Mentor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: 'aaom', type: 'ARC', missionName: 'An Act of Mercy', contactKey: MuVorkan.key },
  ],
}
