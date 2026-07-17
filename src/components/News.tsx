import { FileCheck2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <section className="bg-[#173449] py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold">{t("news.hero.title")}</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed">
            {t("news.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FileCheck2
              className="mx-auto h-12 w-12 text-[#4fb1b4]"
              aria-hidden="true"
            />
            <h2 className="mt-6 text-3xl font-bold text-[#264b69]">
              {t("news.review.title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              {t("news.review.description")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="rounded-md bg-[#264b69] px-6 py-3 font-semibold text-white hover:bg-[#1a3850]"
              >
                {t("news.review.home")}
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-[#264b69] px-6 py-3 font-semibold text-[#264b69] hover:bg-white"
              >
                {t("news.review.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
