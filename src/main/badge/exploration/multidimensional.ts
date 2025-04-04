import { BadgeData, contactLink } from 'coh-content-db'
import { HydraMissionMap } from '../../zone/hydra-missions'
import { TinaMacintyre } from '../../contact/tina-macintyre'
import { UnaiKemen } from '../../contact/unai-kemen'

export const Multidimensional: BadgeData = {
  type: 'exploration',
  key: 'multidimensional',
  setTitleId: [172],
  name: 'Multidimensional',
  morality: 'all',
  zoneKey: HydraMissionMap.key,
  badgeText: `The Hydra that lives under Paragon City is rumored to be a refugee from this dimension.`,
  acquisition: `Spend time in a Hyrda mission from either ${contactLink(TinaMacintyre)} or ${contactLink(UnaiKemen)}.`,
  notes: `This badge is awarded for spending any amount of time on the mission map that appears in either of the Hydra missions from ${contactLink(TinaMacintyre)} or ${contactLink(UnaiKemen)}.

The badge is awarded after a random period of time while on the map, or will be rewarded immediately if you leave the map.`,
  links: [
    { title: 'Multidimensional Badge', href: 'https://homecoming.wiki/wiki/Multidimensional_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
}
