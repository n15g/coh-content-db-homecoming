import { BadgeData } from 'coh-content-db'

export const Epidemiologist: BadgeData = {
  type: 'DEFEAT',
  key: 'epidemiologist',
  setTitle: { id: 2461 },
  name: [
    { value: 'Epidemiologist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have made your name known to every notable Vahzilok leader (and their lackeys) you've encountered before, during, and after Dr. Vahzilok's incarceration, placing each of them in jail personally.` },
  ],
  acquisition: `Defeat Pathogen & Malady, Salamander & Newt, Cortex & Grey Matter (Abandoned Sewer Network), Dr. Vahzilok, Doc Buzzsaw, and Dr. Meinst (various missions).`,
  links: [
    { title: 'Epidemiologist Badge', href: 'https://homecoming.wiki/wiki/Epidemiologist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/epidemiologist.png' },
  ],
}
