import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const XRaySpectator: BadgeData = {
  type: 'exploration',
  key: 'x-ray-spectator',
  setTitleId: [1802],
  name: 'X-Ray Spectator',
  morality: 'paragon-city-access',
  badgeText: `The soldiers of Point X-Ray like to call themselves the "X-Raiders."
They are an elite squad specializing in sniper rifles and counter-insurgency and though they find themselves in a completely unfamiliar environment
they still employ their military discipline and peerless training to the effort.
They don't generally welcome super-powered individuals but seeing as you've come as far, you've clearly proven yourself against the "hostiles" and so they offer you a grudging respect.
Though they are not ready to give you the title of fellow X-Raider... yet.`,
  notes: `Located 208 yards NW of the Point X-Ray marker, on top of the base's outer wall.`,
  links: [
    { title: 'X-Ray Spectator Badge', href: 'https://homecoming.wiki/wiki/X-Ray_Spectator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirebaseZulu.key, coords: [-3222, 1289, 111] }, vidiotMapKey: '6' },
  ],
}
