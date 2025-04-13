import { MissionData } from 'coh-content-db'
import { MariaJenkins } from '../contact/maria-jenkins'

export const DefeatMarauderAndDestroyThePortal: MissionData = {
  key: 'defeat-marauder-and-destroy-the-portal',
  name: 'Defeat Marauder and destroy the portal',
  type: 'mission',
  morality: 'heroic',
  contactKeys: MariaJenkins.key,
  levelRange: [45],
  links: [
    { title: 'Defeat Marauder and destroy the portal', href: 'https://homecoming.wiki/wiki/Maria_Jenkins#Defeat_Marauder_and_destroy_the_portal' },
  ],
}
