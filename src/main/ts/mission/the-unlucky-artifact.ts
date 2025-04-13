import { MissionData } from 'coh-content-db'
import { HardLuck } from '../contact/hard-luck'

export const TheUnluckyArtifact: MissionData = {
  key: 'the-unlucky-artifact',
  name: 'The Unlucky Artifact',
  type: 'mission',
  morality: 'villainous',
  contactKeys: HardLuck.key,
  levelRange: [30, 34],
  links: [
    { title: 'The Unlucky Artifact', href: 'https://homecoming.wiki/wiki/Hard_Luck#The_Unlucky_artifact' },
  ],
}
