import { BadgeData } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const HearingVoices: BadgeData = {
  type: 'exploration',
  key: 'hearing-voices',
  setTitleId: [1808],
  name: 'Hearing Voices',
  morality: 'paragon-city-access',
  badgeText: `Low voices vibrate the very air around you, issuing from no mouths that you can see.
No matter where you go, you cannot escape the constant chanting of the nonsense phrase "...uuLArUUruUlaARUuaALuU..." You cover your ears but it cannot deaden the sound.
You dream of earplugs, you fantasize about cotton swabs suffused with wax, you wish for an ice-pick to puncture your eardrums, anything to make the chanting stop.
It is not long before you realize that the chanting is not coming from without, but from within, from you.
It is your own mouth that chants this dark refrain, something commands you to speak and unless you leave now you wonder if you will ever stop.`,
  notes: `Located 441 yards NNW of The Chanting Island marker, just west of the bunker embedded in rock.`,
  links: [
    { title: 'Hearing Voices Badge', href: 'https://homecoming.wiki/wiki/Hearing_Voices_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CascadeArchipelago.key, coords: [-4717, 1326, -2965] }, vidiotMapKey: '4' },
  ],
}
