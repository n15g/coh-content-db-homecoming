import { BadgeData, contactLink, missionLink } from 'coh-content-db'
import { BlackScorpion } from '../../contact/black-scorpion'
import { CaptainMako } from '../../contact/captain-mako'
import { GhostWidow } from '../../contact/ghost-widow'
import { Scirocco } from '../../contact/scirocco'
import { ArmorWars } from '../../mission/armor-wars'
import { ChinkInTheArmor } from '../../mission/chink-in-the-armor'
import { TheDestinyRaids } from '../../mission/the-destiny-raids'
import { TimeAfterTimeBlackScorpion } from '../../mission/time-after-time-black-scorpion'
import { KillerInstinct } from '../../mission/killer-instinct'
import { ThePerfectKillingMachine } from '../../mission/the-perfect-killing-machine'
import { IronFist } from '../../mission/iron-fist'
import { TimeAfterTimeCaptainMako } from '../../mission/time-after-time-captain-mako'
import { MysticMayhem } from '../../mission/mystic-mayhem'
import { LifeAndDeath } from '../../mission/life-and-death'
import { Brainpower } from '../../mission/brainpower'
import { TimeAfterTimeGhostWidow } from '../../mission/time-after-time-ghost-widow'
import { AWindCalledSerafina } from '../../mission/a-wind-called-serafina'
import { TheHammerOfTheWorld } from '../../mission/the-hammer-of-the-world'
import { TheSpiritCityOfHequat } from '../../mission/the-spirit-city-of-hequat'
import { TimeAfterTimeScirocco } from '../../mission/time-after-time-ghost-scirocco'
import { LordRecluseStrikeForce } from '../../mission/lord-recluse-strike-force'

export const ReclusesBetrayer: BadgeData = {
  type: 'accolade',
  key: 'recluses-betrayer',
  setTitleId: [398],
  name: [
    { alignment: 'hero', value: `Recluse's Betrayer` },
    { alignment: 'villain', value: `Recluse's Right Hand` },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Lord Recluse was wrong to place his trust in you.` },
    { alignment: 'villain', value: `You are the most villainous of villains and I, Lord Recluse, am proud of you!` },
  ],
  acquisition: `Complete every story arc from ${contactLink(BlackScorpion)}, ${contactLink(CaptainMako)}, ${contactLink(GhostWidow)}, ${contactLink(Scirocco)}, and the ${missionLink(LordRecluseStrikeForce)}.`,
  links: [
    { title: `Recluse's Right Hand Badge`, href: 'https://homecoming.wiki/wiki/Recluse%27s_Right_Hand_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/recluses-betrayer.png',
  requirements: [
    { key: ArmorWars.key, type: 'mission', missionKey: ArmorWars.key },
    { key: ChinkInTheArmor.key, type: 'mission', missionKey: ChinkInTheArmor.key },
    { key: TheDestinyRaids.key, type: 'mission', missionKey: TheDestinyRaids.key },
    { key: TimeAfterTimeBlackScorpion.key, type: 'mission', missionKey: TimeAfterTimeBlackScorpion.key },
    { key: KillerInstinct.key, type: 'mission', missionKey: KillerInstinct.key },
    { key: ThePerfectKillingMachine.key, type: 'mission', missionKey: ThePerfectKillingMachine.key },
    { key: IronFist.key, type: 'mission', missionKey: IronFist.key },
    { key: TimeAfterTimeCaptainMako.key, type: 'mission', missionKey: TimeAfterTimeCaptainMako.key },
    { key: MysticMayhem.key, type: 'mission', missionKey: MysticMayhem.key },
    { key: LifeAndDeath.key, type: 'mission', missionKey: LifeAndDeath.key },
    { key: Brainpower.key, type: 'mission', missionKey: Brainpower.key },
    { key: TimeAfterTimeGhostWidow.key, type: 'mission', missionKey: TimeAfterTimeGhostWidow.key },
    { key: AWindCalledSerafina.key, type: 'mission', missionKey: AWindCalledSerafina.key },
    { key: TheHammerOfTheWorld.key, type: 'mission', missionKey: TheHammerOfTheWorld.key },
    { key: TheSpiritCityOfHequat.key, type: 'mission', missionKey: TheSpiritCityOfHequat.key },
    { key: TimeAfterTimeScirocco.key, type: 'mission', missionKey: TimeAfterTimeScirocco.key },
    { key: LordRecluseStrikeForce.key, type: 'mission', missionKey: LordRecluseStrikeForce.key },
  ],
}
