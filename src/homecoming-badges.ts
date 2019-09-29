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

export class HomecomingBadges implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly badges: IBadgeData[] = [
        ...ExplorationBadges,
        ...HistoryBadges,
        ...AccomplishmentBadges,
        ...AchievementBadges,
        ...AccoladeBadges,
        ...DefeatBadges,
        ...GladiatorBadges,
        ...VeteranBadges,
        ...PvpBadges,
        ...InventionBadges,
        ...EventBadges
    ];
}
