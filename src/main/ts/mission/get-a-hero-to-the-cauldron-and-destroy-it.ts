import { MissionData } from 'coh-content-db'
import { Scratch } from '../contact/scratch'

export const GetAHeroToTheCauldronAndDestroyIt: MissionData = {
  key: 'get-a-hero-to-the-cauldron-and-destroy-it',
  name: 'Get a Hero to the cauldron and destroy it',
  type: 'mission',
  morality: 'villainous',
  contactKeys: Scratch.key,
  levelRange: [1],
  links: [
    { title: 'Get a Hero to the cauldron and destroy it', href: 'https://homecoming.wiki/wiki/Scratch#Get_a_Hero_to_the_cauldron_and_destroy_it' },
  ],
}
