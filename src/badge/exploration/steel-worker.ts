import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemSteelCanyon} from "../../map/mayhem-steel-canyon";

export const SteelWorker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "steel-worker",
    setTitleId: 558,
    names: [{value: "Steel Worker"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemSteelCanyon.key,
    badgeText: [{
        type: Alternate.H, value: "Not even the hardened metal made in these factories of Steel Canyon was able to protect this city from determined villains." +
            " Good thing Paragon has you now to do it."
    }, {
        type: Alternate.V, value: "Not even the hardened metal made in these factories of Steel Canyon can protect the city from you."
    }],
    location: [-4600.0, 0.0, 1497.0],
    notes: "Located behind the police station, in a corner next to a garage door, about 66 yards south-southeast of the Jail entrance.\n" +
        "\n" +
        "The marker might be hidden by packing crates and a dumpster.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Steel Worker Badge", href: "https://paragonwiki.com/wiki/Steel_Worker_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}]
};
