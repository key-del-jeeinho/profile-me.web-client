import { selector } from "recoil";
import gnbAtom, { ORDER_MAIN } from "./gnbAtom";
import { GnbAttributeType } from "../../interface/GnbAttributeType"

const gnbWithDetails = selector({
    key: "navbarWithDetails",
    get: ({ get }) => {
        return get(gnbAtom).data.map(data => {
            const isMain = data.order == ORDER_MAIN
            const detail = details[data.attr]
            return {
                attr: data.attr,
                order: data.order,
                label: detail.label,
                link: detail.link,
                isMain: isMain
            }
        })
    }
})

export default gnbWithDetails

let details: {
    [key: string]: 
    {
        label: String, 
        link: string
    }
} = {}

details[GnbAttributeType.MAIN] = {
    label: "Main",
    link: "/"
}
details[GnbAttributeType.PROFILE] = {
    label: "Profile",
    link: "/profile",
}
details[GnbAttributeType.SIGN_IN] = {
    label: "Signin",
    link: "/signin"
}