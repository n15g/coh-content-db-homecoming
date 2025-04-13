import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { TheGraveyardShift } from '../../mission/the-graveyard-shift'

export const WentOffScript: BadgeData = {
  type: 'accomplishment',
  key: 'went-off-script',
  setTitleId: [2436],
  name: 'Went Off Script',
  morality: 'heroic',
  badgeText: `You chose to defy your contact and risk the lives of countless innocents to put a firm end to the Vahzilok civil war.`,
  acquisition: `Refuse to quarantine during ${missionLink(TheGraveyardShift)} story arc.`,
  notes: `**Note:** Only awarded to the mission owner.`,
  links: [
    { title: 'Went Off Script Badge', href: 'https://homecoming.wiki/wiki/Went_Off_Script_Badge' },
    { title: TheGraveyardShift.name, href: missionUri(TheGraveyardShift) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/went-off-script.png',
}
