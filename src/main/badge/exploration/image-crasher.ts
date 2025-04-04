import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const ImageCrasher: BadgeData = {
  type: 'exploration',
  key: 'image-crasher',
  setTitleId: [1511],
  name: 'Image Crasher',
  morality: 'villainous',
  zoneKey: Grandville.key,
  loc: [2677, 243, 826],
  badgeText: `This large display screen fell off its holster after a particularly rough battle between Black Scorpion and Captain Mako.
It was supposed to be fixed, but progress kept halting as workers became too distracted by the images on the screen.`,
  notes: `Located in the Tangle neighborhood, 230 yards northeast of the Tangle marker on the ledge where you can find both Shadow Spider and Viridian, approximately halfway up the tower.`,
  links: [
    { title: 'Image Crasher Badge', href: 'https://homecoming.wiki/wiki/Image_Crasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '6',
}
