export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Himanshu Sahni. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/himanshu-sahni07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-foreground dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hsahni55h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-foreground dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:sahni.h1998@gmail.com"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-foreground dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
