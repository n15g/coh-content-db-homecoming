import { BadgeData, zoneLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'
import { JustifyingTheMeans } from '../../mission/justifying-the-means'
import { InsertParanoiaHere } from '../../mission/insert-paranoia-here'
import { IDestroyThereforeIAm } from '../../mission/i-destroy-therefore-i-am'
import { DestroyOrNotDestroyThatIsTheQuestion } from '../../mission/destroy-or-not-destroy-that-is-the-question'
import { ShrewdLessons } from '../../mission/shrewd-lessons'
import { GunsAndMoney } from '../../mission/guns-and-money'
import { RiseToPower } from '../../mission/rise-to-power'
import { TheStrongSurvive } from '../../mission/the-strong-survive'
import { Misinformation } from '../../mission/misinformation'
import { GettingOutAlive } from '../../mission/getting-out-alive'
import { FixingFixadine } from '../../mission/fixing-fixadine'
import { RageQuit } from '../../mission/rage-quit'
import { HitList } from '../../mission/hit-list'
import { OrganizedCrusaders } from '../../mission/organized-crusaders'
import { NoMansLady } from '../../mission/no-mans-lady'

export const AgentOfPraetoria: BadgeData = {
  type: 'accolade',
  key: 'agent-of-praetoria',
  setTitleId: [2350],
  name: 'Agent of Praetoria',
  morality: 'all',
  badgeText: 'You stand on the fragile tipping point between Order and Chaos. Which way will you go?',
  acquisition: `Complete every story arc within ${zoneLink(NovaPraetoria)}.`,
  links: [
    { title: 'Agent of Praetoria Badge', href: 'https://homecoming.wiki/wiki/Agent_of_Praetoria_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
  requirements: [
    { key: JustifyingTheMeans.key, type: 'mission', missionKey: JustifyingTheMeans.key },
    { key: InsertParanoiaHere.key, type: 'mission', missionKey: InsertParanoiaHere.key },
    { key: IDestroyThereforeIAm.key, type: 'mission', missionKey: IDestroyThereforeIAm.key },
    { key: DestroyOrNotDestroyThatIsTheQuestion.key, type: 'mission', missionKey: DestroyOrNotDestroyThatIsTheQuestion.key },
    { key: ShrewdLessons.key, type: 'mission', missionKey: ShrewdLessons.key },
    { key: GunsAndMoney.key, type: 'mission', missionKey: GunsAndMoney.key },
    { key: RiseToPower.key, type: 'mission', missionKey: RiseToPower.key },
    { key: TheStrongSurvive.key, type: 'mission', missionKey: TheStrongSurvive.key },
    { key: Misinformation.key, type: 'mission', missionKey: Misinformation.key },
    { key: GettingOutAlive.key, type: 'mission', missionKey: GettingOutAlive.key },
    { key: FixingFixadine.key, type: 'mission', missionKey: FixingFixadine.key },
    { key: RageQuit.key, type: 'mission', missionKey: RageQuit.key },
    { key: HitList.key, type: 'mission', missionKey: HitList.key },
    { key: OrganizedCrusaders.key, type: 'mission', missionKey: OrganizedCrusaders.key },
    { key: NoMansLady.key, type: 'mission', missionKey: NoMansLady.key },
  ],
}
