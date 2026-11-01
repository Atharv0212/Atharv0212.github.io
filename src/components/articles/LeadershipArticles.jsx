import { articles, leadership } from '../../data/articles';
import QuoteHeading from '../ui/QuoteHeading';

function LeadershipCard({ item }) {
  const { featured } = item;
  return (
    <div
      className={`${
        featured ? 'bg-brand-yellow' : 'bg-brand-card'
      } border-2 border-brand-dark rounded-2xl p-6 shadow-brutal text-brand-dark space-y-3`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
            featured ? 'bg-brand-dark text-brand-yellow' : 'bg-brand-yellow border border-brand-dark text-brand-dark'
          }`}
        >
          <i className={`fa-solid ${item.icon}`} />
        </div>
        <span
          className={`font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded ${
            featured ? 'bg-brand-dark text-white' : 'bg-stone-200 border border-brand-dark text-brand-dark'
          }`}
        >
          {item.tag}
        </span>
      </div>
      <h4 className="text-xl font-chunky text-brand-dark">{item.title}</h4>
      <p
        className={`text-xs font-mono font-bold uppercase ${
          featured ? 'tracking-wider text-stone-800' : 'text-brand-muted'
        }`}
      >
        {item.subtitle}
      </p>
      <p className="text-xs text-brand-charcoal font-medium leading-relaxed">{item.description}</p>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <a
      href={article.href}
      className="group bg-brand-card hover:bg-white border-2 border-brand-dark rounded-2xl p-5 shadow-brutal-sm transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between text-[11px] font-mono text-brand-muted mb-2">
          <span className="text-brand-yellow font-bold">
            <i className={`fa-solid ${article.icon}`} /> {article.category}
          </span>
          <span>{article.readTime}</span>
        </div>
        <h4 className="font-chunky text-base text-brand-dark group-hover:text-brand-yellow transition-colors leading-tight mb-2">
          {article.title}
        </h4>
        <p className="text-xs text-brand-charcoal font-medium leading-relaxed">{article.excerpt}</p>
      </div>
      <div className="pt-4 mt-3 border-t border-brand-dark/10 flex items-center justify-between text-xs font-mono font-bold text-brand-dark">
        <span>Read Note</span>
        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
}

export default function LeadershipArticles() {
  return (
    <section id="articles" className="py-14 border-t-2 border-brand-dark relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <QuoteHeading>LEADERSHIP &amp; IMPACT</QuoteHeading>
          {leadership.map((item) => (
            <LeadershipCard key={item.title} item={item} />
          ))}
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <QuoteHeading>TECHNICAL ARTICLES</QuoteHeading>
            <span className="text-xs font-mono text-brand-muted">Swipe →</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
