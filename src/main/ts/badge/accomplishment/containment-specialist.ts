import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { TheGraveyardShift } from '../../mission/the-graveyard-shift'

export const ContainmentSpecialist: BadgeData = {
  type: 'accomplishment',
  key: 'containment-specialist',
  setTitleId: [2434],
  name: 'Containment Specialist',
  morality: 'heroic',
  badgeText: `Under extreme pressure, you were cool in a crisis. With only five minutes in a warehouse engulfed in flames, you were able to disable the rigged sprinklers before the situation became a national tragedy.`,
  acquisition: `Turn off the sprinklers before the timer runs out during ${missionLink(TheGraveyardShift)} story arc.`,
  links: [
    { title: 'Containment Specialist Badge', href: 'https://homecoming.wiki/wiki/Containment_Specialist_Badge' },
    { title: TheGraveyardShift.name, href: missionUri(TheGraveyardShift) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/containment-specialist.png',
}
