import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { AgentWatkins } from '../../contact/agent-watkins'
import { Ouroboros } from '../../zone/ouroboros'

export const WentOffScript: BadgeData = {
  type: 'accomplishment',
  key: 'went-off-script',
  setTitleId: [2436],
  name: 'Went Off Script',
  morality: 'heroic',
  badgeText: `You chose to defy your contact and risk the lives of countless innocents to put a firm end to the Vahzilok civil war.`,
  acquisition: `Refuse to quarantine during "The Graveyard Shift" story arc from ${contactLink(AgentWatkins)}.`,
  notes: `**Note:** Only awarded to the mission owner.
  
  To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "The Graveyard Shift" entry with number 27.01 in the 25-30 level range.`,
  links: [
    { title: 'Went Off Script Badge', href: 'https://homecoming.wiki/wiki/Went_Off_Script_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/went-off-script.png',
}
