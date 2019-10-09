import {IServerGroupData} from "coh-content-db";

export class HomecomingChangelog implements IServerGroupData {
    public readonly key: string = "homecoming";
    public readonly changelog: { [id: string]: string } = {
        "0.2.0": "* Test release.",

        "0.3.0": "* AE badges were all incorrectly labeled as achievements. - https://github.com/n15g/coh-content-db-homecoming/issues/1\n" +
            "* [Trusting] and [Arriviste] are now separate badges. - https://github.com/n15g/coh-content-db-homecoming/issues/6\n" +
            "* Badge icons are now urls instead of keys. - https://github.com/n15g/coh-content-db-homecoming/issues/3"
    };
}
