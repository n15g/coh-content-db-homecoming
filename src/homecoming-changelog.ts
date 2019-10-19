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
            "* https://github.com/n15g/coh-content-db-homecoming/issues/2 - Level range of second tier ouroboros badges changed from 15-19 to 16-19.\n"
    };
}
