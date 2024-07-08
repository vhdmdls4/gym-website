export default function AppFooter() {
  const shadcnUrl = 'https://ui.shadcn.com/'
  const githubUrl = 'https://github.com/vhdmdls4'
  const githubSourceUrl =
    'https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-footer.tsx'

  return (
    <footer className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href={shadcnUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn
          </a>{' '}
          and used by{' '}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Victor Hugo Martins
          </a>
          . The source code is available on{' '}
          <a
            href={githubSourceUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
