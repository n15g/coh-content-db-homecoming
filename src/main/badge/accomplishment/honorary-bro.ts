import { BadgeData, contactLink } from 'coh-content-db'
import { MrGPrimal } from '../../contact/mr-g-primal'
import { DeanMacArthur } from '../../contact/dean-macarthur'

export const HonoraryBro: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'honorary-bro',
  setTitle: { id: 2267 },
  name: [
    { sex: 'M', value: 'Honorary Bro' },
    { sex: 'F', value: 'Honorary Sis' },
  ],
  alignment: ['V'],
  badgeText: 'Dean MacArthur stood up for you when Wu Yin tried to bring you down. He was captured by the Carnival of Shadows for this, but you rescued him. Dean MacArthur declared you an Honorary Bro.',
  acquisition: `Rescue ${contactLink(DeanMacArthur)} in the third mission of the second story arc from ${contactLink(MrGPrimal)}`,
  notes: `${contactLink(DeanMacArthur)} will only be present if you have previously completed his story arc.`,
  links: [
    { title: 'Honorary Bro Badge', href: 'https://homecoming.wiki/wiki/Honorary_Bro_Badge' },
    { title: 'Honorary Sis Badge', href: 'https://homecoming.wiki/wiki/Honorary_Sis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png',
}
