import React, { useState } from 'react'

import { DocumateDialog as Dialog } from '../src/components/Documate/dialog';

export const Documate = ({
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <button {...props} onClick={() => setOpen(true)}>Click me to Ask</button>
      <Dialog open={isOpen} endpoint='https://8c7b1be9gi.us.aircode.run/ask' onClose={() => setOpen(false)}/>
    </>
  );
}