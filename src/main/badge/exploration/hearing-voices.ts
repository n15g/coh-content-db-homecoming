import { BadgeData } from 'coh-content-db'
import { CascadeArchipelago } from '../../map/cascade-archipelago'

export const HearingVoices: BadgeData = {
  type: 'EXPLORATION',
  key: 'hearing-voices',
  setTitle: { id: 1808 },
  name: [{ value: 'Hearing Voices' }],
  alignment: ['H'],
  mapKey: CascadeArchipelago.key,
  loc: [-4717, 1326, -2965],
  badgeText: [{
    value: 'Low voices vibrate the very air around you, issuing from no mouths that you can see.'
      + ' No matter where you go, you cannot escape the constant chanting of the nonsense phrase "...uuLArUUruUlaARUuaALuU..." You cover your ears but it cannot deaden the sound.'
      + ' You dream of earplugs, you fantasize about cotton swabs suffused with wax, you wish for an ice-pick to puncture your eardrums, anything to make the chanting stop.'
      + ' It is not long before you realize that the chanting is not coming from without, but from within, from you.'
      + ' It is your own mouth that chants this dark refrain, something commands you to speak and unless you leave now you wonder if you will ever stop.',
  }],
  notes: 'Located in [map:cascade-archipelago] 441 yards NNW of The Chanting Island marker, just west of the bunker embedded in rock.',
  links: [
    { title: 'Hearing Voices Badge', href: 'https://homecoming.wiki/wiki/Hearing_Voices_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
