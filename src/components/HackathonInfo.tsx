import React from 'react';
import { Calendar, MapPin, Users, Plane, Utensils, Bed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import InteractiveTimeline from './InteractiveTimeline';

const HackathonInfo = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Bed className="w-6 h-6" />,
            titleKey: 'hackathon.benefit1',
            color: "from-[#a2832f] to-[#8a6f28]",
            bgColor: "bg-white"
        },
        {
            icon: <Utensils className="w-6 h-6" />,
            titleKey: 'hackathon.benefit2',
            color: "from-[#a2832f] to-[#8a6f28]",
            bgColor: "bg-white"
        },
        {
            icon: <Plane className="w-6 h-6" />,
            titleKey: 'hackathon.benefit3',
            noteKey: 'hackathon.benefit3.note',
            color: "from-[#a2832f] to-[#8a6f28]",
            bgColor: "bg-white"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a2832f] to-[#8a6f28] mb-6">
                        {t('hackathon.title.part1')} {t('hackathon.title.part2')}
                    </h2>
                </div>
                {/* Event Details Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-6">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {t('hackathon.description1')}{' '}
                                <span className="font-bold text-[#a2832f]">{t('hackathon.dates')}</span>{' '}
                                {t('hackathon.description2')}
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {t('hackathon.mandatory')}
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-[#a2832f]/10 to-[#8a6f28]/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                <MapPin className="w-6 h-6 mr-2 text-[#a2832f]" />
                                {t('hackathon.details')}
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-5 h-5 text-[#a2832f]" />
                                    <span className="text-slate-700">{t('hackathon.detail.dates')}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-5 h-5 text-[#a2832f]" />
                                    <span className="text-slate-700">{t('hackathon.detail.location')}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Users className="w-5 h-5 text-[#a2832f]" />
                                    <span className="text-slate-700">{t('hackathon.detail.teams')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Language Note */}
                    <div className="bg-gradient-to-r from-[#a2832f]/10 to-[#8a6f28]/10 rounded-2xl p-6">
                        <p className="text-base text-slate-700">
                            {t('hackathon.language')}{' '}
                            <span className="font-semibold text-[#a2832f]">{t('hackathon.pitch')}</span>.
                        </p>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} border-2 border-black rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl mb-6 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {t(feature.titleKey)}
                            </h3>
                            {feature.noteKey && (
                                <p className="text-sm text-slate-600 italic">
                                    {t(feature.noteKey)}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                {/* Interactive Timeline - FULL WIDTH */}
                <div className="w-full mb-16">
                    <InteractiveTimeline />
                </div>
            </div> 
        </section>
    );
};

export default HackathonInfo;