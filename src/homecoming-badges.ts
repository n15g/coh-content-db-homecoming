import {ExplorationBadges} from "./badge/exploration/_exploration-badges";
import {IBadgeData, IServerGroupData} from "coh-content-db";
import {AccomplishmentBadges} from "./badge/accomplishment/_accomplishment-badges";
import {HistoryBadges} from "./badge/history/_history-badges";
import {AchievementBadges} from "./badge/achievement/_achievement-badges";
import {DefeatBadges} from "./badge/defeat/_defeat-badges";
import {AccoladeBadges} from "./badge/accolade/_accolade-badges";
import {GladiatorBadges} from "./badge/gladiator/_gladiator-badges";
import {VeteranBadges} from "./badge/veteran/_veteran-badges";
import {PvpBadges} from "./badge/pvp/_pvp-badges";
import {InventionBadges} from "./badge/invention/_invention-badges";
import {EventBadges} from "./badge/event/_event-badges";
import {OuroborosBadges} from "./badge/ouroboros/_ouroboros-badges";
import {ConsignmentBadges} from "./badge/consignment/_consignment-badges";
import {DayJobBadges} from "./badge/day-job/_day-job-badges";
import {AEBadges} from "./badge/ae/_ae-badges";

export class HomecomingBadges implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly badges: IBadgeData[] = [
        ...ExplorationBadges,
        ...HistoryBadges,
        ...AccomplishmentBadges,
        ...AchievementBadges,
        ...AccoladeBadges,
        ...GladiatorBadges,
        ...VeteranBadges,
        ...PvpBadges,
        ...InventionBadges,
        ...DefeatBadges,
        ...EventBadges,
        ...OuroborosBadges,
        ...ConsignmentBadges,
        ...DayJobBadges,
        ...AEBadges
    ];
}
