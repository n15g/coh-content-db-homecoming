import {IServerGroupData} from "coh-content-db";

export class HomecomingChangelog implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly changelog: { [id: string]: string } = {
        "0.2.0":
            "* Test release.",

        "0.3.0":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/1 - AE badges were all incorrectly labeled as achievements.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/6 - [Trusting] and [Arriviste] are now separate badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/3 - Badge icons are now urls instead of keys.",

        "0.3.1":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/8 - Finished the exploration badge list.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/7 - [Hero Corps Recruit] is missing villain name [Hero Corps Reject].\n",

        "0.3.2":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/10 - [Seeker of the Unknown] is listed as [Dark Mystic].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/11 - [Seeker] is incorrectly listed as [Pathfinder].\n",

        "0.3.3":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/13 - Gladiator badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/12 - [Guardian Angel/Barely Contained] has wrong name type.\n",

        "0.4.0":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/15 - Accomplishment badges\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/16 - Achievement badges\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/17 - Defeat badges\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/18 - PvP badges\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/14 - [Collector] badge has incorrect badge text and link.\n",

        "0.5.0":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/20 - History badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/23 - Accolades badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/19 - Many badges had slightly different names to their in-game counterparts.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/2 - Level range of second tier ouroboros badges changed from 15-19 to 16-19.\n",

        "0.5.1":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/4 - Exploration and History badges ordered correctly.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/24 - Pursuer / Elusive is not actually obtainable at present\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/27 - [Epicenter] and [Master Plumber] have incorrect map references.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/25 - [A Scar in Time] has the wrong location.\n",

        "1.0.0":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/4 - Correct in-game badge ordering.\n",
        "1.0.2":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/29 - A couple of accolades were out of order.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/30 - Begone FoP - The not-actually-a-real-badge [Flames of Prometheus] has been removed.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/31 - Tanker is missing from AT list.\n",

        "1.1.0":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/22 - Missing settitle ids.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/21 - Missing Issue 25 badge icons.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/32 - [Defender of Primal Earth] was being loaded twice.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/34 - [Traveler] was being loaded twice.\n",
        "1.1.1":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/36 - [Bailout Hero] and treespec badges were out of place.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/37 - PVP badges should be closer to correct order now.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/2 - Ouroboros badge level ranges.\n",
        "1.1.2":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/39 - Added a bunch of vidiot map numbers for exploration badges.\n",
        "1.1.4":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/43 - Added villain badge text to [Trusting].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/42 - Added villain badge text to [Arriviste].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/41 - Changed [Chronomaster] requirements.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/40 - Updated [Pursuer] position and acquisition.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/44 - Fixed [Craftsman] acquisition text.\n",
        "1.1.5":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/45 - Updated winter event badge order.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/46 - Stalker is missing from the archetype list.\n",
        "1.1.6":
            "* Update to `coh-content-db@1.2.0`.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/48 - [Bug Hunter] and [Flames of Prometheus] no longer count in badge totals.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/52 - [Newswoman] is actually [Newsgirl].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/51 - [Repairman] is missing female badge name.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/65 - [Bloody Hands] can also be earned by Heroes.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/50 - [Moral High Ground], [Resistance Member], and [Loyalist] can be earned by non-Praetorians through Ouroboros.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/49 - The exploration (and accolade) badges for The Abyss can be earned by a hero, using the sub in PI.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/47 - A bunch of Villain gladiator badges had invalid references to their required badges.\n",
        "1.1.7":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/68 - [Summoned] has wrong co-ordinates.\n",
        "1.1.8":
            "* Added settitle ids for a bunch of badges.\n",
        "1.1.9":
            "* Fixed some typos in [Exterminator] and [Mage Hunter].\n",
        "1.1.10":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/87 - Fixed [Task Force Commander] requirements.\n",
        "1.1.11":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/88 - Fixed [Task Force Commander] requirements, again.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/89 - Replaced icon for [Servant of Recluse] and [Avid Reader].\n",
        "1.1.12":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/90 - Fixed craft count for [Rebuilder].\n",
        "1.1.13":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/91 - Added hypen to [Do-Gooder].\n",
        "1.1.14":
            "* Fixed some bidirectional dependency issues in test VidiotMap data.\n",

        "1.2.0":
            "* https://github.com/n15g/coh-content-db/issues/7 - Added support for Praetorian settitle ids.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/92 - [Hangwoman] was tagged as M, not F.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/93 - Fixed typo in [Saved the World].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/94 - Fixed typo in [Bounty].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/95 - Fixed typo in [Curator].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/96 - Fixed typo in [Kleptomaniac].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/97 - Fixed typo in [Packrat].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/98 - Fixed typo in [Pickpocket].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/99 - Added settitle id to [Flames of Prometheus].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/100 - Added settitle id to [Bug Hunter].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/101 - Added settitle id to [A Nemesis Plot].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/102 - [Chameleon] is now Hero-only.\n",
        "1.2.1":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/103 - Icon for [Flames of Prometheus].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/104 - Added praetorian ids for a bunch of badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/104 - Fixed badge text for a few badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/104 - Fixed alignment for a few badges.\n",
        "1.2.2":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/105 - Praetorian settitle id for [Patroller].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/105 - Fixed typo in a bunch of history badges.\n",
        "1.2.3":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/107 - Split Praetoria's Son from V.I.P.\n",
        "1.2.4":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/108 - Fixed order for [Valet] and [Beyond Reasonable Doubt].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/109 - Fixed typo in [A Nemesis Plot].\n",
        "1.2.5":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/110 - Added [Resurgent] badge.\n",
        "1.2.6":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/111 - [Medicine Man] male and female names were tagged as hero-only, changed to make them hero and villain.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/114 - Split hero and villain icons on several badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/114 - Updated time requirement for several PvP badges from 5 hours to 1 hour.\n",
        "1.2.7":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/115 - Fixed typo in [Siren's Song].\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/116 - Added a bunch of corrections to badge text, acquisition text, and/or icons.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/116 - Added a couple of commits to correct some issues involving the [High Pain Threshold] badge.",
        "1.2.8":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/118 - Updated coordinates for [Lorekeeper], and acquisition text for [Avid Reader].\n",
        "1.3.0":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/120 - i27 updates to old badges.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/121 - Siren's Call rotation (i27).\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/122 - New i27 badge basics.\n",
        "1.3.1":
            "* https://github.com/n15g/coh-content-db-homecoming/issues/123 - [Ensorcelled] badge has wrong Vidiot id.\n"
    };
}
