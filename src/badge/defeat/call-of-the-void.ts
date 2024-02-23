import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CallOfTheVoid: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "call-of-the-void",
    setTitleId: 2484,
    names: [
        {value: "Call of the Void"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `When you stared into the void and it stared back, you demonstrated to the Nictus-empowered Void Hunters that their quarry here on Earth would not be such easy prey.`}
    ],
    acquisition: `Defeat 100 Void Hunters.`,
    links: [
        {title: "Call of the Void Badge", href: "https://homecoming.wiki/wiki/Call_of_the_Void_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/call-of-the-void.png"}
    ],
};
