import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { accent as accentMap } from '../lib/accents';
import { cn } from '../lib/cn';
import type { ProjectCollection } from '../types';
import { GlassCard } from './GlassCard';
import { Icon } from './Icon';

interface ProjectCollectionCardProps {
  collection: ProjectCollection;
  onOpen: (collection: ProjectCollection) => void;
}

export function ProjectCollectionCard({ collection, onOpen }: ProjectCollectionCardProps) {
  const tone = accentMap[collection.accent];
  const collectionColors = collection.id === 'small-projects'
    ? { primary: '#00f0ff', secondary: '#ff3bd4' }
    : { primary: '#a855f7', secondary: '#e11d48' };
  const colorStyle = {
    '--collection-primary': collectionColors.primary,
    '--collection-secondary': collectionColors.secondary,
  } as CSSProperties;
  const previewColors = ['#00f0ff', '#ff3bd4', '#a855f7', '#ef4444', '#38bdf8', '#e879f9', '#34d399', '#fb7185', '#8b5cf6', '#60a5fa'];

  return (
    <GlassCard interactive accent={collection.accent} className="collection-card h-full" style={colorStyle}>
      <span aria-hidden="true" className="collection-card-orb absolute -top-20 -right-16 size-52 rounded-full" />
      <span aria-hidden="true" className="collection-card-line absolute inset-x-0 top-0 h-px" />
      <button
        type="button"
        onClick={() => onOpen(collection)}
        aria-haspopup="dialog"
        className="group/collection relative z-10 flex h-full w-full flex-col p-6 text-left sm:p-7"
      >
        <div className="flex items-start justify-between gap-5">
          <span className={cn('flex size-12 items-center justify-center rounded-2xl border', tone.chip)}>
            <Icon name={collection.icon} className="size-5" />
          </span>
          <span className={cn('font-display text-[0.62rem] font-bold tracking-[0.18em] uppercase', tone.text)}>
            {collection.items.length} slots
          </span>
        </div>

        <p className={cn('mt-7 font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase', tone.text)}>
          {collection.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-paper sm:text-2xl">{collection.title}</h3>
        <p className="mt-3 max-w-xl text-[0.86rem] leading-relaxed text-muted">{collection.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {collection.items.slice(0, 4).map((item) => (
            <span key={item.id} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[0.62rem] text-paper/75">{item.title}</span>
          ))}
          <span className="rounded-full border border-dashed border-white/10 px-2.5 py-1 text-[0.62rem] text-faint">+{Math.max(collection.items.length - 4, 0)} more</span>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-2.5">
          {collection.items.map((item, index) => (
            <span
              key={item.id}
              className="collection-preview-node relative aspect-square overflow-hidden rounded-lg border"
              style={{ '--node-color': previewColors[index % previewColors.length], '--node-delay': `${index * 80}ms` } as CSSProperties}
            >
              <span className="absolute inset-[3px] grid place-items-center rounded-[5px] bg-white/[0.025] font-display text-[0.58rem] font-bold text-paper/65" title={item.title}>{item.index}</span>
            </span>
          ))}
        </div>

        <span className="mt-7 inline-flex items-center gap-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-paper uppercase">
          Explore collection
          <ArrowUpRight
            aria-hidden="true"
            className={cn('size-4 transition-transform group-hover/collection:-translate-y-0.5 group-hover/collection:translate-x-0.5', tone.text)}
          />
        </span>
      </button>
    </GlassCard>
  );
}
