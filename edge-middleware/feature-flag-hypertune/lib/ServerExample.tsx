import { Text } from '@vercel/examples-ui'
import ClientExample from './ClientExample'
import hypertune from './hypertune'
import { Suspense } from 'react'
import VercelFlagValues from './VercelFlagValues'
import getHypertune from './getHypertune'

export default async function ServerExample() {
  const rootNode = await getHypertune()

  const exampleFlag = rootNode.exampleFlag().get(/* fallback */ false)

  return (
    <>
      <Text>
        React Server Component (RSC) flag:{' '}
        <strong>{String(exampleFlag)}</strong>
      </Text>
      <ClientExample hypertuneDehydratedState={hypertune.dehydrate()} />
      <Suspense fallback={null}>
        <VercelFlagValues flagValues={rootNode.get()} />
      </Suspense>
    </>
  )
}
