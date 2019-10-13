import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";

export const BridgeHolder: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "bridge-holder",
    names: [{value: "Bridge Holder"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TalosIsland.key,
    location: [1917.0, 96.0, 7231.0],
    badgeText: [{
        value: "The hero known as 'The Commuter' recently thwarted an attempt by the 5th Column to blow up this bridge." +
            " Some people in Paragon think the plot to destroy the bridge was ridiculous, but The Commuter insists that, 'this bridge means the world to all" +
            " those who drive in and out of Talos everyday.'"
    }],
    notes: "Located on the main bridge leading into the New Thebes neighborhood of [map:talos-island], 187 yards NNW of the Hero Corps Field Analyst.",
    links: [
        {title: "Bridge Holder Badge", href: "https://paragonwiki.com/wiki/Bridge_Holder_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
