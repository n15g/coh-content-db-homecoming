import {IGameMapData, IServerData, IServerGroupData, ServerGroupStatus} from "coh-content-db";
import {ArchitectEntertainmentBuildings} from "./map/architect-entertainment-buildings";
import {AtlasPark} from "./map/atlas-park";
import {BloodyBay} from "./map/bloody-bay";
import {CapAuDiable} from "./map/cap-au-diable";
import {MercyIsland} from "./map/mercy-island";
import {ReclusesVictory} from "./map/recluses-victory";
import {RiktiWarZone} from "./map/rikti-war-zone";
import {AbandonedSewerNetwork} from "./map/abandoned-sewer-network";
import {PeregrineIsland} from "./map/peregrine-island";

export class Homecoming implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly name: string = "Homecoming";
    public readonly description: string = "City of Heroes: Homecoming - [Forums](https://forums.homecomingservers.com/)";
    public readonly status: ServerGroupStatus[] = [ServerGroupStatus.WORK_IN_PROGRESS];
    public readonly servers: IServerData[] = [
        {name: "Everlasting"},
        {name: "Excelsior"},
        {name: "Indomitable"},
        {name: "Reunion"},
        {name: "Torchbearer"}
    ];
    public readonly repository: string = "https://github.com/n15g/coh-content-db-homecoming";
    public readonly maps: IGameMapData[] = [
        AbandonedSewerNetwork,
        ArchitectEntertainmentBuildings,
        AtlasPark,
        BloodyBay,
        CapAuDiable,
        MercyIsland,
        PeregrineIsland,
        ReclusesVictory,
        RiktiWarZone
    ];
}
