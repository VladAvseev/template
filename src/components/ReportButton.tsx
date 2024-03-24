import VButton from "../mvvm/Button/VButton";
import VMButton from "../mvvm/Button/VMButton";
import { api } from "../api";

const Button = VMButton.named('Button').actions((self) => ({
	async onClick() {
		self.setIsDisabled(true);
		api.sendReport();
		self.setIsDisabled(false)
	}
})).create({text: 'Отправить отчёт на почту'})

export const ReportButton: React.FC = () => {
	return <VButton model={Button} />;
};