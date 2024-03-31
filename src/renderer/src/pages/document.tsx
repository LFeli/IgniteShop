import { ToC } from '../components/ToC'

export function Document() {
  return (
    <main className="flex flex-1 gap-8 px-10 py-12">
      <aside className="sticky top-0 hidden lg:block">
        <span className="text-xs font-semibold uppercase text-rotion-300">
          TABLE OF CONTENTS
        </span>

        <ToC.Root>
          <ToC.Link> Back-end </ToC.Link>
          <ToC.Section> Banco de Dados </ToC.Section>
          <ToC.Section> Autenticação </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex flex-1 flex-col items-center">Content</section>
    </main>
  )
}
