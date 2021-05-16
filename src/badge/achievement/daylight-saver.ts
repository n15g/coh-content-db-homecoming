import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DaylightSaver: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "daylight-saver",
    setTitleId: 2081,
    names: [
        {value: "Daylight Saver"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Deep within the Minds of Mayhem, you came across the long-suffering Aurora Borealis, whose " +
                "body and mind had been taken over by Shalice Tilman. Separating the two was never going to be " +
                "an easy task, but you did it while causing minimal risk to Aurora Borealis, delivering her " +
                "from Tilman's torment with a minimum of suffering."
        }
    ],
    acquisition: "Defeat Mother Mayhem without allowing Aurora Borealis' health to drop below 75%, and then complete the trial",
    links: [
        {title: "Daylight Saver Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Daylight_Saver_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png"}
    ],
};
