import { env } from '@documenso/lib/utils/env';
import { cn } from '@documenso/ui/lib/utils';
import { Trans } from '@lingui/react/macro';

const DEFAULT_SOURCE_URL = 'https://github.com/bhargavjoshi1237/geiger-sign';

export type GeigerSourceLinkProps = {
  className?: string;
};

// AGPL-3.0 §13: offer every network user the source of the version that is running.
export const GeigerSourceLink = ({ className }: GeigerSourceLinkProps) => {
  const href = env('NEXT_PUBLIC_GEIGER_SOURCE_URL') || DEFAULT_SOURCE_URL;

  return (
    <footer className={cn('flex justify-center px-4 py-4 text-muted-foreground/70 text-xs', className)}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground hover:underline">
        <Trans>Geiger Sign is free software (AGPL-3.0) · Source code</Trans>
      </a>
    </footer>
  );
};
