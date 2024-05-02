import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import DpfTwc from './components/products/otomotiv/pcmo/DpfTwc';
import BizKimiz from './pages/hakkimizda/BizKimiz';
import SirketinSorumlulugu from './pages/hakkimizda/SirketinSorumlulugu';
import Ortaklarimiz from './pages/hakkimizda/Ortaklarimiz';
//import GulfMarine from './pages/hakkimizda/GulfMarine';
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
import ClusterHaber from './pages/medya/haberler/ClusterHaber';
import PieterHaber from './pages/medya/haberler/PieterHaber';
import RuscukHaber from './pages/medya/haberler/RuscukHaber';
import YunanistanHaber from './pages/medya/haberler/YunanistanHaber';
import PremiumHaber from './pages/medya/haberler/PremiumHaber';
import SilverstoneHaber from './pages/medya/haberler/SilverstoneHaber';
import RecyclingHaber from './pages/medya/haberler/RecyclingHaber';
import MonteCarloHaber from './pages/medya/haberler/MonteCarloHaber';
import PristaOilHaber from './pages/medya/haberler/PristaOilHaber';
import PlamenBobokovHaber2 from './pages/medya/haberler/PlamenBobokovHaber2';
import PristaHaber from './pages/medya/haberler/PristaHaber';
import PristaRecHaber from './pages/medya/haberler/PristaRecHaber';
import CeeHaber from './pages/medya/haberler/CeeHaber';
import RuscukZiyaretHaber from './pages/medya/haberler/RuscukZiyaretHaber';

import BobokoHaber from './pages/medya/haberler/BobokoHaber';
import PlamenHaber from './pages/medya/haberler/PlamenHaber';
import MonzaHaber from './pages/medya/haberler/MonzaHaber';
import SofiaHaber from './pages/medya/haberler/SofiaHaber';
import PrTurkiyeHaber from './pages/medya/haberler/PrTurkiyeHaber';
import PlamenRuseHaber from './pages/medya/haberler/PlamenRuseHaber';
import TankoHaber from './pages/medya/haberler/TankoHaber';
import PristaNewHaber from './pages/medya/haberler/PristaNewHaber';
import SofiaCarsHaber from './pages/medya/haberler/SofiaCarsHaber';
import BulgarYagHaber from './pages/medya/haberler/BulgarYagHaber';
import Prista2014Haber from './pages/medya/haberler/Prista2014Haber';
import ProductNewHaber from './pages/medya/haberler/ProductNewHaber';
import LubricantsHaber from './pages/medya/haberler/LubricantsHaber';
import CetusHaber from './pages/medya/haberler/CetusHaber';
import BayilikHakkinda from './pages/medya/haberler/BayilikHakkinda';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import YagDanismani from './components/products/YagDanismani';
import YuksekPerformansli from './components/products/otomotiv/pcmo/YuksekPerformansli';
import Ustun from './components/products/otomotiv/pcmo/Ustun';
import Standart from './components/products/otomotiv/pcmo/Standart';
import HdmoDpfTwc from './components/products/otomotiv/hdmo/HdmoDpfTwc';
import HdmoYuksekPerformansli from './components/products/otomotiv/hdmo/HdmoYuksekPerformansli';
import HdmoUstun from './components/products/otomotiv/hdmo/HdmoUstun';
import HdmoStandart from './components/products/otomotiv/hdmo/HdmoStandart';
import GazMotorYaglari from './components/products/otomotiv/gazmotoryaglari/GazMotorYaglari';
import T24TYaglari from './components/products/otomotiv/2t4tyaglari/T24TYaglari';
import YuksekPerformansliDuz from './components/products/otomotiv/sanziman/YuksekPerformansliDuz';
import YuksekPerformansliOtomatik from './components/products/otomotiv/sanziman/YuksekPerformansliOtomatik';
import DuzSanzimanveAks from './components/products/otomotiv/sanziman/DuzSanzimanveAks';
import UttoStou from './components/products/otomotiv/sanziman/UttoStou';
import SogutmaSulari from './components/products/otomotiv/ozelakiskanlar/SogutmaSulari';
import FrenHidrolikleri from './components/products/otomotiv/ozelakiskanlar/FrenHidrolikleri';
import OnCamYikama from './components/products/otomotiv/ozelakiskanlar/OnCamYikama';
import AdBlueUrun from './components/products/otomotiv/ozelakiskanlar/AdBlueUrun';
import HidrolikVeKizakYaglari from './components/products/endustriyelUrunler/hidrolikVeKizakYaglari/HidrolikVeKizakYaglari';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/*Urunler sayfaları*/}
        <Route path="/catalogue/yuksek-performansli-dpf-twc" element={<DpfTwc />} />
        <Route path="/catalogue/yuksek-performansli" element={<YuksekPerformansli />} />
        <Route path="/catalogue/ustun" element={<Ustun />} />
        <Route path="/catalogue/standart" element={<Standart />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc-uyumlu" element={<HdmoDpfTwc />} />
        <Route path="/catalogue/yuksek-performansli-1" element={<HdmoYuksekPerformansli />} />
        <Route path="/catalogue/ustun-1" element={<HdmoUstun />} />
        <Route path="/catalogue/standart-1" element={<HdmoStandart />} />
        <Route path="/catalogue/gaz-motor-yaglari" element={<GazMotorYaglari />} />
        <Route path="/catalogue/2t-4t-yaglari" element={<T24TYaglari />} />
        <Route path="/catalogue/yuksek-performansli-duz-sanziman" element={<YuksekPerformansliDuz />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman" element={<YuksekPerformansliOtomatik />} />
        <Route path="/catalogue/duz-sanziman-ve-aks" element={<DuzSanzimanveAks />} />
        <Route path="/catalogue/utto-stou-to-4-5" element={<UttoStou />} />
        <Route path="/catalogue/sogutma-sulari" element={<SogutmaSulari />} />
        <Route path="/catalogue/fren-hidrolikleri" element={<FrenHidrolikleri />} />
        <Route path="/catalogue/on-cam-yikama-sivilari" element={<OnCamYikama />} />
        <Route path="/catalogue/adblue-r-6" element={<AdBlueUrun />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari" element={<HidrolikVeKizakYaglari />} />
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

        {/* Kalite Yönetimi */}
        <Route path="/teknoloji-merkezi" element={<TeknolojiMerkezi />} />
        <Route path="/laboratuvar-servisleri" element={<LaboratuvarServisleri />} />
        <Route path="/prista-sertifikalari" element={<PristaSertifikalari />} />
        <Route path="/bizimle-temasa-gecin" element={<BizimleTemasaGecin />} />

        {/* Medya */}
        <Route path="/news/category/bayilik-hakkinda-1" element={<Bayilik />} />
        <Route path="/news/category/haberler" element={<Haberler />} />

        {/* Haberler */}
        <Route path='/news/yol-arkadasimiz-ol-kazancin-yag-gibi-aksin-1' element={<BayilikHakkinda />} />
        <Route path='/news/harika-haberler-teodor-tsvetkovtan-bulgaristandaki-texaco-marka-elcimizden' element={<TeodorHaber />} />
        <Route path='/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi' element={<PlamenBobokovHaber />} />
        <Route path='/news/1-eylul-2021-tarihinde-daimler-ag-grubu-mercedes-benz-group-ag-ve-daimler-truck-ag-olmak-uzere-iki-sirkete-ayrildi' element={<DaimlerHaber />} />
        <Route path='/news/ruscuk-bulgaristanda-7-eylulde-gerceklesen-prista-r-nin-rusyadaki-distributorleri-icin-ilk-konferansinda-fikir-ve-deneyim-alisverisi-yapildi' element={<RusyaHaber />} />
        <Route path='/news/rusyanin-orenburg-kentinde-duzenlenen-ilk-teknik-konferansta-prista-oil-holdingin-urunlerle-ilgili-son-inovasyonlari-tanitildi' element={<OrenburgKonferansHaber />} />
        <Route path='/news/sin-cars-ingiltere-yilin-en-gorkemli-etkinliklerinden-biri-olan-ve-her-yil-ihtisamin-baskenti-monte-carlo-da-prens-ii' element={<MonteCarloHaber />} />
        <Route path='/news/prista-oil-r-macaristan-daki-horvath-rudolf-intertransport-firmasina-texaco-yaglarini-tedarik-edecek' element={<PristaOilHaber />} />
        <Route path='/news/plamen-bobokov-ukrayna-dan-onurlu-hizmet-odulu-aldi' element={<PlamenBobokovHaber2 />} />
        <Route path='/news/prista-oil-grubu-yeniden-yapilaniyor' element={<PristaHaber />} />
        <Route path='/news/inter-cars-ekibi-ruscuk-bulgaristan-daki-prista-oil-karistirma-tesisini-ziyaret-etti' element={<RuscukZiyaretHaber />} />
        <Route path='/news/automechanika-frankfurt-2016-otomotiv-hizmet-sektorunde-dunyanin-onde-gelen-ticaret-fuari-frankfurt-am-main-13-17-eylul-2016' element={<AutomechanikaHaber />} />
        <Route path='/news/rockin-the-cluster-5' element={<ClusterHaber />} />
        <Route path='/news/pieter-christiaan-van-oranje-ve-tim-coronel-spa-belcika-da-sin-r1-gt4-u-surecek' element={<PieterHaber />} />
        <Route path='/news/prista-oil-ruscuk-taki-yillik-konseri-icin-flamingo-98-dans-okulunu-destekliyor' element={<RuscukHaber />} />
        <Route path='/news/yunanistan-dan-prista-oil-yetkili-distributoru-leonidas-leontopoulos-leo-lub-parts-yunan-yaris-sezonuna-katiliyor' element={<YunanistanHaber />} />
        <Route path='/news/yeni-premium-1l-sise-ve-etiket-tasarimi-icin-prista-oil-yarismasini-ulusal-sanat-akademisi-nden-bir-doktora-adayi-kazandi' element={<PremiumHaber />} />
        <Route path='/news/silverstone-11-12-haziran-daki-dayaniklilik-yarisinda-avrupa-gt4-serisini-agirlayacak' element={<SilverstoneHaber />} />
        <Route path='/news/prista-recycling-tesisi-bugun-ozbekistan-da-acildi' element={<RecyclingHaber />} />
        <Route path='/news/prista-recycling-ozbekistan-da-atik-yaglarin-geri-donusumu-icin-yuksek-teknolojili-bir-tesis-aciyor' element={<PristaRecHaber />} />
        <Route path='/news/cee-de-one-cikanlar' element={<CeeHaber />} />
        <Route path='/news/plamen-bobokov-ruscuk-altin-nisan-odulu-ve-ruscuk-un-saygideger-vatandasi-unvaniyla-odullendirildi' element={<BobokoHaber />} />
        <Route path='/news/plamen-bobokov-was-awarded-the-honor-golden-badge-ruse-5' element={<PlamenHaber />} />
        <Route path='/news/monza-taraftarlari-bulgar-takimini-sofia-car-motorsport-ve-aracin-yaraticisi-rosen-daskalov-u-en-iyi-ekip-ve-araci-da-pistteki-en-hizli-arac-olarak-anons-ettiler' element={<MonzaHaber />} />
        <Route path='/news/sofia-car-motorsport-birkac-gun-icinde-baslayacak-olan-avrupa-gt4-serisinin-2016-sezonuna-sin-r1-gt4-ile-katilacaktir' element={<SofiaHaber />} />
        <Route path='/news/prista-oil-turkiye-istanbul-ki-automechanika-ticaret-fuarina-katiliyor' element={<PrTurkiyeHaber />} />
        <Route path='/news/plamen-bobokov-ruse-sadece-kalbimde-degil-ayni-zamanda-gelecekteki-tum-projelerimde-yer-aliyor' element={<PlamenRuseHaber />} />
        <Route path='/news/plamen-bobokov-ve-mimar-tanko-serafimov-a-olumunden-sonra-ruse-nin-saygin-vatandasi-unvani-verildi' element={<TankoHaber />} />
        <Route path='/news/prista-oil-yenilikci-harmanlama-teknolojisi-ccbl-yi-sunar' element={<PristaNewHaber />} />
        <Route path='/news/sin-cars-sofia-car-motorsport-yarismasinda-pro-sinifinda-2-ve-nihai-siniflandirmada-3-sira' element={<SofiaCarsHaber />} />
        <Route path='/news/bulgar-yag-ureticisi-prista-oil-bulgaristan-daki-ruse-tesisinde-harmanlama-teknolojisinin-bir-guncelleme-programini-baslatti' element={<BulgarYagHaber />} />
        <Route path='/news/prista-oil-2014-calisma-yili-bolgesel-guvenlik-ve-saglik-yarismasinda-birinci-olmustur' element={<Prista2014Haber />} />
        <Route path='/news/product-news-product-introduction-6' element={<ProductNewHaber />} />
        <Route path='/news/prista-oil-bulgaristan-da-tamamen-yenilenmis-ve-buyutulmus-gres-tesisi-olan-verila-lubricants-i-acti' element={<LubricantsHaber />} />
        <Route path='/news/cetus-hipersyn-46-6' element={<CetusHaber />} />

        {/*Hakkımızda*/}
        <Route path="/biz-kimiz" element={<BizKimiz />} />
        <Route path="/ortaklarimiz" element={<Ortaklarimiz />} />
        {/* <Route path="/gulf-marine-7" element={<GulfMarine />} /> */}
        <Route path="/verila-7" element={<Verila />} />
        <Route path="/ergon-6" element={<Ergon />} />
        <Route path="/sirketin-sorumlulugu" element={<SirketinSorumlulugu />} />
        <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
        <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />

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

        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/site/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/prista-yaglari-danismani" element={<YagDanismani />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
