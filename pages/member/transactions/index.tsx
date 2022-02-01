/** @format */

import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/Transaction Content";

export default function Transactions() {
	return (
		<section className="transactions overflow-auto">
            <SideBar activeMenu="transactions" />
            <TransactionContent />
		</section>
	);
}
