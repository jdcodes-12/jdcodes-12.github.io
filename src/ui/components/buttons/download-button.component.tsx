import React from 'react'
import { Button } from '@primitives/button'
import { downloadResume } from '@utils'

export default function DownloadButton() {
  return (
    <Button
      onClick={() => {}}
      className='
        cursor-not-allowed
        shadow-none
        text-lg
        py-6
        bg-neutral-300
        hover:bg-neutral-300
      '
    >
      Download My Resume
    </Button>
  );
}
