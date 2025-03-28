import { BadgeData, zoneLink } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'
import { TalosIsland } from '../../zone/talos-island'

export const Chameleon: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'chameleon',
  setTitle: { id: 2385 },
  name: [
    { value: 'Chameleon' },
  ],
  alignment: ['H'],
  badgeText: [{ value: `You infiltrated the Freakshow and recovered the stolen Chameleon Suit.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/chameleon.png' }],
  acquisition: `Complete the task set 'The Chameleon Suit'`,
  notes: `The task set 'The Chameleon Suit' begins with the 'Infiltrate the Freakshow and recover the stolen Chameleon Suit' mission from any one of the level 20-24 contacts
          Andrew Fiore or Lt. Col. Hugh McDougal in ${zoneLink(TalosIsland)}, or Jake Kim or Wilma Peterson in ${zoneLink(IndependencePort)}.
          It is also available via Ouroboros, level 20-24, mission 0.12 'The Chameleon Suit'.`,
  links: [
    { title: 'Chameleon Badge', href: 'https://homecoming.wiki/wiki/Chameleon_Badge' },
  ],
}
