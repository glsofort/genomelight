import { useTranslation } from "react-i18next";
import { Dna, Brain, Clock, Target, Shield, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const GLSofort = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#264b69] to-[#4fb1b4]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t("glsofort.hero.title")}
            </h1>
            <p className="text-xl mb-8 max-w-5xl mx-auto leading-relaxed px-6 text-left">
              {t("glsofort.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#264b69] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                {t("glsofort.hero.buttons.demo")}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#264b69] px-8 py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                {t("glsofort.hero.buttons.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-8 border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t("glsofort.intro.title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-left">
            {t("glsofort.intro.description")}
          </p>
          <div className="bg-gray-50 rounded-xl p-8">
            <img
              src="/images/2948968051.jpeg"
              alt="GLSofort Platform"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Range Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t("glsofort.serviceRange.title")}
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#88d4e8]">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#1c436e] font-bold text-lg">
                      {t("glsofort.serviceRange.table.headers.type")}
                    </th>
                    <th className="px-6 py-4 text-left text-[#1c436e] font-bold text-lg">
                      {t("glsofort.serviceRange.table.headers.scope")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      {t("glsofort.serviceRange.table.rows.panel.type")}
                    </td>
                    <td className="px-6 py-4">
                      {t("glsofort.serviceRange.table.rows.panel.scope")}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">
                      {t("glsofort.serviceRange.table.rows.wes.type")}
                    </td>
                    <td className="px-6 py-4">
                      {t("glsofort.serviceRange.table.rows.wes.scope")}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      {t("glsofort.serviceRange.table.rows.wgs.type")}
                    </td>
                    <td className="px-6 py-4">
                      {t("glsofort.serviceRange.table.rows.wgs.scope")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t("glsofort.features.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Brain className="w-12 h-12 text-[#4fb1b4] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t("glsofort.features.ai.title")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("glsofort.features.ai.description")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Clock className="w-12 h-12 text-[#4fb1b4] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t("glsofort.features.speed.title")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("glsofort.features.speed.description")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-[#4fb1b4] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t("glsofort.features.accuracy.title")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("glsofort.features.accuracy.description")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-[#4fb1b4] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t("glsofort.features.compliance.title")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("glsofort.features.compliance.description")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Cpu className="w-12 h-12 text-[#4fb1b4] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t("glsofort.features.integration.title")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("glsofort.features.integration.description")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Dna className="w-12 h-12 text-[#4fb1b4] mr-4" />
                <h3 className="text-xl font-bold text-[#264b69]">
                  {t("glsofort.features.discovery.title")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("glsofort.features.discovery.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t("glsofort.advantages.title")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              {(
                t("glsofort.advantages.items", {
                  returnObjects: true,
                }) as string[]
              ).map((advantage: string, index: number) => (
                <li
                  key={advantage.slice(0, 20)}
                  className="flex items-start bg-white rounded-lg p-6 shadow-md"
                >
                  <div className="w-8 h-8 bg-[#4fb1b4] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{advantage}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t("glsofort.applications.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              t("glsofort.applications.areas", {
                returnObjects: true,
              }) as Array<{ title: string; description: string }>
            ).map((area: { title: string; description: string }) => (
              <div
                key={area.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#264b69] to-[#4fb1b4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Dna className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#264b69] mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#264b69] text-white">
        <div className="mx-800 px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">{t("glsofort.cta.title")}</h3>
          <p className="text-xl mb-8">{t("glsofort.cta.subtitle")}</p>
          <Link
            to="/contact"
            className="bg-[#4fb1b4] hover:bg-[#3a9a9d] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            {t("glsofort.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GLSofort;
