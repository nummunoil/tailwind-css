import { R as e, a as t } from './vendor.cd7509fb.js';
!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
    new MutationObserver((e) => {
      for (const a of e)
        if ('childList' === a.type)
          for (const e of a.addedNodes) 'LINK' === e.tagName && 'modulepreload' === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var a = [
  {
    city: 'Toronto',
    averagePrice: 120,
    propertyCount: 76,
    imageUrl: '/tailwind-css/img/toronto.jpg',
    imageAlt: 'Toronto skyline',
  },
  {
    city: 'Malibu',
    averagePrice: 215,
    propertyCount: 43,
    imageUrl: '/tailwind-css/img/malibu.jpg',
    imageAlt: 'Cliff in Malibu',
  },
  {
    city: 'Chicago',
    averagePrice: 130,
    propertyCount: 115,
    imageUrl: '/tailwind-css/img/chicago.jpg',
    imageAlt: 'Chicago skyline',
  },
  {
    city: 'Seattle',
    averagePrice: 135,
    propertyCount: 63,
    imageUrl: '/tailwind-css/img/seattle.jpg',
    imageAlt: 'Seattle skyline',
  },
  {
    city: 'Colorado',
    averagePrice: 85,
    propertyCount: 47,
    imageUrl: '/tailwind-css/img/colorado.jpg',
    imageAlt: 'Lake in Colorado',
  },
  {
    city: 'Miami',
    averagePrice: 115,
    propertyCount: 86,
    imageUrl: '/tailwind-css/img/miami.jpg',
    imageAlt: 'Beach in Miami',
  },
];
function r({ destination: t }) {
  return e.createElement(
    'div',
    { className: 'flex items-center rounded-lg bg-white shadow-lg overflow-hidden' },
    e.createElement('img', {
      className: 'h-32 w-32 flex-shrink-0',
      src: t.imageUrl,
      alt: t.imageAlt,
    }),
    e.createElement(
      'div',
      { className: 'px-6 py-4' },
      e.createElement('h3', { className: 'text-lg font-semibold text-gray-800' }, t.city),
      e.createElement('p', { className: 'text-gray-600' }, '$', t.averagePrice, ' / night average'),
      e.createElement(
        'div',
        { className: 'mt-4' },
        e.createElement(
          'a',
          { href: '#', className: 'text-brand-dark hover:text-brand font-semibold text-sm' },
          'Explore ',
          t.propertyCount,
          ' properties'
        )
      )
    )
  );
}
function l() {
  return e.createElement(
    'div',
    null,
    e.createElement(
      'div',
      { className: 'bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5' },
      e.createElement(
        'div',
        {
          className:
            'px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2',
        },
        e.createElement(
          'div',
          { className: 'xl:max-w-xl' },
          e.createElement('img', {
            className: 'h-10',
            src: '/tailwind-css/img/logo-brand.svg',
            alt: 'Workcation',
          }),
          e.createElement('img', {
            className:
              'mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden',
            src: '/tailwind-css/img/beach-work.jpg',
            alt: 'Woman workcationing on the beach',
          }),
          e.createElement(
            'h1',
            {
              className:
                'mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl',
            },
            'You can work from anywhere.',
            e.createElement('br', { className: 'hidden lg:inline' }),
            ' ',
            e.createElement('span', { className: 'text-brand' }, 'Take advantage of it.')
          ),
          e.createElement(
            'p',
            { className: 'mt-2 text-gray-600 sm:mt-4 sm:text-xl' },
            "Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation."
          ),
          e.createElement(
            'div',
            { className: 'mt-4 space-x-1 sm:mt-6' },
            e.createElement(
              'a',
              {
                className:
                  'inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base',
                href: '#',
              },
              'Book your escape'
            )
          )
        )
      ),
      e.createElement(
        'div',
        { className: 'hidden relative lg:block 2xl:col-span-3' },
        e.createElement('img', {
          className: 'absolute inset-0 w-full h-full object-cover object-center',
          src: '/tailwind-css/img/beach-work.jpg',
          alt: 'Woman workcationing on the beach',
        })
      )
    ),
    e.createElement(
      'div',
      { className: 'max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8' },
      e.createElement('h2', { className: 'text-xl text-gray-900' }, 'Popular destinations'),
      e.createElement(
        'p',
        { className: 'mt-2 text-gray-600' },
        'A selection of great work-friendly cities with lots to see and explore.'
      ),
      e.createElement(
        'div',
        { className: 'mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3' },
        a.map((t) => e.createElement(r, { destination: t, key: t.city }))
      )
    )
  );
}
t.render(e.createElement(l, null), document.getElementById('root'));
