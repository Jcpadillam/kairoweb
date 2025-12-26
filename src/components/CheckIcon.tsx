function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className="text-[#69A7FF]" {...props}>
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.44 0L3.29 9.932a1 1 0 1 1 1.42-1.408l3.05 3.08 6.48-6.57a1 1 0 0 1 1.464.256Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export { CheckIcon };