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
            "* https://github.com/n15g/coh-content-db-homecoming/issues/123 - [Ensorcelled] badge has wrong Vidiot id.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/125 - More i27 updates.\n",
        "1.3.2":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/126 - i27 updates part 1.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/127 - i27 updates part 2.\n",
        "1.3.3":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/128 - Updated [Headjuiced] and [Starstruck] history badges to Any alignment to reflect fact that they can be earned by any alignment.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/128 - Updated [Swashbuckler] history badge to correct coordinates of plaque in Siren's Call after that zone was rotated in i27.\n",
        "1.3.4":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/129 - Updated requirements for [Ink Man].\n",
        "1.3.5":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/130 - Issue 27 defeat badge order.\n",
        "1.3.6":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/131 - Event badge order update for i27.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/132 - Accomplishment badge order update for i27.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/133 - Ember Legacy of Flame is 200 minions.\n",
        "1.3.7":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/134 - Issue 27 moved Passport from the bottom of the accolade list to the top.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/135 - [Lanista], [Grand Lanista] list order.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/136 - Issue 27 pvp badge list order.\n",
        "1.3.8":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/137 - Issue 27 page 2 update 1.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/138 - Issue 27 page 2 update 2.\n",
        "1.3.9":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/139 - Added [Legendary] badge.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/140 - [Resurgent] acquisition notes updated.\n",
        "1.3.10":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/141 - Update [Living-dark] badge.\n",
        "1.3.11":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/142 - Update [Battle-Hardened] badge.\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/113 - Switch links from ParagonWiki to Homecoming Wiki.\n",
        "1.3.12":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/143 - Rename [Shopkeeper] tp [Proprietor].\n",
        "1.3.13":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/144 - Move [On the Shoulders of Giants] before PI badges.\n",
        "1.3.14":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/145 - Specify which Skulls count for [Bonecrusher], [Kill Skuls].\n",
        "1.3.15":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/146 - Category sort and hazard zone badge icons.\n",
        "1.3.16":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/147 - Added [Sinister Summoner] badge.\n",
        "1.3.17":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/148 - Updates for issue 27 page 3.\n",
        "1.3.18":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/149 - Pumicite Lords count for Volcanic.\n",
        "1.3.19":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/150 - Dec 01 Tweaks.\n",
        "1.3.20":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/151 - Dec 06 Tweaks.\n",
        "1.3.21":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/153 - Added [Unquenchable] badge.\n",
        "1.3.22":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/154 - New badges for Issue 27 Page 4.\n",
        "1.3.23":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/157 - New acquisition text for accolades.\n",
        "1.3.24":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/158 - Halloween 2022.\n",
        "1.3.25":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/159 - [Womp Womp] renamed to [Ankle Biter].\n",
        "1.3.26":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/161 - Issue 27 p6\n",
        "1.3.27":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/162 - Winter 2023\n",
        "1.3.28":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/163 - i27p7\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/issues/164 - HC Wiki URL change\n",
        "1.3.29":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/165 - Anniversary 2024\n",
        "1.3.30":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/167 - Issue 28 Page 1\n",
        "1.3.31":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/169 - 2024 winter event\n",
        "1.3.32":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/170 - Hypothermia wiki link fix\n",
        "1.4.0":
            "* https://github.com/n15g/coh-content-db-homecoming/pull/172 - Update for 2025 Spring Fling event (wedding)\n" +
            "* https://github.com/n15g/coh-content-db-homecoming/pull/171 - Added instructions for updating the DB\n" +
            "* Moved to GitHub actions for CI\n",
        "1.4.1":
            "* License update in [NPM](https://www.npmjs.com/package/coh-content-db-homecoming).\n",
        "1.4.2":
            "* Added [Victory] server.\n",
    };
}
