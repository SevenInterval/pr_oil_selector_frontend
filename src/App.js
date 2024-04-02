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
import CerezPolitikasi from './pages/hakkimizda/CerezPolitikasi';
import GizlilikPolitikasi from './pages/hakkimizda/GizlilikPolitikasi';
import SiteMap from './pages/SiteMap';
import MotorYaglari from './pages/faq/MotorYaglari';
import MotorYaglariBta from './pages/faq/MotorYaglaribBta';
import MotorYaglariBt from './pages/faq/MotorYaglaribBt';
import SanzimanYaglari from './pages/faq/SanzimanYaglari';
import OtomatikSanzimanYaglari from './pages/faq/OtomatikSanzimanYaglari';
import Antifriz from './pages/faq/Antifriz';
import FrenHidroligi from './pages/faq/FrenHidroligi';
import OnCamYikamaSivisi from './pages/faq/OnCamYikamaSivisi';
import AdBlue from './pages/faq/AdBlue';
import Istirakler from './pages/istirakler/Istirakler';
import Bulgaristan from './pages/istirakler/Bulgaristan';
import Romanya from './pages/istirakler/Romanya';
import Macaristan from './pages/istirakler/Macaristan';
import CekCumhuriyeti from './pages/istirakler/CekCumhuriyeti';
import Sirbistan from './pages/istirakler/Sirbistan';
import Ukrayna from './pages/istirakler/Ukrayna';
import Turkiye from './pages/istirakler/Turkiye';
import Ozbekistan from './pages/istirakler/Ozbekistan';
import Rusya from './pages/istirakler/Rusya';
import Distributorler from './pages/istirakler/Distributorler';
import Adana from './pages/istirakler/Adana';
import Denizli from './pages/istirakler/Denizli';
import Istanbul from './pages/istirakler/Istanbul';
import Izmir from './pages/istirakler/Izmir';
import Harita from './pages/irtibat/Harita';
import BulgaristanIrt from './pages/irtibat/BulgaristanIrt';
import RomanyaIrt from './pages/irtibat/RomanyaIrt';
import MacaristanIrt from './pages/irtibat/MacaristanIrt';
import CekCumhuriyetiIrt from './pages/irtibat/CekCumhuriyetiIrt';
import SirbistanIrt from './pages/irtibat/SirbistanIrt';
import UkraynaIrt from './pages/irtibat/UkraynaIrt';
import TurkiyeIrt from './pages/irtibat/TurkiyeIrt';
import OzbekistanIrt from './pages/irtibat/OzbekistanIrt';
import RusyaIrt from './pages/irtibat/RusyaIrt';
import Bayilik from './pages/medya/Bayilik';
import Haberler from './pages/medya/Haberler';
import TeodorHaber from './pages/medya/haberler/TeodorHaber';
import TeknolojiMerkezi from './pages/kalite/TeknolojiMerkezi';
import LaboratuvarServisleri from './pages/kalite/LaboratuvarServisleri';
import PristaSertifikalari from './pages/kalite/PristaSertifikalari';
import BizimleTemasaGecin from './pages/kalite/BizimleTemasaGecin';
import PlamenBobokovHaber from './pages/medya/haberler/PlamenBobokovHaber';
import DaimlerHaber from './pages/medya/haberler/DaimlerHaber';
import RusyaHaber from './pages/medya/haberler/RusyaHaber';
import OrenburgKonferansHaber from './pages/medya/haberler/OrenburgKonferansHaber';
import AutomechanikaHaber from './pages/medya/haberler/AutomechanikaHaber';


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
        <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
        <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />


        <Route path="/sitemap" element={<SiteMap />} />

        {/*FAQ */}
        <Route path="/faq/motor-yaglari" element={<MotorYaglari />} />
        <Route path="/faq/binek-ve-hafif-ticari-araclar-icin-motor-yaglari" element={<MotorYaglariBta />} />
        <Route path="/faq/buyuk-ticari-araclar-icin-yaglar" element={<MotorYaglariBt />} />
        <Route path="/faq/sanziman-yaglari" element={<SanzimanYaglari />} />
        <Route path="/faq/sanziman-yaglari-otomatik-sanzimanlar" element={<OtomatikSanzimanYaglari />} />
        <Route path="/faq/antifriz-2" element={<Antifriz />} />
        <Route path="/faq/fren-hidroligi" element={<FrenHidroligi />} />
        <Route path="/faq/on-cam-yikama-sivisi" element={<OnCamYikamaSivisi />} />
        <Route path="/faq/adblue-7" element={<AdBlue />} />

        {/* İrtibat */}
        <Route path="/harita" element={<Harita />} />
        <Route path="/bulgaristan" element={<BulgaristanIrt />} />
        <Route path="/romanya" element={<RomanyaIrt />} />
        <Route path="/macaristan" element={<MacaristanIrt />} />
        <Route path="/cek-cumhuriyeti" element={<CekCumhuriyetiIrt />} />
        <Route path="/sirbistan" element={<SirbistanIrt />} />
        <Route path="/ukrayna" element={<UkraynaIrt />} />
        <Route path="/turkiye" element={<TurkiyeIrt />} />
        <Route path="/ozbekistan" element={<OzbekistanIrt />} />
        <Route path="/rusya-1" element={<RusyaIrt />} />

        {/* Pazarlar */}
        <Route path="/istirakler" element={<Istirakler />} />
        <Route path="/bulgaristan-1" element={<Bulgaristan />} />
        <Route path="/romanya-1" element={<Romanya />} />
        <Route path="/macaristan-1" element={<Macaristan />} />
        <Route path="/cek-cumhuriyeti-1" element={<CekCumhuriyeti />} />
        <Route path="/sirbistan-1" element={<Sirbistan />} />
        <Route path="/ukrayna-1" element={<Ukrayna />} />
        <Route path="/turkiye-1" element={<Turkiye />} />
        <Route path="/ozbekistan-1" element={<Ozbekistan />} />
        <Route path="/rusya" element={<Rusya />} />
        <Route path="/distributorler" element={<Distributorler />} />
        <Route path="/adana-1" element={<Adana />} />
        <Route path="/denizli-1" element={<Denizli />} />
        <Route path="/istanbul-1" element={<Istanbul />} />
        <Route path="/izmir-1" element={<Izmir />} />

        {/* Medya */}
        <Route path="/news/category/bayilik-hakkinda-1" element={<Bayilik />} />
        <Route path="/news/category/haberler" element={<Haberler />} />

        {/* Haberler */}
        <Route path='/news/harika-haberler-teodor-tsvetkovtan-bulgaristandaki-texaco-marka-elcimizden' element={<TeodorHaber />} />
        <Route path='/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi' element={<PlamenBobokovHaber />} />
        <Route path='/news/1-eylul-2021-tarihinde-daimler-ag-grubu-mercedes-benz-group-ag-ve-daimler-truck-ag-olmak-uzere-iki-sirkete-ayrildi' element={<DaimlerHaber />} />
        <Route path='/news/ruscuk-bulgaristanda-7-eylulde-gerceklesen-prista-r-nin-rusyadaki-distributorleri-icin-ilk-konferansinda-fikir-ve-deneyim-alisverisi-yapildi' element={<RusyaHaber />} />
        <Route path='/news/rusyanin-orenburg-kentinde-duzenlenen-ilk-teknik-konferansta-prista-oil-holdingin-urunlerle-ilgili-son-inovasyonlari-tanitildi' element={<OrenburgKonferansHaber />} />
        
        
        <Route path='/news/automechanika-frankfurt-2016-otomotiv-hizmet-sektorunde-dunyanin-onde-gelen-ticaret-fuari-frankfurt-am-main-13-17-eylul-2016' element={<AutomechanikaHaber />} />
        <Route path='/news/rockin-the-cluster-5' element={<AutomechanikaHaber />} />
        <Route path='/news/pieter-christiaan-van-oranje-ve-tim-coronel-spa-belcika-da-sin-r1-gt4-u-surecek' element={<AutomechanikaHaber />} />
        <Route path='/news/prista-oil-ruscuk-taki-yillik-konseri-icin-flamingo-98-dans-okulunu-destekliyor' element={<AutomechanikaHaber />} />
        <Route path='/news/yunanistan-dan-prista-oil-yetkili-distributoru-leonidas-leontopoulos-leo-lub-parts-yunan-yaris-sezonuna-katiliyor' element={<AutomechanikaHaber />} />
        <Route path='/news/yeni-premium-1l-sise-ve-etiket-tasarimi-icin-prista-oil-yarismasini-ulusal-sanat-akademisi-nden-bir-doktora-adayi-kazandi' element={<AutomechanikaHaber />} />
        <Route path='/news/silverstone-11-12-haziran-daki-dayaniklilik-yarisinda-avrupa-gt4-serisini-agirlayacak' element={<AutomechanikaHaber />} />
        <Route path='/news/prista-recycling-tesisi-bugun-ozbekistan-da-acildi' element={<AutomechanikaHaber />} />
        <Route path='/news/prista-recycling-ozbekistan-da-atik-yaglarin-geri-donusumu-icin-yuksek-teknolojili-bir-tesis-aciyor' element={<AutomechanikaHaber />} />
        <Route path='/news/cee-de-one-cikanlar' element={<AutomechanikaHaber />} />

        {/* Kalite Yönetimi */}
        <Route path="/teknoloji-merkezi" element={<TeknolojiMerkezi />} />
        <Route path="/laboratuvar-servisleri" element={<LaboratuvarServisleri />} />
        <Route path="/prista-sertifikalari" element={<PristaSertifikalari />} />
        <Route path="/bizimle-temasa-gecin" element={<BizimleTemasaGecin />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
