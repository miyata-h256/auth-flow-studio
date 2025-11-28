export default function ActionPanel({ title, children }) {
  return (
    <section className='panel panel-action'>
      {title && <h2 className='panel-title'>{title}</h2>}
      {children}
    </section>
  );
}
