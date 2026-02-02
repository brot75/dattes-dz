'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const { login, register, language } = useStore();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const isRtl = language === 'ar';

    const t = {
        titleLogin: isRtl ? 'تسجيل الدخول' : 'Connexion',
        titleRegister: isRtl ? 'إنشاء حساب' : 'Créer un compte',
        subtitleLogin: isRtl ? 'مرحبًا بك مجددًا في تمور الجزائر' : 'Bienvenue chez Abdattes',
        subtitleRegister: isRtl ? 'انضم إلينا للاستمتاع بأجود التمور' : 'Rejoignez-nous pour savourer l\'excellence',
        email: isRtl ? 'البريد الإلكتروني' : 'Email Address',
        password: isRtl ? 'كلمة المرور' : 'Password',
        name: isRtl ? 'الاسم الكامل' : 'Full Name',
        phone: isRtl ? 'رقم الهاتف' : 'Numéro de Téléphone',
        ctaLogin: isRtl ? 'دخول' : 'Se connecter',
        ctaRegister: isRtl ? 'تسجيل' : 'S\'inscrire',
        toggleLogin: isRtl ? 'ليس لديك حساب؟' : 'Pas encore de compte ?',
        toggleRegister: isRtl ? 'لديك حساب بالفعل؟' : 'Déjà un compte ?',
        back: isRtl ? 'عودة' : 'Retour'
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (isLogin) {
            const success = login(email.trim(), password.trim());
            if (success) {
                // Check role via store directly since state update might be async but we can peek or check the user found
                // Actually `login` updates state synchronously in Zustand usually, but let's access the found user to be safe
                // or just read from store immediately after
                const user = useStore.getState().currentUser;
                // Force state persistence check
                console.log('Login successful. Current User:', user);
                setTimeout(() => {
                    if (user?.role === 'admin') {
                        console.log('Redirecting to Admin...');
                        window.location.href = '/admin';
                    } else {
                        console.log('Redirecting to Home...');
                        window.location.href = '/';
                    }
                }, 800); // Increased delay to ensure localStorage write
            } else {
                setError('Email ou mot de passe incorrect.');
            }
        } else {
            const success = register({ id: '', email, password, name, phone, role: 'customer' });
            if (success) {
                // Auto login after register
                login(email, password);
                router.push('/');
            } else {
                setError('Cet email est déjà utilisé.');
            }
        }
    };

    return (
        <div className="min-h-screen flex bg-white font-sans">
            {/* Left Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-dattes-primary relative overflow-hidden items-center justify-center text-center p-12">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: "url('/hero-dates-v2.png')" }}
                />
                <div className="relative z-10 text-white max-w-lg">
                    <h1 className="text-6xl font-display font-bold mb-6 text-dattes-accent">Abdattes</h1>
                    <p className="text-xl opacity-90 leading-relaxed font-light">Le goût authentique du Sahara algérien, livré directement chez vous.</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 relative">
                <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-dattes-primary transition-colors text-sm font-bold">
                    <ArrowLeft className="w-4 h-4" /> {t.back}
                </Link>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-display font-bold text-dattes-primary mb-2">
                            {isLogin ? t.titleLogin : t.titleRegister}
                        </h2>
                        <p className="text-gray-500">{isLogin ? t.subtitleLogin : t.subtitleRegister}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg text-center font-bold">
                                {error}
                            </div>
                        )}

                        {!isLogin && (
                            <>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.name}</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.phone}</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="05 XX XX XX XX"
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">{t.email}</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">{t.password}</label>
                            <input
                                type="password"
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-dattes-primary text-white font-bold py-3 rounded-xl hover:bg-dattes-accent hover:text-dattes-primary transition-all flex items-center justify-center gap-2 group"
                        >
                            {isLogin ? t.ctaLogin : t.ctaRegister}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            {isLogin ? t.toggleLogin : t.toggleRegister}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-dattes-primary font-bold hover:underline"
                            >
                                {isLogin ? t.ctaRegister : t.ctaLogin}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
