import { useState } from 'react';

// Merges a hover style on top of the base style, matching the original
// markup's `style` + `style-hover` pairing without a class per element.
// Always animates the transition between the two states (unless the caller
// already set one) and adds a quick press-down on click for tactile feedback.
export default function Hoverable({ as: Tag = 'a', style, hoverStyle, children, ...rest }) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const base = style?.transition ? style : { ...style, transition: style?.transition ?? 'all .25s cubic-bezier(.16,1,.3,1)' };
  const merged = hover && hoverStyle ? { ...base, ...hoverStyle } : base;
  const final = pressed ? { ...merged, transform: `${merged.transform ? merged.transform + ' ' : ''}scale(0.96)` } : merged;

  return (
    <Tag
      style={final}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
