export default function ExplanationPanel({ title, children }) {
  return (
    <section className='panel panel-explanation'>
      {title && <h3 className='panel-title'>{title}</h3>}
      <div className='panel-body'>{children}</div>
    </section>
  );
}
