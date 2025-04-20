import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { TheGraveyardShift } from '../../mission/the-graveyard-shift'

export const TheGreaterGood: BadgeData = {
  type: 'accomplishment',
  key: 'the-greater-good',
  setTitleId: [2435],
  name: 'The Greater Good',
  releaseDate: '2020-11-26',
  morality: 'heroic',
  badgeText: `You chose to sit tight and quarantine yourself, rather than jeopardize Paragon with the diseases from Pathogen's warehouse.`,
  acquisition: `Choose to quarantine during ${missionLink(TheGraveyardShift)} story arc.`,
  notes: `**Note:** Only awarded to the mission owner.`,
  links: [
    { title: 'The Greater Good Badge', href: 'https://homecoming.wiki/wiki/The_Greater_Good_Badge' },
    { title: TheGraveyardShift.name, href: missionUri(TheGraveyardShift) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-greater-good.png',
}
