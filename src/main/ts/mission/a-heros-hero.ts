import { MissionData } from 'coh-content-db'
import { MariaJenkins } from '../contact/maria-jenkins'

export const AHerosHero: MissionData = {
  key: 'a-heros-hero',
  name: `A Hero's Hero`,
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: MariaJenkins.key,
  levelRange: [45],
  links: [
    { title: `A Hero's Hero`, href: `https://homecoming.wiki/wiki/Maria_Jenkins#A_Hero.27s_Hero` },
    { title: `A Hero's Hero Flashback`, href: `https://homecoming.wiki/wiki/Maria_Jenkins/Flashback#A_Hero's_Hero` },
  ],
  notes: `Only available via Flashback.`,
  flashback: {
    id: '1.15',
    levelRange: [50],
  },
}
