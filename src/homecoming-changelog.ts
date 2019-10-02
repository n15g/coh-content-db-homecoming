import {IServerGroupData} from "coh-content-db";

export class HomecomingChangelog implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly changelog: { [id: string]: string[] } = {
        "1.0.0": [
            "Initial release."
        ]
    };
}
