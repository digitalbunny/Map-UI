import MainPanel from "../components/MainPanel"
import SidePanel from "../components/SidePanel"


export default function Index() {

    return (
        <div className="flex font-inter">
            <SidePanel />

            <MainPanel />
        </div>
    )
}