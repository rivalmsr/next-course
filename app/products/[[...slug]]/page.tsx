interface Props {
  params: {
    slug: string[];
  }
}

function Page({ params: { slug } }: Props) {
  return (
    <h2>Products: {slug && slug.join(' ')}</h2>
  )
}

export default Page;
