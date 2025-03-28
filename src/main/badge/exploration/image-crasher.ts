import { BadgeData, zoneLink } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const ImageCrasher: BadgeData = {
  type: 'EXPLORATION',
  key: 'image-crasher',
  setTitle: { id: 1511 },
  name: [{ value: 'Image Crasher' }],
  alignment: ['V'],
  zoneKey: Grandville.key,
  loc: [2677, 243, 826],
  badgeText: [{
    value: `This large display screen fell off its holster after a particularly rough battle between Black Scorpion and Captain Mako.
It was supposed to be fixed, but progress kept halting as workers became too distracted by the images on the screen.`,
  }],
  notes: `Located in ${zoneLink(Grandville)}, in the Tangle neighborhood.

It is 230 yards northeast of the Tangle marker on the ledge where you can find both Shadow Spider and Viridian, approximately halfway up the tower..`,
  links: [
    { title: 'Image Crasher Badge', href: 'https://homecoming.wiki/wiki/Image_Crasher_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '6',
}
