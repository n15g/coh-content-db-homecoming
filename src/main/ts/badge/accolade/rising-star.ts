import { BadgeData, zoneLink } from 'coh-content-db'
import { TheTruthHurts } from '../../mission/the-truth-hurts'
import { WhoNeedsEnemies } from '../../mission/who-needs-enemies'
import { SelfRestraint } from '../../mission/self-restraint'
import { YouCantGoHome } from '../../mission/you-cant-go-home'
import { MindFreedom } from '../../mission/mind-freedom'
import { PersonalMonster } from '../../mission/personal-monster'
import { LettingGo } from '../../mission/letting-go'
import { DestroyingTheDestroyers } from '../../mission/destroying-the-destroyers'
import { ThePowerToControl } from '../../mission/the-power-to-control'
import { SacrificesMustBeMade } from '../../mission/sacrifices-must-be-made'
import { TheTrashCollectors } from '../../mission/the-trash-collectors'
import { CorpWars } from '../../mission/corp-wars'
import { OneWeakness } from '../../mission/one-weakness'
import { BestFriendsForever } from '../../mission/best-friends-forever'
import { ImperialCity } from '../../zone/imperial-city'

export const RisingStar: BadgeData = {
  type: 'accolade',
  key: 'rising-star',
  setTitleId: [2342],
  name: 'Rising Star',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Imperial City.`,
  acquisition: `Complete every story arc within ${zoneLink(ImperialCity)}.`,
  links: [
    { title: 'Rising Star Badge', href: 'https://homecoming.wiki/wiki/Rising_Star_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png' },
  ],
  requirements: [
    { key: TheTruthHurts.key, type: 'mission', missionKey: TheTruthHurts.key },
    { key: WhoNeedsEnemies.key, type: 'mission', missionKey: WhoNeedsEnemies.key },
    { key: SelfRestraint.key, type: 'mission', missionKey: SelfRestraint.key },
    { key: YouCantGoHome.key, type: 'mission', missionKey: YouCantGoHome.key },
    { key: MindFreedom.key, type: 'mission', missionKey: MindFreedom.key },
    { key: PersonalMonster.key, type: 'mission', missionKey: PersonalMonster.key },
    { key: LettingGo.key, type: 'mission', missionKey: LettingGo.key },
    { key: DestroyingTheDestroyers.key, type: 'mission', missionKey: DestroyingTheDestroyers.key },
    { key: ThePowerToControl.key, type: 'mission', missionKey: ThePowerToControl.key },
    { key: SacrificesMustBeMade.key, type: 'mission', missionKey: SacrificesMustBeMade.key },
    { key: TheTrashCollectors.key, type: 'mission', missionKey: TheTrashCollectors.key },
    { key: CorpWars.key, type: 'mission', missionKey: CorpWars.key },
    { key: OneWeakness.key, type: 'mission', missionKey: OneWeakness.key },
    { key: BestFriendsForever.key, type: 'mission', missionKey: BestFriendsForever.key },
  ],
}
