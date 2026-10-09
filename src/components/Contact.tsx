import { ArrowUpRight } from 'lucide-react';
import { contactChannels, contactCopy, personal, socials } from '../data/portfolio';
import { accent as accentMap } from '../lib/accents';
import { cn } from '../lib/cn';
import { GlassCard } from './GlassCard';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Section } from './Section';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading id="contact-heading" eyebrow="Connect" title={contactCopy.heading} subtitle={contactCopy.subheading} />
      <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <Reveal>
          <GlassCard variant="panel" radiusClass="rounded-3xl">
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-[1.05rem] font-semibold text-paper">Public profile</h3>
              <p className="mt-2.5 text-[0.85rem] leading-relaxed text-muted">Khushi&apos;s verified GitHub profile will be the primary place for source code, project updates and collaboration.</p>
              <ul className="mt-6 space-y-3">
                {contactChannels.map((channel) => {
                  const tone = accentMap[channel.accent];
                  const content = <><span className={cn('inline-flex size-10 shrink-0 items-center justify-center rounded-xl border', tone.chip)}><Icon name={channel.icon} className="size-4" /></span><span><span className="block font-display text-[0.55rem] font-semibold tracking-[0.2em] text-faint uppercase">{channel.label}</span><span className="mt-0.5 block text-[0.85rem] font-medium text-paper/90">{channel.value}</span></span></>;
                  return <li key={channel.id}>{channel.href ? <a href={channel.href} target="_blank" rel="noopener noreferrer" className="group glass-well flex items-center gap-3.5 rounded-xl p-3 transition-colors hover:border-brand-cyan/35">{content}<ArrowUpRight className="ml-auto size-4 text-faint group-hover:text-brand-cyan" /></a> : <div className="glass-well flex items-center gap-3.5 rounded-xl p-3">{content}</div>}</li>;
                })}
              </ul>
            </div>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard variant="panel" radiusClass="rounded-3xl" className="h-full">
            <div className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <span className="rounded-full border border-dashed border-brand-cyan/30 bg-brand-cyan/[0.06] px-3 py-1 font-display text-[0.55rem] font-semibold tracking-[0.18em] text-brand-cyan uppercase">Setup in progress</span>
                <h3 className="mt-5 font-display text-xl font-semibold text-paper">GitHub connection coming next</h3>
                <p className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-muted">Repositories and a verified contact link will be added after Khushi&apos;s exact GitHub username is connected. No unverified personal details are published.</p>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <span className="relative flex size-2.5"><span className="anim-pulse-ring absolute inline-flex size-full rounded-full bg-emerald-400/70" /><span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" /></span>
                <p className="font-display text-[0.68rem] font-semibold tracking-[0.16em] text-emerald-100/90 uppercase">{personal.availability}</p>
              </div>
              <div className="mt-4 flex gap-2.5">{socials.map((social) => <span key={social.id} title={`${social.label} setup in progress`} className="inline-flex size-11 cursor-not-allowed items-center justify-center rounded-xl border border-dashed border-white/12 text-faint"><Icon name={social.icon} className="size-4" /></span>)}</div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
