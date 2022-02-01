/** @format */

import OverviewContent from "../../components/organisms/Overview";
import SideBar from "../../components/organisms/SideBar";

export default function Member() {
	return (
		<section className="overview overflow-auto">
			<SideBar activeMenu="overview" />
			<OverviewContent />
		</section>
	);
}
