import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { ProvostMarchandPrimal } from '../../contact/provost-marchand-primal'

export const RiptidesComrade: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'riptides-comrade',
  setTitle: { id: 2265 },
  name: `Riptide's Comrade`,
  alignment: ['H'],
  badgeText: 'You were able to prevent Riptide from being defeated while he was fighting Nosferatu by himself.',
  acquisition: `Complete all objectives in the "Nosferatu's Croatoa" mission from ${contactLink(ProvostMarchandPrimal)} before Riptide is defeated.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Tipping the Scales" entry with number 24.08 at level 50.`,
  links: [
    { title: `Riptide's Comrade Badge`, href: 'https://homecoming.wiki/wiki/Riptide%27s_Comrade_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
  requirements: [
    {
      key: 'nc', type: 'MISSION', missionName: `Nosferatu's Croatoa`, contactKey: ProvostMarchandPrimal.key,
      links: [{ title: `Nosferatu's Croatoa`, href: `https://homecoming.wiki/wiki/Provost_Marchand_(Primal_Earth)#Part_Two:_Nosferatu's_Croatoa` }],
    },
  ],
}
