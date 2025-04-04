import { BadgeData, zoneLink } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const UsurperOfWorlds: BadgeData = {
  type: 'exploration',
  key: 'usurper-of-worlds',
  setTitleId: [1810],
  name: 'Usurper of Worlds',
  morality: 'heroic',
  zoneKey: CascadeArchipelago.key,
  loc: [946, 4833, -6690],
  badgeText: [{
    value: 'The briefing listed this area as "Tyrant\'s Rock," though you are not sure why.'
      + ' Perhaps it is the growing sense of duty and entitlement that fills your chest with unbidden pride.'
      + ' You cast your gaze across this shattered landscape and are struck by a sudden feeling that it is yours, by might or by right.'
      + ' Your heart thuds with a martial drumbeat and you nod at the truth of it—yes, it could all be yours.'
      + ' You will find the one who rules this land and take their throne by force.'
      + ' But you shake off this irrational notion and the realization of where you are slaps you in the face.'
      + ' These thoughts are a trap meant to distract you from your real purpose here.',
  }],
  notes: `Located in ${zoneLink(CascadeArchipelago)} 134 yards NW of the Tyrant's Rock marker, in the NW section of the island.`,
  links: [
    { title: 'Usurper of Worlds Badge', href: 'https://homecoming.wiki/wiki/Usurper_of_Worlds_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '6',
}
