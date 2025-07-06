import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <h1>Printable Content</h1>
    <p>This section will be printed.</p>
  </div>
));

const Print = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default Print;
