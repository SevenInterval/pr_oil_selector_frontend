const newsItems = [
    { label: "Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!", uri: "/news/harika-haberler-teodor-tsvetkovtan-bulgaristandaki-texaco-marka-elcimizden" },
    { label: "TR Prista Oil Group'un kurucu ortağı Plamen Bobokov, Plovdiv \"Paisii Hilendarski\" Üniversi...", uri: "/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi" },
    { label: "1 Eylül 2021 tarihinde Daimler AG Grubu, Mercedes-Benz Group AG ve Daimler Truck AG olmak...", uri: "/news/1-eylul-2021-tarihinde-daimler-ag-grubu-mercedes-benz-group-ag-ve-daimler-truck-ag-olmak-uzere-iki-sirkete-ayrildi" },
    { label: "Rusçuk, Bulgaristan’da 7 Eylül’de gerçekleşen PRISTA®’NIN RUSYA’DAKİ DİSTRİBÜTÖRLERİ İÇİN...", uri: "/news/ruscuk-bulgaristanda-7-eylulde-gerceklesen-prista-r-nin-rusyadaki-distributorleri-icin-ilk-konferansinda-fikir-ve-deneyim-alisverisi-yapildi" },
    { label: "Rusya’nın Orenburg kentinde düzenlenen ilk teknik konferansta, Prista Oil Holding’in ürünl...", uri: "/news/rusyanin-orenburg-kentinde-duzenlenen-ilk-teknik-konferansta-prista-oil-holdingin-urunlerle-ilgili-son-inovasyonlari-tanitildi" },
    { label: "SIN CARS İngiltere, yılın en görkemli etkinliklerinden biri olan ve her yıl ihtişamın başk...", uri: "/news/sin-cars-ingiltere-yilin-en-gorkemli-etkinliklerinden-biri-olan-ve-her-yil-ihtisamin-baskenti-monte-carlo-da-prens-ii" },
    { label: "PRISTA OIL ®,  MACARİSTAN'DAKİ HORVATH RUDOLF INTERTRANSPORT  FİRMASINA  TEXACO YAĞLARINI...", uri: "/news/prista-oil-r-macaristan-daki-horvath-rudolf-intertransport-firmasina-texaco-yaglarini-tedarik-edecek" },
    { label: "Plamen Bobokov, Ukrayna'dan \"Onurlu Hizmet\" ödülü aldı", uri: "/news/plamen-bobokov-ukrayna-dan-onurlu-hizmet-odulu-aldi" },
    { label: "PRISTA OIL GRUBU: YENİDEN YAPILANIYOR", uri: "/news/prista-oil-grubu-yeniden-yapilaniyor" },
    { label: "INTER CARS EKİBİ RUSÇUK, BULGARİSTAN'DAKİ PRISTA OIL KARIŞTIRMA TESİSİNİ ZİYARET ETTİ", uri: "/news/inter-cars-ekibi-ruscuk-bulgaristan-daki-prista-oil-karistirma-tesisini-ziyaret-etti" },
    { label: "Automechanika Frankfurt 2016  Otomotiv Hizmet Sektöründe Dünyanın Önde Gelen Ticaret Fuarı...", uri: "/news/automechanika-frankfurt-2016-otomotiv-hizmet-sektorunde-dunyanin-onde-gelen-ticaret-fuari-frankfurt-am-main-13-17-eylul-2016" },
    { label: "ROCKIN’ THE CLUSTER", uri: "/news/rockin-the-cluster-5" },
    { label: "PIETER CHRISTIAAN VAN ORANJE VE TIM CORONEL, SPA, BELÇİKA'DA SIN R1 GT4'Ü SÜRECEK", uri: "/news/pieter-christiaan-van-oranje-ve-tim-coronel-spa-belcika-da-sin-r1-gt4-u-surecek" },
    { label: "Prista Oil, Rusçuk'taki yıllık konseri için “Flamingo-98” dans okulunu destekliyor", uri: "/news/prista-oil-ruscuk-taki-yillik-konseri-icin-flamingo-98-dans-okulunu-destekliyor" },
    { label: "Yunanistan'dan Prista Oil Yetkili Distribütörü Leonidas Leontopoulos – LEO LUB & PARTS – Y...", uri: "/news/yunanistan-dan-prista-oil-yetkili-distributoru-leonidas-leontopoulos-leo-lub-parts-yunan-yaris-sezonuna-katiliyor" },
    { label: "Yeni Premium 1L şişe ve etiket tasarımı için Prista Oil yarışmasını Ulusal Sanat Akademisi...", uri: "/news/yeni-premium-1l-sise-ve-etiket-tasarimi-icin-prista-oil-yarismasini-ulusal-sanat-akademisi-nden-bir-doktora-adayi-kazandi" },
    { label: "Silverstone, 11-12 Haziran'daki dayanıklılık yarışında Avrupa GT4 serisini ağırlayacak", uri: "/news/silverstone-11-12-haziran-daki-dayaniklilik-yarisinda-avrupa-gt4-serisini-agirlayacak" },
    { label: "Prista Recycling Tesisi bugün Özbekistan'da açıldı", uri: "/news/prista-recycling-tesisi-bugun-ozbekistan-da-acildi" },
    { label: "“PRISTA RECYCLING”, ÖZBEKİSTAN'DA ATIK YAĞLARIN GERİ DÖNÜŞÜMÜ İÇİN YÜKSEK TEKNOLOJİLİ BİR...", uri: "/news/prista-recycling-ozbekistan-da-atik-yaglarin-geri-donusumu-icin-yuksek-teknolojili-bir-tesis-aciyor" },
    { label: "CEE'DE ÖNE ÇIKANLAR", uri: "/news/cee-de-one-cikanlar" },
    { label: "Plamen Bobokov, “Rusçuk Altın Nişan \" ödülü ve “Rusçuk'un Saygıdeğer Vatandaşı” ünvanıyla...", uri: "/news/plamen-bobokov-ruscuk-altin-nisan-odulu-ve-ruscuk-un-saygideger-vatandasi-unvaniyla-odullendirildi" },
    { label: "Plamen Bobokov was awarded the honor „Golden badge – Ruse", uri: "/news/plamen-bobokov-was-awarded-the-honor-golden-badge-ruse-5" },
    { label: "Monza taraftarları Bulgar takımını “Sofia Car Motorsport” ve aracın yaratıcısı Rosen Daska...", uri: "/news/monza-taraftarlari-bulgar-takimini-sofia-car-motorsport-ve-aracin-yaraticisi-rosen-daskalov-u-en-iyi-ekip-ve-araci-da-pistteki-en-hizli-arac-olarak-anons-ettiler" },
    { label: "Sofia Car Motorsport, birkaç gün içinde başlayacak olan Avrupa GT4 serisinin 2016 sezonuna...", uri: "/news/sofia-car-motorsport-birkac-gun-icinde-baslayacak-olan-avrupa-gt4-serisinin-2016-sezonuna-sin-r1-gt4-ile-katilacaktir" },
    { label: "PRISTA OIL TÜRKİYE, İSTANBUL'Kİ AUTOMECHANIKA TİCARET FUARINA KATILIYOR", uri: "/news/prista-oil-turkiye-istanbul-ki-automechanika-ticaret-fuarina-katiliyor" },
    { label: "Plamen Bobokov: Ruse sadece kalbimde değil, aynı zamanda gelecekteki tüm projelerimde yer...", uri: "/news/plamen-bobokov-ruse-sadece-kalbimde-degil-ayni-zamanda-gelecekteki-tum-projelerimde-yer-aliyor" },
    { label: "Plamen Bobokov ve mimar Tanko Serafimov'a (ölümünden sonra) \"Ruse'nin saygın vatandaşı\" un...", uri: "/news/plamen-bobokov-ve-mimar-tanko-serafimov-a-olumunden-sonra-ruse-nin-saygin-vatandasi-unvani-verildi" },
    { label: "Prista Oil, Yenilikçi Harmanlama Teknolojisi CCBL'yi Sunar", uri: "/news/prista-oil-yenilikci-harmanlama-teknolojisi-ccbl-yi-sunar" },
    { label: "SIN Cars & Sofia Car Motorsport Yarışmasında PRO Sınıfında 2. ve Nihai Sınıflandırmada 3....", uri: "/news/sin-cars-sofia-car-motorsport-yarismasinda-pro-sinifinda-2-ve-nihai-siniflandirmada-3-sira" },
    { label: "Bulgar yağ üreticisi PRISTA OIL, Bulgaristan'daki Ruse tesisinde harmanlama teknolojisinin...", uri: "/news/bulgar-yag-ureticisi-prista-oil-bulgaristan-daki-ruse-tesisinde-harmanlama-teknolojisinin-bir-guncelleme-programini-baslatti" },
    { label: "Prista Oil, 2014 Çalışma Yılı Bölgesel Güvenlik ve Sağlık Yarışmasında birinci olmuştur", uri: "/news/prista-oil-2014-calisma-yili-bolgesel-guvenlik-ve-saglik-yarismasinda-birinci-olmustur" },
    { label: "Product News: Product Introduction", uri: "/news/product-news-product-introduction-6" },
    { label: "Prista Oil, Bulgaristan'da tamamen yenilenmiş ve büyütülmüş gres tesisi olan VERILA LUBRIC...", uri: "/news/prista-oil-bulgaristan-da-tamamen-yenilenmis-ve-buyutulmus-gres-tesisi-olan-verila-lubricants-i-acti" },
    { label: "Cetus HiPerSYN 46", uri: "/news/cetus-hipersyn-46-6" },
    { label: "Prista Oil Holding, Yağlayıcılar Sürdürülebilirlik Forumu’nun bir Parçasıydı.", uri: "/news/prista-oil-holding-yaglayicilar-surdurulebilirlik-forumunun-bir-parcasiydi" }
];

export default newsItems;