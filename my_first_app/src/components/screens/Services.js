
import '../../i18n'
import { useTranslation } from 'react-i18next';
function Services(){
    const { t } = useTranslation();
    return <h1>{t("servicesTitle")}</h1>;
}
export default Services;