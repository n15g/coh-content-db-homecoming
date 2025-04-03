import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { FieldAgentKeithNance } from '../../contact/field-agent-keith-nance'

export const TheFairest: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-fairest',
  setTitle: { id: 1587 },
  name: [
    { alignment: 'H', value: 'The Fairest' },
    { alignment: 'V', value: 'Turf Protector' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Working with the government and your mirror self from another dimension, you stopped your evil doppelganger's plans to cause chaos and destruction throughout Paragon.` },
    { alignment: 'V', value: `Working with the government and your mirror self from another dimension, you stopped your evil doppelganger's plans to cause chaos and destruction throughout Paragon. That's your turf.` },
  ],
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Twisted Reflections" entry with number 17.01 in the 25-29 level range.`,
  links: [
    { title: 'The Fairest Badge', href: 'https://homecoming.wiki/wiki/The_Fairest_Badge' },
    { title: 'Turf Protector Badge', href: 'https://homecoming.wiki/wiki/Turf_Protector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-fairest.png',
  requirements: [
    { key: 'tr', type: 'ARC', missionName: 'Twisted Reflections', contactKey: FieldAgentKeithNance.key },
  ],
}
