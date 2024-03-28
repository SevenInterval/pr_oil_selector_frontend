const Accordion = (props) => {
    const { changeAcc, activeAccordion, changeActiveAccordion, question, answer } = props;

    return (
        <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
            <h3 onClick={() => changeActiveAccordion(changeAcc)}
                className={activeAccordion === changeAcc ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabindex="0"
                style={{ transition: "0.4s" }}>
                <span class={activeAccordion === changeAcc ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>{question}
            </h3>
            <div className={activeAccordion === changeAcc ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === changeAcc ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default Accordion;