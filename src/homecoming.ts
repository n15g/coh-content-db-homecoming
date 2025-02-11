import {IGameMapData, IServerData, IServerGroupData, ServerGroupStatus} from "coh-content-db";
import {Maps} from "./map/_maps";
import {IArchetypeData} from "coh-content-db/dist/types/archetype";

export class Homecoming implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly name: string = "Homecoming";
    public readonly description: string = "City of Heroes: Homecoming - [Forums](https://forums.homecomingservers.com/)";
    public readonly status: ServerGroupStatus[] = [];
    public readonly servers: IServerData[] = [
        {name: "Everlasting"},
        {name: "Excelsior"},
        {name: "Indomitable"},
        {name: "Reunion"},
        {name: "Torchbearer"},
        {name: "Victory"}
    ];
    public readonly repository: string = "https://github.com/n15g/coh-content-db-homecoming";

    public readonly archetypes: IArchetypeData[] = [
        {key: "arachnos-soldier", name: "Arachnos Soldier"},
        {key: "arachnos-widow", name: "Arachnos Widow"},
        {key: "blaster", name: "Blaster"},
        {key: "brute", name: "Brute"},
        {key: "controller", name: "Controller"},
        {key: "corruptor", name: "Corruptor"},
        {key: "defender", name: "Defender"},
        {key: "dominator", name: "Dominator"},
        {key: "mastermind", name: "Mastermind"},
        {key: "peacebringer", name: "Peacebringer"},
        {key: "scrapper", name: "Scrapper"},
        {key: "sentinel", name: "Sentinel"},
        {key: "stalker", name: "Stalker"},
        {key: "tanker", name: "Tanker"},
        {key: "warshade", name: "Warshade"},
    ];

    public readonly maps: IGameMapData[] = [
        ...Maps
    ];
}
