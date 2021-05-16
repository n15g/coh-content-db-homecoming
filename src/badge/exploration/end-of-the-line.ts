import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";

export const EndOfTheLine: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "end-of-the-line",
    setTitleId: 1779,
    names: [{value: "End of the Line"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Boomtown.key,
    location: [-2658.0, 91.0, 4571.0],
    badgeText: [{
        value: "On the day of the Rikti attack that wrought such devastation upon Baumton, this shattered monorail track was a scene of terror; one of many on that dark day." +
            " But as the four-o'clock train dangled precipitously from the rail's shorn edge, the nightly news reported the fate of the imperiled passengers minute by minute." +
            " Ultimately the passengers were saved by Lady Liberty and the Back Alley Brawler in a narrow escape as Rikti soldiers closed in."
    }],
    notes: "The End of the Line badge is on the tip of a twisted light rail track 522 yards due east of the The Fuse marker.",
    links: [
        {title: "End of the Line Badge", href: "https://hcwiki.cityofheroes.dev/wiki/End_of_the_Line_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
