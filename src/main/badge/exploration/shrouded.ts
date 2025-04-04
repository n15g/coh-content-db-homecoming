import { BadgeData } from 'coh-content-db'
import { BlackShroudDimension } from '../../zone/black-shroud-dimension'

export const Shrouded: BadgeData = {
  type: 'exploration',
  key: 'shrouded',
  setTitleId: [173],
  name: [
    { alignment: 'hero', value: 'Shrouded' },
    { alignment: 'villain', value: 'Shady' },
  ],
  morality: 'all',
  zoneKey: BlackShroudDimension.key,
  badgeText: [
    { alignment: 'hero', value: 'This otherworld has been overshadowed by corrupting magic.' },
    { alignment: 'villain', value: 'A trip back to Paragon City confirmed it: You\'re the shady type of person other people are right to be afraid of.' },
  ],
  notes: 'This badge is awarded for spending any amount of time on the mission map in the [Disrupt Nightstar\'s Ritual](https://homecoming.wiki/wiki/Maria_Jenkins#Disrupt_Nightstar.27s_ritual)'
    + ' mission from [Maria Jenkins](https://homecoming.wiki/wiki/Maria_Jenkins)'
    + ' or the [Bring Citizens to Vahzilok Surgeons](https://homecoming.wiki/wiki/Dmitri_Krylov#Bring_citizens_to_Vahzilok_surgeons) mission from'
    + ' [Dmitri Krylov](https://homecoming.wiki/wiki/Dmitri_Krylov).\n'
    + '\n'
    + 'The badge is awarded after a random period of time while on the map, or will be rewarded immediately if you leave the map.',
  links: [
    { title: 'Shrouded Badge', href: 'https://homecoming.wiki/wiki/Shrouded_Badge' },
    { title: 'Shady Badge', href: 'https://homecoming.wiki/wiki/Shady_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
}
