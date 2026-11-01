import { useEffect, useState } from 'react';

// Returns the id of the section currently under the top of the viewport.
export default function useActiveSection(ids, offset = 100) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + offset;
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= fromTop && el.offsetTop + el.offsetHeight > fromTop;
      });
      setActive(current ?? null);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}
