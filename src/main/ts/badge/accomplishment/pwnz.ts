import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { WilmaPeterson } from '../../contact/wilma-peterson'
import { AndrewFiore } from '../../contact/andrew-fiore'
import { ClaireChildress } from '../../contact/claire-childress'
import { LtColHughMcDougal } from '../../contact/lt-col-hugh-mcdougal'
import { JakeKim } from '../../contact/jake-kim'
import { VicGarland } from '../../contact/vic-garland'

export const Pwnz: BadgeData = {
  type: 'accomplishment',
  key: 'pwnz',
  setTitleId: [75],
  name: 'Pwnz',
  morality: 'heroic',
  badgeText: 'You have arrested one of the higher ranking members of the Freakshow.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Retrieve Stolen Weapons From The Freakshow" entry with number 0.13 in the 20-24 level range.`,
  links: [
    { title: 'Pwnz Badge', href: 'https://homecoming.wiki/wiki/Pwnz_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pwnz.png',
  requirements: [
    { key: 'rtsw', type: 'MISSION', missionName: 'Retrieve the Stolen Weapons from the Freakshow', contactKey: [WilmaPeterson.key, AndrewFiore.key, ClaireChildress.key, LtColHughMcDougal.key, JakeKim.key, VicGarland.key] },
  ],
}
