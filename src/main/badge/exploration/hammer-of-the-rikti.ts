import { BadgeData, zoneLink } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const HammerOfTheRikti: BadgeData = {
  type: 'EXPLORATION',
  key: 'hammer-of-the-rikti',
  setTitle: { id: 1792 },
  name: [{ value: 'Hammer of the Rikti' }],
  alignment: ['H'],
  zoneKey: CreysFolly.key,
  loc: [2571, 22, 3691],
  badgeText: [{
    value: 'When Venice was targeted by the Rikti in their initial strike, this is where their first attack was centered.'
      + ' The area was flattened and Rikti forces streamed into the area, slaying all they encountered.'
      + ' As this location was the site of the main Crey administration facility, various groups are eager to plumb the ruins in search of lost tech, but the Rikti are thick in this area and'
      + ' have managed to repel any attempts to survey the damage.',
  }],
  notes: `Located in ${zoneLink(CreysFolly)} 140 yards SSE of The Blight marker, on top of the destroyed building.`,
  links: [
    { title: 'Hammer of the Rikti Badge', href: 'https://homecoming.wiki/wiki/Hammer_of_the_Rikti_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
