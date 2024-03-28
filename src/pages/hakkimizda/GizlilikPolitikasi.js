import SideBarHakkimizda from "../../components/SidebarHakkimizda";

const BizKimiz = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarHakkimizda />
            <article>
                <div class="page-header">
                    <span className="titleOfHeader">Hakkımızda / </span>
                    <h1>Gizlilik politikası</h1>
                </div>
                <div className="page-article">
                    <p><strong style={{ fontFamily: "sans-serif" }}>Kişisel verilere yönelik değişikliklerle ilgili bilgi</strong></p>
                    <p>Genel Verileri Koruma Tüzüğünün (2016/679 (EU) Tüzüğü) uygulanması, 25 Mayıs 2018 tarihinde yürürlüğe girecektir. Tüzüğün amacı, gerçek kişilerin kişisel verilerinin işlenme yöntemine ilişkin daha etkin bir şekilde kontrolünü sağlamaktır. Bir veri yöneticisi olarak, Prista Oil Holding EAD/Şirket, müşterilerinin ve iş ortaklarının verilerinin, sadece yasal yolların ve meşru amaçların izin verdiği ölçüde yeterli düzeyde koruma sağlamayı amaçlamaktadır:</p>
                    <p>&nbsp; &nbsp;• &nbsp;&nbsp;Şirketin yükümlülüklerini sizinle olan sözleşmeleri kapsamında yerine getirmesi<br />
                        &nbsp; &nbsp;• &nbsp;&nbsp;Açık rızanızla bilgi sağlanması<br />
                        &nbsp; &nbsp;• &nbsp;&nbsp;Diğer durumlarda, Tüzüğün 6. Maddesi geçerlidir.</p>
                    <p>Prista Oil Holding EAD kişisel verilerinizi işlerken, sadece devlet kurumlarıyla (otoriteleri dâhilinde) ve iyi bir itibara sahip olan taşeronlarıyla paylaşmak için en yüksek güvenlik standartlarını (ISO/IEC 27001 gerekliliklerini yerine getirerek) uygular.</p>
                    <p>Bireylerin verileri üzerinde daha etkin kontrol sahibi olmalarını sağlamak için Tüzük onlara aşağıdaki hakları vermektedir:</p>
                    <p>&nbsp; &nbsp;• &nbsp;&nbsp;Erişim ve bilgi edinme hakkı, düzeltme hakkı, “unutulma” hakkı, işlemi sınırlandırma hakkı, veri taşınabilirliği hakkı, otomatik karar almaya itiraz etme hakkı ve işlem için verilen izinleri geri çekme hakkı.<br />
                        &nbsp; &nbsp;• &nbsp;&nbsp;Bu hakların uygulanabileceği şartlar, Tüzüğün 7 (3) maddesinde ve III.&nbsp; Bölümünde (12 ila 23. Maddeleri) ve ayrıca Şirket'in kişisel veri koruma hakkındaki şirket içi belgelerinde belirtilmiştir.</p>
                    <p>Kişisel verilerinizin korunması konusunda hakların kullanımıyla ilgili sorularınız için Prista Oil Holding EAD, 2018'in ilk çeyreğinden itibaren, <a href="mailto:dpo@prista-oil.bg">dpo@prista-oil.bg</a> adresinden veya belirtilen adresten başvurabileceğiniz bir DPO görevlendirmiştir: 46 Treti Mart Blvd, Ruse 7012, Bulgaristan</p>
                    <p><strong style={{ fontFamily: "sans-serif" }}>Haklarınız, sorumluluğumuz altında!</strong></p>
                </div>

            </article>
        </div>
    )
}

export default BizKimiz;