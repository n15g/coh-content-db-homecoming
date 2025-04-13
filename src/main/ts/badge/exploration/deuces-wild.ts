import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const DeucesWild: BadgeData = {
  type: 'exploration',
  key: 'deuces-wild',
  setTitleId: [279],
  name: 'Deuces Wild',
  morality: 'rogue-isles-access',
  badgeText: `Twos are wild, but not as wild as you!`,
  notes: `Located in the doorway of the Ice Palace casino in the Jackpot neighborhood, 150 yards east of the Jackpot neighborhood marker.`,
  links: [
    { title: 'Deuces Wild Badge', href: 'https://homecoming.wiki/wiki/Deuces_Wild_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StMartial.key, coords: [-3325, -29, -436], icon: 'badge', iconText: '1' } },
  ],
}
