
import { useEffect } from "react";

function RootWithTitle() {
	useEffect(() => {
		document.title = "Casa Nacional - Paulo Coelho";
	}, []);
	return <App />;
}

createRoot(document.getElementById("root")!).render(<RootWithTitle />);
