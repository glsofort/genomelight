import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const ComplianceNotice = () => {
  const { t } = useTranslation();

  return (
    <aside
      className="border-y border-amber-200 bg-amber-50"
      aria-labelledby="medical-information-notice"
    >
      <div className="container mx-auto flex items-start gap-4 px-4 py-5">
        <ShieldCheck
          className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-700"
          aria-hidden="true"
        />
        <div>
          <h2
            id="medical-information-notice"
            className="text-base font-semibold text-amber-950"
          >
            {t("compliance.title")}
          </h2>
          <p className="mt-1 max-w-5xl text-sm leading-6 text-amber-900">
            {t("compliance.description")}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ComplianceNotice;
