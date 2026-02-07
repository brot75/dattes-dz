'use client';

import { Dumbbell, Heart, Zap, Leaf, CheckCircle } from 'lucide-react';

interface NutritionFactsProps {
    language: string;
}

export const NutritionFacts = ({ language }: NutritionFactsProps) => {
    const isRtl = language === 'ar';
    const isEn = language === 'en';

    const t = {
        title: isRtl ? 'حقائق تغذوية' : isEn ? 'Nutrition Facts' : 'Valeurs Nutritionnelles',
        servingSize: isRtl ? 'حجم الحصة: 100غ (حوالي 12-14 تمرة)' : isEn ? 'Serving Size: 100g (approx. 12–14 dates)' : 'Portion: 100g (environ 12–14 dattes)',
        amountPerServing: isRtl ? 'الكمية لكل حصة' : isEn ? 'Amount Per Serving' : 'Quantité par portion',
        dailyValue: isRtl ? '% القيمة اليومية*' : isEn ? '% Daily Value (DV)*' : '% Valeur Quotidienne (VQ)*',
        calories: isRtl ? 'سعرات حرارية' : isEn ? 'Calories' : 'Calories',

        // Nutrients
        totalFat: isRtl ? 'الدهون الكلية' : isEn ? 'Total Fat' : 'Lipides',
        saturatedFat: isRtl ? 'دهون مشبعة' : isEn ? 'Saturated Fat' : 'Saturés',
        transFat: isRtl ? 'دهون متحولة' : isEn ? 'Trans Fat' : 'Trans',
        cholesterol: isRtl ? 'كوليسترول' : isEn ? 'Cholesterol' : 'Cholestérol',
        sodium: isRtl ? 'صوديوم' : isEn ? 'Sodium' : 'Sodium',
        totalCarbs: isRtl ? 'الكربوهيدرات الكلية' : isEn ? 'Total Carbohydrate' : 'Glucides',
        dietaryFiber: isRtl ? 'ألياف غذائية' : isEn ? 'Dietary Fiber' : 'Fibres',
        totalSugars: isRtl ? 'السكريات الكلية' : isEn ? 'Total Sugars' : 'Sucres',
        includesAdded: isRtl ? 'يتضمن 0غ سكريات مضافة' : isEn ? 'Includes 0g Added Sugars' : 'Dont 0g de sucres ajoutés',
        protein: isRtl ? 'بروتين' : isEn ? 'Protein' : 'Protéines',

        // Vitamins
        vitaminD: isRtl ? 'فيتامين د' : 'Vitamine D',
        calcium: isRtl ? 'كالسيوم' : 'Calcium',
        iron: isRtl ? 'حديد' : isEn ? 'Iron' : 'Fer',
        potassium: isRtl ? 'بوتاسيوم' : 'Potassium',
        magnesium: isRtl ? 'مغنيسيوم' : 'Magnésium',
        copper: isRtl ? 'نحاس' : isEn ? 'Copper' : 'Cuivre',

        // Tags
        naturalSugar: isRtl ? 'سكر فواكه طبيعي 100٪ - طاقة مستدامة' : isEn ? '100% Natural Fruit Sugar - No Crash' : '100% Sucre naturel de fruit - Énergie durable',
        zeroTag: isRtl ? '0غ' : '0g',
        description: isRtl ? '* تخبرك نسبة القيمة اليومية بمدى مساهمة عنصر غذائي في حصة من الطعام في النظام الغذائي اليومي.' : isEn ? '* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet.' : '* Le % de la valeur quotidienne (VQ) vous indique dans quelle mesure un nutriment dans une portion de nourriture contribue à un régime quotidien.'
    };

    const nutrientRow = (name: string, amount: string, dv: string | null, isSubItem = false, icon?: React.ReactNode, highlightZero = false) => (
        <div className={`flex items-center justify-between py-1 border-b border-gray-100 ${isSubItem ? 'pl-4 text-xs' : 'text-sm'} ${highlightZero ? 'bg-green-50/50' : ''}`}>
            <div className="flex items-center gap-2">
                {icon}
                <span className={`text-gray-700 ${!isSubItem ? 'font-bold' : ''}`}>
                    {name}
                </span>
            </div>
            <div className="flex items-center gap-3">
                <span className={`font-mono ${highlightZero ? 'text-green-600 font-bold' : 'text-gray-600'}`}>
                    {amount}
                </span>
                {dv && <span className="font-bold text-gray-800 w-8 text-right text-xs">{dv}</span>}
            </div>
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-w-full md:max-w-2xl mx-auto my-8">
            <div className="bg-gray-900 text-white p-4">
                <h3 className="text-xl font-display font-bold mb-0.5">{t.title}</h3>
                <p className="text-gray-300 font-mono text-xs">{t.servingSize}</p>
            </div>

            <div className="p-4">
                <div className="flex justify-between border-b-2 border-gray-900 pb-1 mb-2 text-sm">
                    <span className="font-bold">{t.amountPerServing}</span>
                    <span className="font-bold">{t.dailyValue}</span>
                </div>

                <div className="flex justify-between items-end border-b border-gray-200 pb-2 mb-2">
                    <div>
                        <span className="text-xl font-bold text-gray-900">{t.calories}</span>
                    </div>
                    <span className="text-3xl font-bold text-gray-900">282</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                    <div>
                        {nutrientRow(t.totalFat, '0.4g', '0%', false, null, true)}
                        {nutrientRow(t.saturatedFat, '0g', '0%', true, null, true)}
                        {nutrientRow(t.transFat, '0g', null, true, null, true)}
                        {nutrientRow(t.cholesterol, '0mg', '0%', false, null, true)}
                        {nutrientRow(t.sodium, '2mg', '0%', false, null, true)}
                        {nutrientRow(t.totalCarbs, '75g', '27%', false, <Zap className="w-3.5 h-3.5 text-yellow-500" />)}
                        {nutrientRow(t.dietaryFiber, '8g', '29%', true)}
                    </div>
                    <div>
                        <div className="py-1 border-b border-gray-100 pl-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 text-xs">{t.totalSugars}</span>
                                <span className="font-mono text-gray-600 text-sm">63g</span>
                            </div>
                            <div className="mt-0.5 flex items-center gap-1 text-green-600 text-[10px] font-bold bg-green-50 w-fit px-1.5 py-0.5 rounded-full">
                                <Leaf className="w-2.5 h-2.5" />
                                {t.naturalSugar}
                            </div>
                        </div>
                        {nutrientRow(t.includesAdded, '0g', '0%', true, null, true)}
                        {nutrientRow(t.protein, '2.5g', null, false, <Dumbbell className="w-3.5 h-3.5 text-blue-500" />)}

                        <div className="h-2 md:hidden"></div>

                        {nutrientRow(t.vitaminD, '0mcg', '0%', false, null, true)}
                        {nutrientRow(t.calcium, '39mg', '3%', false)}
                        {nutrientRow(t.iron, '1mg', '6%', false)}
                        {nutrientRow(t.potassium, '656mg', '14%', false, <Heart className="w-3.5 h-3.5 text-red-500" />)}
                        {nutrientRow(t.magnesium, '43mg', '10%', false)}
                        {nutrientRow(t.copper, '0.2mg', '23%', false)}
                    </div>
                </div>

                <p className="text-[9px] text-gray-400 mt-4 leading-relaxed">
                    {t.description}
                </p>
            </div>
        </div>
    );
};
