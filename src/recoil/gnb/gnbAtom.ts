import { atom } from "recoil"
import { GnbAttributeType } from "../../interface/GnbAttributeType"

const ORDER_MAIN = 2
const gnbAtom = atom({
    key: 'navbarState',
    default: {
        data: [
            {
                attr: GnbAttributeType.PROFILE,
                order: 1
            },
            {
                attr: GnbAttributeType.MAIN,
                order: 2
            },
            {
                attr: GnbAttributeType.SIGN_IN,
                order: 3
            }
        ]
    }
})

export { ORDER_MAIN }
export default gnbAtom