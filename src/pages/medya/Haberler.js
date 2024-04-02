import SideBarMedya from "../../components/SidebarMedya";
import Haber from "../../components/Haber";
import { useState } from "react";
import {
    TeodorNewImage, BobokovNewImage, DaimlerNewImage, RusDistImage,
    OrenburgImage, MonteCarloImage, RudolfImage, BobokovImage,
    PristaImage, InterCarsImage, AutoMechanikaImage, RockinImage,
    PieterImage, RuscukImage, YunanistanImage, PremiumImage, SilverstoneImage,
    RecyclingImage, PristaRecImage, CeeImage, BobokoImage, PlamenImage,
    MonzaImage, SofiaImage, PrTurkiyeImage, PlemenRuseImage, TankoImage,
    PristaNewImage, SofiaCarsImage, BulgarYagImage, Prista2014Image,
    ProductNewImage, LubricantsImage, CetusImage
} from "../../images/news";

const Haberler = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div className="body_with_sidebar default">
            <SideBarMedya />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Medya / </span>
                    <h1>Haberler</h1>
                </div>
                <ul className="objects-list-two-rows">
                    {currentPage === 1 &&
                        <>
                            <Haber uri={"/news/harika-haberler-teodor-tsvetkovtan-bulgaristandaki-texaco-marka-elcimizden"}
                                gorsel={TeodorNewImage}
                                baslik={"Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!"}
                                tarih={"18-03-2024"}
                                detay={"                        Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!                    "}
                                lastClassName={""} />
                            <Haber uri={"/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi"}
                                gorsel={BobokovNewImage}
                                baslik={"TR Prista Oil Group'un kurucu ortağı Plamen Bobokov, Plovdiv \"Paisii Hilendarski\" Üniversi..."}
                                tarih={"20-07-2023"}
                                detay={"                        16 Mayıs 2023 tarihinde, Paisii Hilendarski'nin adını taşıyan Plovdiv Üniversitesi'nde \"İnovasyon ve Girişimcilik\" disiplini kapsamında \"Bulgar Girişimcinin Karşılaştığı Zorluklar ve Güçlükler\" başlıklı halka açık bir konferans düzenlendi.                    "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/1-eylul-2021-tarihinde-daimler-ag-grubu-mercedes-benz-group-ag-ve-daimler-truck-ag-olmak-uzere-iki-sirkete-ayrildi"}
                                gorsel={DaimlerNewImage}
                                baslik={"1 Eylül 2021 tarihinde Daimler AG Grubu, Mercedes-Benz Group AG ve Daimler Truck AG olmak..."}
                                tarih={"16-06-2023"}
                                detay={"                        Mercedes-Benz Group AG, hafif hizmet araçları ve kamyonetler için teknik özellikler ve resmi onaylar üzerinde çalışmaya devam ediyor.                    "}
                                lastClassName={""} />
                            <Haber uri={"/news/ruscuk-bulgaristanda-7-eylulde-gerceklesen-prista-r-nin-rusyadaki-distributorleri-icin-ilk-konferansinda-fikir-ve-deneyim-alisverisi-yapildi"}
                                gorsel={RusDistImage}
                                baslik={"Rusçuk, Bulgaristan’da 7 Eylül’de gerçekleşen PRISTA®’NIN RUSYA’DAKİ DİSTRİBÜTÖRLERİ İÇİN..."}
                                tarih={"03-10-2017"}
                                detay={"                        7 Eylül 2017 tarihinde Bulgaristan’nın Rusçuk şehrinde Prista Oil ekibi, Prista Oil Holding’in Rusya’daki resmi temsilcisi olan Inventum distribütörleri için bir konferansa ev sahipliği yaptı.                    "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/rusyanin-orenburg-kentinde-duzenlenen-ilk-teknik-konferansta-prista-oil-holdingin-urunlerle-ilgili-son-inovasyonlari-tanitildi"}
                                gorsel={OrenburgImage}
                                baslik={"Rusya’nın Orenburg kentinde düzenlenen ilk teknik konferansta, Prista Oil Holding’in ürünl..."}
                                tarih={"13-09-2017"}
                                detay={"                        24 Ağustos 2017 tarihinde, Orenburg kentinde, Rusya merkezli Prista Oil Holding’in resmi temsilcisi Inventum LLC’nin de desteğiyle, son kullanıcılar için ilk konferans düzenlendi. Etkinliğin ana amacı, Prista Oil’in yüksek teknoloji ürünü yağlarının sunduğu ön                    "}
                                lastClassName={""} />
                            <Haber uri={"/news/sin-cars-ingiltere-yilin-en-gorkemli-etkinliklerinden-biri-olan-ve-her-yil-ihtisamin-baskenti-monte-carlo-da-prens-ii"}
                                gorsel={MonteCarloImage}
                                baslik={"SIN CARS İngiltere, yılın en görkemli etkinliklerinden biri olan ve her yıl ihtişamın başk..."}
                                tarih={"20-04-2017"}
                                detay={"                        Albert tarafından  düzenlenen Top Marques Monaco'ya davet edildi. “Dünyanın en seçkin şovu” olarak adlandırılan etkinlik, en lüks araçları, yatları, saatleri ve mücevherleri bir araya getiriyor.                   "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/prista-oil-r-macaristan-daki-horvath-rudolf-intertransport-firmasina-texaco-yaglarini-tedarik-edecek"}
                                gorsel={RudolfImage}
                                baslik={"PRISTA OIL ®,  MACARİSTAN'DAKİ HORVATH RUDOLF INTERTRANSPORT  FİRMASINA  TEXACO YAĞLARINI..."}
                                tarih={"13-04-2017"}
                                detay={"                        Texaco markasının yetkili ithalatçısı Prista Oil-Hungary, geçtiğimiz günlerde Macaristan'ın en köklü lojistik şirketinin madeni yağ ihtiyacını  2017 yılı boyunca tedarik etmek üzere anlaştı. Böylece Horváth Rudolf Intertransport filosunun motorları ve diğer pa                    "}
                                lastClassName={""} />
                            <Haber uri={"/news/plamen-bobokov-ukrayna-dan-onurlu-hizmet-odulu-aldi"}
                                gorsel={BobokovImage}
                                baslik={"Plamen Bobokov, Ukrayna'dan \"Onurlu Hizmet\" ödülü aldı"}
                                tarih={"05-01-2017"}
                                detay={"                        Ukrayna ve Bulgaristan arasındaki diplomatik ilişkilerin yenilenmesinin 25. yılını kutlayan törende önemli bir Bulgar sanayici, \"Prista Oil Holding\" EAD'nin sahibi ve Bulgaristan'ın Rusçuk şehrinde Ukrayna Fahri Konsolosu olan Plamen Bobokov, Ukrayna'dan \"Onur                    "}
                                lastClassName={"last"} />

                            <Haber uri={"news/prista-oil-r-macaristan-daki-horvath-rudolf-intertransport-firmasina-texaco-yaglarini-tedarik-edecek"}
                                gorsel={PristaImage}
                                baslik={"PRISTA OIL GRUBU: YENİDEN YAPILANIYOR"}
                                tarih={"26-10-2016"}
                                detay={"                        Daha önceden yatırım şirketi ADM Capital ve Avrupa Yeniden Yapılanma ve Kalkınma Bankası'nın (EBRD) sahip olduğu Prista Oil Grubu sermayesinin %30 hissesinin satın alım işlemi, ana hissedarlar Plamen Bobokov ve Atanas Bobokov tarafından başarıyla sonuçlandırıl                    "}
                                lastClassName={""} />
                            <Haber uri={"/news/inter-cars-ekibi-ruscuk-bulgaristan-daki-prista-oil-karistirma-tesisini-ziyaret-etti"}
                                gorsel={InterCarsImage}
                                baslik={"INTER CARS EKİBİ RUSÇUK, BULGARİSTAN'DAKİ PRISTA OIL KARIŞTIRMA TESİSİNİ ZİYARET ETTİ"}
                                tarih={"19-10-2016"}
                                detay={"                        Prista Oil Ukrayna tarafından davet edilen Inter Cars şirketinin 15 üst düzey satış müdürü, 27-28 Eylül tarihlerinde Rusçuk şehrinde bulunan Prista Karıştırma Tesisini ziyaret etti                    "}
                                lastClassName={"last"} />
                        </>
                    }

                    {currentPage === 2 &&
                        <>
                            <Haber uri={"/news/automechanika-frankfurt-2016-otomotiv-hizmet-sektorunde-dunyanin-onde-gelen-ticaret-fuari-frankfurt-am-main-13-17-eylul-2016"}
                                gorsel={AutoMechanikaImage}
                                baslik={"Automechanika Frankfurt 2016  Otomotiv Hizmet Sektöründe Dünyanın Önde Gelen Ticaret Fuarı..."}
                                tarih={"05-10-2016"}
                                detay={"                                Prista Oil, rekor sayıdaki 4.820 sergiciden biriydi.                        170’i aşkın ülkeden 136.000 ziyaretçi ağırlandı.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/rockin-the-cluster-5"}
                                gorsel={RockinImage}
                                baslik={"ROCKIN’ THE CLUSTER"}
                                tarih={"03-10-2016"}
                                detay={"                                Ceco Anastasov (Executive Director Prista Oil Group) and Valentin Ionescu (Sales and Marketing Manager) visited the CEE Cluster. Their 3 days program included meetings with prospects, with the teams of Prista Czech, Slovakia and Hungary and a thorough analysis                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/pieter-christiaan-van-oranje-ve-tim-coronel-spa-belcika-da-sin-r1-gt4-u-surecek"}
                                gorsel={PieterImage}
                                baslik={"PIETER CHRISTIAAN VAN ORANJE VE TIM CORONEL, SPA, BELÇİKA'DA SIN R1 GT4'Ü SÜRECEK"}
                                tarih={"07-07-2016"}
                                detay={"                                Hollanda yarış ekibi pilotları Pieter Christiaan van Oranje ve Tim Coronel, Sofya otomobil motor sporları ekibine katılacak ve Circuit of Spa- Francorchamps, Belçika'da 8-9 Temmuz'da gerçekleştirilecek olan Avrupa GT4 serisinin dördüncü etabında Sin R1 GT4'ün                             "}
                                lastClassName={""} />
                            <Haber uri={"/news/prista-oil-ruscuk-taki-yillik-konseri-icin-flamingo-98-dans-okulunu-destekliyor"}
                                gorsel={RuscukImage}
                                baslik={"Prista Oil, Rusçuk'taki yıllık konseri için “Flamingo-98” dans okulunu destekliyor"}
                                tarih={"29-06-2016"}
                                detay={"                                Konser, Rusçuk Üniversitesi Kaneff Merkezi'nde 22 Mayıs 2016, Pazar tarihinde gerçekleştirildi. Etkinlik iki bölüme ayrıldı. Coşkulu ebeveynler, alkışlar eşliğinde sahne performanslarının her birini hoş karşıladı.                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/yunanistan-dan-prista-oil-yetkili-distributoru-leonidas-leontopoulos-leo-lub-parts-yunan-yaris-sezonuna-katiliyor"}
                                gorsel={YunanistanImage}
                                baslik={"Yunanistan'dan Prista Oil Yetkili Distribütörü Leonidas Leontopoulos – LEO LUB & PARTS – Y..."}
                                tarih={"29-06-2016"}
                                detay={"                                Leonidas Leontopoulos 1990 yılında yarışmaya başladı ve yarış kariyeri boyunca birçok 1.lik ve 2.lik derecesi kazandı. 2016 yılında Leonidas, Prista® markalı Peugeot 106 /1600CC 200HP aracıyla Grup A'daki Tepe Yarışlarına ve Parkur Yarışlarına katılacak.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/yeni-premium-1l-sise-ve-etiket-tasarimi-icin-prista-oil-yarismasini-ulusal-sanat-akademisi-nden-bir-doktora-adayi-kazandi"}
                                gorsel={PremiumImage}
                                baslik={"Yeni Premium 1L şişe ve etiket tasarımı için Prista Oil yarışmasını Ulusal Sanat Akademisi..."}
                                tarih={"13-06-2016"}
                                detay={"                                Endüstriyel tasarım programında doktora öğrencisi olan Zahari Ganchev, yeni Premium 1L şişe ve etiket için düzenlenen Prista Oil tasarım yarışmasını kazandı.                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/silverstone-11-12-haziran-daki-dayaniklilik-yarisinda-avrupa-gt4-serisini-agirlayacak"}
                                gorsel={SilverstoneImage}
                                baslik={"Silverstone, 11-12 Haziran'daki dayanıklılık yarışında Avrupa GT4 serisini ağırlayacak"}
                                tarih={"10-06-2016"}
                                detay={"                                Avrupa GT4 serisinin üçüncü etabı, Avrupa'nın en önemli parkurlarından biri olan İngiltere'deki Silverstone'da gerçekleştirilecek.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/prista-recycling-tesisi-bugun-ozbekistan-da-acildi"}
                                gorsel={RecyclingImage}
                                baslik={"Prista Recycling Tesisi bugün Özbekistan'da açıldı"}
                                tarih={"18-05-2016"}
                                detay={"                                20. uluslararası “Yağ ve Gaz Özbekistan” konferansı ve sergisi, Özbekistan'da yüksek teknolojili Bulgar “Prista Recycling” fabrikasının açılışıyla başladı                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/prista-recycling-ozbekistan-da-atik-yaglarin-geri-donusumu-icin-yuksek-teknolojili-bir-tesis-aciyor"}
                                gorsel={PristaRecImage}
                                baslik={"“PRISTA RECYCLING”, ÖZBEKİSTAN'DA ATIK YAĞLARIN GERİ DÖNÜŞÜMÜ İÇİN YÜKSEK TEKNOLOJİLİ BİR..."}
                                tarih={"16-05-2016"}
                                detay={"                                Açılış töreni, Angren, Taşkent bölgesinde 18 Mayıs 2016'da gerçekleştirilecek. Törende kurdeleyi iki ülkenin başbakanı, Boyko Borissov ve Shavkat Mirziyoyev kesecek.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/cee-de-one-cikanlar"}
                                gorsel={CeeImage}
                                baslik={"CEE'DE ÖNE ÇIKANLAR"}
                                tarih={"09-05-2016"}
                                detay={"                                Çek Cumhuriyeti'ndeki Genişleme Devam Ediyor                        Müşteri kazançları, Prista Oil Çek Cumhuriyeti'nin hırslı büyüme planının kusursuz uygulanışına işaret ediyor. Son imzalanan sözleşmeler, otomotiv sektörlerinde Prista’ya önemli yeni faaliyetler kazandıracak.                            "}
                                lastClassName={"last"} />
                        </>
                    }

                    {currentPage === 3 &&
                        <>
                            <Haber uri={"/news/plamen-bobokov-ruscuk-altin-nisan-odulu-ve-ruscuk-un-saygideger-vatandasi-unvaniyla-odullendirildi"}
                                gorsel={BobokoImage}
                                baslik={"Plamen Bobokov, “Rusçuk Altın Nişan \" ödülü ve “Rusçuk'un Saygıdeğer Vatandaşı” ünvanıyla..."}
                                tarih={"06-05-2016"}
                                detay={"                                6 Mayıs’ta gerçekleşen Rusçuk şehri festivalinin arifesinde, büyük sanayici ve dünyaca tanınmış sanat hamisi, Prista Oil'in sahibi Plamen Bobokov, kendi vatandaşlarından hak ettiği saygıyı görerek iki ödül ile onurlandırıldı.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/plamen-bobokov-was-awarded-the-honor-golden-badge-ruse-5"}
                                gorsel={PlamenImage}
                                baslik={"Plamen Bobokov was awarded the honor „Golden badge – Ruse“"}
                                tarih={"05-05-2016"}
                                detay={"                                Today, on the eve of 6th of May – the festival of Ruse - the large industrialist and universally recognized patron of the arts Plamen Bobokov received a well-deserved recognition from his fellow citizens for his work of many years, his dignified and...                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/monza-taraftarlari-bulgar-takimini-sofia-car-motorsport-ve-aracin-yaraticisi-rosen-daskalov-u-en-iyi-ekip-ve-araci-da-pistteki-en-hizli-arac-olarak-anons-ettiler"}
                                gorsel={MonzaImage}
                                baslik={"Monza taraftarları Bulgar takımını “Sofia Car Motorsport” ve aracın yaratıcısı Rosen Daska..."}
                                tarih={"25-04-2016"}
                                detay={"                                Alternatördeki ani arıza, pilotluğunu Andreas Guelden'in yaptığı ikinci yarışın lideri olan Monza-Bulgar aracını birinci turda pistin dışına attı.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/sofia-car-motorsport-birkac-gun-icinde-baslayacak-olan-avrupa-gt4-serisinin-2016-sezonuna-sin-r1-gt4-ile-katilacaktir"}
                                gorsel={SofiaImage}
                                baslik={"Sofia Car Motorsport, birkaç gün içinde başlayacak olan Avrupa GT4 serisinin 2016 sezonuna..."}
                                tarih={"22-04-2016"}
                                detay={"                                Romanya'daki başarılı testlerden sonra Sofia Car Motorsport, birkaç gün içinde başlayacak olan Avrupa GT4 serisinin 2016 sezonuna Sin R1 GT4 ile katılacaktır                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/prista-oil-turkiye-istanbul-ki-automechanika-ticaret-fuarina-katiliyor"}
                                gorsel={PrTurkiyeImage}
                                baslik={"PRISTA OIL TÜRKİYE, İSTANBUL'Kİ AUTOMECHANIKA TİCARET FUARINA KATILIYOR"}
                                tarih={"15-04-2016"}
                                detay={"                                Prista Oil ekibi, 07 - 10 Nisan 2016 tarihleri arasında gerçekleştirilen otomotiv endüstrisine yönelik Türkiye'nin önde gelen uluslararası ticaret fuarına katıldı.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/plamen-bobokov-ruse-sadece-kalbimde-degil-ayni-zamanda-gelecekteki-tum-projelerimde-yer-aliyor"}
                                gorsel={PlemenRuseImage}
                                baslik={"Plamen Bobokov: Ruse sadece kalbimde değil, aynı zamanda gelecekteki tüm projelerimde yer..."}
                                tarih={"22-03-2016"}
                                detay={"                                \"Prista Oil“ Bulgaristan'daki başarılı işletme alanında ve çok daha önemlisi uluslararası ölçekte bir sembol haline gelmiştir. Faaliyetleriniz kaç ülkeye uzanıyor ve yeni yılda hangi sonuçları bekliyorsunuz?                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/plamen-bobokov-ve-mimar-tanko-serafimov-a-olumunden-sonra-ruse-nin-saygin-vatandasi-unvani-verildi"}
                                gorsel={TankoImage}
                                baslik={"Plamen Bobokov ve mimar Tanko Serafimov'a (ölümünden sonra) \"Ruse'nin saygın vatandaşı\" un..."}
                                tarih={"01-03-2016"}
                                detay={"                                “Prista Oil”in ortağı Plamen Bobokov ile mimar Tanko Serafimov (ölümünden sonra) Ruse'nin saygın vatandaşları unvanını aldı. Karar Danube'de Ruse Belediye Meclisi tarafından alındı.                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/prista-oil-yenilikci-harmanlama-teknolojisi-ccbl-yi-sunar"}
                                gorsel={PristaNewImage}
                                baslik={"Prista Oil, Yenilikçi Harmanlama Teknolojisi CCBL'yi Sunar"}
                                tarih={"27-11-2015"}
                                detay={"                                at the 11th ICIS Pan American Base Oils & Lubricants Conference - December 3 - 4 2015                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/sin-cars-sofia-car-motorsport-yarismasinda-pro-sinifinda-2-ve-nihai-siniflandirmada-3-sira"}
                                gorsel={SofiaCarsImage}
                                baslik={"SIN Cars & Sofia Car Motorsport Yarışmasında PRO Sınıfında 2. ve Nihai Sınıflandırmada 3...."}
                                tarih={"07-10-2015"}
                                detay={"                                Prista Oil, 2015 102 GT4 Avrupa Serisi Yarışmasındaki SIN Araçları destekler                        2015 Yarışının 102 GT4  Avrupa Serisi sezonu, Stéphane Ratel Organizasyonu (SRO) tarafından gerçekleştirilen ve organize edilen bir spor araç şampiyonası olan GT4  Avrupa Serisinin                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/bulgar-yag-ureticisi-prista-oil-bulgaristan-daki-ruse-tesisinde-harmanlama-teknolojisinin-bir-guncelleme-programini-baslatti"}
                                gorsel={BulgarYagImage}
                                baslik={"Bulgar yağ üreticisi PRISTA OIL, Bulgaristan'daki Ruse tesisinde harmanlama teknolojisinin..."}
                                tarih={"01-09-2015"}
                                detay={"                                Bulgar yağ üreticisi PRISTA OIL, Bulgaristan'daki Ruse tesisinde harmanlama teknolojisinin bir güncelleme programını başlattı.                            "}
                                lastClassName={"last"} />
                        </>
                    }

                    {currentPage === 4 &&
                        <>
                            <Haber uri={"/news/prista-oil-2014-calisma-yili-bolgesel-guvenlik-ve-saglik-yarismasinda-birinci-olmustur"}
                                gorsel={Prista2014Image}
                                baslik={"Prista Oil, 2014 Çalışma Yılı Bölgesel Güvenlik ve Sağlık Yarışmasında birinci olmuştur"}
                                tarih={"10-06-2015"}
                                detay={"                                Bölgesel Yönetim binası salonlarının birisinde kısa bir tören yapılarak 2014 Çalışma Yılı Bölgesel Güvenlik ve Sağlık Yarışmasında ilk üç sırayı alan şirketlere ödülleri verildi. Bu etkinlik, kazananlara ödüllerini veren vali yardımcısı Stanimir Stanchev başka                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/product-news-product-introduction-6"}
                                gorsel={ProductNewImage}
                                baslik={"Product News: Product Introduction"}
                                tarih={"13-03-2015"}
                                detay={"                                havoline QFC is a high performance, extended life antifreeze coolant concentrate, developed to promote the performance and protection required by targeted OEMs through a combined formulation of organic and selicate technologies.                            "}
                                lastClassName={"last"} />

                            <Haber uri={"/news/prista-oil-bulgaristan-da-tamamen-yenilenmis-ve-buyutulmus-gres-tesisi-olan-verila-lubricants-i-acti"}
                                gorsel={LubricantsImage}
                                baslik={"Prista Oil, Bulgaristan'da tamamen yenilenmiş ve büyütülmüş gres tesisi olan VERILA LUBRIC..."}
                                tarih={"24-11-2014"}
                                detay={"                                Prista Oil, Bulgaristan'da tamamen yenilenmiş ve büyütülmüş gres tesisi olan VERILA LUBRICANTS'ı açtı. VERILA Şirketi, Prista Oil Holding bünyesinde yer alır. Ekonomi Bakanı Bozidar Lukarski ve Yönetim Kurulu Başkanı Plamen Bobokov, yenilenen tesisin önünde ku                            "}
                                lastClassName={""} />
                            <Haber uri={"/news/cetus-hipersyn-46-6"}
                                gorsel={CetusImage}
                                baslik={"Cetus HiPerSYN 46"}
                                tarih={"19-02-2014"}
                                detay={"                                What is the product                            "}
                                lastClassName={"last"} />
                        </>
                    }
                </ul>

                <div className="pagination">
                    {currentPage !== 1 && <span className="first" onClick={() => changeCurrentPage(1)}>{"<<"}</span>}
                    {currentPage !== 1 && <span className="previous" onClick={() => changeCurrentPage(currentPage - 1)}>{"<"}</span>}
                    <span className={currentPage === 1 ? "current" : "page"} onClick={() => changeCurrentPage(1)}>1</span>
                    <span className={currentPage === 2 ? "current" : "page"} onClick={() => changeCurrentPage(2)}>2</span>
                    <span className={currentPage === 3 ? "current" : "page"} onClick={() => changeCurrentPage(3)}>3</span>
                    <span className={currentPage === 4 ? "current" : "page"} onClick={() => changeCurrentPage(4)}>4</span>
                    {currentPage !== 4 && <span className="next" onClick={() => changeCurrentPage(currentPage + 1)}>{">"}</span>}
                    {currentPage !== 4 && <span className="last" onClick={() => changeCurrentPage(4)}>{">>"}</span>}
                </div>
            </article>
        </div>
    )
}

export default Haberler;