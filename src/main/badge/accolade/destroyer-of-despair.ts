import { BadgeData, badgeLink, mapLink } from 'coh-content-db'
import { DarkAstoria } from '../../map/dark-astoria'
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
  type: 'ACCOLADE',
  key: 'destroyer-of-despair',
  setTitle: { id: 2205 },
  name: [
    { value: 'Destroyer of Despair' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: `Mot represented hatred and despair. It tried to twist the memories of all those it came across, aiming to make them believe there was no hope in their lives, that all of their hopes and dreams were meaningless.
              You fully conquered the forces of Mot and showed the creature just how wrong it was.`,
    },
  ],
  notes: `Collect

          * All six story arc completion badges (${badgeLink(EyeOfVengeance)}, ${badgeLink(TheDeterminedMentor)}, ${badgeLink(KnifeButcher)}, ${badgeLink(HunterOfSpecters)}, ${badgeLink(TheTimelessAdventurer)}, and ${badgeLink(HeartOfHatred)})
          * All six personal mission completion badges (${badgeLink(ArchitectWriter)}, ${badgeLink(BoundForGlory)}, ${badgeLink(NaniteMan)}, ${badgeLink(PraetorSelfish)}, ${badgeLink(CimeroranHero)}, and ${badgeLink(TruthTeller)})
          * All five mission achievement badges (${badgeLink(TimeSaver)}, ${badgeLink(KnowsNoFear)}, ${badgeLink(IncarnateRival)}, ${badgeLink(BuddyCop)}, and ${badgeLink(LoneWolf)})
          
          in ${mapLink(DarkAstoria)}`,
  links: [
    { title: 'Destroyer of Despair Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Despair_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/destroyer-of-despair.png' },
  ],
  partials: [
    { key: EyeOfVengeance.key, type: 'BADGE', badgeKey: EyeOfVengeance.key },
    { key: TheDeterminedMentor.key, type: 'BADGE', badgeKey: TheDeterminedMentor.key },
    { key: KnifeButcher.key, type: 'BADGE', badgeKey: KnifeButcher.key },
    { key: HunterOfSpecters.key, type: 'BADGE', badgeKey: HunterOfSpecters.key },
    { key: TheTimelessAdventurer.key, type: 'BADGE', badgeKey: TheTimelessAdventurer.key },
    { key: HeartOfHatred.key, type: 'BADGE', badgeKey: HeartOfHatred.key },
    { key: ArchitectWriter.key, type: 'BADGE', badgeKey: ArchitectWriter.key },
    { key: BoundForGlory.key, type: 'BADGE', badgeKey: BoundForGlory.key },
    { key: NaniteMan.key, type: 'BADGE', badgeKey: NaniteMan.key },
    { key: PraetorSelfish.key, type: 'BADGE', badgeKey: PraetorSelfish.key },
    { key: CimeroranHero.key, type: 'BADGE', badgeKey: CimeroranHero.key },
    { key: TruthTeller.key, type: 'BADGE', badgeKey: TruthTeller.key },
    { key: TimeSaver.key, type: 'BADGE', badgeKey: TimeSaver.key },
    { key: KnowsNoFear.key, type: 'BADGE', badgeKey: KnowsNoFear.key },
    { key: IncarnateRival.key, type: 'BADGE', badgeKey: IncarnateRival.key },
    { key: BuddyCop.key, type: 'BADGE', badgeKey: BuddyCop.key },
    { key: LoneWolf.key, type: 'BADGE', badgeKey: LoneWolf.key },
  ],
}
