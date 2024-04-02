// https://feathericons.dev/?search=edit2&iconset=feather&format=strict-jsx
export function Edit2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="Orange"/>
    </svg>
  );
}

// https://feathericons.dev/?search=plus-circle&iconset=feather&format=strict-jsx
export function PlusCircle(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="16" />
        <line x1="8" x2="16" y1="12" y2="12" />
      </svg>
    );
  }

// https://feathericons.dev/?search=arrow-left-circle&iconset=feather&format=strict-jsx
export function ArrowLeftCircle(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
        <circle cx="12" cy="12" r="10" stroke="Orange"/>
        <polyline points="12 8 8 12 12 16" stroke="Orange"/>
        <line x1="16" x2="8" y1="12" y2="12" stroke="Orange"/>
      </svg>
    );
  }

  // https://feathericons.dev/?search=chevron-left&iconset=feather&format=strict-jsx
export function ChevronLeft(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
      <polyline points="14 17 9 12 14 7" stroke="#FF8F00"/>
      <circle cx="12" cy="12" r="10" stroke="#FF8F00"/>
    </svg>
  );
}


// https://feathericons.dev/?search=image&iconset=feather&format=strict-jsx
export function Image(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" class="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
      <rect height="18" rx="2" ry="2" width="18" x="3" y="3" stroke="#592C07"/>
      <circle cx="8.5" cy="8.5" r="1.5" stroke="#592C07"/>
      <polyline points="21 15 16 10 5 21" stroke="#592C07"/>
    </svg>
  );
}

// https://feathericons.dev/?search=camera&iconset=feather&format=strict-jsx
export function Camera(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" class="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
