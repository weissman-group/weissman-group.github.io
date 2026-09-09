import { useId, type SVGProps } from "react";

type I3MarkProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

/**
 * A compact word-trie mark for intelligence, information, and inference.
 * Set `color` for the ink and `--i3-accent` to override the cardinal accent.
 */
export function I3Mark({
  title = "Information, Intelligence, and Inference",
  ...props
}: I3MarkProps) {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <svg
      aria-labelledby={`${titleId} ${descriptionId}`}
      fill="none"
      focusable="false"
      role="img"
      viewBox="0 0 760 360"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title id={titleId}>{title}</title>
      <desc id={descriptionId}>
        A geometric word tree sharing the prefix in. One branch completes
        intelligence; a second adds f and then branches to information and
        inference. A small I cubed monogram represents the three ideas.
      </desc>

      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M154 177H226" opacity="0.58" strokeWidth="2" />
        <path d="M226 177V92H350" opacity="0.24" strokeWidth="1.5" />
        <path d="M226 177V249H304" opacity="0.24" strokeWidth="1.5" />
        <path d="M354 249H408V205H480" opacity="0.24" strokeWidth="1.5" />
        <path d="M408 249V294H480" opacity="0.24" strokeWidth="1.5" />

        <path
          d="M154 177H226V249H304"
          stroke="var(--i3-accent, #b1040e)"
          strokeWidth="2"
        />

        <circle cx="226" cy="177" fill="var(--i3-accent, #b1040e)" r="4" stroke="none" />
        <circle cx="408" cy="249" fill="var(--i3-accent, #b1040e)" r="4" stroke="none" />
        <circle cx="350" cy="92" fill="currentColor" r="3" stroke="none" />
        <circle cx="480" cy="205" fill="currentColor" r="3" stroke="none" />
        <circle cx="480" cy="294" fill="currentColor" r="3" stroke="none" />

        <rect height="72" rx="18" width="108" x="46" y="141" opacity="0.88" strokeWidth="2" />
        <rect
          height="50"
          rx="15"
          stroke="var(--i3-accent, #b1040e)"
          strokeWidth="2"
          width="50"
          x="304"
          y="224"
        />

        <path d="M350 112H640" opacity="0.12" />
        <path d="M480 225H640" opacity="0.12" />
        <path d="M480 314H640" opacity="0.12" />
      </g>

      <g fill="currentColor">
        <text
          fontFamily='"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
          fontSize="42"
          fontStyle="italic"
          textAnchor="middle"
          x="100"
          y="190"
        >
          in
        </text>
        <text
          fontFamily='"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
          fontSize="34"
          fontStyle="italic"
          textAnchor="middle"
          x="329"
          y="261"
        >
          f
        </text>

        <text
          fontFamily='Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
          fontSize="34"
          fontWeight="650"
          letterSpacing="-1"
          x="372"
          y="101"
        >
          telligence
        </text>
        <text
          fontFamily='Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
          fontSize="34"
          fontWeight="650"
          letterSpacing="-1"
          x="502"
          y="214"
        >
          ormation
        </text>
        <text
          fontFamily='Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
          fontSize="34"
          fontWeight="650"
          letterSpacing="-1"
          x="502"
          y="303"
        >
          erence
        </text>
      </g>

      <g aria-hidden="true" transform="translate(654 36)">
        <rect
          height="70"
          opacity="0.28"
          rx="17"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
          width="70"
        />
        <path
          d="M17 54H53"
          opacity="0.16"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
        <text
          fill="currentColor"
          fontFamily='"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
          fontSize="38"
          fontStyle="italic"
          x="20"
          y="48"
        >
          I
        </text>
        <text
          fill="var(--i3-accent, #b1040e)"
          fontFamily='"SFMono-Regular", Consolas, monospace'
          fontSize="15"
          fontWeight="700"
          x="39"
          y="25"
        >
          3
        </text>
        <circle cx="53" cy="18" fill="var(--i3-accent, #b1040e)" r="2.5" />
        <circle cx="53" cy="34" fill="var(--i3-accent, #b1040e)" opacity="0.62" r="2.5" />
        <circle cx="53" cy="50" fill="var(--i3-accent, #b1040e)" opacity="0.34" r="2.5" />
      </g>
    </svg>
  );
}
