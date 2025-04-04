import { BadgeData, zoneLink } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const Hangman: BadgeData = {
  type: 'exploration',
  key: 'hangman',
  setTitleId: [259],
  name: [
    { sex: 'M', value: 'Hangman' },
    { sex: 'F', value: 'Hangwoman' },
  ],
  morality: 'all',
  zoneKey: SirensCall.key,
  loc: [-1134.5, -165.7, -1193.5],
  badgeText: 'This cargo ship was left hanging on what is left of the war wall when Sunburst died in the huge explosion.',
  notes: `Located on a small rock outcropping at the very base of the northern wall of the zone, just off the western shore of the villain base, about 190 yards west of the ${zoneLink(SharkheadIsle)} transfer.`,
  links: [
    { title: 'Hangman Badge', href: 'https://homecoming.wiki/wiki/Hangman_Badge' },
    { title: 'Hangwoman Badge', href: 'https://homecoming.wiki/wiki/Hangwoman_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
