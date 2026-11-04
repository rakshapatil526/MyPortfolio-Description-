import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  Send, 
  CheckCircle2, 
  FileText,
  Clock
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with pre-filled content
    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#080c16]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          badgeVariant="blue"
          title="Contact &amp; Connect"
          subtitle="Interested in discussing full-stack engineering roles, AI/ML opportunities, or technical project collaborations? Reach out directly via email, phone, or LinkedIn."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white">
                Contact Information
              </h3>

              {/* Email */}
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-start space-x-3.5 group text-slate-300 hover:text-white transition-colors"
                title="Send email to Rakshitha"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                  <span className="text-sm font-semibold group-hover:text-blue-400 transition-colors break-all">
                    {PROFILE_DATA.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PROFILE_DATA.phone}`}
                className="flex items-start space-x-3.5 group text-slate-300 hover:text-white transition-colors"
                title="Call Rakshitha on mobile"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Mobile / Telephone</span>
                  <span className="text-sm font-semibold group-hover:text-emerald-400 transition-colors">
                    {PROFILE_DATA.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start space-x-3.5 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {PROFILE_DATA.location}
                  </span>
                </div>
              </div>

              {/* GitHub */}
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3.5 group text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-slate-700 group-hover:text-white transition-all shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">GitHub Profile</span>
                  <span className="text-sm font-semibold group-hover:text-blue-400 transition-colors">
                    github.com/rakshapatil526
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3.5 group text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">LinkedIn Profile</span>
                  <span className="text-sm font-semibold group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/rakshitha-raksha
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Resume Download Pill */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-800/40 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Rakshitha_S_Resume.pdf</span>
              </div>
              <a
                href={PROFILE_DATA.resumePdfUrl}
                download="Rakshitha_S_Resume.pdf"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1222] border border-slate-800/80 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to immediately compose an email to <span className="text-slate-300">{PROFILE_DATA.email}</span>.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Opening Your Email Client</h4>
                  <p className="text-xs text-slate-300">
                    Your message was prepared. If your mail client did not launch automatically, feel free to write directly to <a href={`mailto:${PROFILE_DATA.email}`} className="text-blue-400 underline">{PROFILE_DATA.email}</a>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Stack Developer Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Rakshitha, I reviewed your portfolio and would like to connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Rakshitha</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
