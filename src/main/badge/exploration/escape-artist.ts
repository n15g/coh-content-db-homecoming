import { BadgeData, mapLink } from 'coh-content-db'
import { Faultline } from '../../map/faultline'

export const EscapeArtist: BadgeData = {
  type: 'EXPLORATION',
  key: 'escape-artist',
  setTitle: { id: 636 },
  name: [{ value: 'Escape Artist' }],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Dr. Hank Neville, foremost geologist, was attacked by Arachnos, but escaped with the help of Freedom Corps troops.` },
    { alignment: 'V', value: `This is the spot where geologist Dr. Hank Neville narrowly escaped Arachnos capture, aided by interfering Freedom Corps troops.` },
  ],
  mapKey: Faultline.key,
  loc: [-679, -167, -208],
  notes: `In ${mapLink(Faultline)}, halfway between Freight Lifts B and C, there is a crevasse to the north. The badge marker is at the end of the bottom of that crevasse.`,
  links: [
    { title: 'Escape Artist Badge', href: 'https://homecoming.wiki/wiki/Escape_Artist_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '2',
}
