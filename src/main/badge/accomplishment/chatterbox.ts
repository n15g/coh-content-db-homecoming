import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'
import { ProvostMarchandPrimalEarth } from '../../contact/provost-marchand-primal-earth'
import { Ouroboros } from '../../zone/ouroboros'
import { Nadia } from '../../contact/nadia'
import { BlindMakwa } from '../../contact/blind-makwa'
import { Palatine } from '../../contact/palatine'
import { KatieDouglas } from '../../contact/katie-douglas'

export const Chatterbox: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'chatterbox',
  setTitle: { id: 2263 },
  name: 'Chatterbox',
  alignment: ['H'],
  badgeText: `You were sent in to handle things on Refugee Island, but you decided to catch up with some old friends from ${zoneLink(FirstWard)}.`,
  acquisition: `Speak to four key NPCs from First Ward in the 'Refugees' mission of the 'A New Dimension, A New Team' story arc from ${contactLink(ProvostMarchandPrimalEarth)}.`,
  notes: `
* ${contactLink(Nadia)} (-1447, -3, -7093)
* ${contactLink(BlindMakwa)} (-1498, 0, -6365)
* ${contactLink(Palatine)} (-2033, 0, -6569)
* ${contactLink(KatieDouglas)} (-1949, 0, -6486)

To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "A New Dimension, a New Team" entry with number 24.06 at level 50.`,
  links: [
    { title: 'Chatterbox Badge', href: 'https://homecoming.wiki/wiki/Chatterbox_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
}
