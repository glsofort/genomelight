import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Calendar, Tag, Clock, ArrowRight, Search } from "lucide-react";

const News = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { key: "all", label: t("news.categories.all") },
    { key: "company", label: t("news.categories.company") },
    { key: "industry", label: t("news.categories.industry") },
    { key: "technology", label: t("news.categories.technology") },
    { key: "research", label: t("news.categories.research") },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      company: "bg-blue-100 text-blue-800",
      industry: "bg-green-100 text-green-800",
      technology: "bg-purple-100 text-purple-800",
      research: "bg-orange-100 text-orange-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap = {
      company: t("news.categories.company"),
      industry: t("news.categories.industry"),
      technology: t("news.categories.technology"),
      research: t("news.categories.research"),
    };
    return categoryMap[category as keyof typeof categoryMap] || category;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      i18n.language === "en-US" ? "en-US" : "zh-CN",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  const featuredNews = t("news.featured.items", {
    returnObjects: true,
  }) as Array<{
    title: string;
    summary: string;
    date: string;
    category: string;
    image: string;
  }>;

  const recentNews = t("news.recent.items", { returnObjects: true }) as Array<{
    title: string;
    summary: string;
    date: string;
    category: string;
  }>;

  const filteredRecentNews = recentNews.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#264b69] to-[#4fb1b4]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">{t("news.hero.title")}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("news.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t("news.search.placeholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4fb1b4] focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.key
                      ? "bg-[#4fb1b4] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t("news.featured.title")}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <article
                key={news.title}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className={`w-full object-cover ${index === 0 ? "h-64 lg:h-80" : "h-48"}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}
                    >
                      {getCategoryLabel(news.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(news.date)}</span>
                  </div>
                  <h3
                    className={`font-bold text-[#264b69] mb-3 ${index === 0 ? "text-2xl" : "text-xl"}`}
                  >
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {news.summary}
                  </p>
                  <button className="inline-flex items-center text-[#4fb1b4] hover:text-[#3a9a9d] font-semibold">
                    {t("news.readMore")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#264b69] mb-16 text-center border-b-4 border-[#4fb1b4] inline-block pb-2">
            {t("news.recent.title")}
          </h2>

          {filteredRecentNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t("news.noResults")}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecentNews.map((news) => (
                <article
                  key={news.title}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}
                    >
                      {getCategoryLabel(news.category)}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{formatDate(news.date)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#264b69] mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  <button className="inline-flex items-center text-[#4fb1b4] hover:text-[#3a9a9d] font-semibold">
                    {t("news.readMore")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-[#264b69]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {t("news.newsletter.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("news.newsletter.description")}
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={t("news.newsletter.placeholder")}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#4fb1b4] focus:outline-none"
              />
              <button className="bg-[#4fb1b4] hover:bg-[#3a9a9d] px-6 py-3 rounded-lg font-semibold transition-colors">
                {t("news.newsletter.subscribe")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
