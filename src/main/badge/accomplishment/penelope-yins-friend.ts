import { BadgeData } from 'coh-content-db'

export const PenelopeYinsFriend: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'penelope-yins-friend',
  setTitle: { id: 2241 },
  name: [
    { alignment: 'H', value: 'Penelope Yin\'s Friend' },
    { alignment: 'V', value: 'Penelope Yin\'s Betrayer' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'Penelope Yin has expressed her gratitude by presenting you with this medal.' },
    { alignment: 'V', value: 'Penelope Yin probably wishes she could erase the memory of having given you this medal.' },
  ],
  acquisition: 'Complete the Penelope Yin Task Force',
  links: [
    { title: 'Penelope Yin\'s Friend Badge', href: 'https://homecoming.wiki/wiki/Penelope_Yin%27s_Friend_Badge' },
    { title: 'Penelope Yin\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Penelope_Yin%27s_Betrayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tf-3.png' },
  ],
}
