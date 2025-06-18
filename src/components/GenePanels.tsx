import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const GenePanels = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('cardiology')

  const categories = [
    { id: 'cardiology', color: 'bg-red-500' },
    { id: 'endocrine', color: 'bg-blue-500' },
    { id: 'neurology', color: 'bg-purple-500' },
    { id: 'muscle', color: 'bg-green-500' },
    { id: 'development', color: 'bg-orange-500' },
    { id: 'kidney', color: 'bg-cyan-500' },
    { id: 'hearing', color: 'bg-pink-500' },
    { id: 'vision', color: 'bg-indigo-500' },
    { id: 'multiple', color: 'bg-gray-500' },
    { id: 'immunology', color: 'bg-yellow-600' },
    { id: 'skin', color: 'bg-rose-500' },
    { id: 'blood', color: 'bg-red-600' }
  ]

  const genePanels = {
    cardiology: [
      '肥厚性心肌病', '扩张性心肌病', '致心律失常性右室心肌病', '左室致密化不全',
      'Brugada综合征', '长QT综合征', '短QT综合征', '儿茶酚胺敏感性多形性室性心动过速',
      '家族性高胆固醇血症', '马方综合征', 'Ehlers-Danlos综合征', '主动脉瘤'
    ],
    endocrine: [
      '糖尿病', '甲状腺疾病', '肾上腺疾病', '垂体疾病',
      '性腺发育异常', 'Liddle综合征', '原发性醛固酮增多症', '嗜铬细胞瘤',
      '多发性内分泌腺瘤病', '先天性肾上腺皮质增生症'
    ],
    neurology: [
      '癫痫', '共济失调', '痉挛性截瘫', '遗传性周围神经病',
      '脊髓性肌萎缩症', '肌萎缩侧索硬化症', '亨廷顿病', '帕金森病',
      '阿尔茨海默病', '脑白质营养不良'
    ],
    muscle: [
      '杜氏肌营养不良', '贝克型肌营养不良', '面肩肱型肌营养不良', '肢带型肌营养不良',
      '强直性肌营养不良', '先天性肌营养不良', '线粒体肌病', '糖原贮积病',
      '脂质贮积性肌病', '周期性麻痹', '先天性肌无力综合征', '炎性肌病'
    ],
    development: [
      '3-M综合征', 'Beckwith-Wiedemann综合征', 'Prader-Willi综合征', 'Angelman综合征',
      'DiGeorge综合征', 'Williams-Beuren综合征', 'Noonan综合征', 'CHARGE综合征',
      'Cornelia de Lange综合征', 'Rubinstein-Taybi综合征', '脆性X综合征', 'Rett综合征'
    ],
    kidney: [
      '多囊肾病', '肾小球疾病', '肾小管疾病', 'Alport综合征',
      '胱氨酸尿症', '肾性糖尿', '巴特综合征', 'Gitelman综合征',
      '肾性尿崩症', 'Joubert综合征'
    ],
    hearing: [
      '非综合征性耳聋', '综合征性耳聋', 'Usher综合征', 'Pendred综合征',
      'Waardenburg综合征', 'BOR综合征', 'Stickler综合征', '大前庭水管综合征'
    ],
    vision: [
      '视网膜色素变性', '黄斑变性', '先天性黑矇', '白内障',
      '青光眼', '角膜营养不良', 'Stargardt病', 'Leber遗传性视神经病变'
    ],
    multiple: [
      'Bardet-Biedl综合征', 'BOR综合征', 'CHARGE综合征', 'Joubert综合征',
      'Meckel-Gruber综合征', '纤毛病', '线粒体疾病', '溶酶体贮积症',
      '过氧化物酶体疾病', '糖基化异常'
    ],
    immunology: [
      '严重联合免疫缺陷', '原发性免疫缺陷', '补体缺陷', '吞噬细胞缺陷',
      '自身免疫性疾病', '过敏性疾病'
    ],
    skin: [
      '大疱性表皮松解症', '鱼鳞病', '掌跖角化症', '色素失禁症',
      '白化病', '结节性硬化症', '神经纤维瘤病'
    ],
    blood: [
      '血友病', '血小板减少症', '血红蛋白病', '地中海贫血',
      '镰状细胞病', '球形红细胞增多症', '葡萄糖-6-磷酸脱氢酶缺乏症'
    ]
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#264b69] mb-4">{t('genePanels.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('genePanels.subtitle')}
          </p>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left max-w-4xl mx-auto">
            <p className="text-sm text-gray-700">
              <strong>Gene Panel优势：</strong> {t('genePanels.advantages')}
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t(`genePanels.categories.${category.id}`)}
            </button>
          ))}
        </div>

        {/* Gene Panel Content */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#264b69] mb-6 text-center">
            {t(`genePanels.categories.${activeCategory}`)}{t('genePanels.categoryTitle')}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {genePanels[activeCategory as keyof typeof genePanels]?.map((panel) => (
              <div
                key={panel}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#4fb1b4]"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#4fb1b4] rounded-full mr-3" />
                  <span className="text-sm font-medium text-gray-800">{panel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-8 text-center">
            <button className="bg-[#264b69] hover:bg-[#1e3a52] text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
              {t('genePanels.buttons.download')}
            </button>
            <button className="border-2 border-[#4fb1b4] text-[#4fb1b4] hover:bg-[#4fb1b4] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('genePanels.buttons.consult')}
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default GenePanels
