import { BadgeData } from 'coh-content-db'
import { TheChantry } from '../../zone/the-chantry'

export const Unfettered: BadgeData = {
  type: 'exploration',
  key: 'unfettered',
  setTitleId: [1814],
  name: 'Unfettered',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You have burdened yourself with so many unnecessary attachments.
Your friends will only disappoint you; they are best cast aside.
You will ultimately disappoint those you love; better to walk alone and be responsible only to yourself.
This identity you've constructed is just an illusion to hide who you really are; not to everyone else, they are less than nothing, but to yourself.
Your possessions, your job, your status: it is time for you to deny the hold they have on you and walk free and unfettered.`,
  notes: `Located 0.50 miles SSW of the Bastion of Denial marker, east of the geyser on the floating island.`,
  links: [
    { title: 'Unfettered Badge', href: 'https://homecoming.wiki/wiki/Unfettered_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheChantry.key, coords: [1112, 270, -3857], icon: 'badge', iconText: '2' } },
  ],
}
