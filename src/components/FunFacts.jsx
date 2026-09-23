import { FUN_FACTS } from '../data';
import { useCounter } from '../hooks/useCounter';

function Fact({ n, label }) {
  const ref = useCounter(n, 3500);
  return (
    <div className="gv-col funfact">
      <div className="funfact-inner">
        <span className="number" ref={ref}>0</span>
        <span className="label">{label}</span>
      </div>
    </div>
  );
}

export default function FunFacts() {
  return (
    <section className="funfacts">
      <div className="gv-container">
        <div className="gv-col funfacts-title">
          <h2>Empowering and Strengthening Communities</h2>
        </div>
        {FUN_FACTS.map((f) => <Fact key={f.label} {...f} />)}
      </div>
    </section>
  );
}
