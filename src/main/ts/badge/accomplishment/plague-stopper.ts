import { BadgeData } from 'coh-content-db'
import { FindAndDestroyTheContainersTheVahzilokAreUsingToStoreTheDisease } from '../../mission/find-and-destroy-the-containers-the-vahzilok-are-using-to-store-the-disease'

export const PlagueStopper: BadgeData = {
  type: 'accomplishment',
  key: 'plague-stopper',
  setTitleId: [73],
  name: [
    { alignment: 'hero', value: 'Plague Stopper' },
    { alignment: 'villain', value: 'Deadly Virus' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You were key in stopping a plague from overtaking Paragon City.',
  links: [
    { title: 'Plague Stopper Badge', href: 'https://homecoming.wiki/wiki/Plague_Stopper_Badge' },
    { title: 'Deadly Virus Badge', href: 'https://homecoming.wiki/wiki/Deadly_Virus_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/plague-stopper.png',
  requirements: [
    { key: FindAndDestroyTheContainersTheVahzilokAreUsingToStoreTheDisease.key, type: 'mission', missionKey: FindAndDestroyTheContainersTheVahzilokAreUsingToStoreTheDisease.key },
  ],
}
