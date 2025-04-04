import { BadgeData } from 'coh-content-db'
import { TheChantry } from '../../zone/the-chantry'

export const Bereaved: BadgeData = {
  type: 'exploration',
  key: 'bereaved',
  setTitleId: [1817],
  name: 'Bereaved',
  morality: 'heroic',
  zoneKey: TheChantry.key,
  loc: [-1574, 1764, 6657],
  badgeText: `You live in a dangerous world. Beset on all sides by foes that wish to destroy you and all you hold dear.
You've seen countless friends and comrades fall in battle. You've seen their bodies burnt, their minds warped, their bones broken.
You've heard their cries of pain and fear and echoed it with your own. How many have fallen by the wayside, unable to carry on in the face of such daunting odds, who've had their spirits broken by the
constant toil, the never-ending hordes of villainous enemies who never tire and never give up?`,
  notes: `Located 538 SSE of the Bastion of Sorrow marker, on the south edge of the small island to the south of the neighborhood's main island.`,
  links: [
    { title: 'Bereaved Badge', href: 'https://homecoming.wiki/wiki/Bereaved_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '5',
}
