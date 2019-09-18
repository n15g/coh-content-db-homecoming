import {ExplorationBadges} from "./badge/exploration/_exploration-badges";
import {IBadgeData, IServerGroupData} from "coh-content-db";

export class HomecomingBadges implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly badges: IBadgeData[] = [
        ...ExplorationBadges
    ];
}
