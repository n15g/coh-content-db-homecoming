import { BadgeData } from 'coh-content-db'
import { Misinformation } from '../../mission/misinformation'
import { GettingOutAlive } from '../../mission/getting-out-alive'
import { FixingFixadine } from '../../mission/fixing-fixadine'
import { RageQuit } from '../../mission/rage-quit'
import { TheTruthHurts } from '../../mission/the-truth-hurts'
import { WhoNeedsEnemies } from '../../mission/who-needs-enemies'
import { SelfRestraint } from '../../mission/self-restraint'
import { YouCantGoHome } from '../../mission/you-cant-go-home'
import { MindFreedom } from '../../mission/mind-freedom'
import { TheSavageMan } from '../../mission/the-savage-man'
import { MyBestFriendRusty } from '../../mission/my-best-friend-rusty'
import { APromiseForANewTomorrow } from '../../mission/a-promise-for-a-new-tomorrow'
import { ToOurHealth } from '../../mission/to-our-health'

export const Survivor: BadgeData = {
  type: 'accomplishment',
  key: 'survivor',
  setTitleId: [2348],
  name: 'Survivor',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You helped the Praetorian Resistance to reach their goals with as little loss of life as possible.`,
  acquisition: 'Complete every story arc in the Praetorian [Warden Storyline](https://homecoming.wiki/wiki/Warden_Storyline).',
  links: [
    { title: 'Survivor Badge', href: 'https://homecoming.wiki/wiki/Survivor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_resist.png',
  requirements: [
    { key: Misinformation.key, type: 'mission', missionKey: Misinformation.key },
    { key: GettingOutAlive.key, type: 'mission', missionKey: GettingOutAlive.key },
    { key: FixingFixadine.key, type: 'mission', missionKey: FixingFixadine.key },
    { key: RageQuit.key, type: 'mission', missionKey: RageQuit.key },
    { key: TheTruthHurts.key, type: 'mission', missionKey: TheTruthHurts.key },
    { key: WhoNeedsEnemies.key, type: 'mission', missionKey: WhoNeedsEnemies.key },
    { key: SelfRestraint.key, type: 'mission', missionKey: SelfRestraint.key },
    { key: YouCantGoHome.key, type: 'mission', missionKey: YouCantGoHome.key },
    { key: MindFreedom.key, type: 'mission', missionKey: MindFreedom.key },
    { key: TheSavageMan.key, type: 'mission', missionKey: TheSavageMan.key },
    { key: MyBestFriendRusty.key, type: 'mission', missionKey: MyBestFriendRusty.key },
    { key: APromiseForANewTomorrow.key, type: 'mission', missionKey: APromiseForANewTomorrow.key },
    { key: ToOurHealth.key, type: 'mission', missionKey: ToOurHealth.key },
  ],
}
