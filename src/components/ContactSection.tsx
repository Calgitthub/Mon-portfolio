import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCVModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCVModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Contact via Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Bonjour Calleb,\n\n${formData.message}\n\nDe : ${formData.name}\nEmail : ${formData.email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            <span>Opportunités & Échanges</span>
            <span aria-hidden="true">·</span>
            <span>Prise de Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Collaborons ensemble sur vos projets web et applicatifs.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Disponible pour des missions freelance, des contrats de développement ou des opportunités en entreprise (CDI / CDD / Conseil).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 hover:border-blue-400/80 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Adresse Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                    Réponse sous 24 heures garantie.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg bg-slate-50 dark:bg-slate-800 transition-colors shrink-0"
                title="Copier l'email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 hover:border-blue-400/80 transition-all space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Téléphone & WhatsApp
                    </div>
                    <div className="space-y-1 pt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
                      <div>+229 01 94 83 88 93</div>
                      <div>+229 01 97 01 95 75</div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('+2290194838893', 'phone')}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg bg-slate-50 dark:bg-slate-800 transition-colors shrink-0"
                  title="Copier le numéro"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Bonjour%20Calleb,%20j'ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20échanger%20avec%20vous.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Discuter instantanément sur WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Localisation Actuelle
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Cotonou & Parakou, Bénin
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                  Mobile dans tout le Bénin et ouvert au télétravail international.
                </p>
              </div>
            </div>

            {/* Quick CV Download Banner */}
            <div className="p-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl space-y-3 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-sm">
                <FileText className="w-4 h-4" />
                <span>Curriculum Vitae Certifié (PDF)</span>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed">
                Consultez le document original complet mentionnant l'ensemble des diplômes et attestations de stage.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={onOpenCVModal}
                  className="px-3.5 py-2 text-xs font-semibold text-blue-900 bg-white hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Visualiser dans l'app
                </button>
                <a
                  href={PERSONAL_INFO.cvPath}
                  download="CV_Calleb_ADIBO.pdf"
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-700/60 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Télécharger
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message préparé avec succès !
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Merci {formData.name}. Vous pouvez également ouvrir votre messagerie par défaut pour transmettre directement votre courriel.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={openMailClient}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Ouvrir dans mon client email</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Envoyez-moi un message direct
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Remplissez ce formulaire pour initier une discussion sur vos besoins techniques.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Votre Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Votre Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: jean.dupont@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Objet de votre demande
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Projet d'application web / Opportunité de recrutement"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Votre Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Décrivez votre projet, vos délais et vos attentes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    * Champs obligatoires
                  </span>

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    {sending ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmettre mon message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
