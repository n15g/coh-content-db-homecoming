import { BadgeData, zoneLink } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../../contact/provost-marchand-primal'
import { Ouroboros } from '../../zone/ouroboros'

export const GroupFounder: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'group-founder',
  setTitle: { id: 2255 },
  name: 'Group Founder',
  alignment: ['H'],
  badgeText: 'You helped Provost Marchand form the New Praetorians.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "A New Dimension, a New Team" entry with number 24.06 at level 50.`,
  links: [
    { title: 'Group Founder Badge', href: 'https://homecoming.wiki/wiki/Group_Founder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png',
  requirements: [
    { key: 'a-new-dimension-a-new-team', type: 'ARC', missionName: 'A New Dimension, A New Team', contactKey: ProvostMarchandPrimal.key },
  ],
}
