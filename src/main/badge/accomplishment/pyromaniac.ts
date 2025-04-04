import { BadgeData, contactLink } from 'coh-content-db'
import { MrGPrimal } from '../../contact/mr-g-primal'

export const Pyromaniac: BadgeData = {
  type: 'accomplishment',
  key: 'pyromaniac',
  setTitleId: [2269],
  name: 'Pyromaniac',
  morality: 'villainous',
  badgeText: 'You set fire to one of the nicer parts of Faultline while Penelope Yin and Penelope Mayhem were still fighting elsewhere.',
  acquisition: `Arm all five bombs before Penelope Yin and Penelope Mayhem in the "Cracking Faultline" mission from ${contactLink(MrGPrimal)}.`,
  links: [
    { title: 'Pyromaniac Badge', href: 'https://homecoming.wiki/wiki/Pyromaniac_Badge' },
    { title: 'Cracking Faultline Mission', href: 'https://homecoming.wiki/wiki/Mr._G_(Primal_Earth)#Part_Four:_Cracking_Faultline' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png',
}
