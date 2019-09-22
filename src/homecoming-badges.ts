import {ExplorationBadges} from "./badge/exploration/_exploration-badges";
import {IBadgeData, IServerGroupData} from "coh-content-db";
import {AccomplishmentBadges} from "./badge/accomplishment/_accomplishment-badges";
import {HistoryBadges} from "./badge/history/_history-badges";
import {AchievementBadges} from "./badge/achievement/_achievement-badges";

export class HomecomingBadges implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly badges: IBadgeData[] = [
        ...ExplorationBadges,
        ...HistoryBadges,
        ...AccomplishmentBadges,
        ...AchievementBadges
    ];
}
