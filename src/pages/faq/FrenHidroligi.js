import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const FrenHidroligi = () => {
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
                <h1 className="hs"><span>Frequently asked questions</span> / Fren hidroliği</h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fren hidroliği nedir?"}
                    answer={""} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fren hidrolikleri nerelerde kullanılır?"}
                    answer={"Fren hidrolikleri, binek araçların ve hafif ticari araçların hidrolik fren sistemlerinde basıncı fren mekanizmalarına aktarmak için kullanılırlar. Başka bir uygulama alanı ise hidrolik debriyaj sistemleridir. Ayrıca, motosikletlerin fren sistemlerinde de kullanılmaktadırlar."} />
                <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fren hidrolikleri için hangi teknik gereklilikler mevcut?"}
                    answer={"Fren sistemi çalıştığında, büyük miktarda ısı oluşur ve bu nedenle fren hidroliğinin, etkili çalışması için yüksek bir kaynama noktasına sahip olması gerekir (kuru ve ıslak kaynama noktası). Fren hidrolikleri eksi hava sıcaklıklarında donmamalıdır. Bu gereklilikler, su bazlı fren hidroliklerinin kullanımı seçeneği için geçerli değildir."} />
                <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fren hidroliğinin özellikleri nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Sınıflamalar ve Spesifikasyonlar. Bu kısaltmalar ne anlama geliyor?"}
                    answer={""} />
                <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"DOT ne anlama geliyor?"}
                    answer={"DOT, fren hidroliği için genel bir ad haline gelmiştir. ABD Ulaştırma Bakanlığı (US Department оf Transportation - DOT) ifadesinin kısaltmasıdır."} />
                <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Farklı DOT spesifikasyonları nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fen hidroliklerinin bileşimi nedir?"}
                    answer={""} />
                <Accordion changeAcc={9} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Bu sıvıların diğer özellikleri nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={10} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"DOT 5 – farkı nedir?"}
                    answer={""} />
                <Accordion changeAcc={11} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fren hidroliği - değiştirmenin faydaları"}
                    answer={""} />
                <Accordion changeAcc={12} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Farklı DOT oranlı fren hidroliklerini karıştırmak mümkün mü?"}
                    answer={""} />
                <Accordion changeAcc={13} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Hangi sıvının takviye edilmesi daha iyidir?"}
                    answer={""} />
                <Accordion changeAcc={14} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fren hidroliğinin değiştirilmesi veya takviye edilmesi gerekiyor mu?"}
                    answer={"İlave yapma, eskiyen hidrolikte meydana gelen geri dönüşü olmayan değişiklikleri dengeleyemez. Kaynama noktası düşer. Kimyasal bileşimi değişir. Korozyon inhibitörler zamanla zayıflar."} />
                <Accordion changeAcc={15} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Fren hidroliğinin ne zaman değiştirileceğini nasıl bilebilirim?"}
                    answer={"Özel araç servis merkezleri, test cihazıyla kontrol yapmaktadırlar. Eğer fren hidroliğinin değiştirilme zamanı ile veya değiştirilip değiştirilmediği ile ilgili herhangi bir bilgi yoksa, ya zaman kaybetmeden değiştirin ya da fren sistemini kontrol ettirin."} />
                <Accordion changeAcc={16} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Neden Prista ve Texaco ürünleri talep edilmelidir?"}
                    answer={""} />
                <Accordion changeAcc={17} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Recommendation for mileage and fluid change intervals?"}
                    answer={"The recommended brake fluid change interval is every two years!"} />
                    


            </article >
        </div >
    )
}

export default FrenHidroligi;