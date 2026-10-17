import PageFrame from '../components/PageFrame.tsx'

export default function HomePage() {
  return (
    <PageFrame title="Chá de Casa Nova">
      <p className="names">Anna Beatriz & Daniel Amorim</p>
      <div className="divider" />
      <p className="message">
        Em breve, um cantinho especial para celebrarmos juntos!
      </p>
    </PageFrame>
  )
}
