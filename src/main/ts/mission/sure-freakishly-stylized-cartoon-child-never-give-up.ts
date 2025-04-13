import { MissionData } from 'coh-content-db'
import { Television } from '../contact/television'

export const SureFreakishlyStylizedCartoonChildNeverGiveUp: MissionData = {
  key: 'sure-freakishly-stylized-cartoon-child-never-give-up',
  name: 'Sure, freakishly stylized cartoon child! Never give up!',
  type: 'mission',
  morality: 'villainous',
  contactKeys: Television.key,
  levelRange: [45],
  links: [
    { title: 'Sure, freakishly stylized cartoon child! Never give up!', href: 'https://homecoming.wiki/wiki/Television#Sure,_freakishly_stylized_cartoon_child!_Never_give_up!' },
  ],
  flashback: {
    id: '7.36',
    name: `Video Games Made Me Do It`,
    levelRange: [50],
  },
}
