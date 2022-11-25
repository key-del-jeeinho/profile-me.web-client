import { RecoilRoot } from "recoil";

const withRecoil = (contentFn: any) => (
    <RecoilRoot>
        {contentFn()}
    </RecoilRoot>
)

export default withRecoil