import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../../contact/provost-marchand-primal'
import { Ouroboros } from '../../zone/ouroboros'

export const PendragonsAlly: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'pendragons-ally',
  setTitle: { id: 2264 },
  name: `Pendragon's Ally`,
  alignment: ['H'],
  badgeText: 'You were able to keep Pendragon from being defeated while he was fighting Maestro by himself.',
  acquisition: `Complete all objectives in the first mission of the third story arc from ${contactLink(ProvostMarchandPrimal)} before Pendragon is defeated.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Tipping the Scales" entry with number 24.08 at level 50.`,
  links: [
    { title: `Pendragon's Ally Badge`, href: 'https://homecoming.wiki/wiki/Pendragon%27s_Ally_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
}
