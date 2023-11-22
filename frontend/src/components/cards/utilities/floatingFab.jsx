import { useContext } from "react";
import { CompanyInfoContext } from "../../../App";

const FabIcon = () => {
    const companyInfo = useContext(CompanyInfoContext);
    const whatsappUrlCheck =
        !companyInfo.company_social ||
        companyInfo.company_social.length === 0 ||
        !companyInfo.company_social.whatsapp_url;

    return (
        <>
            {whatsappUrlCheck ? null : (
                <a
                    href={companyInfo.company_social.whatsapp_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: "fixed", bottom: 28, right: 28 }}
                >
                    <span className="pulse-background">
                        <i className="fa-brands fa-whatsapp fs-3 position-absolute top-50 start-50 translate-middle text-white"></i>
                    </span>
                </a>
            )}
        </>
    );
};

export default FabIcon;
