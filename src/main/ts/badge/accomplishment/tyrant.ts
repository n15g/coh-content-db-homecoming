import { BadgeData } from 'coh-content-db'
import { ShrewdLessons } from '../../mission/shrewd-lessons'
import { GunsAndMoney } from '../../mission/guns-and-money'
import { RiseToPower } from '../../mission/rise-to-power'
import { TheStrongSurvive } from '../../mission/the-strong-survive'
import { PersonalMonster } from '../../mission/personal-monster'
import { LettingGo } from '../../mission/letting-go'
import { DestroyingTheDestroyers } from '../../mission/destroying-the-destroyers'
import { ThePowerToControl } from '../../mission/the-power-to-control'
import { ForTheTaking } from '../../mission/for-the-taking'
import { BestFriendsForever } from '../../mission/best-friends-forever'
import { AGodAmongstMen } from '../../mission/a-god-amongst-men'
import { PrideInYourWork } from '../../mission/pride-in-your-work'

export const Tyrant: BadgeData = {
  type: 'accomplishment',
  key: 'tyrant',
  setTitleId: [2354],
  name: 'Tyrant',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You ruthlessly took advantage of the Praetorian Loyalists in your pursuit of power, fame, and glory.`,
  acquisition: 'Complete every story arc in the Praetorian [Power Storyline](https://homecoming.wiki/wiki/Power_Storyline).',
  links: [
    { title: 'Tyrant Badge', href: 'https://homecoming.wiki/wiki/Tyrant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png',
  requirements: [
    { key: ShrewdLessons.key, type: 'mission', missionKey: ShrewdLessons.key },
    { key: GunsAndMoney.key, type: 'mission', missionKey: GunsAndMoney.key },
    { key: RiseToPower.key, type: 'mission', missionKey: RiseToPower.key },
    { key: TheStrongSurvive.key, type: 'mission', missionKey: TheStrongSurvive.key },
    { key: PersonalMonster.key, type: 'mission', missionKey: PersonalMonster.key },
    { key: LettingGo.key, type: 'mission', missionKey: LettingGo.key },
    { key: DestroyingTheDestroyers.key, type: 'mission', missionKey: DestroyingTheDestroyers.key },
    { key: ThePowerToControl.key, type: 'mission', missionKey: ThePowerToControl.key },
    { key: ForTheTaking.key, type: 'mission', missionKey: ForTheTaking.key },
    { key: BestFriendsForever.key, type: 'mission', missionKey: BestFriendsForever.key },
    { key: AGodAmongstMen.key, type: 'mission', missionKey: AGodAmongstMen.key },
    { key: PrideInYourWork.key, type: 'mission', missionKey: PrideInYourWork.key },
  ],
}
