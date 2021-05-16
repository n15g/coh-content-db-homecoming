import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BlackShroudDimension} from "../../map/black-shroud-dimension";

export const Shrouded: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "shrouded",
    setTitleId: 173,
    names: [
        {type: Alternate.H, value: "Shrouded"},
        {type: Alternate.V, value: "Shady"}
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: BlackShroudDimension.key,
    badgeText: [
        {type: Alternate.H, value: "This otherworld has been overshadowed by corrupting magic."},
        {type: Alternate.V, value: "A trip back to Paragon City confirmed it: You're the shady type of person other people are right to be afraid of."}
    ],
    notes: "This badge is awarded for spending any amount of time on the mission map in the [Disrupt Nightstar's Ritual](https://hcwiki.cityofheroes.dev/wiki/Maria_Jenkins#Disrupt_Nightstar.27s_ritual)" +
        " mission from [Maria Jenkins](https://hcwiki.cityofheroes.dev/wiki/Maria_Jenkins)" +
        " or the [Bring Citizens to Vahzilok Surgeons](https://hcwiki.cityofheroes.dev/wiki/Dmitri_Krylov#Bring_citizens_to_Vahzilok_surgeons) mission from" +
        " [Dmitri Krylov](https://hcwiki.cityofheroes.dev/wiki/Dmitri_Krylov).\n" +
        "\n" +
        "The badge is awarded after a random period of time while on the map, or will be rewarded immediately if you leave the map.",
    links: [
        {title: "Shrouded Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Shrouded_Badge"},
        {title: "Shady Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Shady_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}]
};
