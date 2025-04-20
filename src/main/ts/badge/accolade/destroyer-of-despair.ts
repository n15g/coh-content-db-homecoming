import { BadgeData, badgeLink, zoneLink } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'
import { EyeOfVengeance } from '../accomplishment/eye-of-vengeance'
import { TheDeterminedMentor } from '../accomplishment/the-determined-mentor'
import { KnifeButcher } from '../accomplishment/knife-butcher'
import { HunterOfSpecters } from '../accomplishment/hunter-of-specters'
import { TheTimelessAdventurer } from '../accomplishment/the-timeless-adventurer'
import { HeartOfHatred } from '../accomplishment/heart-of-hatred'
import { ArchitectWriter } from '../accomplishment/architect-writer'
import { BoundForGlory } from '../accomplishment/bound-for-glory'
import { NaniteMan } from '../accomplishment/nanite-man'
import { PraetorSelfish } from '../accomplishment/praetor-selfish'
import { CimeroranHero } from '../accomplishment/cimeroran-hero'
import { TruthTeller } from '../accomplishment/truth-teller'
import { TimeSaver } from '../achievement/time-saver'
import { KnowsNoFear } from '../achievement/knows-no-fear'
import { IncarnateRival } from '../achievement/incarnate-rival'
import { BuddyCop } from '../achievement/buddy-cop'
import { LoneWolf } from '../achievement/lone-wolf'

export const DestroyerOfDespair: BadgeData = {
  type: 'accolade',
  key: 'destroyer-of-despair',
  setTitleId: [2205],
  name: 'Destroyer of Despair',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Mot represented hatred and despair. It tried to twist the memories of all those it came across, aiming to make them believe there was no hope in their lives, that all of their hopes and dreams were meaningless.
You fully conquered the forces of Mot and showed the creature just how wrong it was.`,
  notes: `Collect
* All six story arc completion badges (${badgeLink(EyeOfVengeance)}, ${badgeLink(TheDeterminedMentor)}, ${badgeLink(KnifeButcher)}, ${badgeLink(HunterOfSpecters)}, ${badgeLink(TheTimelessAdventurer)}, and ${badgeLink(HeartOfHatred)})
* All six personal mission completion badges (${badgeLink(ArchitectWriter)}, ${badgeLink(BoundForGlory)}, ${badgeLink(NaniteMan)}, ${badgeLink(PraetorSelfish)}, ${badgeLink(CimeroranHero)}, and ${badgeLink(TruthTeller)})
* All five mission achievement badges (${badgeLink(TimeSaver)}, ${badgeLink(KnowsNoFear)}, ${badgeLink(IncarnateRival)}, ${badgeLink(BuddyCop)}, and ${badgeLink(LoneWolf)})

in ${zoneLink(DarkAstoria)}`,
  links: [
    { title: 'Destroyer of Despair Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Despair_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/destroyer-of-despair.png',
  requirements: [
    { key: EyeOfVengeance.key, type: 'badge', badgeKey: EyeOfVengeance.key },
    { key: TheDeterminedMentor.key, type: 'badge', badgeKey: TheDeterminedMentor.key },
    { key: KnifeButcher.key, type: 'badge', badgeKey: KnifeButcher.key },
    { key: HunterOfSpecters.key, type: 'badge', badgeKey: HunterOfSpecters.key },
    { key: TheTimelessAdventurer.key, type: 'badge', badgeKey: TheTimelessAdventurer.key },
    { key: HeartOfHatred.key, type: 'badge', badgeKey: HeartOfHatred.key },
    { key: ArchitectWriter.key, type: 'badge', badgeKey: ArchitectWriter.key },
    { key: BoundForGlory.key, type: 'badge', badgeKey: BoundForGlory.key },
    { key: NaniteMan.key, type: 'badge', badgeKey: NaniteMan.key },
    { key: PraetorSelfish.key, type: 'badge', badgeKey: PraetorSelfish.key },
    { key: CimeroranHero.key, type: 'badge', badgeKey: CimeroranHero.key },
    { key: TruthTeller.key, type: 'badge', badgeKey: TruthTeller.key },
    { key: TimeSaver.key, type: 'badge', badgeKey: TimeSaver.key },
    { key: KnowsNoFear.key, type: 'badge', badgeKey: KnowsNoFear.key },
    { key: IncarnateRival.key, type: 'badge', badgeKey: IncarnateRival.key },
    { key: BuddyCop.key, type: 'badge', badgeKey: BuddyCop.key },
    { key: LoneWolf.key, type: 'badge', badgeKey: LoneWolf.key },
  ],
}
