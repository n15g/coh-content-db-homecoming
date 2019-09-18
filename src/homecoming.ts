import {Maps} from "./maps";
import {IGameMapData, IServerData, IServerGroupData, ServerGroupStatus} from "coh-content-db";

export class Homecoming implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly name: string = "Homecoming";
    public readonly description: string = "Badge set from the [Homecoming](https://forums.homecomingservers.com/) servers.";
    public readonly status: ServerGroupStatus[] = [ServerGroupStatus.WORK_IN_PROGRESS];
    public readonly servers: IServerData[] = [
        {name: "Everlasting"},
        {name: "Excelsior"},
        {name: "Indomitable"},
        {name: "Reunion"},
        {name: "Torchbearer"}
    ];
    public readonly repository: string = "https://github.com/n15g/coh-content-db-homecoming";
    public readonly maps: IGameMapData[] = Maps;
}
