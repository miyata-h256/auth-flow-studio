import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import OidcFlow from './flows/oidc/OidcFlow';
import PasskeyFlow from './flows/passkey/PasskeyFlow';
import MagicFlow from './flows/magic/MagicFlow';
import NotFound from './pages/NotFound';
import ComparePage from './pages/ComparePage';
import SettingsPage from './pages/SettingsPage';
import AppHeader from './components/AppHeader';

export default function App(): React.ReactElement {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route
                    path='/'
                    element={
                        <Navigate
                            to='/home'
                            replace
                        />
                    }
                />
                <Route
                    path='/home'
                    element={<Home />}
                />
                <Route
                    path='/oidc-flow'
                    element={<OidcFlow />}
                />
                <Route
                    path='/passkey-flow'
                    element={<PasskeyFlow />}
                />
                <Route
                    path='/magic-flow'
                    element={<MagicFlow />}
                />
                <Route
                    path='/compare'
                    element={<ComparePage />}
                />
                <Route
                    path='/settings'
                    element={<SettingsPage />}
                />
                <Route
                    path='*'
                    element={<NotFound />}
                />
            </Routes>
        </>
    );
}
