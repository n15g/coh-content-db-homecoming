import { BadgeData } from 'coh-content-db'
import { SisterPsycheTaskForce } from '../../mission/sister-psyche-task-force'

export const SisterPsychesComrade: BadgeData = {
  type: 'accomplishment',
  key: 'sister-psyches-comrade',
  setTitleId: [63],
  name: [
    { alignment: 'hero', value: `Sister Psyche's Comrade` },
    { alignment: 'villain', value: `Sister Psyche's Betrayer` },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Sister Psyche has expressed her gratitude by presenting you with this medal.' },
    { alignment: 'villain', value: 'Sister Psyche probably wishes she could erase the memory of having given you this medal.' },
  ],
  links: [
    { title: `Sister Psyche's Comrade Badge`, href: 'https://homecoming.wiki/wiki/Sister_Psyche%27s_Comrade_Badge' },
    { title: `Sister Psyche's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Sister_Psyche%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tf-3.png',
  requirements: [
    { key: SisterPsycheTaskForce.key, type: 'mission', missionKey: SisterPsycheTaskForce.key },
  ],
}
