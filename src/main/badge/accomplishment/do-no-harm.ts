import { BadgeData, mapLink } from 'coh-content-db'
import { Brickstown } from '../../map/brickstown'

export const DoNoHarm: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'do-no-harm',
  setTitle: { id: 2386 },
  name: [
    { value: 'Do No Harm' },
  ],
  alignment: ['H'],
  badgeText: [{ value: `You have delivered medical supplies to the Rikti.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/do_no_harm.png' }],
  acquisition: `Complete the task set 'Hippocratic Oath'.`,
  notes: `The task set 'Hippocratic Oath' begins with the 'Rescue the doctors from the Rikti' mission from level 35-39 contact Steven Sheridan in ${mapLink(Brickstown)}. It is also available via Ouroboros, level 35-39, mission 0.35 'Hippocratic Oath'.`,
  links: [
    { title: 'Do No Harm Badge', href: 'https://homecoming.wiki/wiki/Do_No_Harm_Badge' },
  ],
}
