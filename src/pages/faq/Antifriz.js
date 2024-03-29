import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const Antifriz = () => {
    const [activeAccordion, setActiveAccordion] = useState();

    const changeActiveAccordion = (changeAcc) => {
        if (activeAccordion === changeAcc) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(changeAcc);
        }
    }

    return (
        <div className="body_with_sidebar catalog">
            <SideBarFaq />
            <article>
                <h1 className="hs"><span>Frequently asked questions</span> / Antifriz</h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Antifriz nedir?"}
                    answer={"Antifriz, içten yanmalı motorlarda suyla soğutma yöntemi ile etkili ısı değişimi sağlayan bir sıvıdır."} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"En iyi soğutma özellikli sıvı hangisidir?"}
                    answer={"Su, etkili soğutma için en iyi kabiliyete sahiptir. Yüksek bir spesifik termal kapasiteye sahiptir; örneğin, en düşük olası hacmin içine büyük miktarda ısı absorbe eder."} />
                <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Soğutma suyu olarak normal su kullanılabilir mi?"}
                    answer={"Hayır, kullanılamaz."} />
                <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Düşük kaliteli soğutma sularından dolayı araçta meydana gelen en yaygın hasarlar nelerdir?"}
                    answer={"‘90'lı yıllarından sonlarından itibaren yapılan çalışmalar, ortalama her 10 araçtan 7'sinde pas ve kireç olduğunu göstermiştir. Devridaim pompalarının %60'ından fazlası, keçe ve conta sorunlarından dolayı arızalanmıştır. Motorların %20'sinden fazlası, soğutma sisteminden dolayı arızalanmıştır. Kireç oluşur ve sadece 0.6mm kireç, ısı kaybını %40 oranında azaltabilir."} />
                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Antifrizin ana işlevleri nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Otomotiv endüstrisinde kullanılan hangi metal yüzeyler antifriz ile korozyondan korunmalıdır?"}
                    answer={"Korunması gereken ana metaller şunlardır: demir, çelik ve dökme demir, döküm veya damgalı parçalar şeklindeki alüminyum alaşımlar, bakır, pirinç ve kurşun bazlı lehimler. Sıradan bakır veya pirinç radyatörler, plastik taşma depolu alüminyum radyatörlerle değiştiriliyor."} />
                <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Soğutma sularının bileşimi nedir?"}
                    answer={"Soğutma suları genellikle etilen glikol, propilen gliko, gliserin ve katkı maddelerinden yapılır."} />
                <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Farklı antifriz tiplerinde hangi katkı maddeleri kulanılır ve amaçları nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={9} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"İnhibitör nedir?"}
                    answer={""} />
                <Accordion changeAcc={10} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Piyasada hangi antifriz çeşitleri mevcuttur?"}
                    answer={""} />
                <Accordion changeAcc={11} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                   question={"Antifrizin rengi önemli mi?"}
                   answer={"Sıklıkla antifrizin rengi uygulamasıyla yanlış bir şekilde ilişkilendirilmektedir. Antifriz sarı, kırmızı, mor, mavi ve hatta pembe renkli bile olabilir. Rengin kalite parametrelerinde belirleyici olmadığını bilmek önemlidir!!! (Farklı formülasyonlar aynı renkli olabilir veya bunun tersi de mümkündür). Ancak, renk garanti bir gösterge olabilir."} />
                <Accordion changeAcc={12} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"İlave için hangi antifrizi kullanmalıyım?"}
                    answer={"Her etilen glikol bazlı antifriz, diğer markalarla eşit derecede bileşenle karıştırılmıştır. Uzun ömürlü antifrizi düşük performans seviyeli bir soğutma suyu ile karıştırırken, yeni formüle edilen karışımda soğutma sistemi için güvenli olmayan bileşenler oluşabileceğinden sorunlar çıkabilir. Bu nedenle, elinizde aracınız için önerilen bir ürün yoksa, kış mevsiminden önce sistemi suyla doldurun ve sıvı seviyesini ölçtürün. Daha sonra, gerekirse, istenilen konsantrasyonu elde etmek içn uygun üründen ilave edin."} />
                <Accordion changeAcc={13} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Antifrizi değiştirmek önemli mi?"}
                    answer={"Evet, önemli!"} />
                <Accordion changeAcc={14} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Değiştirilmesini gerekli kılan nedir?"}
                    answer={"Sistemdeki metallerle veya diğer bileşimlerle etkileşime girmekten dolayı inhibitörlerin yok olması. İnhibitör içeriğinin yetersiz olması genel ve kavitasyon korozyonuna yol açar. Diğer taraftan, inhibitör içeriği arttıkça tortu oluşumu meydana gelir ve bunun sonucunda radyatörde kaçak ve aşırı ısınma ile karşılaşılır. Yüksek nitrit seviyeleri alüminyum bileşenlerde korozyonuna yol açarken yüksek katı partikül konsantrasyonu devridaim pompasının erken aşınmasına sebep olur."} />
                <Accordion changeAcc={15} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Soğutma sistemi için optimum karışım oranı nedir?"}
                    answer={"Yol boyunca korunan % 40–50 antifriz konsantrasyonu."} />
                <Accordion changeAcc={16} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Yanlış antifriz konsantrasyonu oranının riskleri nelerdir?"}
                    answer={"Uygun olmayan su - etilen glikol oranı zayıf ısı transferine ve sistemin aşırı ısınmasına yol açabilir. Etilen glikol miktarı (antifriz konsantrasyonu) arttıkça soğutma suyunun viskozitesi artar ve ısı önleme performansı zayıflar. Yüksek su miktarı, radyatörde çatlama gibi çok ciddi hasarla sonuçlanabilecek donma riski taşır."} />
                <Accordion changeAcc={17} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Antifriz nasıl ilave edilir veya değiştirilir= Herhangi bir özel yöntemi var mı?"}
                    answer={"Elbette var. Önceden konsantrasyonu suyla karıştırın ve daha sonra sisteme ilave edin. Bu önemlidir çünkü, saf konsantrasyon tek başına ilave edilirse, homojenleşme süresi yeterli olmayabilir ve bunun sonucunda sistemde su alanları kalarak donma ve hacim genleşmesi sonrasında hasara yol açabilir."} />
                <Accordion changeAcc={18} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Antifrizi musluk suyu ile birlikte ilave etmek mümkün mü?"}
                    answer={"Техасо'nun PRISTA ANTIFREEZE LONG LIFE ve HAVOLINE EXTENDED LIFE ANTIFREEZE COOLANT ürünleri, sert sudan dolayı kireçlenmeyi önlemek için gerekli dağıtıcı dengeleyiciler ihtiva etmektedir. Başka bir deyişle, kireçlenme problemi oluşmaz. Ancak, musluk suyunun sadece distile ya da yumuşak suyun bulunmadığı durumlarda kullanılmasını tavsiye ediyoruz."} />
                <Accordion changeAcc={19} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Antifriz seviyesi ne zaman ve nasıl kontrol edilir?"}
                    answer={"Kaput açılarak soğutma suyu seviyesi gözle kontrol edilebilir. Kontrol etmenin başka bir yöntemi, kış mevsiminden önce bir refraktometre ile önleyici testin yapılmasıdır. Bu durumda donmaya karşı koruma ve kontroller 20°С'deki sıvı sıcaklığında yapılmalıdır; aksi halde, okuma değerleri doğru olmayabilir."} />
                <Accordion changeAcc={20} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Antifriz için mesafe esaslı değiştirme aralığı nedir?"}
                    answer={"Mesafe, bir ürünün uyumlu olduğu kalite ve performans gerekliliklerine bağlı olacaktır. Ürünün markasına ve tipine ve aracın durumuna göre aralıklar, 30 000 - 650 000 km'lik mesafe ile 3-5 yıl arasında değişmektedir. Binek araçlar için, araç üreticisi tarafından aksi önerilmedikçe, azami mesafe 250.000 km'ye kadardır."} />
                <Accordion changeAcc={21} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"G12? Ne tür bir antifrizdir?"}
                    answer={""} />
                <Accordion changeAcc={22} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Sınıflamalar ve Spesifikasyonlar. Bu kısaltmalar ne anlama geliyor?"}
                    answer={""} />
                    


            </article >
        </div >
    )
}

export default Antifriz;