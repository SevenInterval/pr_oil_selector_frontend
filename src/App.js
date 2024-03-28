import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import DpfTwc from './components/products/otomotiv/pcmo/DpfTwc';
import BizKimiz from './pages/hakkimizda/BizKimiz';
import SirketinSorumlulugu from './pages/hakkimizda/SirketinSorumlulugu';
import Ortaklarimiz from './pages/hakkimizda/Ortaklarimiz';
import GulfMarine from './pages/hakkimizda/GulfMarine';
import Verila from './pages/hakkimizda/Verila';
import Ergon from './pages/hakkimizda/Ergon';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*Urunler sayfaları*/}

        <Route path="/catalogue/yuksek-performansli-dpf-twc" element={<DpfTwc />} />
        <Route path="/catalogue/yuksek-performansli" element={<DpfTwc />} />
        <Route path="/catalogue/ustun" element={<DpfTwc />} />
        <Route path="/catalogue/standart" element={<DpfTwc />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc-uyumlu" element={<DpfTwc />} />
        <Route path="/catalogue/yuksek-performansli-1" element={<DpfTwc />} />
        <Route path="/catalogue/ustun-1" element={<DpfTwc />} />
        <Route path="/catalogue/standart-1" element={<DpfTwc />} />
        <Route path="/catalogue/gaz-motor-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/2t-4t-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/yuksek-performansli-duz-sanziman" element={<DpfTwc />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman" element={<DpfTwc />} />
        <Route path="/catalogue/duz-sanziman-ve-aks" element={<DpfTwc />} />
        <Route path="/catalogue/utto-stou-to-4-5" element={<DpfTwc />} />
        <Route path="/catalogue/sogutma-sulari" element={<DpfTwc />} />
        <Route path="/catalogue/fren-hidrolikleri" element={<DpfTwc />} />
        <Route path="/catalogue/on-cam-yikama-sivilari" element={<DpfTwc />} />
        <Route path="/catalogue/adblue-r-6" element={<DpfTwc />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/kompresor-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/endustriyel-disli-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/turbin-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/transformator-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/sirkulasyon-yaglari-ve-genel-amacli-yaglar" element={<DpfTwc />} />
        <Route path="/catalogue/motorlu-testere-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/isi-transfer-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/su-verme-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/sade-yaglar" element={<DpfTwc />} />
        <Route path="/catalogue/suda-cozulebilir" element={<DpfTwc />} />
        <Route path="/catalogue/plastiklestiriciler" element={<DpfTwc />} />
        <Route path="/catalogue/kalip-ayirma-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/sabit-gaz-motorlari" element={<DpfTwc />} />
        <Route path="/catalogue/gresler" element={<DpfTwc />} />
        <Route path="/catalogue/sistem-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/kovan-pistonlu-motor-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/silindir-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/disli-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/sogutma-sistemi-yagi" element={<DpfTwc />} />
        <Route path="/catalogue/kompresor-yaglari-1" element={<DpfTwc />} />
        <Route path="/catalogue/isi-transfer-yagi" element={<DpfTwc />} />
        <Route path="/catalogue/turbin-yaglari-1" element={<DpfTwc />} />
        <Route path="/catalogue/hidrolik-yaglar" element={<DpfTwc />} />
        <Route path="/catalogue/motor-yaglari" element={<DpfTwc />} />
        <Route path="/catalogue/gresler-1" element={<DpfTwc />} />


        {/*Hakkımızda*/}
        <Route path="/biz-kimiz" element={<BizKimiz />} />
        <Route path="/ortaklarimiz" element={<Ortaklarimiz />} />
        <Route path="/gulf-marine-7" element={<GulfMarine />} />
        <Route path="/verila-7" element={<Verila />} />
        <Route path="/ergon-6" element={<Ergon />} />
        <Route path="/sirketin-sorumlulugu" element={<SirketinSorumlulugu />} />
        <Route path="/gizlilik-politikasi" element={<BizKimiz />} />
        <Route path="/cerez-politikasi" element={<BizKimiz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
