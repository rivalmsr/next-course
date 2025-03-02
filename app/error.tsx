'use client';

interface Props {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: Props) {
  console.log('errr: ', error)

  return (
    <>
      <h2>An unexpected error has occurred.</h2>
      <button type="button" className="btn" onClick={() => reset()}>Retry</button>
    </>
  )
}

export default Error;
