
import '../../i18n'
import { useTranslation } from 'react-i18next';
function Contact(){
    const { t } = useTranslation();
    return <h1>{t("contactTitle")}</h1>;
}
export default Contact;