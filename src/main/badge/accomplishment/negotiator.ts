import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { TonyKord } from '../../contact/tony-kord'
import { PaulaDempsey } from '../../contact/paula-dempsey'
import { MauriceFeldon } from '../../contact/maurice-feldon'

export const Negotiator: BadgeData = {
  type: 'accomplishment',
  key: 'negotiator',
  setTitleId: [71],
  name: 'Negotiator',
  morality: 'heroic',
  badgeText: 'You were instrumental in stopping a war between the Clockwork and the Skulls.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Break up the Clockwork and the Skulls" entry with number 0.01 in the 1-9 level range.`,
  links: [
    { title: 'Negotiator Badge', href: 'https://homecoming.wiki/wiki/Negotiator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/negotiator.png',
  requirements: [
    { key: 'clocks-out', type: 'MISSION', missionName: 'Get the Clockwork out of the Warehouse Before the Skulls get Involved', contactKey: [TonyKord.key, PaulaDempsey.key, MauriceFeldon.key] },
  ],
}
