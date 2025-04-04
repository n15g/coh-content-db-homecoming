import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { ClaireChildress } from '../../contact/claire-childress'
import { AndrewFiore } from '../../contact/andrew-fiore'
import { VicGarland } from '../../contact/vic-garland'
import { JakeKim } from '../../contact/jake-kim'
import { LtColHughMcDougal } from '../../contact/lt-col-hugh-mcdougal'
import { WilmaPeterson } from '../../contact/wilma-peterson'

export const Chameleon: BadgeData = {
  type: 'accomplishment',
  key: 'chameleon',
  setTitleId: [2385],
  name: 'Chameleon',
  morality: 'heroic',
  badgeText: `You infiltrated the Freakshow and recovered the stolen Chameleon Suit.`,
  notes: `Also available via ${zoneLink(Ouroboros)}; Level 20-24, mission 0.12 'The Chameleon Suit'.`,
  links: [
    { title: 'Chameleon Badge', href: 'https://homecoming.wiki/wiki/Chameleon_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/chameleon.png',
  requirements: [
    { key: 'the-chameleon-suit', type: 'MISSION', missionName: 'The Chameleon Suit', contactKey: [ClaireChildress.key, AndrewFiore.key, VicGarland.key, JakeKim.key, LtColHughMcDougal.key, WilmaPeterson.key] },
  ],
}
