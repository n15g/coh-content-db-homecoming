import { BadgeData, contactLink } from 'coh-content-db'
import { NumberSix } from '../../contact/number-six'

export const AvatarSmasher: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'avatar-smasher',
  setTitle: { id: 2270 },
  name: 'Avatar Smasher',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You faced off against the Avatars of Hamidon by yourself, showing the Hamidon that you are a force to be reckoned with.',
  acquisition: `Defeat the three Avatars of Hamidon in the final mission from ${contactLink(NumberSix)} after refusing help from the Imperial Defense Force.`,
  links: [
    { title: 'Avatar Smasher Badge', href: 'https://homecoming.wiki/wiki/Avatar_Smasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate-challenge.png',
}
