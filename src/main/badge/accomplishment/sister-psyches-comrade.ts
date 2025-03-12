import { BadgeData } from 'coh-content-db'

export const SisterPsychesComrade: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'sister-psyches-comrade',
  setTitle: { id: 63 },
  name: [
    { alignment: 'H', value: 'Sister Psyche\'s Comrade' },
    { alignment: 'V', value: 'Sister Psyche\'s Betrayer' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'Sister Psyche has expressed her gratitude by presenting you with this medal.' },
    { alignment: 'V', value: 'Sister Psyche probably wishes she could erase the memory of having given you this medal.' },
  ],
  acquisition: 'Complete the Sister Psyche Task Force: Clamor and Destruction in Flashback',
  links: [
    { title: 'Sister Psyche\'s Comrade Badge', href: 'https://homecoming.wiki/wiki/Sister_Psyche%27s_Comrade_Badge' },
    { title: 'Sister Psyche\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Sister_Psyche%27s_Betrayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tf-3.png' },
  ],
}
