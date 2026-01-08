import { useTranslation } from '../i18n';

export default function NotFound(): React.ReactElement {
    const t = useTranslation();
    return <h1>404 - {t.common.notFound}</h1>;
}
