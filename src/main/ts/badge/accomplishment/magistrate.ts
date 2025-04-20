import { BadgeData } from 'coh-content-db'
import { JoiningThePack } from '../../mission/joining-the-pack'
import { HitList } from '../../mission/hit-list'
import { OrganizedCrusaders } from '../../mission/organized-crusaders'
import { NoMansLady } from '../../mission/no-mans-lady'
import { SacrificesMustBeMade } from '../../mission/sacrifices-must-be-made'
import { ClockFace } from '../../mission/clock-face'
import { TheTrashCollectors } from '../../mission/the-trash-collectors'
import { CorpWars } from '../../mission/corp-wars'
import { OneWeakness } from '../../mission/one-weakness'
import { TheOldRobotTheNewBody } from '../../mission/the-old-robot-the-new-body'
import { TheWomanNamedDeVore } from '../../mission/the-woman-named-devore'
import { ViewFromTheOtherSide } from '../../mission/view-from-the-other-side'
import { NoSurvivors } from '../../mission/no-survivors'

export const Magistrate: BadgeData = {
  type: 'accomplishment',
  key: 'magistrate',
  setTitleId: [2345],
  name: 'Magistrate',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You assisted the Praetorian Loyalists to enforce the law for the peace and safety of everyone in Praetoria.`,
  acquisition: 'Complete every story arc in the Praetorian [Responsibility Storyline](https://homecoming.wiki/wiki/Responsibility_Storyline).',
  links: [
    { title: 'Magistrate Badge', href: 'https://homecoming.wiki/wiki/Magistrate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png',
  requirements: [
    { key: JoiningThePack.key, type: 'mission', missionKey: JoiningThePack.key },
    { key: HitList.key, type: 'mission', missionKey: HitList.key },
    { key: OrganizedCrusaders.key, type: 'mission', missionKey: OrganizedCrusaders.key },
    { key: NoMansLady.key, type: 'mission', missionKey: NoMansLady.key },
    { key: SacrificesMustBeMade.key, type: 'mission', missionKey: SacrificesMustBeMade.key },
    { key: ClockFace.key, type: 'mission', missionKey: ClockFace.key },
    { key: TheTrashCollectors.key, type: 'mission', missionKey: TheTrashCollectors.key },
    { key: CorpWars.key, type: 'mission', missionKey: CorpWars.key },
    { key: OneWeakness.key, type: 'mission', missionKey: OneWeakness.key },
    { key: TheOldRobotTheNewBody.key, type: 'mission', missionKey: TheOldRobotTheNewBody.key },
    { key: TheWomanNamedDeVore.key, type: 'mission', missionKey: TheWomanNamedDeVore.key },
    { key: ViewFromTheOtherSide.key, type: 'mission', missionKey: ViewFromTheOtherSide.key },
    { key: NoSurvivors.key, type: 'mission', missionKey: NoSurvivors.key },
  ],
}
