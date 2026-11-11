
import { useState } from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ imgSrc, iconName, label, desc, category }) => {
  const [imageError, setImageError] = useState(false);

  const showImage = imgSrc && !imageError;

  return (
    <div className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(6,78,59,0.2)]">
      <figure className="w-12 h-12 rounded-xl bg-zinc-800/70 border border-zinc-700/60 p-2 flex items-center justify-center shrink-0 group-hover:bg-zinc-800 group-hover:border-zinc-600 transition-all duration-300">
        {showImage ? (
          <img
            src={imgSrc}
            width={28}
            height={28}
            alt={`${label} icon`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="material-symbols-rounded text-2xl text-zinc-400 group-hover:text-zinc-200 transition-colors">
            {iconName || 'code'}
          </span>
        )}
      </figure>

      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-white text-sm sm:text-base truncate group-hover:text-zinc-200 transition-colors">
          {label}
        </h4>

        <p className="text-zinc-400 text-xs leading-relaxed mt-1 line-clamp-2">
          {desc}
        </p>

        {category && (
          <span className="inline-block text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1.5">
            {category}
          </span>
        )}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string,
  iconName: PropTypes.string,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string,
};

SkillCard.defaultProps = {
  imgSrc: '',
  iconName: 'code',
  category: '',
};

export default SkillCard;
