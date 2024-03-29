import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const OnCamYikamaSivisi = () => {
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
                <h1 className="hs"><span>Frequently asked questions</span> / Ön cam yıkama sıvısı</h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Ön cam yıkama sıvısı nedir?"}
                    answer={"Bu tipin en yaygın kullanılan yüksek kaliteli ürünleri denatüre alkol ve özel temizlik ürünleri (emülsiyonlaştırıcılar), yağlama bileşenleri, renklendiriciler ve koku bileşenlerinin bir karışımıdır."} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Nerede kullanılır?"}
                    answer={"Ön cam yıkama sıvısı depoya doldurulur ve gerektiğinde aracın ön cam sileceklerine verilir. Aracın ön camını temizlemek için kullanılır. Yıkama sıvısı aktif temizlik ürünleri içerdiğinden böcek kalıntıları, toz vs. gibi görüşü zayıflatan tüm kirleri hızlı ve kolay bir şekilde temizler."} />
                <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Normal suyun ön cam yıkama sıvısı olarak kullanılması problem yaratır mı?"}
                    answer={""} />
                <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Piyasada 'sahte' ürünler var mı?"}
                    answer={""} />
                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Metanol nedir?"}
                    answer={"Metil alkol veya metanol, ağacın kuru distilasyonu ile veya metanın oksidasyonu ile elde edilen renksiz, toksik bir sıvıdır. Metanolun, Sağlık Bakanlığı'nın 1 Eylül 1995 tarihli 35 Nolu Düzenlemesine göre evde kullanılan sıvı kimyasalların bileşiminde kullanılması yasaklanmıştır."} />
                <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Neden aracın boyasında ve silecek lastiklerinde sorunlar çıkıyor?"}
                    answer={""} />
                <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Suyla uyumluluk"}
                    answer={"Sıkça ihmal edilen diğer bir test ise suyla uyumluluktur. Sıklıkla kullanılan bileşenler farklı su sertlik seviyeleriyle uyumlu değildir. Suyla karıştırdıktan sonra, saklama deposunda çözülmeyen maddeler birikir. Bu maddeler dibe çöker veya yüzerek zamanla memeleri tıkar ve böylece sistemin püskürtme ve cam temizleme kabiliyetini zayıflatır."} />
                <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Mevsime göre farklı yıkama sıvısı tipleri var mı?"}
                    answer={""} />
                <Accordion changeAcc={9} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Yaz tipi sıvıyı kışın kullanabilir miyiz?"}
                    answer={"Hayır! Düşük sıcaklık özelliklerine sahip değildir ve bu yüzden donma riski vardır."} />
                <Accordion changeAcc={10} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Yazın kış tipi sıvıyı kullanmak akıllıca mı?"}
                    answer={"Hayır! Kış tipi sıvı, kışın böcek olmadığından sadece minimum miktarda orgranik kir temizleyici katkı maddesi içerir."} />
                <Accordion changeAcc={11} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Yazın ve sonbaharda normal su kullanmak mümkün mü?"}
                    answer={""} />
                <Accordion changeAcc={12} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Sıvının rengi önemli mi?"}
                    answer={"Renk, kalitenin veya mevsimsel kullanımın bir göstergesi değildir. Ticari bir göstergedir ve ürünü sudan ayırt etmek için kullanılan bir boya maddesidir."} />
                <Accordion changeAcc={13} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Ürünün konsantrasyonu nedir?"}
                    answer={"Ürün, kışın kullanılması daha kolay olan ön karışımlı bir solüsyon ve konsantre şeklinde mevcuttur. Optimum performans için, kutu üzerindeki üretici tavsiyelerine uyun."} />
                <Accordion changeAcc={14} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Sonuç"}
                    answer={"Sürüşü eğlenceli hale getirmek için, yüksek ürün kalitesi ile ün yapmış, ürün etiketleri içerik ve dilüsyon talimatları hakkında doğru bilgiler içeren üreticilerin ön cam sıvılarını kullanmanızı tavsiye ediyoruz. Bu ürün sadece takviye edilmeyi gerektirmesine ve harcama yapmak lüzumsuz gibi görünmesine karşın, sulu solüsyonun doğru konsantrasyonunun korunması ve ön cam yıkama sisteminin - memeler, pükürtücüler ve silecek lastikleri - iyi durumda olması yolculuk sırasında görüşün iyi olmasını sağlayacak ve yol güvenliği için önemli bir faktördür."} />


            </article >
        </div >
    )
}

export default OnCamYikamaSivisi;