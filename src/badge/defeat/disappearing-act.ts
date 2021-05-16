import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DisappearingAct: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "disappearing-act",
    setTitleId: 2057,
    names: [
        {value: "Disappearing Act"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "It is somewhat difficult to discern, but you've gotten rid of a fair amount Apparitions... You " +
                "think. You defeated several Apparitions to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Apparitions",
    links: [
        {title: "Disappearing Act Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Disappearing_Act_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/disappearing-act.png"}
    ],
};
