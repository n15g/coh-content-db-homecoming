import {IGameMapData, IServerData, IServerGroupData, ServerGroupStatus} from "coh-content-db";
import {Maps} from "./map/_maps";

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
        ...Maps
    ];
}
