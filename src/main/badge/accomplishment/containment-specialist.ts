import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { AgentWatkins } from '../../contact/agent-watkins'
import { Ouroboros } from '../../zone/ouroboros'

export const ContainmentSpecialist: BadgeData = {
  type: 'accomplishment',
  key: 'containment-specialist',
  setTitleId: [2434],
  name: 'Containment Specialist',
  morality: 'heroic',
  badgeText: `Under extreme pressure, you were cool in a crisis. With only five minutes in a warehouse engulfed in flames, you were able to disable the rigged sprinklers before the situation became a national tragedy.`,
  acquisition: `Turn off the sprinklers before the timer runs out during 'The Graveyard Shift' story arc from ${contactLink(AgentWatkins)}.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "The Graveyard Shift" entry with number 27.01 in the 25-29 level range.`,
  links: [
    { title: 'Containment Specialist Badge', href: 'https://homecoming.wiki/wiki/Containment_Specialist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/containment-specialist.png',
}
