import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {KallistiWharf} from "../../map/kallisti-wharf";

export const OnTheShouldersOfGiants: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "on-the-shoulders-of-giants",
    setTitleId: 2449,
    names: [{value: "On the Shoulders of Giants"}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [4286.0, 148.0, 2720.0],
    badgeText: [{
        value: `This statue was erected to pay tribute to Marcus Cole, publicly known as Statesman. Ms. Liberty and Longbow have refused to confirm or deny the persistent rumor that the statue was commissioned by Stefan Richter himself.`
    }],
    notes: `Located on the left shoulder of the statue of Statesman in the center of [map:kallisti-wharf], within 100 ft of the One Statesman Plaza neighborhood marker.`,
    links: [
        {title: "On the Shoulders of Giants", href: "https://hcwiki.cityofheroes.dev/wiki/On_the_Shoulders_of_Giants_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
