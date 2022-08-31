import {ALIGNMENT_ANY, BadgePartialType, badgeReference, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";
import {EyeOfVengeance} from "../accomplishment/eye-of-vengeance";
import {TheDeterminedMentor} from "../accomplishment/the-determined-mentor";
import {KnifeButcher} from "../accomplishment/knife-butcher";
import {HunterOfSpecters} from "../accomplishment/hunter-of-specters";
import {TheTimelessAdventurer} from "../accomplishment/the-timeless-adventurer";
import {HeartOfHatred} from "../accomplishment/heart-of-hatred";
import {ArchitectWriter} from "../accomplishment/architect-writer";
import {BoundForGlory} from "../accomplishment/bound-for-glory";
import {NaniteMan} from "../accomplishment/nanite-man";
import {PraetorSelfish} from "../accomplishment/praetor-selfish";
import {CimeroranHero} from "../accomplishment/cimeroran-hero";
import {TruthTeller} from "../accomplishment/truth-teller";
import {TimeSaver} from "../achievement/time-saver";
import {KnowsNoFear} from "../achievement/knows-no-fear";
import {IncarnateRival} from "../achievement/incarnate-rival";
import {BuddyCop} from "../achievement/buddy-cop";
import {LoneWolf} from "../achievement/lone-wolf";

export const DestroyerOfDespair: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "destroyer-of-despair",
    setTitleId: 2205,
    names: [
        {value: "Destroyer of Despair"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Mot represented hatred and despair. It tried to twist the memories of all those it came across, aiming to make them believe there was no hope in their lives, that all of their hopes and dreams were meaningless. You fully conquered the forces of Mot and showed the creature just how wrong it was.`}
    ],
    notes: `
Collect

* All six story arc completion badges (${badgeReference(EyeOfVengeance)}, ${badgeReference(TheDeterminedMentor)}, ${badgeReference(KnifeButcher)}, ${badgeReference(HunterOfSpecters)}, ${badgeReference(TheTimelessAdventurer)}, and ${badgeReference(HeartOfHatred)})
* All six personal mission completion badges (${badgeReference(ArchitectWriter)}, ${badgeReference(BoundForGlory)}, ${badgeReference(NaniteMan)}, ${badgeReference(PraetorSelfish)}, ${badgeReference(CimeroranHero)}, and ${badgeReference(TruthTeller)})
* All five mission achievement badges (${badgeReference(TimeSaver)}, ${badgeReference(KnowsNoFear)}, ${badgeReference(IncarnateRival)}, ${badgeReference(BuddyCop)}, and ${badgeReference(LoneWolf)})

in [map:${DarkAstoria.key}]`,
    links: [
        {title: "Destroyer of Despair Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Destroyer_of_Despair_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/destroyer-of-despair.png"}
    ],
    partials: [
        {key: EyeOfVengeance.key, type: BadgePartialType.BADGE, badgeKey: EyeOfVengeance.key},
        {key: TheDeterminedMentor.key, type: BadgePartialType.BADGE, badgeKey: TheDeterminedMentor.key},
        {key: KnifeButcher.key, type: BadgePartialType.BADGE, badgeKey: KnifeButcher.key},
        {key: HunterOfSpecters.key, type: BadgePartialType.BADGE, badgeKey: HunterOfSpecters.key},
        {key: TheTimelessAdventurer.key, type: BadgePartialType.BADGE, badgeKey: TheTimelessAdventurer.key},
        {key: HeartOfHatred.key, type: BadgePartialType.BADGE, badgeKey: HeartOfHatred.key},
        {key: ArchitectWriter.key, type: BadgePartialType.BADGE, badgeKey: ArchitectWriter.key},
        {key: BoundForGlory.key, type: BadgePartialType.BADGE, badgeKey: BoundForGlory.key},
        {key: NaniteMan.key, type: BadgePartialType.BADGE, badgeKey: NaniteMan.key},
        {key: PraetorSelfish.key, type: BadgePartialType.BADGE, badgeKey: PraetorSelfish.key},
        {key: CimeroranHero.key, type: BadgePartialType.BADGE, badgeKey: CimeroranHero.key},
        {key: TruthTeller.key, type: BadgePartialType.BADGE, badgeKey: TruthTeller.key},
        {key: TimeSaver.key, type: BadgePartialType.BADGE, badgeKey: TimeSaver.key},
        {key: KnowsNoFear.key, type: BadgePartialType.BADGE, badgeKey: KnowsNoFear.key},
        {key: IncarnateRival.key, type: BadgePartialType.BADGE, badgeKey: IncarnateRival.key},
        {key: BuddyCop.key, type: BadgePartialType.BADGE, badgeKey: BuddyCop.key},
        {key: LoneWolf.key, type: BadgePartialType.BADGE, badgeKey: LoneWolf.key}
    ]
};
