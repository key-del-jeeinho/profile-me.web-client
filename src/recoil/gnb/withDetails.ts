import { selector } from "recoil";
import gnbAtom, { ORDER_MAIN } from "./gnbAtom";
import { NavbarAttribute } from "../../interface/GnbAttribute"

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

details[NavbarAttribute.MAIN] = {
    label: "Main",
    link: "/"
}
details[NavbarAttribute.PROFILE] = {
    label: "Profile",
    link: "/profile",
}
details[NavbarAttribute.SIGN_IN] = {
    label: "Signin",
    link: "/signin"
}