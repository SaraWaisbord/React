import '../../i18n'
import { useTranslation } from 'react-i18next';
function Home(){
    const { t } = useTranslation();
    return <h1>{t("homeTitle")}</h1>;
}
export default Home;