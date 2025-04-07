import { BadgeData, zoneLink } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const ShadowWalker: BadgeData = {
  type: 'exploration',
  key: 'shadow-walker',
  setTitleId: [2053],
  name: 'Shadow Walker',
  morality: 'all',
  zoneKey: FirstWard.key,
  loc: [-120, 20, -1952],
  badgeText: [{
    value: `Despite the spirit wards that safeguard your soul and the ghost lights that guide your way, traversing the Shadowed Paths can be an unnerving experience.
The Shadowed Paths are a fragment of the world where live the very things that go 'bump' in the night; the world of disembodied spirits and the unquiet dead.
Thanks to the Carnival of Light they cannot sense you, but the frightened child that lives within us all knows they are out there, just out of sight, ready to strike at the first misstep.
Tread carefully.`,
  }],
  notes: `Located in ${zoneLink(FirstWard)} in the Free-Fire Zone neighborhood, 346 yards southwest of the map marker; at the bottom of a ditch along one of the Twilight World paths.`,
  links: [
    { title: 'Shadow Walker Badge', href: 'https://homecoming.wiki/wiki/Shadow_Walker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '6',
}
