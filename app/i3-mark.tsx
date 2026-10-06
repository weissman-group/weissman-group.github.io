import { useId, type SVGProps } from "react";

type I3MarkProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

/**
 * A compact word-trie mark for intelligence, information, and inference.
 * Its restrained nodes and straight connectors deliberately echo a TikZ
 * figure. Set `color` for the ink and `--i3-accent` for the cardinal path.
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
        inference.
      </desc>

      <g
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M152 180H218L284 91H342" opacity="0.32" strokeWidth="1.5" />
        <path d="M152 180H218L284 245" opacity="0.32" strokeWidth="1.5" />
        <path d="M330 245H398L462 201H492" opacity="0.32" strokeWidth="1.5" />
        <path d="M330 245H398L462 299H492" opacity="0.32" strokeWidth="1.5" />

        <path
          d="M152 180H218L284 245"
          stroke="var(--i3-accent, #b1040e)"
          strokeWidth="2.2"
        />

        <circle cx="218" cy="180" fill="var(--i3-accent, #b1040e)" r="3.5" stroke="none" />
        <circle cx="398" cy="245" fill="var(--i3-accent, #b1040e)" r="3.5" stroke="none" />
        <circle cx="342" cy="91" fill="currentColor" r="2.6" stroke="none" />
        <circle cx="492" cy="201" fill="currentColor" r="2.6" stroke="none" />
        <circle cx="492" cy="299" fill="currentColor" r="2.6" stroke="none" />

        <rect height="70" rx="4" width="106" x="46" y="145" opacity="0.82" strokeWidth="1.6" />
        <circle
          cx="307"
          cy="245"
          r="23"
          stroke="var(--i3-accent, #b1040e)"
          strokeWidth="1.8"
        />
      </g>

      <g fill="currentColor">
        <text
          fontFamily='"STIX Two Text", "Iowan Old Style", "Palatino Linotype", Palatino, serif'
          fontSize="41"
          fontStyle="italic"
          textAnchor="middle"
          x="100"
          y="193"
        >
          in
        </text>
        <text
          fontFamily='"STIX Two Text", "Iowan Old Style", "Palatino Linotype", Palatino, serif'
          fontSize="35"
          fontStyle="italic"
          textAnchor="middle"
          x="307"
          y="257"
        >
          f
        </text>

        <text
          fontFamily='"STIX Two Text", "Iowan Old Style", "Palatino Linotype", Palatino, serif'
          fontSize="37"
          fontWeight="500"
          letterSpacing="-0.6"
          x="363"
          y="103"
        >
          telligence
        </text>
        <text
          fontFamily='"STIX Two Text", "Iowan Old Style", "Palatino Linotype", Palatino, serif'
          fontSize="37"
          fontWeight="500"
          letterSpacing="-0.6"
          x="511"
          y="213"
        >
          ormation
        </text>
        <text
          fontFamily='"STIX Two Text", "Iowan Old Style", "Palatino Linotype", Palatino, serif'
          fontSize="37"
          fontWeight="500"
          letterSpacing="-0.6"
          x="511"
          y="311"
        >
          erence
        </text>
      </g>

    </svg>
  );
}
