/** Project mark used for the ERP tile — no logo for it in tech-stack-icons. */
export default function ErpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="ERP">
      <rect width="400" height="400" rx="52" fill="#1A1A1A" />
      <rect x="140" y="100" width="132" height="34" fill="#FFFFFF" />
      <path d="M140 188h122v40h-76v74h-46z" fill="#FFFFFF" />
    </svg>
  );
}
