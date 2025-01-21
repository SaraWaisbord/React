
import { Form, Button, Container } from 'react-bootstrap';
import '../i18n'
import { useTranslation } from 'react-i18next';

function LoginComponent() {
    const { t } = useTranslation(); 
    return (
        <Container className="mt-5">
            <h2>{t("Login")}</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{t("emailLabel")}</Form.Label>
                    <Form.Control type="email" placeholder={t("emailLabel")} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>{t("passwordLabel")}</Form.Label>
                    <Form.Control type="password" placeholder={t("passwordLabel")} />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    {t("submitButton")}
                </Button>
            </Form>
        </Container>
    );
}

export default LoginComponent;
