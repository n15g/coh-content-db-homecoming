import { BadgeData, mapLink } from 'coh-content-db'
import { TheChantry } from '../../map/the-chantry'

export const Unfettered: BadgeData = {
  type: 'EXPLORATION',
  key: 'unfettered',
  setTitle: { id: 1814 },
  name: [{ value: 'Unfettered' }],
  alignment: ['H'],
  mapKey: TheChantry.key,
  loc: [1112, 270, -3857],
  badgeText: [{
    value: 'You have burdened yourself with so many unnecessary attachments.'
      + ' Your friends will only disappoint you; they are best cast aside.'
      + ' You will ultimately disappoint those you love; better to walk alone and be responsible only to yourself.'
      + ' This identity you\'ve constructed is just an illusion to hide who you really are; not to everyone else, they are less than nothing, but to yourself.'
      + ' Your possessions, your job, your status: it is time for you to deny the hold they have on you and walk free and unfettered.',
  }],
  notes: `Located in ${mapLink(TheChantry)} 0.50 miles SSW of the Bastion of Denial marker, east of the geyser on the floating island.`,
  links: [
    { title: 'Unfettered Badge', href: 'https://homecoming.wiki/wiki/Unfettered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
