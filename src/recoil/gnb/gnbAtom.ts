import { atom } from "recoil"
import { NavbarAttribute } from "../../interface/GnbAttribute"

const ORDER_MAIN = 2
const gnbAtom = atom({
    key: 'navbarState',
    default: {
        data: [
            {
                attr: NavbarAttribute.PROFILE,
                order: 1
            }, {
                attr: NavbarAttribute.MAIN,
                order: 2
            }, {
                attr: NavbarAttribute.SIGN_IN,
                order: 3
            }
        ]
    }
})

export { ORDER_MAIN }
export default gnbAtom