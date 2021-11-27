import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BestFriendsForever: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "best-friends-forever",
    setTitleId: 2477,
    names: [
        {value: "Best Friends Forever"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You like, totally took Becky hostage! Giving her a much needed break from that extra super boring desk job! In return she like, so totally came to your rescue to save the day and stuff! Those weirdo gold guys are like, totally no match for Becky and her new BFF!`
        }
    ],
    acquisition: `Take Becky, the Tarantula Secretary hostage in the first mission, ensure she has a fun time, and then accept her help and complete the final mission without her being defeated in Dr. Aeon's Strike Force.`,
    links: [
        {title: "Best Friends Forever Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Best_Friends_Forever_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/best-friends-forever.png"}
    ],
};