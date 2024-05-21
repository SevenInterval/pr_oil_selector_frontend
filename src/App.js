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
import HidrolikVeKizakYaglari from './components/products/endustriyelUrunler/HidrolikVeKizakYaglari';
import KompresorYaglari from './components/products/endustriyelUrunler/KompresorYaglari';
import DisliYaglari from './components/products/endustriyelUrunler/DisliYaglari';
import TurbinYaglari from './components/products/endustriyelUrunler/TurbinYaglari';
import TransformatorYaglari from './components/products/endustriyelUrunler/TransformatorYaglari';
import SirkulasyonYaglari from './components/products/endustriyelUrunler/SirkulasyonYaglari';
import MotorluTestereYaglari from './components/products/endustriyelUrunler/MotorluTestereYaglari';
import IsiTransferYaglari from './components/products/endustriyelUrunler/IsiTransferYaglari';
import SuVermeYaglari from './components/products/endustriyelUrunler/SuVermeYaglari';
import SadeYaglar from './components/products/endustriyelUrunler/mwf/SadeYaglar';
import SudaCozulebilir from './components/products/endustriyelUrunler/mwf/SudaCozulebilir';
import Plastiklestiriciler from './components/products/endustriyelUrunler/islemYaglari/Plastiklestiriciler';
import KalipAyirmaYaglari from './components/products/endustriyelUrunler/islemYaglari/KalipAyirmaYaglari';
import SabitGazMotorlari from './components/products/endustriyelUrunler/SabitGazMotorlari';
import Gresler from './components/products/gresler/Gresler';
import SistemYaglari from './components/products/marinYaglari/anaYaglar/SistemYaglari';
import KovanPistonluMotorYaglari from './components/products/marinYaglari/anaYaglar/KovanPistonluMotorYaglari';
import SilindirYaglari from './components/products/marinYaglari/anaYaglar/SilindirYaglari';
import DisliYaglariYard from './components/products/marinYaglari/yardimciYaglar/DisliYaglariYard';
import SogutmaSistemiYag from './components/products/marinYaglari/yardimciYaglar/SogutmaSistemiYag';
import KompresorYaglariYard from './components/products/marinYaglari/yardimciYaglar/KompresorYaglariYard';
import IsiTransferYagi from './components/products/marinYaglari/yardimciYaglar/IsiTransferYagi';
import TurbinYaglariYard from './components/products/marinYaglari/yardimciYaglar/TurbinYaglariYard';
import HidrolikYaglar from './components/products/marinYaglari/yardimciYaglar/HidrolikYaglar';
import MotorYaglariYard from './components/products/marinYaglari/yardimciYaglar/MotorYaglariYard';
import GreslerMarin from './components/products/marinYaglari/GreslerMarin';
import UrunDetay from './components/products/UrunDetay';
import {
  Atf2MProduct, Dpf0w204Product, Dpf0w30Product, Dpf5w30Product, Dpf5w40Product, Dpfc50w20Product, Dpffe5w30Product, Dpfg5w30Product, Dpfgf0w20Product,
  Dpfrn5w30Product, Dpfultra5w30Product, Gl4sae90Product, Hd10w40Product, Ls10w30Product, Mhp32Product, Mhp40aProduct, MultigasHd15w402tProduct, MultigasHd15w40Product,
  ShpdLs15w40Product, Super15w4020w50Product, Td15w4020w50Product, To4sae10w30Product, Ustun15w4020w50Product, Yp10w40Product, Yp15w4020w504Product, Yp2textra4Product,
  Yp2tmix4Product, Yp5w305w40Product, Yp75w8075w90Product, Ypatfiii4Product, Ypld15w40Product, Yppristaatf4Product, Yppsf4Product, Ypr4t6Product, Ypsae80w90Product,
  Ypsae90140Product, Ypsb10w40Product, Ypstou4Product, Yptd10w40Product, Ypuhpd10w40Product, Ypuhpd5w30Product, Yputto3Product, Ypvds310w40Product, absorberOilProduct,
  adblueProduct, antifreezeLongLifeProduct, antifriz4Product, compressor4Product, concentrate4Product, dot4dot3Product, fd5Product, longlife4Product, mhe40Product, mhlProduct,
  mhm46Product, mhmPlusProduct, mhmProduct, mhmbProduct, mhmdProduct, mhvPlusProduct, mhvProduct, mnpProduct, pristaAnProduct, pristaCProduct, pristaCSComplexEp2Product,
  pristaCirculatingProduct, pristaEcoHeatProduct, pristaEmulsinExtraProduct, pristaEmulsolABProduct, pristaEmulsolBProduct, pristaFrezolEPProduct, pristaFrezolProduct,
  pristaFrigusHAProduct, pristaFrigusProduct, pristaGMKProduct, pristaHoningProduct, pristaK2GVSK2GProduct, pristaK3Product, pristaKGProduct, pristaKMProduct,
  pristaLiComplexEP2HDVTProduct, pristaLiComplexEP2PTFEGreenProduct, pristaLiComplexEP2Product, pristaLiMoProduct, pristaLicaEP2Product, pristaLicaProduct,
  pristaLimoEP2GProduct, pristaLithium2Product, pristaLithiumEP000Product, pristaLithiumEP2Product, pristaLithiumEPGresProduct, pristaLithiumEPProduct, pristaLithiumLixEP2Product,
  pristaLithiumProduct, pristaMHVProduct, pristaMTLProduct, pristaMarineCMProduct, pristaMarineCProduct, pristaMarineDProduct, pristaMarineDSProduct, pristaMarineSProduct,
  pristaMarineSTProduct, pristaMpdProduct, pristaMtlProduct, pristaMvk1Product, pristaMvk2Product, pristaMvk2RProduct, pristaMvrMultiProduct, pristaMvrProduct, pristaMzProduct,
  pristaMzeProduct, pristaNGEO40Product, pristaPKProduct, pristaPaperMachineProduct, pristaRezinolHd22Product, pristaRezinolProduct, pristaRolonFProduct, pristaRolonProduct,
  pristaRolonRProduct, pristaSHPDVDS3Product, pristaSupertherm22Product, pristaSyntechEP2Product, pristaSynthilin5Product, pristaSyntholAhwProduct, pristaSyntholAswProduct,
  pristaTPSEpProduct, pristaTPXProduct, pristaTpProduct, pristaTps32Product, pristaTps46Product, pristaTpsEpProduct, pristaTpxProduct, pristaTrafoAHosioProduct,
  pristaTrafoAProduct, pristaTrafoProduct, pristaee5Product, screenwashSummerProduct, screenwashWinterProduct
} from './utility/productDetails';
import Msds from './components/products/Msds';
import SurdurulebilirlikHaber from './pages/medya/haberler/SurdurulebilirlikHaber';


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
        <Route path="/catalogue/kompresor-yaglari" element={<KompresorYaglari />} />
        <Route path="/catalogue/endustriyel-disli-yaglari" element={<DisliYaglari />} />
        <Route path="/catalogue/turbin-yaglari" element={<TurbinYaglari />} />
        <Route path="/catalogue/transformator-yaglari" element={<TransformatorYaglari />} />
        <Route path="/catalogue/sirkulasyon-yaglari-ve-genel-amacli-yaglar" element={<SirkulasyonYaglari />} />
        <Route path="/catalogue/motorlu-testere-yaglari" element={<MotorluTestereYaglari />} />
        <Route path="/catalogue/isi-transfer-yaglari" element={<IsiTransferYaglari />} />
        <Route path="/catalogue/su-verme-yaglari" element={<SuVermeYaglari />} />
        <Route path="/catalogue/sade-yaglar" element={<SadeYaglar />} />
        <Route path="/catalogue/suda-cozulebilir" element={<SudaCozulebilir />} />
        <Route path="/catalogue/plastiklestiriciler" element={<Plastiklestiriciler />} />
        <Route path="/catalogue/kalip-ayirma-yaglari" element={<KalipAyirmaYaglari />} />
        <Route path="/catalogue/sabit-gaz-motorlari" element={<SabitGazMotorlari />} />
        <Route path="/catalogue/gresler" element={<Gresler />} />
        <Route path="/catalogue/sistem-yaglari" element={<SistemYaglari />} />
        <Route path="/catalogue/kovan-pistonlu-motor-yaglari" element={<KovanPistonluMotorYaglari />} />
        <Route path="/catalogue/silindir-yaglari" element={<SilindirYaglari />} />
        <Route path="/catalogue/disli-yaglari" element={<DisliYaglariYard />} />
        <Route path="/catalogue/sogutma-sistemi-yagi" element={<SogutmaSistemiYag />} />
        <Route path="/catalogue/kompresor-yaglari-1" element={<KompresorYaglariYard />} />
        <Route path="/catalogue/isi-transfer-yagi" element={<IsiTransferYagi />} />
        <Route path="/catalogue/turbin-yaglari-1" element={<TurbinYaglariYard />} />
        <Route path="/catalogue/hidrolik-yaglar" element={<HidrolikYaglar />} />
        <Route path="/catalogue/motor-yaglari" element={<MotorYaglariYard />} />
        <Route path="/catalogue/gresler-1" element={<GreslerMarin />} />

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
        <Route path='/news/prista-oil-holding-yaglayicilar-surdurulebilirlik-forumunun-bir-parcasiydi' element={<SurdurulebilirlikHaber />} />
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
        <Route path="/msds-9" element={<Msds />} />

        {/* Products en sonunda sitemap.txt'ye eklenecek*/}
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-r-ultra-v-0w-20-4" element={<UrunDetay product={Dpf0w204Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-c5-0w-20-7" element={<UrunDetay product={Dpfc50w20Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-fe-0w-30-7" element={<UrunDetay product={Dpf0w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-plus-5w-30-4" element={<UrunDetay product={Dpf5w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-rn-5w-30-4" element={<UrunDetay product={Dpfrn5w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-v-5w-30-4" element={<UrunDetay product={Dpfultra5w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-gf-0w-20-7" element={<UrunDetay product={Dpfgf0w20Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-g-5w-30-4" element={<UrunDetay product={Dpfg5w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-fe-5w-30-7" element={<UrunDetay product={Dpffe5w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc/prista-ultra-plus-5w-40-4" element={<UrunDetay product={Dpf5w40Product} />} />
        <Route path="/catalogue/yuksek-performansli/prista-ultra-5w-30-5w-40-4" element={<UrunDetay product={Yp5w305w40Product} />} />
        <Route path="/catalogue/yuksek-performansli/prista-leader-10w-40-6" element={<UrunDetay product={Yp10w40Product} />} />
        <Route path="/catalogue/yuksek-performansli/prista-super-benzin-10w-40-4" element={<UrunDetay product={Ypsb10w40Product} />} />
        <Route path="/catalogue/ustun/prista-leader-15w-40-20w-50-7" element={<UrunDetay product={Ustun15w4020w50Product} />} />
        <Route path="/catalogue/standart/prista-super-hd-10w-40-4" element={<UrunDetay product={Hd10w40Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc-uyumlu/prista-uhpd-5w-30-4" element={<UrunDetay product={Ypuhpd5w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc-uyumlu/prista-uhpd-10w-40-4" element={<UrunDetay product={Ypuhpd10w40Product} />} />
        <Route path="/catalogue/yuksek-performansli-dpf-twc-uyumlu/prista-shpd-ls-10w-30-7" element={<UrunDetay product={Ls10w30Product} />} />
        <Route path="/catalogue/yuksek-performansli-1/prista-ultra-td-10w-40-4" element={<UrunDetay product={Yptd10w40Product} />} />
        <Route path="/catalogue/yuksek-performansli-1/prista-shpd-vds-3-10w-40-4" element={<UrunDetay product={Ypvds310w40Product} />} />
        <Route path="/catalogue/yuksek-performansli-1/prista-shpd-ls-15w-40-6" element={<UrunDetay product={ShpdLs15w40Product} />} />
        <Route path="/catalogue/ustun-1/prista-shpd-vds-3-15w-40-20w-50-4" element={<UrunDetay product={Yp15w4020w504Product} />} />
        <Route path="/catalogue/ustun-1/prista-turbo-diesel-15w-40-20w-50-4" element={<UrunDetay product={Td15w4020w50Product} />} />
        <Route path="/catalogue/ustun-1/prista-r-leader-15w-40-20w-50-6" element={<UrunDetay product={Ypld15w40Product} />} />
        <Route path="/catalogue/standart-1/prista-super-hd-15w-40-20w-50-9" element={<UrunDetay product={Super15w4020w50Product} />} />
        <Route path="/catalogue/gaz-motor-yaglari/prista-multigas-hd-15w-40-4" element={<UrunDetay product={MultigasHd15w40Product} />} />
        <Route path="/catalogue/2t-4t-yaglari/prista-2t-extra-4" element={<UrunDetay product={Yp2textra4Product} />} />
        <Route path="/catalogue/2t-4t-yaglari/prista-2t-mix-4" element={<UrunDetay product={Yp2tmix4Product} />} />
        <Route path="/catalogue/2t-4t-yaglari/prista-r-4t-6" element={<UrunDetay product={Ypr4t6Product} />} />
        <Route path="/catalogue/2t-4t-yaglari/prista-2t-outboard-4" element={<UrunDetay product={MultigasHd15w402tProduct} />} />
        <Route path="/catalogue/yuksek-performansli-duz-sanziman/prista-ultragear-synthetic-75w-80-75w-90-4" element={<UrunDetay product={Yp75w8075w90Product} />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman/prista-r-atf-ii-m-4" element={<UrunDetay product={Atf2MProduct} />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman/prista-atf-iii-4" element={<UrunDetay product={Ypatfiii4Product} />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman/prista-atf-4" element={<UrunDetay product={Yppristaatf4Product} />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman/prista-mhp-40a-4" element={<UrunDetay product={Mhp40aProduct} />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman/prista-mhp-32-4" element={<UrunDetay product={Mhp32Product} />} />
        <Route path="/catalogue/yuksek-performansli-otomatik-sanziman/prista-psf-4" element={<UrunDetay product={Yppsf4Product} />} />
        <Route path="/catalogue/duz-sanziman-ve-aks/prista-ep-sae-90-140-4" element={<UrunDetay product={Ypsae90140Product} />} />
        <Route path="/catalogue/duz-sanziman-ve-aks/prista-ep-sae-80w-90-85w-90-85w-140-4" element={<UrunDetay product={Ypsae80w90Product} />} />
        <Route path="/catalogue/duz-sanziman-ve-aks/prista-gl4-sae-90-4" element={<UrunDetay product={Gl4sae90Product} />} />
        <Route path="/catalogue/utto-stou-to-4-5/prista-r-stou-4" element={<UrunDetay product={Ypstou4Product} />} />
        <Route path="/catalogue/utto-stou-to-4-5/prista-r-utto-3" element={<UrunDetay product={Yputto3Product} />} />
        <Route path="/catalogue/utto-stou-to-4-5/prista-to-4-sae-10w-30-4" element={<UrunDetay product={To4sae10w30Product} />} />
        <Route path="/catalogue/sogutma-sulari/prista-antifreeze-long-life-4" element={<UrunDetay product={longlife4Product} />} />
        <Route path="/catalogue/sogutma-sulari/prista-antifreeze-long-life-ready-to-use-4" element={<UrunDetay product={antifreezeLongLifeProduct} />} />
        <Route path="/catalogue/sogutma-sulari/prista-antifreeze-concentrate-4" element={<UrunDetay product={concentrate4Product} />} />
        <Route path="/catalogue/sogutma-sulari/prista-antifreeze-4" element={<UrunDetay product={antifriz4Product} />} />
        <Route path="/catalogue/fren-hidrolikleri/prista-dot-4-dot-3-4" element={<UrunDetay product={dot4dot3Product} />} />
        <Route path="/catalogue/on-cam-yikama-sivilari/prista-screenwash-summer-4" element={<UrunDetay product={screenwashSummerProduct} />} />
        <Route path="/catalogue/on-cam-yikama-sivilari/prista-screenwash-winter-4" element={<UrunDetay product={screenwashWinterProduct} />} />
        <Route path="/catalogue/adblue-r-6/adblue-6" element={<UrunDetay product={adblueProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhv-plus-4" element={<UrunDetay product={mhvPlusProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhv-7" element={<UrunDetay product={mhvProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhm-plus-4" element={<UrunDetay product={mhmPlusProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhm-4" element={<UrunDetay product={mhmProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhm-b-4" element={<UrunDetay product={mhmbProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhm-d-4" element={<UrunDetay product={mhmdProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-bio-mhm-46-4" element={<UrunDetay product={mhm46Product} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhl-4" element={<UrunDetay product={mhlProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-fd-5-4" element={<UrunDetay product={fd5Product} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mhe-40-4" element={<UrunDetay product={mhe40Product} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-shock-absorber-oil-4" element={<UrunDetay product={absorberOilProduct} />} />
        <Route path="/catalogue/hidrolik-ve-kizak-yaglari/prista-mnp-4" element={<UrunDetay product={mnpProduct} />} />
        <Route path="/catalogue/kompresor-yaglari/prista-r-compressor-synth-4" element={<UrunDetay product={compressor4Product} />} />
        <Route path="/catalogue/kompresor-yaglari/prista-mvk-2-7" element={<UrunDetay product={pristaMvk2Product} />} />
        <Route path="/catalogue/kompresor-yaglari/prista-mvk-1-4" element={<UrunDetay product={pristaMvk1Product} />} />
        <Route path="/catalogue/kompresor-yaglari/prista-frigus-ha-7" element={<UrunDetay product={pristaFrigusProduct} />} />
        <Route path="/catalogue/endustriyel-disli-yaglari/prista-rolon-f-4" element={<UrunDetay product={pristaRolonFProduct} />} />
        <Route path="/catalogue/endustriyel-disli-yaglari/prista-rolon-7" element={<UrunDetay product={pristaRolonProduct} />} />
        <Route path="/catalogue/turbin-yaglari/prista-tpx-7" element={<UrunDetay product={pristaTpxProduct} />} />
        <Route path="/catalogue/turbin-yaglari/prista-tps-32-4" element={<UrunDetay product={pristaTps32Product} />} />
        <Route path="/catalogue/turbin-yaglari/prista-tps-46-4" element={<UrunDetay product={pristaTps46Product} />} />
        <Route path="/catalogue/turbin-yaglari/prista-tps-ep-7" element={<UrunDetay product={pristaTpsEpProduct} />} />
        <Route path="/catalogue/turbin-yaglari/prista-tp-4" element={<UrunDetay product={pristaTpProduct} />} />
        <Route path="/catalogue/transformator-yaglari/prista-trafo-a-hosio-4" element={<UrunDetay product={pristaTrafoAHosioProduct} />} />
        <Route path="/catalogue/transformator-yaglari/prista-trafo-a-4" element={<UrunDetay product={pristaTrafoAProduct} />} />
        <Route path="/catalogue/transformator-yaglari/prista-trafo-4" element={<UrunDetay product={pristaTrafoProduct} />} />
        <Route path="/catalogue/sirkulasyon-yaglari-ve-genel-amacli-yaglar/prista-paper-machine-4" element={<UrunDetay product={pristaPaperMachineProduct} />} />
        <Route path="/catalogue/sirkulasyon-yaglari-ve-genel-amacli-yaglar/prista-circulating-oil-4" element={<UrunDetay product={pristaCirculatingProduct} />} />
        <Route path="/catalogue/sirkulasyon-yaglari-ve-genel-amacli-yaglar/prista-an-4" element={<UrunDetay product={pristaAnProduct} />} />
        <Route path="/catalogue/motorlu-testere-yaglari/prista-mvr-multi-4" element={<UrunDetay product={pristaMvrMultiProduct} />} />
        <Route path="/catalogue/motorlu-testere-yaglari/prista-mvr-4" element={<UrunDetay product={pristaMvrProduct} />} />
        <Route path="/catalogue/isi-transfer-yaglari/prista-supertherm-22-4" element={<UrunDetay product={pristaSupertherm22Product} />} />
        <Route path="/catalogue/isi-transfer-yaglari/prista-mtl-7" element={<UrunDetay product={pristaMtlProduct} />} />
        <Route path="/catalogue/isi-transfer-yaglari/prista-eco-heat-fluid-4" element={<UrunDetay product={pristaEcoHeatProduct} />} />
        <Route path="/catalogue/su-verme-yaglari/prista-mz-e-4" element={<UrunDetay product={pristaMzeProduct} />} />
        <Route path="/catalogue/su-verme-yaglari/prista-mz-4" element={<UrunDetay product={pristaMzProduct} />} />
        <Route path="/catalogue/sade-yaglar/prista-rezinol-hd-22-4" element={<UrunDetay product={pristaRezinolHd22Product} />} />
        <Route path="/catalogue/sade-yaglar/prista-rezinol-4" element={<UrunDetay product={pristaRezinolProduct} />} />
        <Route path="/catalogue/sade-yaglar/prista-c-4" element={<UrunDetay product={pristaCProduct} />} />
        <Route path="/catalogue/sade-yaglar/prista-frezol-ep-4" element={<UrunDetay product={pristaFrezolEPProduct} />} />
        <Route path="/catalogue/sade-yaglar/prista-frezol-4" element={<UrunDetay product={pristaFrezolProduct} />} />
        <Route path="/catalogue/sade-yaglar/prista-mpd-4" element={<UrunDetay product={pristaMpdProduct} />} />
        <Route path="/catalogue/sade-yaglar/prista-ee-5-4" element={<UrunDetay product={pristaee5Product} />} />
        <Route path="/catalogue/sade-yaglar/prista-honing-4" element={<UrunDetay product={pristaHoningProduct} />} />
        <Route path="/catalogue/suda-cozulebilir/prista-synthilin-5-4" element={<UrunDetay product={pristaSynthilin5Product} />} />
        <Route path="/catalogue/suda-cozulebilir/prista-synthol-a-hw-4" element={<UrunDetay product={pristaSyntholAhwProduct} />} />
        <Route path="/catalogue/suda-cozulebilir/prista-synthol-a-sw-4" element={<UrunDetay product={pristaSyntholAswProduct} />} />
        <Route path="/catalogue/suda-cozulebilir/prista-emulsin-extra-4" element={<UrunDetay product={pristaEmulsinExtraProduct} />} />
        <Route path="/catalogue/suda-cozulebilir/prista-emulsol-ab-4" element={<UrunDetay product={pristaEmulsolABProduct} />} />
        <Route path="/catalogue/suda-cozulebilir/prista-emulsol-b-4" element={<UrunDetay product={pristaEmulsolBProduct} />} />
        <Route path="/catalogue/plastiklestiriciler/prista-pk-4" element={<UrunDetay product={pristaPKProduct} />} />
        <Route path="/catalogue/kalip-ayirma-yaglari/prista-km-4" element={<UrunDetay product={pristaKMProduct} />} />
        <Route path="/catalogue/sabit-gaz-motorlari/prista-gmk-4" element={<UrunDetay product={pristaGMKProduct} />} />
        <Route path="/catalogue/sabit-gaz-motorlari/prista-r-ngeo-40-4" element={<UrunDetay product={pristaNGEO40Product} />} />
        <Route path="/catalogue/gresler/prista-r-syntech-ep-2-4" element={<UrunDetay product={pristaSyntechEP2Product} />} />
        <Route path="/catalogue/gresler/prista-r-lithium-ep-2-5" element={<UrunDetay product={pristaLithiumEP2Product} />} />
        <Route path="/catalogue/gresler/prista-r-lithium-2-5" element={<UrunDetay product={pristaLithium2Product} />} />
        <Route path="/catalogue/gresler/prista-r-k-3-4" element={<UrunDetay product={pristaK3Product} />} />
        <Route path="/catalogue/gresler/prista-r-li-complex-ep-2-ptfe-green-4" element={<UrunDetay product={pristaLiComplexEP2PTFEGreenProduct} />} />
        <Route path="/catalogue/gresler/prista-r-cs-complex-ep-2-1-5-7" element={<UrunDetay product={pristaCSComplexEp2Product} />} />
        <Route path="/catalogue/gresler/prista-r-li-complex-ep-2-hdvt-7" element={<UrunDetay product={pristaLiComplexEP2HDVTProduct} />} />
        <Route path="/catalogue/gresler/prista-r-li-complex-ep-2-7" element={<UrunDetay product={pristaLiComplexEP2Product} />} />
        <Route path="/catalogue/gresler/prista-r-lithium-ep-7" element={<UrunDetay product={pristaLithiumEPProduct} />} />
        <Route path="/catalogue/gresler/prista-r-lithium-ep-0-00-7" element={<UrunDetay product={pristaLithiumEP000Product} />} />
        <Route path="/catalogue/gresler/prista-r-limo-ep-prista-r-limo-ep-2-g-7" element={<UrunDetay product={pristaLimoEP2GProduct} />} />
        <Route path="/catalogue/gresler/prista-r-lithium-7" element={<UrunDetay product={pristaLithiumProduct} />} />
        <Route path="/catalogue/gresler/prista-r-lica-7" element={<UrunDetay product={pristaLicaProduct} />} />
        <Route path="/catalogue/gresler/prista-r-lica-ep-2-7" element={<UrunDetay product={pristaLicaEP2Product} />} />
        <Route path="/catalogue/gresler/prista-r-k-2-g-vs-prista-r-k-2-g-7" element={<UrunDetay product={pristaK2GVSK2GProduct} />} />
        <Route path="/catalogue/sistem-yaglari/465" element={<UrunDetay product={pristaMarineCProduct} />} />
        <Route path="/catalogue/kovan-pistonlu-motor-yaglari/prista-marine-d-3" element={<UrunDetay product={pristaMarineDProduct} />} />
        <Route path="/catalogue/kovan-pistonlu-motor-yaglari/prista-marine-ds-3" element={<UrunDetay product={pristaMarineDSProduct} />} />
        <Route path="/catalogue/kovan-pistonlu-motor-yaglari/prista-marine-s-3" element={<UrunDetay product={pristaMarineSProduct} />} />
        <Route path="/catalogue/kovan-pistonlu-motor-yaglari/prista-marine-st-3" element={<UrunDetay product={pristaMarineSTProduct} />} />
        <Route path="/catalogue/silindir-yaglari/prista-marine-cm-3" element={<UrunDetay product={pristaMarineCMProduct} />} />
        <Route path="/catalogue/disli-yaglari/prista-rolon-8" element={<UrunDetay product={pristaRolonRProduct} />} />
        <Route path="/catalogue/sogutma-sistemi-yagi/prista-frigus-ha-8" element={<UrunDetay product={pristaFrigusHAProduct} />} />
        <Route path="/catalogue/kompresor-yaglari-1/prista-mvk-2-8" element={<UrunDetay product={pristaMvk2RProduct} />} />
        <Route path="/catalogue/isi-transfer-yagi/prista-mtl-8" element={<UrunDetay product={pristaMTLProduct} />} />
        <Route path="/catalogue/turbin-yaglari-1/prista-tpx-8" element={<UrunDetay product={pristaTPXProduct} />} />
        <Route path="/catalogue/turbin-yaglari-1/prista-tps-ep-8" element={<UrunDetay product={pristaTPSEpProduct} />} />
        <Route path="/catalogue/hidrolik-yaglar/prista-mhv-8" element={<UrunDetay product={pristaMHVProduct} />} />
        <Route path="/catalogue/motor-yaglari/prista-shpd-vds-3-3" element={<UrunDetay product={pristaSHPDVDS3Product} />} />
        <Route path="/catalogue/gresler-1/prista-lithium-ep-3" element={<UrunDetay product={pristaLithiumEPGresProduct} />} />
        <Route path="/catalogue/gresler-1/prista-lithium-lix-ep2-3" element={<UrunDetay product={pristaLithiumLixEP2Product} />} />
        <Route path="/catalogue/gresler-1/prista-limo-2" element={<UrunDetay product={pristaLiMoProduct} />} />
        <Route path="/catalogue/gresler-1/prista-k-g-2" element={<UrunDetay product={pristaKGProduct} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
